import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './icons/SocialIcons';

export default function ContactFooter() {
  return (
    <footer id="contact" className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400 mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Whether you are looking for a Frontend Web Developer, Data Analyst, QA Manager, or Executive Assistant — feel free to reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card */}
          <a
            href="mailto:casjorahn@gmail.com"
            className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-lime-400/60 transition-all flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 text-lime-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Direct Email</span>
            <span className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors">casjorahn@gmail.com</span>
            <span className="text-[11px] text-slate-500 mt-2">Click to send an email</span>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+50495393223"
            className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-400/60 transition-all flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Phone / WhatsApp</span>
            <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">+504 9539-3223</span>
            <span className="text-[11px] text-slate-500 mt-2">Click to call or chat</span>
          </a>

          {/* Location Card */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Location</span>
            <span className="text-sm font-bold text-white">Tegucigalpa, Honduras</span>
            <span className="text-[11px] text-slate-500 mt-2">Open to Remote Opportunities</span>
          </div>

        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Rafael Lopez. Crafted with React & Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
