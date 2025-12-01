import React from 'react';
import { ABSTRACT } from '../constants';

const Abstract: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6 text-slate-900 serif text-center">Abstract</h3>
        <p className="text-lg leading-relaxed text-slate-700 text-justify">
          {ABSTRACT}
        </p>
      </div>
    </section>
  );
};

export default Abstract;