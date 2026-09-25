import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sounds } from '../../utils/audio';
import { Zap, X, ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface QuickTourProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TourStep {
  targetId: string;
  title: string;
  badge: string;
  description: string;
}

export const QuickTourOverlay: React.FC<QuickTourProps> = ({ isOpen, onClose }) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const tourSteps: TourStep[] = [
    {
      targetId: 'hero',
      title: '01. System Identity & Philosophy',
      badge: 'IDENTITY',
      description: 'Cinematic entry establishing the core engineering thesis: building resilient systems, questioning assumptions, and learning continuously.',
    },
    {
      targetId: 'journey',
      title: '02. The Development Journey',
      badge: 'JOURNEY',
      description: 'The core centerpiece. A scroll-driven timeline documenting the progression from early discovery to distributed systems and compound AI.',
    },
    {
      targetId: 'dna',
      title: '03. Engineering DNA Constellation',
      badge: 'ENGINEERING',
      description: 'An interactive topological graph mapping cross-disciplinary cohesion between systems, backends, databases, and AI.',
    },
    {
      targetId: 'projects',
      title: '04. Technical Project Archive',
      badge: 'WORK',
      description: 'Case files detailing real problems, architecture topologies, and decision trade-offs rather than superficial portfolio cards.',
    },
    {
      targetId: 'now',
      title: '05. Current State & Exploration',
      badge: 'NOW',
      description: 'Live dispatch separating production competencies from active sprints and early curiosity explorations.',
    },
    {
      targetId: 'contact',
      title: '06. Next Chapter & Contact Portal',
      badge: 'CONTACT',
      description: 'The trajectory continues. Direct coordinates for engineering collaboration and recruitment.',
    },
  ];

  const currentStep = tourSteps[currentStepIdx];

  useEffect(() => {
    if (isOpen) {
      const element = document.getElementById(currentStep.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentStepIdx, isOpen, currentStep.targetId]);

  if (!isOpen) return null;

  const handleNext = () => {
    sounds.playBlip(750, 0.02);
    if (currentStepIdx < tourSteps.length - 1) {
      setCurrentStepIdx(currentStepIdx + 1);
    } else {
      sounds.playConfirm();
      onClose();
    }
  };

  const handlePrev = () => {
    sounds.playBlip(650, 0.02);
    if (currentStepIdx > 0) {
      setCurrentStepIdx(currentStepIdx - 1);
    }
  };

  return (
    <div className="fixed bottom-8 right-6 z-50 max-w-sm w-full px-4">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        className="glass-panel bg-neutral-950/95 border border-amber-500/40 rounded-3xl p-5 shadow-2xl relative"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>QUICK TOUR // STEP {currentStepIdx + 1} OF {tourSteps.length}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
            title="Exit Tour"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Title */}
        <h4 className="font-display font-bold text-base text-white mb-1.5">
          {currentStep.title}
        </h4>

        {/* Description */}
        <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4">
          {currentStep.description}
        </p>

        {/* Progress dots & Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 font-mono text-xs">
          <div className="flex gap-1.5">
            {tourSteps.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentStepIdx
                    ? 'bg-amber-400 w-4'
                    : i < currentStepIdx
                    ? 'bg-amber-500/50'
                    : 'bg-neutral-800'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {currentStepIdx > 0 && (
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={handleNext}
              className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold transition-colors flex items-center gap-1"
            >
              <span>{currentStepIdx === tourSteps.length - 1 ? 'FINISH' : 'NEXT'}</span>
              {currentStepIdx === tourSteps.length - 1 ? (
                <Check className="w-3.5 h-3.5" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
