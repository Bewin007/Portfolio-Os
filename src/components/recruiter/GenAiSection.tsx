import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Bot, 
  Workflow, 
  Search, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  GitBranch, 
  Sparkles, 
  Database, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { sounds } from '../../utils/audio';

interface AgentStep {
  id: string;
  name: string;
  role: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}

const agentWorkflowSteps: AgentStep[] = [
  {
    id: 'goal',
    name: 'User Goal',
    role: 'Intent & Task Ingestion',
    detail: 'Natural language query or scheduled telemetry trigger',
    icon: Sparkles,
    accent: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40',
  },
  {
    id: 'agent',
    name: 'Agent Core',
    role: 'LangGraph State Machine',
    detail: 'Cyclic graph holding conversation state, context & history',
    icon: Bot,
    accent: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/40',
  },
  {
    id: 'planning',
    name: 'Planning',
    role: 'Decomposition & Critique',
    detail: 'Breaks complex tasks into bounded sequential sub-steps',
    icon: GitBranch,
    accent: 'text-purple-400 border-purple-500/30 bg-purple-950/40',
  },
  {
    id: 'tools',
    name: 'Tools',
    role: 'Bounded Action Execution',
    detail: 'Sandboxed Python runners, SQL executors, REST connectors',
    icon: Workflow,
    accent: 'text-amber-400 border-amber-500/30 bg-amber-950/40',
  },
  {
    id: 'retrieval',
    name: 'Retrieval',
    role: 'Hybrid RAG & Milvus Vector DB',
    detail: 'BM25 + Milvus dense vector embeddings with Cross-Encoder reranking',
    icon: Search,
    accent: 'text-sky-400 border-sky-500/30 bg-sky-950/40',
  },
  {
    id: 'llm',
    name: 'LLM Engine',
    role: 'Triton vLLM + Guardrails',
    detail: 'Multi-GPU 4x L40S inference engine with NeMo Guardrails',
    icon: Cpu,
    accent: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40',
  },
  {
    id: 'result',
    name: 'Structured Result',
    role: 'Validated Pydantic Schema',
    detail: 'Deterministic output schema with fallback guardrail checks',
    icon: ShieldCheck,
    accent: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40',
  },
];

