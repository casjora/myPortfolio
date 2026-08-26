import React, { useState } from 'react';
import { QA_AUTOMATION_CASE_STUDIES } from '../data/portfolioData';
import { ShieldCheck, Clock, Cpu, Users, Layers, Terminal, CheckCircle2, AlertTriangle, Play, ChevronRight } from 'lucide-react';

export default function QAManagerSection() {
  const [activeStep, setActiveStep] = useState(0);

  const scriptEngine = QA_AUTOMATION_CASE_STUDIES[0];
  const framework = QA_AUTOMATION_CASE_STUDIES[1];

  const sampleScriptSnippet = `// Google Apps Script - BPO Interaction Review & Data Verification Engine
function auditInteractionData(recordId, agentInput, docRules) {
  const payload = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("AuditLogs");
  
  // 1. Check SLA & SOW Documentation Thresholds
  let errorsFound = [];
  if (!agentInput.hasRequiredSOWDoc) {
    errorsFound.push("Missing SOW Edge-Case Compliance Doc");
  }
  
  // 2. Calculate Automated Scoring Matrix
  const netScore = calculateStandardizedScore(agentInput.metrics);
  
  // 3. Dispatch Automated Telegram / Workspace Alert on Flagged KPI Dips
  if (netScore < 85 || errorsFound.length > 0) {
    sendTelegramAuditAlert(recordId, agentInput.agentName, netScore, errorsFound);
  }
  
  return { status: "CERTIFIED", score: netScore, handlingTimeSaved: "25 mins" };
}`;

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

            {/* Code Snippet Viewer */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
                <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-300 text-[11px] font-bold">AutomationEngine.js (Google Apps Script)</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-300">
                    JavaScript Automation
                  </span>
                </div>

                <div className="p-4 overflow-x-auto text-slate-300 leading-relaxed text-[11px]">
                  <pre className="text-amber-200/90">{sampleScriptSnippet}</pre>
                </div>

                <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Target: Interactive Contact Center</span>
                  <span className="text-emerald-400 font-bold">Status: Deployed & Active</span>
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
