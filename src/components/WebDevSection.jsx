import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Star, Sparkles, Shield, Cpu, Bot, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

export default function WebDevSection({ activeRole }) {
  // If active role is data or qa, we still show web dev projects but focused on full stack features
  const flagship = PROJECTS.find(p => p.isFlagship);
  const otherRanked = PROJECTS.filter(p => !p.isFlagship && typeof p.rank === 'number');
  const honorableMentions = PROJECTS.filter(p => p.rank === 'Honorable Mention');

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-lime-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Web Development Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Top Ranked Portfolio Projects
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Built with React, Vite, Supabase, Tailwind CSS, and AI integrations with strict adherence to security & performance standards.
          </p>
        </div>

        {/* FLAGSHIP PROJECT (Rank 1: Iconic Boutique HN) */}
        {flagship && (
          <div className="mb-16 relative rounded-3xl bg-gradient-to-br from-indigo-900/90 via-slate-900 to-slate-950 p-6 sm:p-10 border border-indigo-500/30 shadow-2xl overflow-hidden text-white group">
            <div className="absolute top-0 right-0 p-4 sm:p-6 opacity-10 pointer-events-none font-mono text-9xl font-black text-indigo-400">
              #1
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-slate-950" />
                    FLAGSHIP PROJECT • RANK 1
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                    Full-Stack E-Commerce + AI
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {flagship.title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {flagship.description}
                </p>

                {/* Key Architecture Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {flagship.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {flagship.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800/90 text-indigo-200 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-4 flex items-center gap-4">
                  <a
                    href={flagship.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-lime-400 text-slate-950 hover:bg-lime-300 transition-all shadow-md active:scale-95"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Visual Demo Card */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl bg-slate-850 p-5 border border-slate-700/80 shadow-2xl space-y-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Bot className="w-5 h-5 text-lime-400" />
                      <span className="text-xs font-bold font-mono text-slate-200">Gemini AI + Supabase Engine</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      LIVE RLS POLICIES
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-slate-950/80 text-indigo-300 flex justify-between">
                      <span>Automated Barcode Parsing</span>
                      <span className="text-lime-400">100% Validated</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/80 text-indigo-300 flex justify-between">
                      <span>Telegram Dispatch Alert</span>
                      <span className="text-emerald-400">Webhook Fired</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/80 text-indigo-300 flex justify-between">
                      <span>Role-Based Auth (RLS)</span>
                      <span className="text-cyan-400">Supabase Active</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 italic pt-1">
                    "Combines modern web development with critical security implementations, AI integration, and third-party webhooks."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RANK 2 & RANK 3 PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {otherRanked.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-7 rounded-3xl bg-white dark:bg-[#0d142b] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-lime-300 border border-indigo-200 dark:border-indigo-800">
                    RANK #{project.rank} FEATURED
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-lime-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-lime-400 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 space-y-2">
                  {project.keyHighlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-lime-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-lime-400 hover:underline"
                >
                  <span>Code Repo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* HONORABLE MENTIONS */}
        <div className="bg-slate-100/60 dark:bg-slate-900/40 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
            Honorable Mention Web Projects
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {honorableMentions.map((item) => (
              <a
                key={item.id}
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-[#0a0f22] border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-lime-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-lime-400 transition-colors">
                      {item.title}
                    </span>
                    <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200" />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {item.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
