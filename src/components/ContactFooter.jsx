import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './icons/SocialIcons';

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Direct Info & Message */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-lime-400">
                Get In Touch
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Let's Have a Chat
              </h2>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Whether you're looking for a skilled Frontend Web Developer, a Data & KPI Analyst, or a QA Operations Automation Lead, I'm ready to bring immediate value to your team.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:casjorahn@gmail.com"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-lime-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-600/30 text-lime-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Primary Email</span>
                  <span className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors">
                    casjorahn@gmail.com / casjora@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/50492835545"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-lime-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600/30 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Phone / WhatsApp</span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    +504 9283-5545 (Honduras GMT-6)
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/rafaellopez90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-all border border-slate-700"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/casjora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-all border border-slate-700"
                >
                  <GithubIcon className="w-4 h-4 text-slate-100" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-850 border border-slate-800 shadow-2xl">
              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-sm text-slate-300">
                    Thank you, <span className="text-lime-400 font-bold">{formData.name}</span>! I have received your message and will respond to <span className="text-lime-400 font-bold">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-xs font-bold text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-lime-400" />
                    <span>Send a Direct Message</span>
                  </h3>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-lime-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-lime-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your role opening, Web Dev project, or Data/QA opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-lime-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-lime-400 to-emerald-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-lg cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Rafael</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Rafael Lopez. Built with React, Tailwind CSS v4, and Recharts.</p>
          <div className="flex items-center gap-4">
            <span>Tegucigalpa, Honduras</span>
            <span>•</span>
            <span>BYU-Idaho Software Development</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
