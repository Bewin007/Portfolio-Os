import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experimentItems } from '../../data/experiments';
import { ExperimentItem } from '../../types';
import { sounds } from '../../utils/audio';
import { FlaskConical, Play, RefreshCw, Zap, Sliders, CheckCircle2, XCircle } from 'lucide-react';

export const ExperimentLab: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>('exp-rate-limiter');

  // Simulator 1: Token Bucket Rate Limiter State
  const [bucketCapacity, setBucketCapacity] = useState(10);
  const [currentTokens, setCurrentTokens] = useState(10);
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [logEvents, setLogEvents] = useState<{ id: number; text: string; ok: boolean }[]>([]);

  // Simulator 2: Vector Embedding Cosine Distance State
  const concepts = [
    { name: 'Linux Kernel', vec: [0.9, 0.8, 0.2, 0.1] },
    { name: 'Operating System', vec: [0.85, 0.75, 0.3, 0.15] },
    { name: 'Web Browser', vec: [0.4, 0.3, 0.9, 0.2] },
    { name: 'LLM Transformer', vec: [0.2, 0.1, 0.3, 0.95] },
  ];
  const [conceptA, setConceptA] = useState(0);
  const [conceptB, setConceptB] = useState(1);

  // Simulator 3: Memory Block Allocator State
  const [memoryBlocks, setMemoryBlocks] = useState<
    { id: string; size: number; allocated: boolean; color: string }[]
  >([
    { id: 'b1', size: 16, allocated: true, color: '#38bdf8' },
    { id: 'b2', size: 16, allocated: false, color: '#27272a' },
    { id: 'b3', size: 32, allocated: true, color: '#818cf8' },
    { id: 'b4', size: 32, allocated: false, color: '#27272a' },
    { id: 'b5', size: 64, allocated: false, color: '#27272a' },
  ]);

  // Token refill interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTokens((prev) => Math.min(bucketCapacity, prev + 1));
    }, 1200);
    return () => clearInterval(timer);
  }, [bucketCapacity]);

  // Rate Limiter Request Sender
  const handleSendRequests = (count: number) => {
    let newAccepted = acceptedCount;
    let newRejected = rejectedCount;
    const newLogs = [...logEvents];

    for (let i = 0; i < count; i++) {
      setCurrentTokens((prev) => {
        if (prev > 0) {
          newAccepted++;
          sounds.playBlip(900, 0.015);
          newLogs.unshift({
            id: Date.now() + i,
            text: `[PASS] 200 OK — Token consumed (${prev - 1} remaining)`,
            ok: true,
          });
          return prev - 1;
        } else {
          newRejected++;
          sounds.playBlip(300, 0.03, 'sawtooth');
          newLogs.unshift({
            id: Date.now() + i,
            text: `[DROP] 429 Too Many Requests — Bucket exhausted`,
            ok: false,
          });
          return 0;
        }
      });
    }

    setAcceptedCount(newAccepted);
    setRejectedCount(newRejected);
    setLogEvents(newLogs.slice(0, 5));
  };

  // Cosine Similarity calculation
  const calculateCosine = (v1: number[], v2: number[]) => {
    const dot = v1.reduce((sum, val, i) => sum + val * v2[i], 0);
    const mag1 = Math.sqrt(v1.reduce((sum, val) => sum + val * val, 0));
    const mag2 = Math.sqrt(v2.reduce((sum, val) => sum + val * val, 0));
    return (dot / (mag1 * mag2)).toFixed(3);
  };

  // Memory Allocator Actions
  const handleAllocate = (size: number) => {
    const colors = ['#38bdf8', '#818cf8', '#a855f7', '#10b981', '#f59e0b'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    let allocated = false;
    const updated = memoryBlocks.map((b) => {
      if (!allocated && !b.allocated && b.size >= size) {
        allocated = true;
        sounds.playConfirm();
        return { ...b, allocated: true, color: randomColor };
      }
      return b;
    });

    if (allocated) {
      setMemoryBlocks(updated);
    } else {
      sounds.playBlip(250, 0.04);
    }
  };

  const handleFreeRandom = () => {
    sounds.playBlip(600, 0.03);
    const allocIndices = memoryBlocks
      .map((b, i) => (b.allocated ? i : -1))
      .filter((i) => i !== -1);
    if (allocIndices.length === 0) return;

    const targetIdx = allocIndices[Math.floor(Math.random() * allocIndices.length)];
    setMemoryBlocks((prev) =>
      prev.map((b, i) => (i === targetIdx ? { ...b, allocated: false, color: '#27272a' } : b))
    );
  };

  const activeExp = experimentItems.find((e) => e.id === activeExpId) || experimentItems[0];

  return (
    <section id="experiments" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-4">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>FIRST-PRINCIPLES SANDBOX</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          The Experiment Lab
        </h2>
        <p className="mt-3 text-base text-neutral-400 max-w-2xl mx-auto font-sans">
          "Things I built because I wanted to understand how they work under the hood." Interactive prototypes exploring low-level algorithms, concurrency, and token semantics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          {experimentItems.map((exp) => {
            const isSelected = activeExpId === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => {
                  sounds.playBlip(750, 0.02);
                  setActiveExpId(exp.id);
                }}
                className={`w-full text-left p-5 rounded-2xl border transition-all ${
                  isSelected
                    ? 'glass-panel bg-neutral-900 border-cyan-500/50 shadow-lg'
                    : 'bg-neutral-950/40 hover:bg-neutral-900/60 border-white/5 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-cyan-400 border border-cyan-500/20">
                    {exp.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">ACTIVE LAB</span>
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white mb-1">
                  {exp.title}
                </h4>
                <p className="text-xs text-neutral-400 font-sans line-clamp-2">
                  {exp.tagline}
                </p>
              </button>
            );
          })}

          <div className="p-4 rounded-2xl bg-neutral-950/60 border border-white/5 font-mono text-xs text-neutral-400">
            <span className="text-cyan-400 block mb-1">WHY EXPERIMENT?</span>
            Libraries make you fast; understanding fundamental algorithmic tradeoffs makes you dangerous.
          </div>
        </div>

        {/* Interactive Playable Sandbox (8 cols) */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 relative">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="font-mono text-xs text-cyan-400 block mb-1">
                {activeExp.category} // {activeExp.title}
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                "{activeExp.curiosityQuestion}"
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 font-sans mb-6">
            {activeExp.description}
          </p>

          {/* Interactive Playgrounds by Type */}
          {activeExp.type === 'rate-limiter' && (
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/5 pb-4">
                <div>
                  <div className="text-xs font-mono text-neutral-400">BUCKET TOKENS</div>
                  <div className="text-3xl font-display font-black text-cyan-400">
                    {currentTokens} <span className="text-sm font-mono text-neutral-500">/ {bucketCapacity}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>PASSED: {acceptedCount}</span>
                  </div>
                  <div className="text-xs font-mono text-rose-400 flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>DROPPED: {rejectedCount}</span>
                  </div>
                </div>
              </div>

              {/* Visual Tokens in Bucket */}
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5">
                <div className="text-xs font-mono text-neutral-400 mb-2">LIVE BUCKET CAPACITY (REFILLS ~1/s):</div>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: bucketCapacity }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-[10px] font-bold transition-all duration-300 ${
                        i < currentTokens
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/60 shadow-[0_0_8px_rgba(0,240,255,0.3)]'
                          : 'bg-neutral-950 text-neutral-600 border border-neutral-800'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Burst Sender Action Controls */}
              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={() => handleSendRequests(1)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono transition-colors"
                >
                  SEND 1 REQ
                </button>
                <button
                  onClick={() => handleSendRequests(3)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-cyan-300 text-xs font-mono transition-colors"
                >
                  BURST 3 REQS
                </button>
                <button
                  onClick={() => handleSendRequests(8)}
                  className="px-3.5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold transition-colors"
                >
                  FLASH BURST (8 REQS)
                </button>
              </div>

              {/* Telemetry Output Log */}
              <div className="rounded-xl bg-neutral-900 border border-white/5 p-3 font-mono text-[11px] space-y-1">
                <div className="text-neutral-500 border-b border-white/5 pb-1 mb-1">
                  EVENT STREAM OUTPUT:
                </div>
                {logEvents.length === 0 ? (
                  <div className="text-neutral-500 italic">No traffic generated yet. Click burst buttons above.</div>
                ) : (
                  logEvents.map((evt) => (
                    <div key={evt.id} className={evt.ok ? 'text-emerald-400' : 'text-rose-400'}>
                      {evt.text}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeExp.type === 'vector-tokenizer' && (
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 space-y-6">
              <div className="text-xs font-mono text-neutral-400 mb-2">
                MEASURING SEMANTIC EMBEDDING DISTANCE (COSINE SIMILARITY):
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">CONCEPT VECTOR A</label>
                  <select
                    value={conceptA}
                    onChange={(e) => setConceptA(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                  >
                    {concepts.map((c, i) => (
                      <option key={i} value={i}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">CONCEPT VECTOR B</label>
                  <select
                    value={conceptB}
                    onChange={(e) => setConceptB(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                  >
                    {concepts.map((c, i) => (
                      <option key={i} value={i}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Cosine Metric Card */}
              <div className="p-6 rounded-xl bg-neutral-900/60 border border-cyan-500/30 text-center">
                <div className="text-xs font-mono text-neutral-400 mb-1">COSINE PROXIMITY SCORE [-1.0 → +1.0]</div>
                <div className="text-4xl font-display font-extrabold text-cyan-400">
                  {calculateCosine(concepts[conceptA].vec, concepts[conceptB].vec)}
                </div>
                <p className="text-xs text-neutral-400 font-sans mt-2">
                  {Number(calculateCosine(concepts[conceptA].vec, concepts[conceptB].vec)) > 0.85
                    ? 'Strong conceptual overlap: High semantic clustering in latent vector space.'
                    : 'Divergent latent space: Distinct semantic coordinates.'}
                </p>
              </div>
            </div>
          )}

          {activeExp.type === 'memory-allocator' && (
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 space-y-6">
              <div className="text-xs font-mono text-neutral-400">
                SIMULATED HEAP BLOCK ARENA (160 KB TOTAL):
              </div>

              {/* Memory arena blocks visualization */}
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 flex gap-2 overflow-x-auto">
                {memoryBlocks.map((block) => (
                  <div
                    key={block.id}
                    className="p-3 rounded-lg border text-center transition-all flex flex-col justify-between"
                    style={{
                      width: `${block.size * 5}px`,
                      borderColor: block.allocated ? block.color : 'rgba(255,255,255,0.1)',
                      backgroundColor: block.allocated ? `${block.color}22` : '#18181b',
                    }}
                  >
                    <span className="font-mono text-[10px] text-neutral-400">{block.size} KB</span>
                    <span
                      className="font-mono text-xs font-bold mt-1"
                      style={{ color: block.allocated ? block.color : '#71717a' }}
                    >
                      {block.allocated ? 'OCCUPIED' : 'FREE'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={() => handleAllocate(16)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-cyan-300 text-xs font-mono transition-colors"
                >
                  malloc(16 KB)
                </button>
                <button
                  onClick={() => handleAllocate(32)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-purple-300 text-xs font-mono transition-colors"
                >
                  malloc(32 KB)
                </button>
                <button
                  onClick={handleFreeRandom}
                  className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-rose-300 text-xs font-mono transition-colors"
                >
                  free(random_ptr)
                </button>
              </div>
            </div>
          )}

          {/* Key Engineering Finding */}
          <div className="mt-6 p-4 rounded-xl bg-neutral-900/40 border border-white/5 text-xs text-neutral-300 font-sans">
            <span className="font-mono text-cyan-400 font-bold block mb-1">KEY TAKEAWAY:</span>
            {activeExp.keyFinding}
          </div>
        </div>
      </div>
    </section>
  );
};
