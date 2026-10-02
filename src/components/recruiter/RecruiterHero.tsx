import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SystemArchitectureVisual } from './SystemArchitectureVisual';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { Download, ArrowRight, Briefcase, Eye, ChevronRight } from 'lucide-react';
import { sounds } from '../../utils/audio';

interface RecruiterHeroProps {
  onSwitchToStory: () => void;
  onScrollToProjects: () => void;
}

export const RecruiterHero: React.FC<RecruiterHeroProps> = ({
  onSwitchToStory,
  onScrollToProjects,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const handleDownloadResume = () => {
    sounds.playConfirm();
    window.open(`${import.meta.env.BASE_URL}Resume.pdf`, '_blank');
  };

  const handleViewProjects = () => {
    sounds.playBlip(700, 0.02);
    onScrollToProjects();
  };

  const handleStoryTransition = () => {
    sounds.playConfirm();
    onSwitchToStory();
  };

  return (
    <section className="relative pt-28 pb-16 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Core Identity & CTAs (7 cols) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Current Employer & Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-emerald-500/30 text-xs font-mono text-neutral-300 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-emerald-400 font-semibold tracking-wide">
              INFOSYS
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-300">
              Specialist Programmer (JL5)
            </span>
          </div>

          {/* Name Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-3">
            BEWIN FELIX
          </h1>

          {/* Core Title */}
          <div className="text-xl sm:text-2xl font-mono font-bold text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text mb-5">
            Software Engineer | Full-Stack & GenAI
          </div>

          {/* Supporting Text (Outcome-Led) */}
          <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-2xl mb-8">
            Full-stack engineer building scalable web platforms, backend systems, and production GenAI workflows.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
            {/* View Projects CTA */}
            <button
              onClick={handleViewProjects}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 font-mono text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98]"
            >
              <Eye className="w-4 h-4" />
              <span>VIEW PROJECTS</span>
            </button>

            {/* Download Resume CTA */}
            <button
              onClick={handleDownloadResume}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-cyan-500/40 text-neutral-100 font-mono text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>DOWNLOAD RESUME</span>
            </button>

            {/* GitHub Link */}
            <a
              href="https://github.com/Bewin007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title="GitHub Profile (@Bewin007)"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://linkedin.com/in/bewin-felix-4153a9232"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-cyan-400 hover:text-cyan-300 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Subtle Secondary CTA to /story */}
          <div className="pt-4 border-t border-white/5 w-full">
            <button
              onClick={handleStoryTransition}
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-400 hover:text-cyan-300 transition-colors"
            >
              <span className="text-neutral-500">Interested in the engineering narrative?</span>
              <span className="font-semibold text-cyan-400 group-hover:underline">
                Explore my engineering journey
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Hero Visual (5 cols) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center"
        >
          <SystemArchitectureVisual />
        </motion.div>
      </div>

      {/* Strong Proof & Impact Strip Directly Below Hero */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 p-3.5 sm:p-4 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-mono backdrop-blur-md shadow-xl"
      >
        <div className="flex items-center gap-2.5 text-neutral-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <span className="font-semibold text-white">Infosys Specialist Programmer</span>
        </div>
        <span className="hidden sm:inline text-neutral-600 font-sans">•</span>
        <div className="flex items-center gap-2.5 text-neutral-200">
          <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
          <span className="font-semibold text-white">SIH 2023 National Finalist (Top 0.1%)</span>
        </div>
        <span className="hidden sm:inline text-neutral-600 font-sans">•</span>
        <div className="flex items-center gap-2.5 text-neutral-200">
          <span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
          <span className="font-semibold text-white">Built AI Platform for 8,000+ Users</span>
        </div>
      </motion.div>
    </section>
  );
};
