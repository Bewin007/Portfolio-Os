import React, { useState } from 'react';
import { sounds } from '../../utils/audio';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import {
  FileText,
  Send,
  ArrowUp,
  Sparkles,
  CheckCircle2,
  Copy
} from 'lucide-react';

export const FutureFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [message, setMessage] = useState('');

  const email = 'biwinfelix@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    sounds.playConfirm();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setFormSent(true);
    sounds.playConfirm();
    setTimeout(() => {
      setMessage('');
      setFormSent(false);
    }, 4000);
  };

  const scrollToTop = () => {
    sounds.playBlip(800, 0.03);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-cyan-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Cinematic Closing Callout: Next Chapter */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-6">
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          <span>HORIZON INFINITE // THE TRAJECTORY CONTINUES</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight mb-4">
          THE JOURNEY <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            DOESN'T END HERE.
          </span>
        </h2>

        <div className="font-mono text-lg sm:text-xl text-neutral-400 flex items-center justify-center gap-3">
          <span>NEXT CHAPTER:</span>
          <span className="text-cyan-400 font-bold animate-pulse">LOADING...</span>
        </div>
      </div>

      {/* Interactive Contact & Transmission Hub */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 p-8 rounded-3xl glass-panel border border-white/10">
        {/* Left: Contact Info & Copy Email (6 cols) */}
        <div className="md:col-span-6 space-y-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Let's Build Something Meaningful
            </h3>
            <p className="text-sm text-neutral-400 font-sans leading-relaxed">
              Open to high-impact software engineering roles, distributed systems challenges, and generative AI research collaborations.
            </p>
          </div>

          {/* Quick Copy Email Box */}
          <div className="p-4 rounded-2xl bg-neutral-950 border border-white/10 font-mono">
            <span className="text-xs text-neutral-400 block mb-1.5">DIRECT ENCRYPTED CHANNEL</span>
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm text-cyan-300 font-semibold truncate">{email}</span>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs text-neutral-200 border border-white/10 transition-colors flex items-center gap-1.5 flex-shrink-0"
              >
                {copied ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          {/* Quick Social & Document Links */}
          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://github.com/Bewin007"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playBlip(750, 0.02)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/5 text-neutral-300 hover:text-white font-mono text-xs transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
            <a
              href="https://linkedin.com/in/bewin-felix-4153a9232"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playBlip(750, 0.02)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/5 text-neutral-300 hover:text-white font-mono text-xs transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>LINKEDIN</span>
            </a>
            <a
              href="#recruiter"
              onClick={() => sounds.playConfirm()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-xs transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME DOSSIER</span>
            </a>
          </div>
        </div>

        {/* Right: Quick Transmission Form (6 cols) */}
        <div className="md:col-span-6">
          <form onSubmit={handleSendMessage} className="space-y-4">
            <div>
              <label className="text-xs font-mono text-neutral-400 block mb-1.5">
                TRANSMIT MESSAGE // INSTANT DISPATCH
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you building? How can we collaborate?"
                rows={4}
                required
                className="w-full p-3.5 rounded-2xl bg-neutral-950 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-neutral-600 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-neutral-950 font-mono text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2"
            >
              {formSent ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-neutral-950" />
                  <span>TRANSMISSION BUFFERED (SAMPLE DEMO)</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>DISPATCH TRANSMISSION</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Minimal Signature Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <span>BEWIN.OS [v1.0.0]</span>
          <span>•</span>
          <span>BUILT WITH REACT, VITE, TS & TAILWIND</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors p-1"
          title="Return to top"
        >
          <span>RETURN TO APEX</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
