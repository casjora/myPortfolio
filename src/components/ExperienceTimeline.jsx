import React from 'react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-lime-400">
            Career Journey & Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 tracking-tight">
            Professional Experience & Education
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Over 6 years of leadership, process automation, and software engineering coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-lime-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Work History & Leadership
              </h3>
            </div>

            <div className="relative border-l-2 border-indigo-200 dark:border-slate-800 pl-6 sm:pl-8 space-y-10">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-600 dark:border-lime-400 group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl bg-white dark:bg-[#0d142b] border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-lime-300">
                        {exp.period}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h4>

                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                      {exp.company}
                    </div>

                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Professional Certifications */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Education & Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#0d142b] border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">
                      {edu.period}
                    </span>
                    <Award className="w-4 h-4 text-amber-500" />
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>

                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {edu.institution}
                  </div>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Language Proficiency Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white border border-indigo-700/50 shadow-md">
              <h4 className="text-xs font-bold uppercase tracking-wider text-lime-400 mb-3">
                Languages & Communication
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold">English</span>
                  <span className="px-2 py-0.5 rounded bg-indigo-800 text-indigo-200 font-mono">Full Professional (C1)</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold">Spanish</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-800 text-emerald-200 font-mono">Native / Bilingual</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
