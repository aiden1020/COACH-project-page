import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { CHART_DATA_QA, CHART_DATA_GROUNDING } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-slate-200 shadow-lg rounded-lg">
        <p className="font-bold text-slate-800 mb-2">{label}</p>
        <p className="text-blue-600 text-sm">COACH: {payload[0].value}%</p>
        <p className="text-slate-500 text-sm">Gemini 2.5 Pro: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

const Results: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 serif mb-4">Experimental Results</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            COACH significantly outperforms state-of-the-art generalist models (Gemini 2.5 Pro) on fine-grained sports understanding tasks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Chart 1: QA Performance */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Analytical Rally QA Performance</h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={CHART_DATA_QA}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{paddingTop: '20px'}} />
                  <Bar dataKey="COACH" fill="#2563eb" radius={[4, 4, 0, 0]} name="COACH (Ours)" />
                  <Bar dataKey="Gemini" fill="#94a3b8" radius={[4, 4, 0, 0]} name="Gemini 2.5 Pro" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center italic">
              Table 1: COACH demonstrates superior capability in precise counting and classification.
            </p>
          </div>

          {/* Chart 2: Grounding Performance */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Scalable Temporal Grounding</h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={CHART_DATA_GROUNDING}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{paddingTop: '20px'}} />
                  <Bar dataKey="COACH" fill="#2563eb" radius={[4, 4, 0, 0]} name="COACH (Ours)" />
                  <Bar dataKey="Gemini" fill="#94a3b8" radius={[4, 4, 0, 0]} name="Gemini 2.5 Pro" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center italic">
              Table 2: The specialist Grounder agent achieves +60% F1-Score improvement over generalist models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;