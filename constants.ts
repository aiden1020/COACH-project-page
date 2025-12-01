import { ChartDataPoint, QASample, SummarizationSample } from './types';

export const PAPER_TITLE = "COACH: Collaborative Agents for Contextual Highlighting";
export const PAPER_SUBTITLE = "A Multi-Agent Framework for Sports Video Analysis";
export const AUTHORS = [
  { name: "Tsz-To Wong", aff: "1" },
  { name: "Ching-Chun Huang*", aff: "1" },
  { name: "Hong-Han Shuai*", aff: "1" }
];
export const AFFILIATION = "1. National Yang Ming Chiao Tung University, Taiwan";

export const ABSTRACT = `Intelligent sports video analysis demands a comprehensive understanding of temporal context, from micro-level actions to macro-level game strategies. Existing end-to-end models often struggle with this temporal hierarchy. To overcome these limitations, we propose a reconfigurable Multi-Agent System (MAS) as a foundational framework. By leveraging iterative invocation and flexible composition of specialized agents (Orchestrator, Grounder, Critic), our framework constructs adaptive pipelines for both short-term analytic reasoning and long-term generative summarization. We demonstrate the adaptability of this framework in badminton analysis, bridging fine-grained event detection and global semantic organization.`;

export const CHART_DATA_QA: ChartDataPoint[] = [
  { name: 'Action Class (EM%)', COACH: 85.60, Gemini: 24.20 },
  { name: 'Action Count (EM%)', COACH: 79.20, Gemini: 37.60 },
  { name: 'Summarization (ROUGE-L)', COACH: 33.56, Gemini: 23.55 },
];

export const CHART_DATA_GROUNDING: ChartDataPoint[] = [
  { name: 'Hit@1 (%)', COACH: 87.28, Gemini: 27.68 },
  { name: 'EM (%)', COACH: 72.31, Gemini: 15.53 },
  { name: 'F1-Score (%)', COACH: 84.77, Gemini: 24.82 },
];

export const BIBTEX = `@article{wong2026coach,
  title={COACH: Collaborative Agents for Contextual Highlighting - A Multi-Agent Framework for Sports Video Analysis},
  author={Wong, Tsz-To and Huang, Ching-Chun and Shuai, Hong-Han},
  journal={Association for the Advancement of Artificial Intelligence (AAAI)},
  year={2026}
}`;

export const QA_SAMPLES: QASample[] = [
  {
    id: "qa-1",
    type: "Fine-grained Action Classification",
    question: "What shot is stroke 5?",
    answer: "Backhand Smash",
    reasoning: "Step 1: Locate stroke 5 in sequence. Step 2: Observe player position (rear court) and racket swing (overhead, forceful). Step 3: Classify as Smash.",
    timestamp_evidence: "00:04"
  },
  {
    id: "qa-2",
    type: "Action Counting",
    question: "How many smashes occurred in this rally?",
    answer: "3 smashes",
    reasoning: "Step 1: Scan full clip for 'smash' motion. Step 2: Ground instances at [00:02, 00:05, 00:09]. Step 3: Count total = 3.",
    timestamp_evidence: "00:02, 00:05, 00:09"
  },
  {
    id: "qa-3",
    type: "Tactical Causal Reasoning",
    question: "Why did the player in white lose the point?",
    answer: "The player lost due to an unforced error; their defensive lift landed out of bounds.",
    reasoning: "Orchestrator plan: Find end of rally -> Analyze last stroke -> Check rules. Grounder found landing spot outside baseline. Critic verified line judge signal.",
    timestamp_evidence: "00:18"
  }
];

export const SUMMARIZATION_SAMPLE: SummarizationSample = {
  title: "Match Analysis: Set 1 Highlights",
  duration: "18m 42s",
  summary: "In the first set, Player A adopted an aggressive front-court strategy, effectively using net shots to force lifts from Player B. This tactical setup created opportunities for 5 successful smashes. Player B attempted to counter with defensive clears but struggled with consistency, committing 4 unforced errors at critical moments.",
  events: [
    { time: "02:15", label: "Aggressive Smash", type: "positive" },
    { time: "05:40", label: "Long Rally (32 strokes)", type: "neutral" },
    { time: "09:12", label: "Net Shot Winner", type: "positive" },
    { time: "14:30", label: "Unforced Error (Out)", type: "negative" }
  ]
};