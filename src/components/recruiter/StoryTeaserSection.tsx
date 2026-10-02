import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, ArrowRight, Sparkles, Terminal, Activity, Layers } from 'lucide-react';
import { sounds } from '../../utils/audio';

interface StoryTeaserSectionProps {
  onSwitchToStory: () => void;
}

export const StoryTeaserSection: React.FC<StoryTeaserSectionProps> = ({ onSwitchToStory }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleNavigateStory = () => {
    sounds.playConfirm();
    onSwitchToStory();
  };

  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900/90 to-neutral-950 border border-cyan-500/30 overflow-hidden shadow-2xl">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6">
            <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>INTERACTIVE ENGINEERING CHRONICLE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Curious how I got here?
          </h2>

          {/* Quote / Subtitle */}
          <blockquote className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed mb-8 border-l-2 border-cyan-400 pl-4">
            "From building my first web applications to working with distributed systems, containers, and GenAI."
          </blockquote>

          {/* Preview pills of what's inside /story */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 font-mono text-xs text-neutral-400">
            <div className="p-3 rounded-xl bg-neutral-950/80 border border-white/5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>5-Year Timeline</span>
            </div>
            <div className="p-3 rounded-xl bg-neutral-950/80 border border-white/5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>DNA Constellation</span>
            </div>
            <div className="p-3 rounded-xl bg-neutral-950/80 border border-white/5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Architecture Dossiers</span>
            </div>
            <div className="p-3 rounded-xl bg-neutral-950/80 border border-white/5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Engineering Process</span>
            </div>
          </div>

          {/* Primary CTA Button */}
          <button
            onClick={handleNavigateStory}
            className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-neutral-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl hover:shadow-cyan-500/25 active:scale-[0.98]"
          >
            <span>EXPLORE MY ENGINEERING JOURNEY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
