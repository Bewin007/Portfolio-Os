import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buildLogEntries } from '../../data/buildLogs';
import { BuildLogEntry } from '../../types';
import { sounds } from '../../utils/audio';
import { Terminal, ChevronDown, ChevronUp, Tag } from 'lucide-react';

export const BuildLog: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(buildLogEntries[0].id);
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const allTags = ['ALL', ...Array.from(new Set(buildLogEntries.flatMap((l) => l.tags)))];

  const filteredLogs = buildLogEntries.filter((log) => {
    if (selectedTag === 'ALL') return true;
    return log.tags.includes(selectedTag);
  });

  const toggleExpand = (id: string) => {
    sounds.playBlip(750, 0.02);
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>ENGINEERING CHANGELOG // COMMITS STREAM</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          System Build Log
        </h2>
        <p className="mt-3 text-base text-neutral-400 max-w-2xl mx-auto font-sans">
          A chronologically indexed record of technical experiments, architecture migrations, benchmarks, and production post-mortems.
        </p>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-8">
          <span className="text-xs font-mono text-neutral-400 mr-2 flex items-center gap-1">
            <Tag className="w-3 h-3 text-cyan-400" />
            FILTER:
          </span>
          {allTags.slice(0, 7).map((tag) => (
            <button
              key={tag}
              onClick={() => {
                sounds.playBlip(800, 0.02);
                setSelectedTag(tag);
              }}
              className={`px-3 py-1 rounded-xl text-xs font-mono transition-all ${
                selectedTag === tag
                  ? 'bg-neutral-800 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 bg-neutral-950/60 border border-white/5'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Log Feed Container */}
      <div className="max-w-4xl mx-auto space-y-3 font-mono">
        {filteredLogs.map((entry) => {
          const isExpanded = expandedId === entry.id;

          return (
            <div
              key={entry.id}
              onClick={() => toggleExpand(entry.id)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                isExpanded
                  ? 'glass-panel bg-neutral-900/90 border-cyan-500/40 shadow-lg'
                  : 'bg-neutral-950/50 hover:bg-neutral-900/50 border-white/5'
              }`}
            >
              <div className="flex items-start sm:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-cyan-400 text-xs font-bold tracking-wider">
                    {entry.timestamp}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-neutral-900 border border-white/5 text-neutral-300 self-start sm:self-auto">
                    {entry.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {entry.title}
                  </h4>
                </div>

                <div className="text-neutral-400 p-1 flex-shrink-0">
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>

              {/* Summary snippet */}
              <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-2 leading-relaxed">
                {entry.summary}
              </p>

              {/* Expanded Deep-Dive Details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 pt-4 border-t border-white/5 text-xs text-neutral-300 font-sans space-y-3"
                  >
                    <div className="p-3.5 rounded-xl bg-neutral-950 border border-white/5 leading-relaxed">
                      <span className="font-mono text-cyan-400 block mb-1 font-bold">
                        TECHNICAL ANALYSIS & VERIFICATION:
                      </span>
                      {entry.details}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {entry.tags.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-neutral-900 text-neutral-400 font-mono text-[10px] border border-white/5"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
