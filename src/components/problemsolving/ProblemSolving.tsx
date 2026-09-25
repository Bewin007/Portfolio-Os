import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { engineeringProblemStory } from '../../data/problemSolving';
import { sounds } from '../../utils/audio';
import { 
  GitCommit, 
  ArrowDown, 
  Terminal, 
  AlertTriangle, 
  FlaskConical, 
  RotateCw, 
  CheckCircle2, 
  Lightbulb,
  ChevronRight
} from 'lucide-react';

export const ProblemSolving: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = engineeringProblemStory.steps;
  const currentStep = steps[activeStepIndex];

  const getStepIcon = (phase: string) => {
    switch (phase) {
      case 'PROBLEM': return <AlertTriangle className="w-4 h-4 text-rose-400" />;
      case 'EXPERIMENT': return <FlaskConical className="w-4 h-4 text-amber-400" />;
      case 'ITERATION': return <RotateCw className="w-4 h-4 text-indigo-400" />;
      case 'SOLUTION': return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'LESSON': return <Lightbulb className="w-4 h-4 text-cyan-400" />;
      default: return <GitCommit className="w-4 h-4 text-neutral-400" />;
    }
  };

  const handleStepSelect = (idx: number) => {
    setActiveStepIndex(idx);
    sounds.playBlip(700 + idx * 60, 0.02);
  };

  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-400 mb-4">
          <GitCommit className="w-3.5 h-3.5" />
          <span>ENGINEERING COGNITION & METHODOLOGY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          How I Solve Hard Problems
        </h2>
        <p className="mt-3 text-base text-neutral-400 max-w-2xl mx-auto font-sans">
          Great engineering is not defined by knowing syntax; it is defined by a rigorous, disciplined feedback loop under uncertainty.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
        {/* Context description */}
        <div className="mb-8 p-4 rounded-2xl bg-neutral-900/60 border border-white/5">
          <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">
            REAL-WORLD CASE SCENARIO:
          </span>
          <h3 className="text-lg font-display font-semibold text-white mb-1">
            {engineeringProblemStory.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans">
            {engineeringProblemStory.context}
          </p>
        </div>

        {/* 5-Phase Horizontal Stepper Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.phase}
                onClick={() => handleStepSelect(idx)}
                className={`p-3 rounded-2xl text-left font-mono transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-neutral-800 border border-cyan-500/50 shadow-md text-cyan-300'
                    : 'bg-neutral-900/40 hover:bg-neutral-900/80 border border-white/5 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-neutral-400">PHASE 0{idx + 1}</span>
                  {getStepIcon(step.phase)}
                </div>
                <div className="font-bold text-xs tracking-wider">
                  {step.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.phase}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-neutral-900 border border-white/10 text-cyan-400">
                STAGE {activeStepIndex + 1} OF 5 // {currentStep.phase}
              </span>
            </div>

            <h4 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
              {currentStep.title}
            </h4>

            <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed mb-6">
              {currentStep.description}
            </p>

            {/* Metrics Comparison if available */}
            {currentStep.metricsBefore && (
              <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-rose-300 text-xs font-mono mb-4">
                <span className="font-bold block mb-0.5">BASELINE TELEMETRY:</span>
                {currentStep.metricsBefore}
              </div>
            )}

            {currentStep.metricsAfter && (
              <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
                <span className="font-bold block mb-0.5">OPTIMIZED TELEMETRY:</span>
                {currentStep.metricsAfter}
              </div>
            )}

            {/* Code / Command Snippet if available */}
            {currentStep.codeSnippet && (
              <div className="rounded-xl overflow-hidden bg-neutral-900 border border-white/5 font-mono text-xs">
                <div className="px-4 py-2 bg-neutral-950/80 border-b border-white/5 text-[11px] text-neutral-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    TELEMETRY / ARTIFACT SNIPPET
                  </span>
                  <span className="text-[10px]">DEBUG_SESSION.LOG</span>
                </div>
                <pre className="p-4 text-neutral-300 overflow-x-auto leading-relaxed">
                  <code>{currentStep.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Navigation buttons to move forward / back */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/5">
              <button
                onClick={() => {
                  if (activeStepIndex > 0) handleStepSelect(activeStepIndex - 1);
                }}
                disabled={activeStepIndex === 0}
                className="px-4 py-2 rounded-xl text-xs font-mono text-neutral-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                ← PREVIOUS PHASE
              </button>

              <button
                onClick={() => {
                  if (activeStepIndex < steps.length - 1) {
                    handleStepSelect(activeStepIndex + 1);
                  } else {
                    handleStepSelect(0);
                  }
                }}
                className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>{activeStepIndex === steps.length - 1 ? 'RESTART LOOP' : 'NEXT PHASE'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
