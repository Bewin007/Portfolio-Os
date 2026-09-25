import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sounds } from '../../utils/audio';
import { ArrowDown, Terminal, ShieldCheck, Cpu, GitBranch, ArrowRight, ExternalLink } from 'lucide-react';

interface HeroProps {
  onExploreJourney: () => void;
  onOpenTerminal: () => void;
  onSwitchToRecruiter: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreJourney,
  onOpenTerminal,
  onSwitchToRecruiter,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('biwinfelix@gmail.com');
    setCopiedEmail(true);
    sounds.playConfirm();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden tech-grid"
    >
      {/* Soft Ambient Radial Glow Behind Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-radial from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Content Container */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Top Status & System Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="tracking-widest">SYSTEM ONLINE</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-400 tracking-tight">BEWIN.OS v1.0.0</span>
        </motion.div>

        {/* Large Editorial Name Typography */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold tracking-tight text-white mb-4"
        >
          BEWIN <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">FELIX R A</span>
        </motion.h1>

        {/* Role & Current Position */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-base sm:text-xl font-mono text-neutral-300 mb-6 font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">~/</span>
            <span className="text-white font-bold">Full Stack Developer</span>
            <span className="text-neutral-600 hidden sm:inline">•</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-300">Agentic AI Engineer</span>
            <span className="text-neutral-600 hidden sm:inline">•</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-normal">
            Specialist Programmer @ Infosys
          </span>
        </motion.div>

        {/* Core Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base sm:text-xl text-neutral-400 font-sans leading-relaxed mb-10"
        >
          <p className="font-light tracking-wide text-neutral-200">
            Building systems. Breaking assumptions. Learning continuously.
          </p>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 font-mono">
            An interactive chronicle of engineering evolution—from first principles to distributed architectures and autonomous AI primitives.
          </p>
        </motion.div>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14"
        >
          {/* Primary Explore Journey Button */}
          <button
            onClick={() => {
              sounds.playConfirm();
              onExploreJourney();
            }}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-neutral-950 font-mono text-sm font-bold tracking-wider hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>EXPLORE JOURNEY</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Quick Terminal Trigger */}
          <button
            onClick={() => {
              sounds.playTerminalBeep();
              onOpenTerminal();
            }}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel-interactive text-neutral-200 font-mono text-sm tracking-wide hover:border-cyan-500/40 hover:text-cyan-300"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>LAUNCH CLI</span>
          </button>

          {/* Recruiter Shortcut */}
          <button
            onClick={() => {
              sounds.playBlip(800, 0.03);
              onSwitchToRecruiter();
            }}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-white/10 text-neutral-300 font-mono text-sm tracking-wide transition-colors"
          >
            <span>RECRUITER VIEW</span>
            <ArrowRight className="w-4 h-4 text-neutral-500" />
          </button>
        </motion.div>

        {/* Technical Telemetry Dashboard Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 text-left font-mono"
        >
          <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>CORE STATUS</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>OPTIMAL / ACTIVE</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>SYSTEM FOCUS</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-200 truncate">
              Distributed & AI
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
              <GitBranch className="w-3.5 h-3.5 text-purple-400" />
              <span>TIMELINE HORIZON</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-200">
              2021 → 2025+
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm">
            <div className="text-xs text-neutral-400 mb-1">DIRECT CONTACT</div>
            <button
              onClick={handleCopyEmail}
              className="text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center justify-between w-full text-left"
              title="Click to copy email address"
            >
              <span className="truncate">{copiedEmail ? 'COPIED TO CLIPBOARD' : 'biwinfelix@gmail.com'}</span>
              <span className="text-[10px] text-neutral-500">COPY</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Scroll Cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-14 flex flex-col items-center gap-2 text-neutral-400 text-xs font-mono"
      >
        <span className="tracking-widest text-[10px]">SCROLL TO INITIALIZE TIMELINE</span>
        <div className="w-4 h-7 rounded-full border border-neutral-700 flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};
