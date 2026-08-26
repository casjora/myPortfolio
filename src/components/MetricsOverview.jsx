import React from 'react';
import { HIGHLIGHT_STATS } from '../data/portfolioData';
import { ShieldCheck, Clock, TrendingUp, Code2 } from 'lucide-react';

export default function MetricsOverview() {
  const getStatIcon = (id) => {
    switch (id) {
      case 'exp': return ShieldCheck;
      case 'efficiency': return Clock;
      case 'csat': return TrendingUp;
      case 'tech': return Code2;
      default: return ShieldCheck;
    }
  };

  return (
    <section className="py-8 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-lime-400">Proven Operational Impact</h2>
          <p className="text-xl font-black text-slate-900 dark:text-white mt-1">Key Metrics & Track Record</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHT_STATS.map((stat) => {
            const Icon = getStatIcon(stat.id);
            return (
              <div
                key={stat.id}
                className="relative p-6 rounded-2xl bg-white dark:bg-[#0d142b] border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-lime-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-900 dark:text-white font-mono">
                    {stat.number}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                  {stat.label}
                </h3>

                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
