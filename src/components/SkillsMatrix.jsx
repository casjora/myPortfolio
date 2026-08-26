import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, BarChart3, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SkillsMatrix({ activeRole }) {
  const filteredCategories = activeRole === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.category === activeRole);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'BarChart3': return BarChart3;
      case 'ShieldCheck': return ShieldCheck;
      default: return Code2;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-100/50 dark:bg-[#070b19] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-lime-400">
            Technical & Operational Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">
            Comprehensive Skills Matrix
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            A balanced tech stack spanning modern web development frameworks, analytics toolsets, and QA automation engines.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white dark:bg-[#0d142b] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-lime-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs font-medium">
                          <span className="text-slate-800 dark:text-slate-200 font-semibold">{skill.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                            {skill.tag}
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-lime-400 dark:to-emerald-400 rounded-full transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                  <span>Verified Competency</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
