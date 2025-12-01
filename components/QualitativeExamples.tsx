import React, { useState } from 'react';
import { QA_SAMPLES, SUMMARIZATION_SAMPLE } from '../constants';
import { Play, MessageCircle, FileText, CheckCircle2, Clock, Video } from 'lucide-react';

const QualitativeExamples: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'qa' | 'summarization'>('qa');
  const [activeQAIndex, setActiveQAIndex] = useState(0);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 serif mb-4">Qualitative Analysis Samples</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore how COACH handles both fine-grained analytic reasoning (Video QA) and global narrative generation (Summarization).
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 inline-flex">
            <button
              onClick={() => setActiveTab('qa')}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'qa' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <MessageCircle size={18} />
              Rally QA (Micro-Level)
            </button>
            <button
              onClick={() => setActiveTab('summarization')}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'summarization' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <FileText size={18} />
              Video Summarization (Macro-Level)
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden min-h-[500px]">
          
          {activeTab === 'qa' && (
            <div className="grid lg:grid-cols-2 h-full">
              {/* Left: Visual Context (Mock Video Player) */}
              <div className="bg-slate-900 relative h-full min-h-[400px] flex flex-col justify-center items-center p-8 group">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1626224583764-847890e05851?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform cursor-pointer border-2 border-white/50">
                        <Play className="text-white fill-current ml-1" size={32} />
                    </div>
                    <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg inline-block">
                        <p className="text-white font-mono text-sm flex items-center gap-2">
                           <Clock size={14} className="text-blue-400" /> 
                           Evidence Found: {QA_SAMPLES[activeQAIndex].timestamp_evidence}
                        </p>
                    </div>
                </div>
                {/* Timeline bar at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                    <div className="h-full bg-blue-500 w-2/3"></div>
                </div>
              </div>

              {/* Right: QA Interaction */}
              <div className="p-8 lg:p-12 flex flex-col">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Select a Query Sample</h3>
                
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                    {QA_SAMPLES.map((sample, idx) => (
                        <button
                            key={sample.id}
                            onClick={() => setActiveQAIndex(idx)}
                            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap border transition-all ${
                                activeQAIndex === idx 
                                ? 'bg-blue-50 border-blue-200 text-blue-700 font-semibold' 
                                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                        >
                            {sample.type}
                        </button>
                    ))}
                </div>

                <div className="flex-1 animate-[fadeIn_0.3s_ease-in-out]">
                    <div className="mb-6">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">User Question</span>
                        <p className="text-xl font-bold text-slate-900 mt-2">{QA_SAMPLES[activeQAIndex].question}</p>
                    </div>

                    <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1 mb-2">
                            <CheckCircle2 size={12} />
                            Agent Reasoning (Chain of Thought)
                        </span>
                        <p className="text-sm text-slate-600 font-mono leading-relaxed">
                            {QA_SAMPLES[activeQAIndex].reasoning}
                        </p>
                    </div>

                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Final Answer</span>
                        <p className="text-lg text-slate-800 mt-1 border-l-4 border-blue-500 pl-4">
                            {QA_SAMPLES[activeQAIndex].answer}
                        </p>
                    </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'summarization' && (
            <div className="flex flex-col h-full">
              {/* Top: Timeline Visualizer */}
              <div className="bg-slate-900 p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-800/50"></div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-end mb-8">
                         <div>
                            <h3 className="text-2xl font-bold">{SUMMARIZATION_SAMPLE.title}</h3>
                            <p className="text-slate-400 mt-1 flex items-center gap-2">
                                <Video size={16} /> 
                                Input Duration: {SUMMARIZATION_SAMPLE.duration}
                            </p>
                         </div>
                         <div className="text-right hidden sm:block">
                            <span className="bg-green-500/20 text-green-300 border border-green-500/30 px-3 py-1 rounded text-xs uppercase font-bold tracking-wider">
                                Generation Complete
                            </span>
                         </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative h-16 bg-slate-700/50 rounded-lg flex items-center px-4 mb-4">
                        <div className="absolute left-0 right-0 h-0.5 bg-slate-600 top-1/2"></div>
                        {SUMMARIZATION_SAMPLE.events.map((event, i) => {
                            let color = 'bg-blue-500';
                            if (event.type === 'positive') color = 'bg-green-500';
                            if (event.type === 'negative') color = 'bg-red-500';
                            
                            // Random positioning for demo effect (evenly distributed)
                            const pos = `${(i + 1) * 20}%`; 
                            
                            return (
                                <div 
                                    key={i} 
                                    className="absolute top-1/2 -translate-y-1/2 group cursor-pointer"
                                    style={{ left: pos }}
                                >
                                    <div className={`w-4 h-4 rounded-full ${color} ring-4 ring-slate-900 group-hover:scale-125 transition-transform`}></div>
                                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                            <span className="font-bold mr-1">{event.time}</span> {event.label}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 font-mono">
                        <span>00:00</span>
                        <span>05:00</span>
                        <span>10:00</span>
                        <span>15:00</span>
                        <span>{SUMMARIZATION_SAMPLE.duration}</span>
                    </div>
                </div>
              </div>

              {/* Bottom: Generated Narrative */}
              <div className="p-8 lg:p-12 bg-white flex-1">
                 <div className="max-w-3xl mx-auto">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <FileText size={16} />
                        Generated Narrative Summary
                    </h4>
                    <p className="text-lg leading-relaxed text-slate-800 font-serif border-l-4 border-yellow-400 pl-6 py-2">
                        "{SUMMARIZATION_SAMPLE.summary}"
                    </p>
                    
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <span className="block text-xs text-slate-500 uppercase mb-1">Methodology</span>
                            <span className="text-sm font-semibold text-slate-700">Multi-Agent Orchestration</span>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <span className="block text-xs text-slate-500 uppercase mb-1">Validation</span>
                            <span className="text-sm font-semibold text-slate-700">Grounded via Critic Agent</span>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QualitativeExamples;