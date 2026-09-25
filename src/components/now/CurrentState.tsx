import React from 'react';
import { motion } from 'framer-motion';
import { nowFocusItems, competencyMatrix, liveTickerItems } from '../../data/now';
import { Radio, Zap, Compass, CheckCircle2, Search, ArrowUpRight, Cpu } from 'lucide-react';

export const CurrentState: React.FC = () => {
  return (
    <section id="now" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Live Moving Technical Ticker */}
      <div className="relative w-full overflow-hidden py-3 mb-14 bg-neutral-950/80 border-y border-white/5 font-mono text-xs text-neutral-400 select-none">
        {/* Gradient fade masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-obsidian-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-obsidian-950 to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee gap-8 items-center cursor-default">
          {liveTickerItems.concat(liveTickerItems).map((ticker, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-neutral-900/50 border border-white/5 hover:border-cyan-500/30 transition-colors shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="tracking-wide text-neutral-300">{ticker}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>CURRENT HORIZON // REAL-TIME DISPATCH</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Current State & Exploration
        </h2>
        <p className="mt-3 text-base text-neutral-400 max-w-2xl mx-auto font-sans">
          Active engineering frontiers across Agentic AI architectures, autonomous multi-agent state machines, and high-throughput model serving. Transparent distinctions with zero inflated claims.
        </p>
      </div>

      {/* Active Focus Sprint Cards (Building, Exploring, Learning) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {nowFocusItems.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-colors"
          >
            <div>
              {/* Category Pill */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border ${
                    item.category === 'BUILDING'
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                      : item.category === 'EXPLORING'
                      ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                      : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                  }`}
                >
                  CURRENTLY {item.category}
                </span>

                <span className="text-[10px] font-mono text-neutral-400">
                  {item.status}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400 mb-4">
                {item.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div>
              {/* Progress Track */}
              <div className="mb-4">
                <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                  <span>SPRINT MATURITY</span>
                  <span className="text-neutral-300 font-semibold">{item.progressPercentage}%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                    style={{ width: `${item.progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {item.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-[11px] font-mono text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3-Tier Competency Matrix: Strict Distinction */}
      <div className="p-8 rounded-3xl glass-panel border border-white/10 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs font-mono text-neutral-400 mb-1">STRICT COMPETENCY CLASSIFICATION</div>
          <h3 className="text-2xl font-display font-bold text-white">
            Honest Engineering Matrix
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1: Experienced With */}
          <div className="p-5 rounded-2xl bg-neutral-950/60 border border-emerald-500/20">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>EXPERIENCED WITH</span>
            </div>
            <p className="text-[11px] text-neutral-400 font-sans mb-4">
              Battle-tested across production environments, schema migrations, and high-concurrency workloads.
            </p>
            <div className="space-y-3">
              {competencyMatrix.experiencedWith.map((item, idx) => (
                <div key={idx} className="border-b border-white/5 pb-2">
                  <div className="flex items-center justify-between text-xs font-mono text-white font-semibold">
                    <span>{item.name}</span>
                    <span className="text-[10px] text-emerald-400">{item.years}</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 font-sans mt-0.5">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 2: Building With */}
          <div className="p-5 rounded-2xl bg-neutral-950/60 border border-cyan-500/20">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold mb-4">
              <Zap className="w-4 h-4" />
              <span>BUILDING WITH</span>
            </div>
            <p className="text-[11px] text-neutral-400 font-sans mb-4">
              Active everyday daily drivers for Agentic AI workflows, high-throughput model serving, and asynchronous full-stack systems.
            </p>
            <div className="space-y-3">
              {competencyMatrix.buildingWith.map((item, idx) => (
                <div key={idx} className="border-b border-white/5 pb-2">
                  <div className="text-xs font-mono text-white font-semibold">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-sans mt-0.5">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 3: Exploring */}
          <div className="p-5 rounded-2xl bg-neutral-950/60 border border-purple-500/20">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold mb-4">
              <Search className="w-4 h-4" />
              <span>EXPLORING</span>
            </div>
            <p className="text-[11px] text-neutral-400 font-sans mb-4">
              Active frontiers in multi-agent reflection loops, local model quantization, and hybrid semantic retrieval.
            </p>
            <div className="space-y-3">
              {competencyMatrix.exploring.map((item, idx) => (
                <div key={idx} className="border-b border-white/5 pb-2">
                  <div className="text-xs font-mono text-white font-semibold">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-sans mt-0.5">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
