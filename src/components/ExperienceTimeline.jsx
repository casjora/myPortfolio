import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, MapPin, CheckCircle2, Award, ChevronDown, ChevronUp, Globe2, ShieldCheck } from 'lucide-react';

export default function ExperienceTimeline() {
  const [showOlderRoles, setShowOlderRoles] = useState(false);

  // Filter roles: default view includes QA leadership + Canada experience roles
  const visibleExperiences = showOlderRoles
    ? EXPERIENCES
    : EXPERIENCES.filter(exp => exp.category === 'recent' || exp.category === 'canada');

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
            Over 6+ years of QA supervision & tech roles, plus 6 years of international work & living experience in Canada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-lime-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Work History & Leadership
                  </h3>
                  <span className="text-xs text-slate-500">
                    Showing {visibleExperiences.length} of {EXPERIENCES.length} positions
                  </span>
                </div>
              </div>

              {/* Toggle button for older roles */}
              <button
                onClick={() => setShowOlderRoles(!showOlderRoles)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-lime-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>{showOlderRoles ? "Show Less" : "View All History"}</span>
                {showOlderRoles ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            <div className="relative border-l-2 border-indigo-200 dark:border-slate-800 pl-6 sm:pl-8 space-y-10">
              {visibleExperiences.map((exp) => (
                <div key={exp.id || exp.role} className="relative group">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 ${
                    exp.isCanada ? 'border-red-500' : 'border-indigo-600 dark:border-lime-400'
                  } group-hover:scale-125 transition-transform`} />

                  <div className={`p-6 rounded-2xl bg-white dark:bg-[#0d142b] border shadow-sm transition-all ${
                    exp.isCanada
                      ? 'border-red-200 dark:border-red-950/60 bg-gradient-to-br from-red-50/30 to-white dark:from-red-950/10 dark:to-[#0d142b]'
                      : 'border-slate-200 dark:border-slate-800'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-lime-300">
                          {exp.period}
                        </span>
                        {exp.isCanada && (
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 flex items-center gap-1">
                            🇨🇦 Canada Work Experience
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
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

            {/* Bottom Toggle Button Bar */}
            <div className="text-center pt-2">
              <button
                onClick={() => setShowOlderRoles(!showOlderRoles)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-lime-400 hover:bg-indigo-100 dark:hover:bg-slate-700 transition-colors cursor-pointer border border-indigo-200 dark:border-slate-700 shadow-sm"
              >
                <span>{showOlderRoles ? "Collapse to Core Work History" : `Show Complete History (${EXPERIENCES.length} Total Positions)`}</span>
                {showOlderRoles ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Right Column: Canada Highlights, Education & Languages */}
          <div className="lg:col-span-5 space-y-8">

            {/* Canada Experience Special Highlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950 via-slate-900 to-slate-950 text-white border border-red-800/40 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🇨🇦</span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                  International Immersion
                </span>
              </div>

              <h4 className="text-lg font-extrabold text-white mb-2">
                6 Years Lived & Worked in Canada
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Lived in Manitoba, Canada from 2012 to 2018. Developed C1 English fluency, cross-cultural teamwork skills, and community leadership through roles in community interpretation and industrial safety.
              </p>

              <div className="space-y-2 pt-3 border-t border-red-900/50 text-[11px] text-red-200">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                  <span>Westman Immigrant Services – Community Interpreter</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                  <span>Maple Leaf Foods Inc – ERT, Fire Safety & Scissor Lift Certified</span>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
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
                  <span className="font-bold flex items-center gap-1.5">
                    <span>English</span>
                    <span className="text-xs">🇨🇦</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-indigo-800 text-indigo-200 font-mono">Full Professional (C1)</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold flex items-center gap-1.5">
                    <span>Spanish</span>
                    <span className="text-xs">🇭🇳</span>
                  </span>
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
