import React, { useState } from 'react';
import { sounds } from '../../utils/audio';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { Download, Mail, CheckCircle2, Copy, ArrowUp } from 'lucide-react';

export const RecruiterContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'biwinfelix@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    sounds.playConfirm();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadResume = () => {
    sounds.playConfirm();
    window.open(`${import.meta.env.BASE_URL}Resume.pdf`, '_blank');
  };

  const scrollToTop = () => {
    sounds.playBlip(800, 0.03);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950/80 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Soft Background Radial */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-radial from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          {/* Tag / Explicit Availability */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-300 bg-neutral-900/90 px-3.5 py-1.5 rounded-full border border-emerald-500/30 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="font-semibold text-emerald-400">Open to Software Engineer, Backend Engineer, and GenAI Engineer opportunities</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mb-4">
            Let's build something.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            Interested in discussing scalable web platforms, distributed systems, or production AI engineering? Let's connect.
          </p>

          {/* Contact Action Buttons Grid */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {/* Copy / Mail Button */}
            <div className="flex items-center rounded-2xl bg-neutral-900 border border-white/10 p-1">
              <a
                href={`mailto:${email}`}
                className="px-4 py-2.5 rounded-xl text-neutral-200 hover:text-white font-mono text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{email}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors border border-white/5"
                title="Copy email to clipboard"
                aria-label="Copy email to clipboard"
              >
                {copied ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Highly Visible Download Resume Button */}
            <button
              onClick={handleDownloadResume}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </button>

            {/* LinkedIn Profile */}
            <a
              href="https://linkedin.com/in/bewin-felix-4153a9232"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-cyan-500/40 text-cyan-400 hover:text-cyan-300 font-mono text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            {/* GitHub Profile */}
            <a
              href="https://github.com/Bewin007"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-white/30 text-neutral-200 hover:text-white font-mono text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Footer Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
            <div>
              <span>© {new Date().getFullYear()} Bewin Felix R A</span>
              <span className="mx-2">•</span>
              <span>Specialist Programmer @ Infosys</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-cyan-300 transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
