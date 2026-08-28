import React, { useState } from 'react';
import { X, Download, FileText, Code2, BarChart3, ShieldCheck, Briefcase, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { RESUME_LINKS } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [selectedResume, setSelectedResume] = useState('all');

  if (!isOpen) return null;

  const resumes = [
    {
      id: 'all',
      title: 'Master Resume (All Specializations)',
      icon: Sparkles,
      color: 'indigo',
      links: RESUME_LINKS.all,
      summary: 'Comprehensive resume covering Frontend Web Engineering, Data Analytics, QA Leadership, and Executive Operations Support.',
      keyPoints: [
        'Complete overview of 6+ years in operations, software engineering, and data analysis.',
        'Combines BYU-Idaho coursework, Meta & Google certifications.',
        'Ideal for versatile hybrid roles or leadership positions.'
      ]
    },
    {
      id: 'webdev',
      title: 'Frontend Web Developer',
      icon: Code2,
      color: 'indigo',
      links: RESUME_LINKS.webdev,
      summary: 'Focused on React, JavaScript (ES6+), Supabase RLS security, Tailwind CSS v4, e-commerce applications, and AI integrations.',
      keyPoints: [
        'Built full-stack wholesale e-commerce SPA (Iconic Boutique HN) with Gemini AI & Supabase.',
        'Created React e-commerce apps with custom hooks (useFetchProducts) & offline fallbacks.',
        'Meta Front-End Development Professional Certified.'
      ]
    },
    {
      id: 'data',
      title: 'Data Analyst & KPI Specialist',
      icon: BarChart3,
      color: 'emerald',
      links: RESUME_LINKS.data,
      summary: 'Focused on SQL, Looker Studio, Python, Google Sheets ETL pipelines, data cleaning, anomaly detection, and KPI reporting.',
      keyPoints: [
        'Built Looker Studio dashboards tracking CSAT, agent error rates, and handling time KPIs.',
        'Google Data Analytics Professional Certified (Coursera 2023).',
        'Audited 10,000+ interaction logs with zero-defect data integrity.'
      ]
    },
    {
      id: 'qa',
      title: 'QA Operations Manager',
      icon: ShieldCheck,
      color: 'amber',
      links: RESUME_LINKS.qa,
      summary: 'Focused on BPO Quality Assurance supervision, 20+ member team leadership, Google Apps Script process automation, and SLA compliance.',
      keyPoints: [
        'Cut evaluation review processing time from 60+ to 35 minutes (41% efficiency boost).',
        'Supervised 20-member QA teams for major contact centers (Interactive Contact Center & IntouchCX).',
        'Achieved +10-20% CSAT and QA KPI lifts through root-cause action plans.'
      ]
    },
    {
      id: 'ea',
      title: 'Executive Assistant',
      icon: Briefcase,
      color: 'purple',
      links: RESUME_LINKS.ea,
      summary: 'Focused on executive support, C1 bilingual English/Spanish communication, calendar/inbox coordination, Google Suite automation, and high-level operations.',
      keyPoints: [
        'High-level bilingual communication (English C1 / Spanish Native) with executive presence.',
        '6+ years experience optimizing operational workflows, schedules, and cross-functional teams.',
        'Strong technical & data fluency for automated reporting and executive decision support.'
      ]
    }
  ];

  const activeRes = resumes.find(r => r.id === selectedResume) || resumes[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-[#0d142b] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-900 dark:text-white flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight">
                Targeted Resume Downloads
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Choose the specialized PDF resume tailored to the exact role you are hiring for.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-200/60 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Resume Type Selector Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {resumes.map((r) => {
              const Icon = r.icon;
              const isSel = selectedResume === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedResume(r.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSel
                      ? 'bg-slate-900 text-white dark:bg-slate-800 dark:text-lime-400 border-indigo-500/80 dark:border-lime-400/80 shadow-lg scale-[1.02]'
                      : 'bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-4 h-4" />
                    {isSel && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <span className="text-[11px] font-bold leading-tight">{r.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Resume Details Card */}
          {activeRes && (
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <activeRes.icon className="w-5 h-5 text-indigo-600 dark:text-lime-400" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {activeRes.title}
                  </h4>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                  READY FOR DOWNLOAD
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeRes.summary}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Highlights Included:</span>
                {activeRes.keyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Direct Download & View Buttons for the Active Selected Resume */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  <span>Google Drive Hosted PDF • Verified Link</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={activeRes.links.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View in Google Drive</span>
                  </a>

                  <a
                    href={activeRes.links.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 text-white dark:bg-lime-400 dark:text-slate-950 hover:bg-indigo-700 dark:hover:bg-lime-300 transition-all cursor-pointer shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Quick All-In-One Download Links Grid */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block">
              Quick Direct Access to All PDF Files:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {resumes.map((r) => (
                <a
                  key={r.id}
                  href={r.links.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-lime-400 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-all group"
                >
                  <span className="truncate pr-2">{r.title}</span>
                  <Download className="w-3.5 h-3.5 text-indigo-600 dark:text-lime-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-between items-center text-xs text-slate-500">
          <span>Candidate: Rafael Lopez (Tegucigalpa, Honduras)</span>
          <button onClick={onClose} className="font-bold text-indigo-600 dark:text-lime-400 hover:underline cursor-pointer">
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}

