/**
 * =======================================================================
 * BEWIN FELIX R A — REAL CURRENT STATE: "NOW" DATA
 * Focused purely on Modern AI, Agentic AI Systems, and Full-Stack Engineering
 * =======================================================================
 */

export interface NowItem {
  id: string;
  category: 'BUILDING' | 'EXPLORING' | 'LEARNING';
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: 'ACTIVE SPRINT' | 'PROTOTYPING' | 'RESEARCH';
  progressPercentage: number;
}

export const nowFocusItems: NowItem[] = [
  {
    id: 'now-agentic-state-machines',
    category: 'BUILDING',
    title: 'Autonomous Multi-Agent State Machines',
    subtitle: 'LangGraph, Directed Cyclic Graphs & Self-Correction Loops',
    description: 'Architecting stateful agent topologies where autonomous workers break complex goals into subtasks, execute tools with bounded runtime limits, and evaluate their own output through reflection and critique nodes before committing actions.',
    tags: ['LangGraph', 'Agentic Workflows', 'Self-Correction', 'Tool Calling', 'State Persistence'],
    status: 'ACTIVE SPRINT',
    progressPercentage: 85
  },
  {
    id: 'now-advanced-rag-retrieval',
    category: 'EXPLORING',
    title: 'Hybrid Semantic Retrieval & Context Optimization',
    subtitle: 'Eliminating Hallucinations & Context Dilution in Deep RAG',
    description: 'Investigating multi-stage retrieval pipelines: combining BM25 keyword matching with dense vector embeddings, applying Cross-Encoder re-rankers, and implementing Self-Reflective RAG (CRAG) to verify source relevance before generation.',
    tags: ['Advanced RAG', 'Hybrid Search', 'Cross-Encoders', 'Context Optimization', 'Vector DBs'],
    status: 'PROTOTYPING',
    progressPercentage: 75
  },
  {
    id: 'now-local-inference-serving',
    category: 'LEARNING',
    title: 'Local LLM Inference & High-Throughput Serving',
    subtitle: 'vLLM PagedAttention, GGUF/AWQ & Low-Latency Model Execution',
    description: 'Deepening hands-on mastery of inference engines and quantization techniques (AWQ, GGUF, vLLM continuous batching) to run private, high-speed open-source models locally with optimized KV-cache memory footprints.',
    tags: ['vLLM', 'PagedAttention', 'Quantization (AWQ/GGUF)', 'Local LLMs', 'GPU Memory'],
    status: 'RESEARCH',
    progressPercentage: 70
  }
];

export const competencyMatrix = {
  experiencedWith: [
    { name: 'Python', years: '3+ Years', note: 'Primary daily language for backends, APIs & AI pipelines' },
    { name: 'React JS & Modern Web', years: '2+ Years', note: 'Component architecture, responsive state & UI design' },
    { name: 'Django & Django REST Framework', years: '2+ Years', note: 'Production enterprise APIs, ORM migrations & auth' },
    { name: 'FastAPI & Asynchronous Python', years: '2+ Years', note: 'Ultra-fast async REST microservices & Pydantic validation' },
    { name: 'PostgreSQL & SQL', years: '2+ Years', note: 'Relational data modeling, query optimization & constraints' },
    { name: 'Docker & Containerization', years: '2+ Years', note: 'Containerized microservices & reproducible dev environments' }
  ],
  buildingWith: [
    { name: 'LangGraph & Agentic Graphs', note: 'Cyclic state machines, reflection loops & tool execution' },
    { name: 'Advanced RAG & Vector Stores', note: 'Hybrid sparse/dense retrieval, chunking & semantic search' },
    { name: 'vLLM & Continuous Batching', note: 'High-throughput model serving & PagedAttention memory tuning' },
    { name: 'Triton Inference Server', note: 'Multi-model orchestration, dynamic batching & GPU acceleration' },
    { name: 'Deterministic Guardrails & Telemetry', note: 'Prompt safety, anti-jailbreak filters & Graylog observability' }
  ],
  exploring: [
    { name: 'Autonomous Multi-Agent Collaboration', note: 'Coordinated agent teams with specialized personas & toolsets' },
    { name: 'Model Quantization & Local Serving', note: 'AWQ, GPTQ, GGUF compression & low-latency edge inference' },
    { name: 'Corrective RAG (CRAG) & Graph RAG', note: 'Knowledge graph integration & automated retrieval validation' },
    { name: 'Agent Evaluation & Synthetic Benchmarks', note: 'Automated evaluation datasets & agentic trace debugging' }
  ]
};

export const liveTickerItems = [
  'CURRENT ROLE: Specialist Programmer @ Infosys (August 2025 – Present)',
  'PRIMARY FOCUS: Full Stack Development · Agentic AI Architecture (LangGraph, RAG, vLLM)',
  'AGENTIC RESEARCH: Designing Cyclic State Machines, Multi-Agent Reflection & Autonomous Tool Calling',
  'RETRIEVAL SYSTEMS: Advanced Hybrid RAG, Sparse/Dense Embeddings & Context Re-Ranking',
  'INFERENCE EFFICIENCY: vLLM PagedAttention, Continuous Batching & Local Quantized Models',
  'CORE STACK: Python • React • FastAPI • LangGraph • Django REST • Docker • PostgreSQL',
  'ACCOLADES: National Grand Finale Finalist in SIH 2023 & KAVACH 2023'
];
