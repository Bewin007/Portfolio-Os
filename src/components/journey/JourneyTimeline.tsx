import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { journeyChapters } from '../../data/journey';
import { TimelineChapter } from '../../types';
import { sounds } from '../../utils/audio';
import { 
  Terminal, 
  Layers, 
  Cpu, 
  Box, 
  Activity, 
  Sparkles, 
  ChevronRight, 
  AlertCircle, 
  Lightbulb, 
  CheckCircle2,
  Code2
} from 'lucide-react';

interface JourneyTimelineProps {
  onOpenCaseStudy?: (projectId: string) => void;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ onOpenCaseStudy }) => {
  const [activeChapterId, setActiveChapterId] = useState<string>(journeyChapters[0].id);

  const getChapterIcon = (type?: string) => {
    switch (type) {
      case 'circuit': return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'stack': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'distributed': return <Box className="w-5 h-5 text-teal-400" />;
      case 'cluster': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'ai-mesh': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      default: return <Activity className="w-5 h-5 text-emerald-400" />;
    }
  };

  const handleJumpToChapter = (id: string) => {
    setActiveChapterId(id);
    sounds.playBlip(700, 0.03);
    const element = document.getElementById(`chapter-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>PRIMARY CHRONICLE // PROGRESSIVE EVOLUTION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
          The Development Journey
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto font-sans">
          Software engineering is not a static inventory of tools; it is a trajectory of continuous compounding capability, architectural breakthroughs, and mental model shifts.
        </p>

        {/* Interactive Sticky Chapter Navigator Ribbon */}
        <div className="sticky top-20 z-30 mt-10 py-3 px-2 sm:px-4 max-w-4xl mx-auto glass-panel rounded-2xl flex items-center justify-between sm:justify-center gap-1 sm:gap-2 overflow-x-auto shadow-xl">
          {journeyChapters.map((ch) => {
            const isActive = activeChapterId === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => handleJumpToChapter(ch.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs transition-all ${
                  isActive
                    ? 'bg-neutral-800 text-cyan-300 border border-cyan-500/50 shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-cyan-400 animate-pulse' : 'bg-neutral-600'}`} />
                <span>{ch.year}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Scrollable Timeline Layout */}
      <div className="relative">
        {/* Continuous Vertical Glowing Timeline Center Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500/80 via-purple-500/50 to-emerald-500/80 pointer-events-none hidden sm:block" />

        {/* Chapters Stack */}
        <div className="space-y-24 sm:space-y-36">
          {journeyChapters.map((chapter, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={chapter.id}
                id={`chapter-${chapter.id}`}
                className="relative scroll-mt-36"
                onMouseEnter={() => setActiveChapterId(chapter.id)}
              >
                {/* Center Node Marker (Desktop) */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 -top-3 z-10 items-center justify-center">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 border-2 border-cyan-400/80 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                    {getChapterIcon(chapter.visualTheme.diagramType)}
                  </div>
                </div>

                {/* Chapter Container: Alternating Layout */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start`}>
                  {/* Left Column (Meta & Story) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-6 ${isEven ? 'lg:pr-8' : 'lg:order-2 lg:pl-8'}`}
                  >
                    {/* Chapter Header Pill */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${chapter.visualTheme.badgeBg}`}>
                        {chapter.year}
                      </span>
                      <span className="font-mono text-xs text-neutral-400">{chapter.era}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                      {chapter.title}
                    </h3>
                    <p className="font-mono text-sm text-cyan-300 mb-6">
                      {chapter.subtitle}
                    </p>

                    {/* Narrative Story Box */}
                    <div className="p-6 rounded-2xl glass-panel relative overflow-hidden mb-6 border border-white/10 group hover:border-cyan-500/30 transition-colors">
                      <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-5xl font-black text-white pointer-events-none">
                        {chapter.year.replace('YEAR ', '0')}
                      </div>
                      <p className="text-neutral-300 leading-relaxed text-sm sm:text-base font-sans relative z-10">
                        {chapter.story}
                      </p>
                    </div>

                    {/* What Was Being Learned */}
                    <div className="mb-6">
                      <div className="text-xs font-mono tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>CORE LEARNING FOCUS</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {chapter.learningFocus.map((focus, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-neutral-900/60 border border-white/5 text-xs text-neutral-300 font-sans"
                          >
                            <span className="text-cyan-400 font-mono mt-0.5">•</span>
                            <span>{focus}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenges & Lesson Learned Callouts */}
                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-4 rounded-xl bg-neutral-950/60 border border-amber-500/20 flex gap-3 text-xs">
                        <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-mono font-semibold text-amber-300 block mb-1">KEY HURDLE</span>
                          <span className="text-neutral-400">{chapter.keyChallenges}</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-neutral-950/60 border border-cyan-500/20 flex gap-3 text-xs">
                        <Lightbulb className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-mono font-semibold text-cyan-300 block mb-1">MINDSET BREAKTHROUGH</span>
                          <span className="text-neutral-300">{chapter.lessonLearned}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Column (Visual Composition: What Was Built & Tech Node Visualization) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-6 ${isEven ? 'lg:pl-8' : 'lg:order-1 lg:pr-8'}`}
                  >
                    {/* Visual Card: Artifacts / What Was Built */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-mono tracking-wider text-neutral-400 flex items-center gap-2">
                          <Code2 className="w-3.5 h-3.5 text-purple-400" />
                          <span>MILESTONES & ARTIFACTS BUILT</span>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">SAMPLE MILESTONES</span>
                      </div>

                      {chapter.whatWasBuilt.map((item, bIdx) => (
                        <div
                          key={bIdx}
                          onClick={() => {
                            if (item.projectId && onOpenCaseStudy) {
                              sounds.playConfirm();
                              onOpenCaseStudy(item.projectId);
                            }
                          }}
                          className={`p-5 rounded-2xl glass-panel-interactive border border-white/10 group relative ${
                            item.projectId ? 'cursor-pointer hover:border-cyan-500/50' : ''
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h4 className="font-display font-semibold text-base text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                              <span>{item.name}</span>
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-cyan-400" />
                            </h4>
                            {item.projectId && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                                DOSSIER →
                              </span>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm text-neutral-400 mb-4 leading-relaxed">
                            {item.description}
                          </p>

                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {item.tech.map((t, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 rounded-md bg-neutral-900 text-neutral-300 border border-white/5 font-mono text-[11px]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* Cumulative Tech Stack Pill Clouds for this Era */}
                      <div className="p-4 rounded-2xl bg-neutral-950/40 border border-white/5">
                        <div className="text-[11px] font-mono text-neutral-400 mb-2.5">
                          TECHNOLOGICAL EXPANSION IN THIS CHAPTER:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {chapter.technologiesEncountered.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg bg-neutral-900/80 border border-cyan-500/20 text-cyan-200 text-xs font-mono hover:border-cyan-400/50 transition-colors cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
