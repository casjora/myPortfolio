import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsOverview from './components/MetricsOverview';
import WebDevSection from './components/WebDevSection';
import DataAnalystSection from './components/DataAnalystSection';
import QAManagerSection from './components/QAManagerSection';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import ResumeModal from './components/ResumeModal';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [activeRole, setActiveRole] = useState('all');
  const [darkMode, setDarkMode] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Sync dark class on document root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0a0f22] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar
        activeRole={activeRole}
        setActiveRole={setActiveRole}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        openResumeModal={() => setResumeModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          activeRole={activeRole}
          setActiveRole={setActiveRole}
          openResumeModal={() => setResumeModalOpen(true)}
        />

        {/* Highlight Metrics */}
        <MetricsOverview />

        {/* Role-Specific Sections */}
        {(activeRole === 'all' || activeRole === 'webdev') && (
          <WebDevSection activeRole={activeRole} />
        )}

        {(activeRole === 'all' || activeRole === 'data') && (
          <DataAnalystSection />
        )}

        {(activeRole === 'all' || activeRole === 'qa') && (
          <QAManagerSection />
        )}

        {/* Common Core Sections */}
        <SkillsMatrix activeRole={activeRole} />
        <ExperienceTimeline />
      </main>

      <ContactFooter />

      {/* Target Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
