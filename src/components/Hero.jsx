import React from 'react';
import { Sparkles, Code2, BarChart3, ShieldCheck, Download, ChevronRight, CheckCircle2, Award, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ activeRole, setActiveRole, openResumeModal }) {
  const getDynamicContent = () => {
    switch (activeRole) {
      case 'webdev':
        return {
          badge: "Frontend Web Developer • React & JavaScript Specialist",
          title: "Building Enterprise-Grade, Edge-Case Resistant Web Apps",
          description: "Combining modern React, Tailwind CSS, and Supabase security with 6+ years of operational QA auditing discipline. I write clean, performant, and reliable code.",
          tagline: "Featured Flagship: Iconic Boutique HN (React + Supabase + Gemini AI)"
        };
      case 'data':
        return {
          badge: "Data Analyst & KPI Specialist",
          title: "Translating Complex BPO Operations into Business Intelligence",
          description: "Proficient in Looker Studio, and Google Suite Automation. Expert at auditing client interaction datasets, eliminating anomalies, and designing actionable executive dashboards.",
          tagline: "Proven Impact: Cut evaluation processing time from 60+ to 35 mins"
        };
      case 'qa':
        return {
          badge: "QA Operations Manager & Process Automation Leader",
          title: "Streamlining BPO Quality Workflows & Process Automation",
          description: "Supervised 20+ members in QA teams across major contact centers. Built custom JavaScript & Google Apps Script engines saving hundreds of operational hours and boosting CSAT by +10-20%.",
          tagline: "Leadership Metric: Managed 20+ QA auditors with 100% SLA compliance"
        };
      default:
        return {
          badge: "Web Developer • Data Analyst • QA Operations Leader",
          title: "Bridging Modern Web Engineering, Data Analytics & QA Leadership",
          description: "Full-stack frontend developer with 6+ years of industry experience leading BPO Quality Assurance teams, building automated data tools, and delivering high-impact web applications.",
          tagline: ""
        };
    }
  };

  const content = getDynamicContent();

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-lime-500/10 dark:from-indigo-600/20 dark:via-purple-600/15 dark:to-lime-400/15 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Status & Role Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm text-xs font-semibold text-indigo-700 dark:text-lime-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{content.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-lime-300 dark:via-emerald-400 dark:to-teal-300">Rafael Lopez</span>
          </h1>
          
          <p className="mt-4 text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 max-w-3xl">
            {content.title}
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {content.description}
          </p>

          {/* Interactive Role Selector Pills in Hero */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-slate-200/60 dark:bg-slate-900/80 rounded-2xl border border-slate-300/80 dark:border-slate-800">
            {PERSONAL_INFO.roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveRole(r.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeRole === r.id
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-lime-400 shadow-md border border-slate-200 dark:border-slate-700 scale-[1.03]'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm tracking-wide bg-gradient-to-r from-indigo-600 to-indigo-700 text-white dark:from-lime-400 dark:to-emerald-400 dark:text-slate-950 shadow-lg shadow-indigo-500/20 dark:shadow-lime-400/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore My Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#dashboards"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
            >
              <BarChart3 className="w-4 h-4 text-emerald-500" />
              <span>Data & QA Dashboards</span>
            </a>

            <button
              onClick={openResumeModal}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-indigo-500 dark:text-lime-400" />
              <span>Targeted Resumes</span>
            </button>
          </div>

          {/* Key Credentials Badges */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-6 w-full max-w-3xl">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Bilingual (English C1 / Spanish Native)</span>
            </div>
{/*             <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-500 dark:text-lime-400" />
              <span>Meta Front-End Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-teal-500" />
              <span>Google Data Analytics Certified</span>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}
