import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Layout, Server, Database, Container, Bot, ArrowDown, Activity } from 'lucide-react';

interface SystemLayer {
  id: string;
  name: string;
  role: string;
  tech: string[];
  protocol: string;
  metric: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderColor: string;
  bgGlow: string;
}

const systemLayers: SystemLayer[] = [
  {
    id: 'frontend',
    name: 'Frontend Client',
    role: 'Responsive UI & State',
    tech: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    protocol: 'HTTPS · WSS',
    metric: '',
    icon: Layout,
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    bgGlow: 'hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.12)]',
  },
  {
    id: 'backend',
    name: 'Backend Services',
    role: 'API Gateways & Async Logic',
    tech: ['FastAPI', 'Django REST', 'Node.js'],
    protocol: 'REST · JSON-RPC',
    metric: '',
    icon: Server,
    accentColor: 'text-sky-400',
    borderColor: 'border-sky-500/30',
    bgGlow: 'hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.12)]',
  },
  {
    id: 'database',
    name: 'Persistence & Cache',
    role: 'Relational & Vector Stores',
    tech: ['PostgreSQL', 'MongoDb', 'Redis', 'Vector Stores'],
    protocol: 'Pool · ACID',
    metric: '',
    icon: Database,
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    bgGlow: 'hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.12)]',
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure & Mesh',
    role: 'Containerization & Routing',
    tech: ['Docker', 'Kubernetes', 'Nginx'],
    protocol: 'mTLS · Ingress',
    metric: '',
    icon: Container,
    accentColor: 'text-indigo-400',
    borderColor: 'border-indigo-500/30',
    bgGlow: 'hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.12)]',
  },
  {
    id: 'ai',
    name: 'AI & Agent Workflows',
    role: 'Autonomous Workflows & Inference',
    tech: ['Agent State Machines', 'Vector Retrieval', 'Model Serving'],
    protocol: 'Triton vllm_backend',
    metric: '',
    icon: Bot,
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    bgGlow: 'hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.12)]',
  },
];

export const SystemArchitectureVisual: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  // Cycle active telemetry packet through layers gently
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveLayerIndex((prev) => (prev + 1) % systemLayers.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="relative w-full max-w-md mx-auto p-5 rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md shadow-2xl">
      {/* Top Header Label */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 font-mono text-[11px]">
        <div className="flex items-center gap-2 text-neutral-400">
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="tracking-wider uppercase font-semibold text-neutral-300">
            System Topology
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>PIPELINE HEALTHY</span>
        </div>
      </div>

      {/* Stack Layers */}
      <div className="space-y-2">
        {systemLayers.map((layer, index) => {
          const Icon = layer.icon;
          const isPulseActive = activeLayerIndex === index;

          return (
            <React.Fragment key={layer.id}>
              {/* Layer Card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative p-2.5 sm:p-3 rounded-xl border transition-all duration-300 ${
                  isPulseActive
                    ? `${layer.borderColor} bg-neutral-900/90 shadow-md`
                    : 'border-white/5 bg-neutral-900/40 hover:bg-neutral-900/70'
                } ${layer.bgGlow}`}
              >
                <div className="flex items-center justify-between gap-3">
                  {/* Left: Icon & Layer Name */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-lg bg-neutral-950 border border-white/10 flex items-center justify-center flex-shrink-0 transition-colors ${
                        isPulseActive ? layer.accentColor : 'text-neutral-400 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs font-semibold text-white tracking-wide truncate">
                          {layer.name}
                        </span>
                        {isPulseActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 font-sans truncate">
                        {layer.role}
                      </p>
                    </div>
                  </div>

                  {/* Right: Protocol / Metric Pill */}
                  <div className="flex flex-col items-end flex-shrink-0 font-mono text-[10px]">
                    <span className="text-neutral-300 bg-neutral-950 px-1.5 py-0.5 rounded border border-white/5">
                      {layer.protocol}
                    </span>
                    <span className={`text-[9px] mt-0.5 ${layer.accentColor}`}>
                      {layer.metric}
                    </span>
                  </div>
                </div>

                {/* Sub-technologies strip */}
                <div className="mt-1.5 pt-1.5 border-t border-white/5 flex flex-wrap items-center gap-1">
                  {layer.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded text-[9.5px] font-mono bg-neutral-950/70 text-neutral-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Connecting Down Arrow / Flow Indicator (Between layers) */}
              {index < systemLayers.length - 1 && (
                <div className="flex items-center justify-center py-0.5">
                  <div className="relative flex items-center justify-center">
                    <div className="w-[1px] h-3 bg-neutral-800" />
                    <ArrowDown
                      className={`w-3 h-3 absolute transition-colors duration-300 ${
                        isPulseActive ? 'text-cyan-400 animate-bounce' : 'text-neutral-600'
                      }`}
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
        <span>ARCHITECTURE // FULL STACK + GENAI</span>
        <span className="text-neutral-400">LATENCY PROFILE: OPTIMIZED</span>
      </div>
    </div>
  );
};
