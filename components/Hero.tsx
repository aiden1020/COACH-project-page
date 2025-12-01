import React from 'react';
import { FileText, Github, Youtube } from 'lucide-react';
import { PAPER_TITLE, PAPER_SUBTITLE, AUTHORS, AFFILIATION } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white opacity-70"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
          Accepted to AAAI 2026 Workshop LaMAS
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-4 leading-tight serif">
          {PAPER_TITLE}
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-600 font-light mb-8">
          {PAPER_SUBTITLE}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-4 text-lg">
          {AUTHORS.map((author, index) => (
            <span key={index} className="font-medium text-slate-800 hover:text-blue-600 transition-colors cursor-pointer">
              {author.name}
              <sup className="ml-0.5 text-slate-500">{author.aff}</sup>
            </span>
          ))}
        </div>
        
        <p className="text-slate-500 mb-10">{AFFILIATION}</p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <FileText size={18} />
            <span>Paper</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-lg hover:border-slate-400 transition-all shadow-sm hover:shadow-md">
            <Github size={18} />
            <span>Code (Coming Soon)</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-lg hover:border-slate-400 transition-all shadow-sm hover:shadow-md">
            <Youtube size={18} />
            <span>Video Demo (Coming Soon)</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;