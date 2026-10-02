import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { engineeringProcessData } from '../../data/problemSolving';
import { sounds } from '../../utils/audio';
import { 
  GitCommit, 
  ArrowRight, 
  Terminal, 
  ShieldAlert, 
  SlidersHorizontal, 
  Cpu, 
  CheckCircle2, 
  Lightbulb,
  Layers,
  Sparkles
} from 'lucide-react';

export const ProblemSolving: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const { title, subtitle, steps } = engineeringProcessData;
  const currentStep = steps[activeStepIndex];

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <SlidersHorizontal className="w-4 h-4 text-cyan-400" />;
      case 1: return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 2: return <ShieldAlert className="w-4 h-4 text-amber-400" />;
      case 3: return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      default: return <GitCommit className="w-4 h-4 text-neutral-400" />;
    }
  };

  const handleStepSelect = (idx: number) => {
    setActiveStepIndex(idx);
    sounds.playBlip(700 + idx * 50, 0.02);
  };

  return (
    <section id="process" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
          <GitCommit className="w-3.5 h-3.5" />
          <span>ENGINEERING DISCIPLINE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-sans">
          {subtitle}
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-neutral-950/80 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md">
        {/* 4-Step Stepper Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.id}
                onClick={() => handleStepSelect(idx)}
                className={`p-3.5 rounded-2xl text-left font-mono transition-all flex flex-col justify-between border ${
                  isActive
                    ? 'bg-neutral-900 border-cyan-500/50 text-white shadow-lg shadow-cyan-950/30 scale-[1.02]'
                    : 'bg-neutral-900/40 hover:bg-neutral-900/70 border-white/5 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-neutral-500 font-bold">
                    STEP {step.stepNumber}
                  </span>
                  {getStepIcon(idx)}
                </div>
                <div className="font-bold text-xs sm:text-[13px] tracking-wide text-neutral-200">
                  {step.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10"
          >
            {/* Step Subheader */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-neutral-950 border border-white/10 text-cyan-400">
                  PHASE {currentStep.stepNumber} // {currentStep.phase.toUpperCase()}
                </span>
              </div>
              <span className="text-[11px] font-mono text-neutral-500">
                TIED TO ACTUAL PRODUCTION & HACKATHONS
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
              {currentStep.title}
            </h3>

            <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6">
              {currentStep.principle}
            </p>

            {/* Real Project Implementations Grid */}
            <div className="space-y-3 mb-6">
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                How this was applied across real systems:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {currentStep.projectExamples.map((ex, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-neutral-950/70 border border-white/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className="font-mono text-xs font-semibold text-white">
                          {ex.project}
                        </span>
                        {ex.badge && (
                          <span className="text-[9.5px] font-mono px-1.5 py-0.2 rounded bg-neutral-900 text-neutral-400 border border-white/5">
                            {ex.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                        {ex.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaway Banner */}
            <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-start gap-2.5 text-xs font-sans text-neutral-300">
              <Lightbulb className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-mono font-bold text-cyan-300 mr-1.5">
                  Core Lesson:
                </span>
                <span>{currentStep.keyTakeaway}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
