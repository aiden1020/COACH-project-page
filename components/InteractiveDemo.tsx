import React, { useState, useEffect } from 'react';
import { AgentRole, AgentStep } from '../types';
import { Bot, Search, AlertCircle, PlayCircle, CheckCircle2 } from 'lucide-react';

const DEMO_STEPS: AgentStep[] = [
  {
    role: AgentRole.None,
    message: "User Query: Why did the player lose the point in the last rally?",
  },
  {
    role: AgentRole.Orchestrator,
    message: "Analyzing Intent: The user is asking for a causal explanation (Why?). This requires identifying the last rally, finding the final stroke, and analyzing the error.",
    details: "Plan: 1. Retriever(Find last rally) -> 2. Grounder(Locate error) -> 3. Critic(Verify reason)."
  },
  {
    role: AgentRole.Grounder,
    message: "Scanning video context...",
    details: "Found 'last rally' at [12:04 - 12:18]. Visual evidence detected: Player B misses shuttlecock at [12:17]. Stroke type: 'Backhand Clear'. Result: 'Out'."
  },
  {
    role: AgentRole.Critic,
    message: "Verifying Claim: 'Player B hit out'.",
    details: "Comparison: Shuttlecock trajectory intersects boundary line? YES. Line judge signal? OUT. Verdict: Fact Verified."
  },
  {
    role: AgentRole.Orchestrator,
    message: "Synthesizing Answer:",
    details: "The player lost the point because their defensive backhand clear at 12:17 landed wide outside the side boundary line."
  }
];

const InteractiveDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isPlaying && currentStep < DEMO_STEPS.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 2500);
    } else if (currentStep === DEMO_STEPS.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep]);

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const renderIcon = (role: AgentRole) => {
    switch (role) {
      case AgentRole.Orchestrator: return <Bot className="text-yellow-600" size={24} />;
      case AgentRole.Grounder: return <Search className="text-blue-600" size={24} />;
      case AgentRole.Critic: return <AlertCircle className="text-red-600" size={24} />;
      default: return <PlayCircle className="text-slate-400" size={24} />;
    }
  };

  const getAgentColor = (role: AgentRole) => {
    switch (role) {
      case AgentRole.Orchestrator: return "bg-yellow-50 border-yellow-200";
      case AgentRole.Grounder: return "bg-blue-50 border-blue-200";
      case AgentRole.Critic: return "bg-red-50 border-red-200";
      default: return "bg-white border-slate-200";
    }
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 serif mb-4">Live Framework Execution</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See how COACH's agents collaborate to answer complex queries about sports videos.
            This simulation demonstrates the <span className="font-semibold text-yellow-600">Orchestrator</span> -> <span className="font-semibold text-blue-600">Grounder</span> -> <span className="font-semibold text-red-600">Critic</span> loop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Video Context Placeholder */}
          <div className="lg:col-span-1 space-y-4">
             <div className="aspect-[9/16] bg-slate-900 rounded-xl overflow-hidden relative shadow-2xl ring-4 ring-slate-200">
                <img 
                  src="https://picsum.photos/400/700?grayscale" 
                  alt="Badminton Match" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-black/50 p-4 rounded-lg text-white text-center">
                      <p className="font-bold">Input Video</p>
                      <p className="text-xs text-slate-300">Badminton Match Sequence</p>
                      {currentStep >= 2 && (
                        <div className="mt-4 animate-bounce">
                           <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                             Focus: [12:04-12:18]
                           </div>
                        </div>
                      )}
                   </div>
                </div>
                {/* Timeline overlay */}
                <div className="absolute bottom-4 left-4 right-4 h-1 bg-slate-600 rounded">
                   <div 
                      className="h-full bg-blue-500 transition-all duration-1000" 
                      style={{ width: `${(currentStep / (DEMO_STEPS.length - 1)) * 100}%`}}
                   ></div>
                </div>
             </div>
          </div>

          {/* Right: Agent Chat Interface */}
          <div className="lg:col-span-2 flex flex-col h-[600px] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <span className="font-semibold text-slate-700 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                System Log
              </span>
              <button 
                onClick={handleReset}
                disabled={isPlaying && currentStep !== DEMO_STEPS.length - 1}
                className="text-sm bg-slate-900 text-white px-3 py-1.5 rounded hover:bg-slate-700 disabled:opacity-50 transition"
              >
                {currentStep === DEMO_STEPS.length - 1 ? 'Replay Demo' : isPlaying ? 'Running...' : 'Start Demo'}
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
               {DEMO_STEPS.map((step, index) => (
                 <div 
                    key={index} 
                    className={`transform transition-all duration-500 ${index > currentStep ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                 >
                   {index <= currentStep && (
                     <div className={`flex gap-4 ${step.role === AgentRole.None ? 'flex-row-reverse' : ''}`}>
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-white shadow-sm`}>
                         {renderIcon(step.role)}
                       </div>
                       <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm border ${getAgentColor(step.role)}`}>
                         <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-70">
                            {step.role === AgentRole.None ? 'User' : step.role}
                         </p>
                         <p className="text-slate-800 font-medium leading-snug">{step.message}</p>
                         {step.details && (
                           <div className="mt-2 pt-2 border-t border-black/5 text-xs font-mono text-slate-600 bg-white/50 p-2 rounded">
                             {step.details}
                           </div>
                         )}
                       </div>
                     </div>
                   )}
                 </div>
               ))}
               {currentStep === DEMO_STEPS.length - 1 && (
                  <div className="flex justify-center pt-4 opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]">
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold border border-green-200">
                        <CheckCircle2 size={16} />
                        Process Complete
                      </div>
                  </div>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;