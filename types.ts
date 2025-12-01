export enum AgentRole {
  Orchestrator = 'Orchestrator',
  Grounder = 'Grounder',
  Critic = 'Critic',
  None = 'None'
}

export interface ChartDataPoint {
  name: string;
  COACH: number;
  Gemini: number;
}

export interface AgentStep {
  role: AgentRole;
  message: string;
  details?: string;
  timestamp?: string;
}

export interface QASample {
  id: string;
  type: string;
  question: string;
  answer: string;
  reasoning: string; // The CoT part
  timestamp_evidence: string;
}

export interface SummarizationSample {
  title: string;
  duration: string;
  summary: string;
  events: { time: string; label: string; type: 'positive' | 'negative' | 'neutral' }[];
}