interface AiConcept {
  title: string;
  subtitle: string;
  description: string;
  keyTech: string[];
  realWorldProject: string;
  projectBadge: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const aiConcepts: AiConcept[] = [
  {
    title: 'Autonomous Multi-Agent State Machines',
    subtitle: 'Cyclic Reasoning Loops & Stateful Graphs',
    description:
      'Moving past simple chain-of-thought prompt pipelines to architecting cyclic state machines in LangGraph. Implements critique nodes, self-reflection loops, checkpointing, and human-in-the-loop approvals.',
    keyTech: ['LangGraph', 'StateGraph', 'Reflection Loops', 'Checkpointing'],
    realWorldProject: 'RAG Endpoint Firewall Agent — Multi-node state graph evaluating vulnerability contexts and validating firewall policies.',
    projectBadge: 'Security State Machine',
    icon: Bot,
    accentColor: 'text-purple-400',
  },
  {
    title: 'Hybrid Semantic Retrieval & RAG',
    subtitle: 'Context Optimization & Hallucination Suppression',
    description:
      'Production RAG combining sparse lexical search (BM25) with dense vector embeddings using Milvus. Uses Cross-Encoder re-rankers and Corrective RAG (CRAG) to discard irrelevant context before LLM ingestion.',
    keyTech: ['Hybrid Search', 'Milvus', 'Cross-Encoders', 'CRAG', 'BM25'],
    realWorldProject: 'RAG Endpoint Firewall Agent — Semantic indexing of CVEs to synthesize hardened Linux iptables rules.',
    projectBadge: 'SIH Finalist',
    icon: Search,
    accentColor: 'text-sky-400',
  },
  {
    title: 'High-Throughput Inference Serving',
    subtitle: 'Triton vLLM Backend & NeMo Guardrails',
    description:
      'Deploying open-source LLaMA models on multi-GPU 4x L40S infrastructure using Triton Inference Server with vllm_backend. Implemented NeMo Guardrails for safety and policy constraints alongside continuous batching for campus-wide concurrent user workloads.',
    keyTech: ['Triton vllm_backend', '4x L40S GPUs', 'NeMo Guardrails', 'LLaMA Models', 'Open WebUI'],
    realWorldProject: 'sofie(Chatbot) — Campus-wide on-premise AI platform serving 8,000+ university students & faculty.',
    projectBadge: 'Campus AI Production',
    icon: Cpu,
    accentColor: 'text-emerald-400',
  },
  {
    title: 'Tool Calling & Deterministic Guardrails',
    subtitle: 'Pydantic Schemas & Sandboxed Execution',
    description:
      'Enforcing strict typing on probabilistic AI systems. Connecting LLM tool-calling APIs with deterministic Pydantic schema validation, sandboxed execution containers, and automated fallback policies to eliminate unsafe system commands.',
    keyTech: ['Structured Outputs', 'NeMo Guardrails', 'Judge0 Engine', 'Pydantic'],
    realWorldProject: 'CodeTutor & Firewall Agent — Multi-language evaluation via Judge0 (Python, C, C++, Java) and deterministic port-whitelist guarantees.',
    projectBadge: 'Evaluator & Rails',
    icon: ShieldCheck,
    accentColor: 'text-cyan-400',
  },
];

export const GenAiSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedStep, setSelectedStep] = useState<string>('agent');

  return (
    <section id="genai" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-400 uppercase tracking-widest mb-2">
          <Bot className="w-3.5 h-3.5" />
          <span>Frontier Engineering</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Exploring AI Engineering
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl font-sans">
          Engineering beyond basic prompting. Building autonomous agent state machines, hybrid retrieval pipelines, and high-throughput inference infrastructure.
        </p>
      </div>

      {/* Visual Pipeline / Workflow Flowchart */}
      <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-neutral-950/80 border border-white/10 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10 font-mono text-xs">
          <div>
            <span className="text-neutral-400 uppercase tracking-wider block sm:inline">
              Workflow Architecture:
            </span>{' '}
            <span className="text-cyan-400 font-semibold">
              Autonomous Agent Reasoning & Execution Loop
            </span>
          </div>
          <span className="text-neutral-500 text-[11px]">
            CLICK ANY NODE TO INSPECT SUBSYSTEM
          </span>
        </div>

        {/* The 7-Step Workflow Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
          {agentWorkflowSteps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = selectedStep === step.id;

            return (
              <button
                key={step.id}
                onClick={() => {
                  sounds.playBlip(700 + idx * 40, 0.02);
                  setSelectedStep(step.id);
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? `${step.accent} ring-1 ring-cyan-400/50 shadow-lg scale-[1.02]`
                    : 'border-white/5 bg-neutral-900/50 hover:bg-neutral-900/80 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-neutral-500 font-bold">
                      0{idx + 1}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-300" />
                  </div>
                  <div className="font-mono text-xs font-bold text-white mb-1">
                    {step.name}
                  </div>
                </div>
                <div className="text-[10.5px] text-neutral-400 font-sans leading-tight mt-2">
                  {step.role}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Telemetry Banner */}
        {(() => {
          const current = agentWorkflowSteps.find((s) => s.id === selectedStep) || agentWorkflowSteps[1];
          const Icon = current.icon;
          return (
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-neutral-950 border border-white/10 text-cyan-400">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-white flex items-center gap-2">
                    <span>{current.name}</span>
                    <span className="text-neutral-500">—</span>
                    <span className="text-cyan-300 font-normal">{current.role}</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-sans mt-0.5">
                    {current.detail}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-lg border border-white/5 flex-shrink-0">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>ACTIVE STATE GRAPH</span>
              </div>
            </div>
          );
        })()}
      </div>

      {/* 4 Deep-Dive AI Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aiConcepts.map((concept, idx) => {
          const Icon = concept.icon;
          return (
            <motion.div
              key={concept.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-7 rounded-3xl bg-neutral-950/70 border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2.5 rounded-xl bg-neutral-900 border border-white/10 ${concept.accentColor}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-neutral-400 tracking-wider">
                      AI PILLAR // 0{idx + 1}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-950/50 border border-purple-500/20 text-purple-300">
                    {concept.projectBadge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {concept.title}
                </h3>
                <div className="text-xs font-mono text-neutral-400 mb-3">
                  {concept.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-6">
                  {concept.description}
                </p>
              </div>

              <div>
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {concept.keyTech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-neutral-900 text-neutral-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Real-World Production Connection */}
                <div className="p-3 rounded-xl bg-neutral-900/50 border border-white/5 text-xs font-sans text-neutral-400 flex items-start gap-2">
                  <Layers className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-neutral-200 font-semibold font-mono text-[11px] block">
                      Production Connection:
                    </span>
                    <span>{concept.realWorldProject}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
