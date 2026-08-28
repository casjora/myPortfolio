import React from 'react';
import { Briefcase, Calendar, Mail, CheckCircle2, Zap, ShieldCheck, Download, ExternalLink, Globe2, FileSpreadsheet, Sparkles } from 'lucide-react';
import { RESUME_LINKS } from '../data/portfolioData';

export default function ExecutiveAssistantSection({ openResumeModal }) {
  const eaHighlights = [
    {
      icon: Globe2,
      title: "C1 Bilingual Fluency (English / Spanish)",
      desc: "Full professional English proficiency (C1) and native Spanish. Experienced in drafting executive communications, translating documentation, and coordinating cross-cultural global stakeholders."
    },
    {
      icon: Calendar,
      title: "Executive Calendar & Inbox Management",
      desc: "Disciplined priority handling, calendar conflict resolution, meeting preparation, agenda creation, and confidential message triage across Google Workspace and Microsoft 365."
    },
    {
      icon: Zap,
      title: "Workflow & Google Suite Automation",
      desc: "Expert in Google Apps Script and JavaScript to automate repetitive administrative tasks, generate meeting summary templates, and dispatch automated notification alerts."
    },
    {
      icon: FileSpreadsheet,
      title: "Data-Driven Executive Reporting",
      desc: "Skilled in Google Sheets, Looker Studio, and Excel to organize raw operational data into polished executive dashboards and actionable status updates."
    },
    {
      icon: ShieldCheck,
      title: "6+ Years QA & Operations Leadership",
      desc: "Proven track record supervising 20+ team members, enforcing strict SLA/SOW compliance, auditing documentation precision, and resolving high-stakes operational bottlenecks."
    },
    {
      icon: Sparkles,
      title: "Tech-Forward Efficiency Mindset",
      desc: "Leverages modern web tools, AI productivity assistants, and automation scripts to handle high workload volume with zero error rate and absolute confidentiality."
    }
  ];

  return (
    <section id="executive-assistant" className="py-16 md:py-24 bg-gradient-to-b from-purple-900/5 via-slate-50 to-white dark:from-purple-950/20 dark:via-[#070c1e] dark:to-[#0a0f22] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Target Role Focus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Executive Assistant & Operations Support
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Combining 6+ years of operational QA leadership, bilingual C1 English fluency, Google Suite automation, and data analytics to provide proactive, tech-fluent executive administration.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {eaHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0e1630] border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-[11px] font-semibold text-purple-600 dark:text-purple-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Transferable Core Competency</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Callout Banner & Dedicated Resume Links */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-2xl space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300">
              Executive Readiness
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Looking for a Tech-Fluent Executive Assistant?
            </h3>
            <p className="text-xs text-purple-100 leading-relaxed">
              I bring meticulous operational discipline, administrative rigor, and technical automation to ensure seamless executive workflows. Access the specialized PDF resume directly below.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <a
              href={RESUME_LINKS.ea.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Preview Drive Link</span>
            </a>

            <a
              href={RESUME_LINKS.ea.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-xs font-bold bg-purple-400 text-slate-950 hover:bg-purple-300 transition-all flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download EA Resume PDF</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
