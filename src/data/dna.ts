import { DnaDomainNode } from '../types';

/**
 * =======================================================================
 * BEWIN FELIX R A — REAL ENGINEERING DNA CONSTELLATION GRAPH
 * Mapping core competencies across Cybersecurity, AI Serving & Full-Stack
 * =======================================================================
 */

export const engineeringDnaNodes: DnaDomainNode[] = [
  {
    id: 'agentic-ai',
    name: 'Agentic AI & Autonomous Systems',
    label: 'AGENTIC AI SYSTEMS',
    x: 48,
    y: 18,
    size: 58,
    color: '#00f0ff', // Cyber Cyan
    summary: 'Constructing stateful agent architectures with LangGraph, cyclic reasoning loops, tool-calling pipelines, RAG synthesis, and deterministic guardrails.',
    technologies: ['LangGraph', 'LangChain', 'Agentic Workflows', 'Tool Calling', 'State Machines', 'Advanced RAG', 'Guardrails AI'],
    timelineEra: 'SIH 2024 Agent → Infosys Specialist Programmer → Present',
    philosophy: 'Moving beyond passive prompt-response to autonomous goal-directed agents requires rigorous state machine discipline, reflection loops, and deterministic bounds.',
    connections: ['ai-serving', 'backend', 'devops']
  },
  {
    id: 'ai-serving',
    name: 'AI Platforms & LLM Serving',
    label: 'AI & LLM SERVING',
    x: 52,
    y: 44,
    size: 54,
    color: '#38bdf8', // Sky
    summary: 'Orchestrating high-throughput model inference using Triton Inference Server, vLLM continuous batching, RAG architectures, and Guardrails AI moderation.',
    technologies: ['vLLM', 'Triton Server', 'Open WebUI', 'FastAPI', 'RAG', 'PagedAttention', 'Graylog'],
    timelineEra: 'chat.karunya.edu → SIH 2024 → Present',
    philosophy: 'Serving AI at scale is an infrastructure discipline. Low latency requires PagedAttention, smart batching, and strict deterministic guardrails.',
    connections: ['agentic-ai', 'backend', 'security', 'devops']
  },
  {
    id: 'security',
    name: 'Cybersecurity & Forensics',
    label: 'SECURITY & FORENSICS',
    x: 78,
    y: 32,
    size: 54,
    color: '#a855f7', // Purple
    summary: 'Network protocol inspection, DNS threat intelligence, volatile memory forensics, and automated firewall policy synthesis.',
    technologies: ['Zeek', 'Unbound DNS', 'PCAP Analysis', 'Volatility', 'Intel NUC', 'ECC Crypto', 'iptables'],
    timelineEra: 'SIH 2023 Grand Finale → Kavach 2023 Grand Finale → TN-Police Finalist',
    philosophy: 'Security is not an afterthought or an add-on library; it is about verifiable network topology and cryptographic integrity.',
    connections: ['ai-serving', 'backend', 'devops']
  },
  {
    id: 'backend',
    name: 'Backend Architecture',
    label: 'BACKEND ARCHITECTURE',
    x: 20,
    y: 42,
    size: 52,
    color: '#818cf8', // Indigo
    summary: 'Building high-reliability REST APIs, microservices, and database schemas with Django REST Framework, FastAPI, and Node.js.',
    technologies: ['Django', 'Django REST Framework', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker'],
    timelineEra: 'CodeTutor → Smart Karunya → Enterprise Engines',
    philosophy: 'A robust backend enforces data integrity at the database layer and provides clean, contract-driven APIs for any client.',
    connections: ['agentic-ai', 'ai-serving', 'security', 'frontend', 'databases']
  },
  {
    id: 'databases',
    name: 'Databases & Persistence',
    label: 'DATABASES & STORAGE',
    x: 74,
    y: 68,
    size: 50,
    color: '#06b6d4', // Cyan
    summary: 'Relational data modeling with PostgreSQL, document storage with MongoDB, indexing, and ACID transaction consistency.',
    technologies: ['PostgreSQL', 'MongoDB', 'SQL', 'Schema Migrations', 'Vector Stores'],
    timelineEra: '2022 → 2024 → Present',
    philosophy: 'Applications change frequently, but data outlives software. Clear schema normalization and proper indexing dictate system longevity.',
    connections: ['backend', 'security', 'ai-serving']
  },
  {
    id: 'frontend',
    name: 'Frontend & App Systems',
    label: 'FRONTEND & CLIENT APPS',
    x: 24,
    y: 72,
    size: 50,
    color: '#ec4899', // Pink
    summary: 'Crafting responsive, high-performance interfaces using React JS, Tailwind CSS, Open WebUI integrations, React Native, and Electron.',
    technologies: ['React JS', 'Tailwind CSS', 'Open WebUI', 'React Native', 'ElectronJS', 'Chakra UI'],
    timelineEra: '2022 → beta.karunya.edu → Present',
    philosophy: 'The interface is where human intention meets computational power. Clean aesthetics, accessibility, and zero lag are non-negotiable.',
    connections: ['backend', 'ai-serving', 'agentic-ai']
  },
  {
    id: 'devops',
    name: 'DevOps & Observability',
    label: 'DEVOPS & OBSERVABILITY',
    x: 48,
    y: 78,
    size: 52,
    color: '#10b981', // Emerald
    summary: 'Containerization with Docker, reverse proxies with Nginx, centralized telemetry with Graylog, and real-time dashboards with Grafana.',
    technologies: ['Docker', 'Nginx', 'Graylog', 'Grafana', 'Git', 'Linux Shell', 'JupyterHub'],
    timelineEra: 'KHacks Lead → SIH 2023 → chat.karunya.edu',
    philosophy: 'If you cannot measure it in real-time, you cannot keep it reliable. Observability and reproducible containers are foundational.',
    connections: ['agentic-ai', 'ai-serving', 'security', 'backend']
  }
];
