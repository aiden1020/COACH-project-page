import React from 'react';
import { Network, Eye, ShieldCheck, Layers, PlaySquare, Settings } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 serif mb-4">The COACH Framework</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A reconfigurable Multi-Agent System (MAS) built on a shared LLM backbone. 
            COACH adapts its pipeline dynamically based on the temporal complexity of the task.
          </p>
        </div>

        {/* Core Agents */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group p-8 rounded-2xl bg-yellow-50 hover:bg-yellow-100 transition-colors border border-yellow-100 hover:border-yellow-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-200 rounded-full opacity-50 blur-xl group-hover:scale-150 transition-transform"></div>
            <Network className="w-12 h-12 text-yellow-600 mb-6 relative z-10" />
            <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">Orchestrator Agent</h3>
            <p className="text-slate-700 leading-relaxed relative z-10">
              The strategist. Uses <strong>Intent-Driven Orchestration</strong> to analyze user queries and call agents to complete the task.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-100 hover:border-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl group-hover:scale-150 transition-transform"></div>
            <Eye className="w-12 h-12 text-blue-600 mb-6 relative z-10" />
            <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">Grounder Agent</h3>
            <p className="text-slate-700 leading-relaxed relative z-10">
              The executor. Specialized via <strong>Structured CoT Tuning</strong> for high-precision temporal localization. It strictly observes and reports visual evidence.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-red-50 hover:bg-red-100 transition-colors border border-red-100 hover:border-red-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-200 rounded-full opacity-50 blur-xl group-hover:scale-150 transition-transform"></div>
            <ShieldCheck className="w-12 h-12 text-red-600 mb-6 relative z-10" />
            <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">Critic Agent</h3>
            <p className="text-slate-700 leading-relaxed relative z-10">
              The verifier. Operates in an oppositional loop ("backward reasoning") to fact-check the Grounder's findings against visual evidence, reducing hallucinations.
            </p>
          </div>
        </div>

        {/* Foundation Modules */}
        <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
          <h4 className="text-lg font-bold text-slate-900 mb-8 uppercase tracking-wider text-center">Foundation Modules & Tools</h4>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 border border-slate-100">
                <Layers className="text-slate-600" />
              </div>
              <h5 className="font-bold text-slate-900">Vision Module</h5>
              <p className="text-sm text-slate-500 mt-2">Semantic Feature Extraction</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 border border-slate-100">
                <Settings className="text-slate-600" />
              </div>
              <h5 className="font-bold text-slate-900">Retriever Tool</h5>
              <p className="text-sm text-slate-500 mt-2">Knowledge & Clip Retrieval</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 border border-slate-100">
                <PlaySquare className="text-slate-600" />
              </div>
              <h5 className="font-bold text-slate-900">Media Composition</h5>
              <p className="text-sm text-slate-500 mt-2">Automated Highlight Assembly</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;