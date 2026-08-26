import React, { useState } from 'react';
import { X, Download, FileText, Code2, BarChart3, ShieldCheck, CheckCircle2, Printer, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [selectedResume, setSelectedResume] = useState('webdev');

  if (!isOpen) return null;

  const resumes = [
    {
      id: 'webdev',
      title: 'Frontend Web Developer Resume',
      icon: Code2,
      color: 'indigo',
      summary: 'Focused on React, JavaScript (ES6+), Supabase RLS security, Tailwind CSS v4, e-commerce applications, and AI integrations.',
      keyPoints: [
        'Built full-stack wholesale e-commerce SPA (Iconic Boutique HN) with Gemini AI & Supabase.',
        'Created React e-commerce apps with custom hooks (useFetchProducts) & offline fallbacks.',
        'Meta Front-End Development Professional Certified.'
      ]
    },
    {
      id: 'data',
      title: 'Data Analyst Resume',
      icon: BarChart3,
      color: 'emerald',
      summary: 'Focused on SQL, Looker Studio, Python, Google Sheets ETL pipelines, data cleaning, anomaly detection, and KPI reporting.',
      keyPoints: [
        'Built Looker Studio dashboards tracking CSAT, agent error rates, and handling time KPIs.',
        'Google Data Analytics Professional Certified (Coursera 2023).',
        'Audited 10,000+ interaction logs with zero-defect data integrity.'
      ]
    },
    {
      id: 'qa',
      title: 'QA Operations Manager Resume',
      icon: ShieldCheck,
      color: 'amber',
      summary: 'Focused on BPO Quality Assurance supervision, 20+ member team leadership, Google Apps Script process automation, and SLA compliance.',
      keyPoints: [
        'Cut evaluation review processing time from 60+ to 35 minutes (41% efficiency boost).',
        'Supervised 20-member QA teams for major contact centers (Interactive Contact Center & IntouchCX).',
        'Achieved +10-20% CSAT and QA KPI lifts through root-cause action plans.'
      ]
    }
  ];

  const activeRes = resumes.find(r => r.id === selectedResume);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#0d142b] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-900 dark:text-white flex flex-col max-h-[90vh]">
        
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
                Select the resume version tailored to the specific role you are hiring for.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-200/60 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Resume Type Selector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {resumes.map((r) => {
              const Icon = r.icon;
              const isSel = selectedResume === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedResume(r.id)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSel
                      ? 'bg-slate-900 text-white dark:bg-slate-800 dark:text-lime-400 border-slate-700 shadow-lg scale-[1.02]'
                      : 'bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-5 h-5" />
                    {isSel && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  </div>
                  <span className="text-xs font-bold leading-tight">{r.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Resume Preview Card */}
          {activeRes && (
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {activeRes.title} Overview
                </h4>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                  PDF READY
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
            </div>
          )}

          {/* Action Download Buttons */}
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 dark:text-slate-300 text-center sm:text-left">
              <span className="font-bold block text-slate-900 dark:text-white">Full Official Resume PDF</span>
              <span>Rafael_Lopez_Resume.pdf (Includes all 3 role focuses)</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="mailto:casjorahn@gmail.com?subject=Resume%20Request%20-%20Rafael%20Lopez"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 text-white dark:bg-lime-400 dark:text-slate-950 hover:opacity-90 transition-all cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Request Custom PDF</span>
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-between items-center text-xs text-slate-500">
          <span>Candidate: Rafael Lopez (Tegucigalpa, Honduras)</span>
          <button onClick={onClose} className="font-bold text-indigo-600 dark:text-lime-400 hover:underline">
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
