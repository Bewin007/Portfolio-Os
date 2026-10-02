import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Clock, Target, Server, Layout, Container, Bot, CheckCircle } from 'lucide-react';

interface SnapshotMetric {
  label: string;
  value: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}

const snapshotData: SnapshotMetric[] = [
  {
    label: 'Experience',
    value: '1+ Year',
    detail: 'August 2025 – Present (Infosys)',
    icon: Clock,
    accent: 'text-emerald-400',
  },
  {
    label: 'Focus',
    value: 'Full-Stack & GenAI',
    detail: 'End-to-End Enterprise Systems',
    icon: Target,
    accent: 'text-cyan-400',
  },
  {
    label: 'Backend',
    value: 'Django · FastAPI · Node.js',
    detail: 'RESTful APIs, Async I/O, Python',
    icon: Server,
    accent: 'text-sky-400',
  },
  {
    label: 'Frontend',
    value: 'React · TypeScript',
    detail: 'Responsive SPAs, Modern UI State',
    icon: Layout,
    accent: 'text-indigo-400',
  },
  {
    label: 'Infrastructure',
    value: 'Docker · Kubernetes · Nginx',
    detail: 'Containerization, Linux OS, CI/CD',
    icon: Container,
    accent: 'text-purple-400',
  },
  {
    label: 'AI & Agents',
    value: 'LLMs · RAG · LangChain · LangGraph',
    detail: 'vLLM, Triton Serving, Guardrails',
    icon: Bot,
    accent: 'text-amber-400',
  },
];

export const ProfessionalSnapshot: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950/70 border border-white/10 backdrop-blur-md">
        {/* Currently Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase tracking-widest text-neutral-400">Current Position</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex flex-wrap items-center gap-2 sm:gap-3">
              <span>Infosys</span>
              <span className="text-neutral-500 font-light hidden sm:inline">—</span>
              <span className="text-emerald-400 font-mono text-xl sm:text-2xl font-semibold">
                Specialist Programmer
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900/80 px-3 py-1.5 rounded-xl border border-white/5 w-fit">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Active Full-Time Engineering</span>
          </div>
        </div>

        {/* Compact 6-Item Technical Snapshot Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {snapshotData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/15 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
                    {item.label}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-neutral-950 border border-white/5 ${item.accent}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-base font-semibold text-white font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.value}
                </div>
                <div className="text-xs text-neutral-400 font-sans mt-1">
                  {item.detail}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
