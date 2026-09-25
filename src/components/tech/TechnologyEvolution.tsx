import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technologyEras, allUniqueTechnologies } from '../../data/technologies';
import { sounds } from '../../utils/audio';
import { Play, Pause, Layers, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export const TechnologyEvolution: React.FC = () => {
  const [selectedEraIndex, setSelectedEraIndex] = useState(technologyEras.length - 1); // default to NOW
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'new' | 'cumulative'>('new');

  // Auto-play timeline progression
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setSelectedEraIndex((prev) => {
          if (prev >= technologyEras.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          sounds.playBlip(600 + prev * 80, 0.03);
          return prev + 1;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentEra = technologyEras[selectedEraIndex];

  // Technologies specifically unlocked in THIS era
  const newThisEra = currentEra.newTechnologies;

  // Calculate cumulative technologies up to selectedEraIndex
  const cumulativeTechnologies = technologyEras
    .slice(0, selectedEraIndex + 1)
    .flatMap((era) => era.newTechnologies);

  const categories = [
    'ALL',
    'Languages',
    'Frontend',
    'Backend',
    'Systems & DevOps',
    'Databases & Storage',
    'AI & Data',
  ];

  const filteredCumulative = cumulativeTechnologies.filter((tech) => {
    if (selectedCategory === 'ALL') return true;
    return tech.category === selectedCategory;
  });

  const handleEraSelect = (idx: number) => {
    setIsPlaying(false);
    setSelectedEraIndex(idx);
    sounds.playBlip(750, 0.03);
  };

  const handlePlayToggle = () => {
    if (!isPlaying && selectedEraIndex >= technologyEras.length - 1) {
      setSelectedEraIndex(0);
    }
    sounds.playConfirm();
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="stack" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-xs font-mono text-indigo-400 mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>CUMULATIVE COMPETENCY ENGINE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Technology Evolution
        </h2>
        <p className="mt-3 text-base text-neutral-400 max-w-2xl mx-auto font-sans">
          Watch how engineering capabilities compound across the timeline—from early networking and vision scripts to enterprise backend platforms and high-throughput AI serving.
        </p>
      </div>

      {/* Interactive Controls Bar: Timeline Stepper & Play Button */}
      <div className="p-6 rounded-3xl glass-panel border border-white/10 mb-10 max-w-5xl mx-auto shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayToggle}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-mono text-xs transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'PAUSE TIMELAPSE' : 'PLAY TIMELAPSE'}</span>
            </button>
            <div className="text-xs font-mono text-neutral-400">
              CUMULATIVE STACK: <span className="text-cyan-300 font-bold">{cumulativeTechnologies.length}</span> / {allUniqueTechnologies.length} TECHNOLOGIES
            </div>
          </div>

          {/* Era Title & Tagline Display */}
          <div className="text-center md:text-right">
            <div className="font-mono text-xs text-cyan-400 font-semibold flex items-center md:justify-end gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>HORIZON: {currentEra.eraName} ({currentEra.yearLabel})</span>
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">
              {currentEra.tagline}
            </div>
          </div>
        </div>

        {/* Timeline Scrubber Ribbon */}
        <div className="relative pt-6 pb-2">
          {/* Progress bar track */}
          <div className="absolute top-9 left-2 right-2 h-1 bg-neutral-800 rounded-full" />
          <div
            className="absolute top-9 left-2 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${(selectedEraIndex / (technologyEras.length - 1)) * 98}%` }}
          />

          {/* Timeline Nodes */}
          <div className="relative flex justify-between">
            {technologyEras.map((era, idx) => {
              const isSelected = selectedEraIndex === idx;
              const isPast = selectedEraIndex >= idx;

              return (
                <button
                  key={era.eraId}
                  onClick={() => handleEraSelect(idx)}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs transition-all duration-300 ${
                      isSelected
                        ? 'bg-cyan-400 text-neutral-950 font-bold scale-125 shadow-[0_0_15px_rgba(0,240,255,0.8)] border-2 border-white'
                        : isPast
                        ? 'bg-neutral-800 text-cyan-300 border border-cyan-500/50 hover:bg-neutral-700'
                        : 'bg-neutral-900 text-neutral-500 border border-neutral-800 hover:border-neutral-600'
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <span
                    className={`mt-2 font-mono text-[11px] transition-colors ${
                      isSelected ? 'text-cyan-300 font-bold' : 'text-neutral-400 group-hover:text-neutral-300'
                    }`}
                  >
                    {era.eraName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mode Switcher & Delta Synopsis */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-white/10">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sounds.playBlip(750, 0.02);
                setViewMode('new');
              }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-mono text-xs transition-all ${
                viewMode === 'new'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white bg-neutral-950/60 border border-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>1. WHAT'S NEW IN {currentEra.eraName} (+{newThisEra.length})</span>
            </button>

            <button
              onClick={() => {
                sounds.playBlip(750, 0.02);
                setViewMode('cumulative');
              }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-mono text-xs transition-all ${
                viewMode === 'cumulative'
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white bg-neutral-950/60 border border-white/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>2. CUMULATIVE ARSENAL ({cumulativeTechnologies.length})</span>
            </button>
          </div>

          {/* Quick Delta Chip */}
          <div className="text-xs font-mono text-neutral-300 flex items-center justify-center sm:justify-end gap-2">
            <span className="px-2.5 py-1 rounded-md bg-neutral-950 border border-cyan-500/30 text-cyan-300">
              {currentEra.yearLabel}
            </span>
            <span className="text-neutral-400">
              Stack Delta: <strong className="text-white">{cumulativeTechnologies.length - newThisEra.length}</strong> → <strong className="text-cyan-300">{cumulativeTechnologies.length}</strong> (<strong className="text-emerald-400">+{newThisEra.length}</strong>)
            </span>
          </div>
        </div>
      </div>

      {/* VIEW 1: WHAT'S NEW IN THIS CHAPTER (DEFAULT & PROMINENT) */}
      {viewMode === 'new' && (
        <div className="max-w-5xl mx-auto mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>UNLOCKED CAPABILITIES IN {currentEra.eraName}</span>
              </div>
              <p className="text-xs text-neutral-400 font-sans">
                These {newThisEra.length} tools and disciplines were introduced during this phase of the engineering journey:
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {newThisEra.map((t) => (
                <span
                  key={t.name}
                  className="px-2.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]"
                >
                  +{t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Cards for Newly Unlocked Tools */}
          <motion.div
            key={currentEra.eraId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {newThisEra.map((tech) => (
              <div
                key={tech.name}
                className="p-5 rounded-2xl bg-neutral-900/90 border border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.08)] relative overflow-hidden group hover:border-cyan-400 transition-all flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 px-2.5 py-0.5 rounded-bl-lg bg-cyan-500/20 text-cyan-300 font-mono text-[9px] font-bold tracking-wider border-l border-b border-cyan-500/30">
                  NEW IN {currentEra.eraName}
                </div>

                <div>
                  <div className="flex items-start gap-3 mb-3 pt-1">
                    <span className="text-2xl p-2 rounded-xl bg-neutral-950 border border-white/10 flex-shrink-0">
                      {tech.icon}
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {tech.name}
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {tech.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-neutral-400">MASTERY LEVEL:</span>
                  <span className="text-cyan-400 font-semibold">{tech.proficiencyLevel}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* VIEW 2: CUMULATIVE ARSENAL (Compounding stack with filter) */}
      {viewMode === 'cumulative' && (
        <div className="max-w-5xl mx-auto mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-3 border-b border-white/10">
            <div>
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Full Compounding Stack Up to {currentEra.eraName} ({filteredCumulative.length} Shown)</span>
              </h3>
              <p className="text-xs text-neutral-400 font-sans mt-0.5">
                Every foundational technology acquired since 2021 compounding into your current capability.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono text-neutral-400 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3 text-cyan-400" />
                DOMAIN:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    sounds.playBlip(800, 0.02);
                    setSelectedCategory(cat);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? 'bg-neutral-800 text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold'
                      : 'text-neutral-400 hover:text-neutral-200 bg-neutral-950/60 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cumulative Grid */}
          <motion.div
            key={`${currentEra.eraId}-${selectedCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
          >
            {filteredCumulative.map((tech) => {
              const isNewlyAdded = currentEra.newTechnologies.some((t) => t.name === tech.name);

              return (
                <div
                  key={tech.name}
                  className={`p-3 rounded-xl border transition-all ${
                    isNewlyAdded
                      ? 'bg-neutral-900 border-cyan-500/60 shadow-[0_0_12px_rgba(0,240,255,0.15)] ring-1 ring-cyan-500/30'
                      : 'bg-neutral-950/60 border-white/5 opacity-80 hover:opacity-100 hover:bg-neutral-900/60'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{tech.icon}</span>
                    <div className="min-w-0 flex-1">
                      <div className="font-display font-semibold text-xs text-white truncate">
                        {tech.name}
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mt-0.5">
                        <span className="truncate">{tech.category}</span>
                        {isNewlyAdded ? (
                          <span className="text-cyan-400 font-bold ml-1 flex-shrink-0 animate-pulse">[NEW]</span>
                        ) : (
                          <span className="text-neutral-500 ml-1 flex-shrink-0">{tech.introducedIn}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      )}
    </section>
  );
};
