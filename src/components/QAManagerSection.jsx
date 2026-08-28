import React, { useState } from 'react';
import { QA_AUTOMATION_CASE_STUDIES } from '../data/portfolioData';
import { ShieldCheck, Clock, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';

export default function QAManagerSection() {
  const [activeStep, setActiveStep] = useState(0);

  const scriptEngine = QA_AUTOMATION_CASE_STUDIES[0];
  const framework = QA_AUTOMATION_CASE_STUDIES[1];

  return (
    <section id="qa-automation" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>QA Operations & Process Automation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Quality Assurance Leadership & Automation
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Supervising 20+ QA auditors, building JavaScript automation tools, and enforcing 100% data integrity for major contact centers.
          </p>
        </div>

        {/* GOOGLE APPS SCRIPT AUTOMATION ENGINE */}
        <div className="mb-16 rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 p-6 sm:p-10 border border-amber-500/30 shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-md">
                <Clock className="w-3.5 h-3.5" />
                <span>PROCESS AUTOMATION HIGHLIGHT</span>
              </div>

              <h3 className="text-3xl font-black text-white tracking-tight">
                {scriptEngine.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {scriptEngine.description}
              </p>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                <div>
                  <span className="text-xs text-amber-300 font-semibold block">Handling Time Efficiency Lift</span>
                  <span className="text-2xl font-black font-mono text-amber-400">60 mins ➔ 35 mins</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Total Time Saved</span>
                  <span className="text-lg font-bold text-white font-mono">41% Reduction</span>
                </div>
              </div>

              <div className="space-y-2">
                {scriptEngine.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation System Architecture & Workflow Pipeline Visual */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-amber-400" />
                    <span className="text-white text-xs font-bold uppercase tracking-wider">
                      Automated Workflow Pipeline Architecture
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                    Live System Active
                  </span>
                </div>

                {/* Workflow Architecture Steps */}
                <div className="space-y-3 pt-1">
                  
                  {/* Step 1 */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                        01
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Data Ingestion & SOW Validation</h4>
                        <p className="text-[11px] text-slate-400">Raw interaction logs & QA scorecards ingested</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">Auto-Trigger</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-amber-400/60 -my-1">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>

                  {/* Step 2 */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                        02
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">JS & Apps Script Audit Logic</h4>
                        <p className="text-[11px] text-slate-400">Scoring matrix checks & anomaly detection</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-500/20 px-2 py-1 rounded font-bold">35 Min Target</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-amber-400/60 -my-1">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>

                  {/* Step 3 */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        03
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Looker Studio & Stakeholder Alerts</h4>
                        <p className="text-[11px] text-slate-400">Real-time KPI sync & instant Telegram dispatch</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-2 py-1 rounded font-bold">100% SLA</span>
                  </div>

                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80">
                  <span>Google Suite & JavaScript Integration</span>
                  <span className="text-amber-400 font-semibold">+41% Speed Boost</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5-STAGE QA AUDIT LIFECYCLE INTERACTIVE VISUALIZER */}
        <div className="rounded-3xl bg-white dark:bg-[#0d142b] p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Methodology & Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              5-Stage Quality Assurance Audit Framework
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Used to supervise 20-member QA teams and ensure 100% data accuracy across high-volume client datasets.
            </p>
          </div>

          {/* Interactive Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {framework.stages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                  activeStep === idx
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg scale-[1.03] font-bold'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="text-xs font-mono font-bold opacity-80 mb-1">
                  STAGE {stage.step}
                </div>
                <div className="text-xs sm:text-sm font-extrabold truncate">
                  {stage.name}
                </div>
              </button>
            ))}
          </div>

          {/* Step Detail Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-mono bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300">
                <span>Stage {framework.stages[activeStep].step} Detailed View</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {framework.stages[activeStep].name}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {framework.stages[activeStep].desc}
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white dark:bg-[#0a0f22] p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
              <ShieldCheck className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <span className="font-bold block">Outcome Standard</span>
                <span>Zero-defect data validation for executive reporting</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
