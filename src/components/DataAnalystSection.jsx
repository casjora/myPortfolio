import React, { useState } from 'react';
import { DATA_CASE_STUDIES } from '../data/portfolioData';
import { BarChart3, TrendingUp, Clock, ShieldCheck, Database, FileText, CheckCircle2, Filter } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Legend } from 'recharts';

export default function DataAnalystSection() {
  const [selectedMetric, setSelectedMetric] = useState('all');

  const mainStudy = DATA_CASE_STUDIES[0];
  const anomalyStudy = DATA_CASE_STUDIES[1];

  return (
    <section id="dashboards" className="py-16 md:py-24 bg-slate-100/70 dark:bg-[#070b19] border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
              <BarChart3 className="w-4 h-4" />
              <span>Data Analytics & KPI Dashboards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Actionable Business Intelligence & Metrics
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Translating high-volume BPO operational logs into Looker Studio dashboards, and zero-error audit datasets.
          </p>
        </div>

        {/* LIVE RECHARTS INTERACTIVE DASHBOARD DEMO */}
        <div className="mb-14 rounded-3xl bg-white dark:bg-[#0d142b] p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                Interactive BPO Performance Metric Engine
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Audit Handling Time (Min) vs CSAT % Lift
              </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500 font-semibold px-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> View:
              </span>
              <button
                onClick={() => setSelectedMetric('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedMetric === 'all'
                    ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Trends
              </button>
              <button
                onClick={() => setSelectedMetric('time')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedMetric === 'time'
                    ? 'bg-indigo-600 text-white dark:bg-indigo-400 dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Handling Time
              </button>
              <button
                onClick={() => setSelectedMetric('csat')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedMetric === 'csat'
                    ? 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                CSAT %
              </button>
            </div>
          </div>

          {/* Metric Highlights Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-slate-900/60 border border-indigo-100 dark:border-indigo-900/40">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase">
                <Clock className="w-4 h-4" />
                <span>Handling Time Reduction</span>
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1 font-mono">
                60 min ➔ 35 min
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Engineered Apps Script automation cutting evaluation times by 41%.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-slate-900/60 border border-emerald-100 dark:border-emerald-900/40">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase">
                <TrendingUp className="w-4 h-4" />
                <span>CSAT Score Boost</span>
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1 font-mono">
                +10% to +20%
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Driven by Looker Studio root-cause action plans across 20+ auditors.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-slate-900/60 border border-amber-100 dark:border-amber-900/40">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Data Integrity Accuracy</span>
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1 font-mono">
                100% SOW Compliance
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Sustained 12+ consecutive months on target for client datasets.
              </p>
            </div>
          </div>

          {/* Recharts Render */}
          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mainStudy.chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCsat" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                  }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />

                {(selectedMetric === 'all' || selectedMetric === 'time') && (
                  <Area
                    type="monotone"
                    dataKey="handlingTime"
                    name="Audit Handling Time (Minutes)"
                    stroke="#6366f1"
                    fillOpacity={1}
                    fill="url(#colorTime)"
                    strokeWidth={3}
                  />
                )}

                {(selectedMetric === 'all' || selectedMetric === 'csat') && (
                  <Area
                    type="monotone"
                    dataKey="csat"
                    name="CSAT Score (%)"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorCsat)"
                    strokeWidth={3}
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* DATA ANOMALY & CLEANING CASE STUDY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-7 rounded-3xl bg-white dark:bg-[#0d142b] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-2">
                <Database className="w-4 h-4" />
                <span>Executive Looker Studio Dashboard</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {mainStudy.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {mainStudy.description}
              </p>

              <div className="mt-6 space-y-3">
                {mainStudy.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{m.label}</span>
                    <span className="text-sm font-bold font-mono text-slate-900 dark:text-lime-300">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              <span>Tools: Looker Studio • Google Sheets ETL • SQL Queries • Google Apps Script</span>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-white dark:bg-[#0d142b] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wide mb-2">
                <FileText className="w-4 h-4" />
                <span>Google Data Analytics Case Study</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {anomalyStudy.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {anomalyStudy.description}
              </p>

              {/* Bar Chart for Anomaly Breakdown */}
              <div className="mt-4 h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={anomalyStudy.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="category" stroke="#94a3b8" fontSize={10} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', fontSize: '11px', color: '#fff' }} />
                    <Bar dataKey="count" name="Identified Errors" fill="#0d9488" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex justify-between items-center">
              <span>Certification: Google Data Analytics Professional</span>
              <span className="text-emerald-500 font-bold">10,000+ Records Cleaned</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
