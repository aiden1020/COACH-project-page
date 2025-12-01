import React from 'react';
import { BIBTEX } from '../constants';
import { Copy } from 'lucide-react';

const Bibtex: React.FC = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(BIBTEX);
    alert('BibTeX copied to clipboard!');
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 serif mb-6">Citation</h2>
        <div className="relative group">
          <pre className="bg-slate-900 text-slate-300 p-6 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed shadow-inner">
            {BIBTEX}
          </pre>
          <button 
            onClick={handleCopy}
            className="absolute top-4 right-4 p-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Copy BibTeX"
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bibtex;