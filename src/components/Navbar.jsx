import React, { useState } from 'react';
import { Sun, Moon, Download, Menu, X, Code2, BarChart3, ShieldCheck, Sparkles, Briefcase } from 'lucide-react';

export default function Navbar({ activeRole, setActiveRole, darkMode, toggleDarkMode, openResumeModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const roleNavItems = [
    { id: 'all', label: 'All Fields', icon: Sparkles },
    { id: 'webdev', label: 'Web Dev', icon: Code2 },
    { id: 'data', label: 'Data Analyst', icon: BarChart3 },
    { id: 'qa', label: 'QA Manager', icon: ShieldCheck },
    { id: 'ea', label: 'Exec Assistant', icon: Briefcase },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 dark:bg-[#0a0f22]/85 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo / Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-lime-400 p-[2px] shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-bold text-lime-400 text-lg">
              RL
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-lime-400 transition-colors">
              Rafael Lopez
            </span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Tech • Analytics • Operations
            </span>
          </div>
        </a>

        {/* Center Desktop Role Quick Filter Switcher */}
        <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-900/90 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner">
          {roleNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeRole === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveRole(item.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md dark:from-lime-400 dark:to-emerald-400 dark:text-slate-950 font-bold scale-[1.02]'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white dark:text-slate-950' : ''}`} />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right Nav Links & Actions */}
        <div className="hidden md:flex items-center gap-3">
          <nav className="flex items-center gap-5 text-xs font-bold tracking-wider uppercase text-slate-600 dark:text-slate-300 mr-2">
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-lime-400 transition-colors">Projects</a>
            <a href="#dashboards" className="hover:text-indigo-600 dark:hover:text-lime-400 transition-colors">Data</a>
            <a href="#qa-automation" className="hover:text-indigo-600 dark:hover:text-lime-400 transition-colors">QA Ops</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-lime-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-indigo-600 dark:hover:text-lime-400 transition-colors">Experience</a>
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Download Resume Modal Trigger */}
          <button
            onClick={openResumeModal}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-slate-900 text-white dark:bg-lime-400 dark:text-slate-950 hover:bg-indigo-600 dark:hover:bg-lime-300 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resumes</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0f22] px-4 pt-4 pb-6 space-y-4">
          <div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Select Focus Role</div>
          <div className="grid grid-cols-2 gap-2">
            {roleNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeRole === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveRole(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold ${
                    isActive
                      ? 'bg-indigo-600 text-white dark:bg-lime-400 dark:text-slate-950'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
            >
              Projects
            </a>
            <a
              href="#dashboards"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
            >
              Data Dashboards
            </a>
            <a
              href="#qa-automation"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
            >
              QA & Automation
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
            >
              Skills Matrix
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
            >
              Contact Me
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openResumeModal();
              }}
              className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-indigo-600 text-white dark:bg-lime-400 dark:text-slate-950 font-bold text-xs uppercase"
            >
              <Download className="w-4 h-4" />
              Download Targeted Resumes
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
