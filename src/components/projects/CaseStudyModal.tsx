import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCaseStudy } from '../../types';
import { sounds } from '../../utils/audio';
import { 
  X, 
  ExternalLink, 
  Cpu, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  HelpCircle, 
  Layers, 
  Database, 
  Radio, 
  Terminal,
  Activity,
  Sparkles,
  Lock,
  Archive,
  FlaskConical,
  Flame,
  Award
} from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'origin' | 'architecture' | 'decisions' | 'metrics'>('origin');

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [project]);

  if (!project) return null;

  const { caseStudy } = project;

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'client': return <Terminal className="w-4 h-4 text-sky-400" />;
      case 'gateway': return <Radio className="w-4 h-4 text-purple-400" />;
      case 'queue': return <Activity className="w-4 h-4 text-amber-400" />;
      case 'database': return <Database className="w-4 h-4 text-emerald-400" />;
      case 'ai': return <Cpu className="w-4 h-4 text-cyan-400" />;
      default: return <Layers className="w-4 h-4 text-indigo-400" />;
    }
  };

  const getStatusBadge = () => {
    switch (project.codeStatus) {
      case 'ACADEMIC_IP':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
            <Lock className="w-3 h-3 text-purple-400" />
            <span>INSTITUTIONAL IP // LAB CODE</span>
          </span>
        );
      case 'LAB_PROTOTYPE':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            <FlaskConical className="w-3 h-3 text-cyan-400" />
            <span>CAMPUS LAB PROTOTYPE</span>
          </span>
        );
      case 'PROPRIETARY':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
            <Lock className="w-3 h-3 text-indigo-400" />
            <span>ENTERPRISE PROPRIETARY</span>
          </span>
        );
      case 'ARCHIVED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <Archive className="w-3 h-3 text-amber-400" />
            <span>HISTORICAL ARTIFACT ARCHIVED</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            <span>SYSTEM DOSSIER</span>
          </span>
        );
    }
  };

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto pt-24 sm:pt-20 pb-8">
        {/* Backdrop (Guaranteed on top of navbar with z-[9999]) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sounds.playBlip(500, 0.02);
            onClose();
          }}
          className="fixed inset-0 bg-neutral-950/90 backdrop-blur-xl -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[86vh] glass-panel bg-neutral-950/98 border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 my-auto"
        >
          {/* Top Header Bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-neutral-900/50">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-neutral-800 text-cyan-400 font-mono text-xs font-bold border border-cyan-500/30">
                CASE #{project.code}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-lg text-white">
                    {project.title}
                  </h3>
                  {getStatusBadge()}
                </div>
                <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                  {project.tagline}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-neutral-400 hover:text-cyan-300 hover:bg-neutral-800 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={() => {
                  sounds.playBlip(500, 0.02);
                  onClose();
                }}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                title="Close modal (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Academic / Lab Status Notice Ribbon if applicable */}
          {project.codeStatusNotice && (
            <div className="px-6 py-2 bg-purple-950/30 border-b border-purple-500/20 text-[11px] font-mono text-purple-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-purple-400" />
                <span>{project.codeStatusNotice}</span>
              </span>
              <span className="text-neutral-500 hidden md:inline">// CASE FILE ARCHIVE</span>
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="px-6 py-2.5 bg-neutral-950/80 border-b border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none">
            {[
              {
                id: 'origin' as const,
                label: '1. ORIGIN STORY & WAR STORIES',
                icon: Sparkles,
                activeColor: 'text-cyan-300',
                activeBorder: 'border-cyan-500/50',
                activeBg: 'bg-cyan-950/40',
                activeGlow: 'shadow-[0_0_12px_rgba(0,240,255,0.18)]',
                iconActive: 'text-cyan-400',
                iconInactive: 'text-cyan-400/60 group-hover:text-cyan-300',
              },
              {
                id: 'architecture' as const,
                label: '2. ARCHITECTURE & FLOWS',
                icon: Layers,
                activeColor: 'text-purple-300',
                activeBorder: 'border-purple-500/50',
                activeBg: 'bg-purple-950/40',
                activeGlow: 'shadow-[0_0_12px_rgba(168,85,247,0.18)]',
                iconActive: 'text-purple-400',
                iconInactive: 'text-purple-400/60 group-hover:text-purple-300',
              },
              {
                id: 'decisions' as const,
                label: '3. DECISION LOG & TRADEOFFS',
                icon: HelpCircle,
                activeColor: 'text-amber-300',
                activeBorder: 'border-amber-500/50',
                activeBg: 'bg-amber-950/40',
                activeGlow: 'shadow-[0_0_12px_rgba(245,158,11,0.18)]',
                iconActive: 'text-amber-400',
                iconInactive: 'text-amber-400/60 group-hover:text-amber-300',
              },
              {
                id: 'metrics' as const,
                label: '4. BENCHMARKS & LESSONS',
                icon: Award,
                activeColor: 'text-emerald-300',
                activeBorder: 'border-emerald-500/50',
                activeBg: 'bg-emerald-950/40',
                activeGlow: 'shadow-[0_0_12px_rgba(16,185,129,0.18)]',
                iconActive: 'text-emerald-400',
                iconInactive: 'text-emerald-400/60 group-hover:text-emerald-300',
              },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sounds.playBlip(750, 0.02);
                    setActiveTab(tab.id);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 border select-none flex-shrink-0 whitespace-nowrap cursor-pointer group ${
                    isActive
                      ? `${tab.activeBg} ${tab.activeColor} ${tab.activeBorder} ${tab.activeGlow} font-bold`
                      : 'bg-neutral-900/50 hover:bg-neutral-800/80 text-neutral-400 hover:text-neutral-100 border-white/5 hover:border-white/20 font-medium'
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 transition-colors ${
                      isActive ? tab.iconActive : tab.iconInactive
                    }`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 overflow-y-auto space-y-8 max-h-[75vh]">
            {/* TAB 1: ORIGIN STORY & WAR STORIES */}
            {activeTab === 'origin' && (
              <div className="space-y-6">
                {/* Where I got the idea */}
                {project.originStory && (
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 font-bold tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>WHERE I GOT THE IDEA (THE SPARK)</span>
                    </div>
                    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-cyan-500/20 text-neutral-200 leading-relaxed font-sans text-sm sm:text-base">
                      {project.originStory}
                    </div>
                  </div>
                )}

                {/* Why I Built It */}
                {project.whyBuilt && (
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2 font-bold tracking-wider">
                      <Flame className="w-3.5 h-3.5" />
                      <span>WHY I BUILT IT (THE REAL MOTIVATION)</span>
                    </div>
                    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-purple-500/20 text-neutral-300 leading-relaxed font-sans text-sm sm:text-base">
                      {project.whyBuilt}
                    </div>
                  </div>
                )}

                {/* College / Lab Context */}
                {project.collegeContext && (
                  <div className="p-4 rounded-xl bg-neutral-950 border border-white/10 flex items-start gap-3">
                    <Terminal className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-xs font-bold text-emerald-300 block mb-0.5">
                        CAMPUS & LAB REALITY
                      </span>
                      <span className="text-xs text-neutral-300 font-sans">
                        {project.collegeContext}
                      </span>
                    </div>
                  </div>
                )}

                {/* Interesting Facts & Behind-The-Scenes Anecdotes */}
                {project.interestingFacts && project.interestingFacts.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-3 font-bold tracking-wider">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>BEHIND-THE-SCENES WAR STORIES & SURPRISING FACTS</span>
                    </div>
                    <div className="space-y-2.5">
                      {project.interestingFacts.map((fact, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-neutral-900/40 border border-amber-500/20 text-xs sm:text-sm text-neutral-300 font-sans flex items-start gap-3"
                        >
                          <span className="font-mono text-amber-400 font-bold mt-0.5">0{idx + 1}.</span>
                          <span className="leading-relaxed">{fact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Problem & Approach Quick Synopsis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-neutral-950/80 border border-white/5">
                    <span className="font-mono text-xs text-rose-400 block mb-1 font-bold">
                      THE CORE BOTTLENECK:
                    </span>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                      {caseStudy.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950/80 border border-white/5">
                    <span className="font-mono text-xs text-cyan-400 block mb-1 font-bold">
                      THE ARCHITECTURAL SOLUTION:
                    </span>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                      {caseStudy.approach}
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div>
                  <div className="text-xs font-mono text-neutral-400 mb-2">
                    TECHNOLOGIES HARNESSED:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-neutral-900 text-cyan-300 border border-cyan-500/20 font-mono text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ARCHITECTURE & FLOWS */}
            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-bold mb-2">
                    SYSTEM ARCHITECTURE BREAKDOWN
                  </div>
                  <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                    {caseStudy.architectureDescription}
                  </p>
                </div>

                {/* Animated Interactive Flow Diagram */}
                <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 relative overflow-hidden">
                  <div className="text-xs font-mono text-neutral-400 mb-4 flex items-center justify-between">
                    <span>LIVE REQUEST & DATA FLOW TOPOLOGY</span>
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      PACKETS IN FLIGHT
                    </span>
                  </div>

                  {/* Nodes Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {caseStudy.architectureNodes.map((node) => (
                      <div
                        key={node.id}
                        className="p-4 rounded-xl bg-neutral-950 border border-white/10 hover:border-cyan-500/40 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="p-1.5 rounded-lg bg-neutral-900 border border-white/5">
                            {getNodeIcon(node.type)}
                          </span>
                          <div>
                            <div className="font-mono text-xs font-bold text-white">
                              {node.name}
                            </div>
                            <span className="text-[10px] font-mono text-cyan-400 uppercase">
                              [{node.type}]
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-neutral-400 font-sans">
                          {node.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Flow Sequence */}
                  <div className="p-4 rounded-xl bg-neutral-950/80 border border-cyan-500/20">
                    <div className="text-xs font-mono text-neutral-400 mb-3">
                      STEP-BY-STEP DATA TRANSIT:
                    </div>
                    <div className="space-y-2">
                      {caseStudy.architectureFlows.map((flow, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs font-mono text-neutral-300"
                        >
                          <span className="text-cyan-400 font-semibold">{flow.from}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                          <span className="text-purple-400 font-semibold">{flow.to}</span>
                          <span className="text-neutral-500 ml-2">// {flow.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: DECISION LOG & TRADEOFFS */}
            {activeTab === 'decisions' && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold mb-2">
                    <HelpCircle className="w-4 h-4" />
                    <span>DECISION LOG: ARCHITECTURAL RATIONALE & TRADEOFFS</span>
                  </div>
                  <p className="text-sm text-neutral-400 font-sans">
                    Every system design decision is a compromise between latency, complexity, consistency, and operational overhead.
                  </p>
                </div>

                <div className="space-y-4">
                  {caseStudy.decisionLog.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10"
                    >
                      <h4 className="font-mono text-sm font-bold text-cyan-300 mb-2">
                        Q: {item.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: BENCHMARKS & LESSONS */}
            {activeTab === 'metrics' && (
              <div className="space-y-6">
                {/* Measurable Results */}
                <div>
                  <div className="text-xs font-mono text-emerald-400 mb-3 tracking-wider font-semibold">
                    MEASURABLE RESULTS & BENCHMARKS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {caseStudy.results.map((res, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-neutral-900/80 border border-emerald-500/30 text-center"
                      >
                        <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                          {res.metric}
                        </div>
                        <div className="text-xs font-mono text-neutral-400 mt-1">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Hard Truths */}
                <div>
                  <div className="text-xs font-mono text-neutral-400 mb-3 tracking-wider">
                    TECHNICAL HURDLES OVERCOME
                  </div>
                  <div className="space-y-2">
                    {caseStudy.challenges.map((ch, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-neutral-900/40 border border-white/5 text-xs text-neutral-300 flex items-start gap-3"
                      >
                        <span className="font-mono text-cyan-400 mt-0.5">0{idx + 1}.</span>
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What I Learned */}
                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-purple-500/20">
                  <div className="text-xs font-mono text-purple-400 font-bold mb-1.5">
                    KEY ARCHITECTURAL LESSON
                  </div>
                  <p className="text-sm text-neutral-300 font-sans italic leading-relaxed">
                    "{caseStudy.whatILearned}"
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3.5 border-t border-white/10 bg-neutral-900/50 flex justify-between items-center text-xs font-mono text-neutral-400">
            <span>PRESS ESC OR CLICK OUTSIDE TO CLOSE</span>
            <button
              onClick={() => {
                sounds.playBlip(500, 0.02);
                onClose();
              }}
              className="px-4 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
            >
              CLOSE CASE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
