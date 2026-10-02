export interface EngineeringProcessStep {
  id: string;
  stepNumber: string;
  phase: string;
  title: string;
  principle: string;
  projectExamples: {
    project: string;
    detail: string;
    badge?: string;
  }[];
  keyTakeaway: string;
}

export interface EngineeringProcessData {
  title: string;
  subtitle: string;
  steps: EngineeringProcessStep[];
}

export const engineeringProcessData: EngineeringProcessData = {
  title: 'How I Approach Engineering Problems',
  subtitle: 'A systematic, four-step engineering cycle grounded in real constraints, architectural decoupling, resilient failure testing, and measurable outcomes.',
  steps: [
    {
      id: 'constraints',
      stepNumber: '01',
      phase: 'Understand Constraints',
      title: 'Define Boundaries Before Writing Code',
      principle: 'Clarify hardware limits, latency SLAs, data privacy requirements, and resource boundaries upfront rather than patching them in production.',
      projectExamples: [
        {
          project: 'chat.karunya.edu',
          badge: 'Campus AI',
          detail: 'Constrained by on-premise GPU VRAM capacity and institutional privacy protocols strictly forbidding external API data transmission.',
        },
        {
          project: 'SIH DNS Threat Filter',
          badge: 'SIH Finalist',
          detail: 'Enforced a strict sub-5ms lookup latency SLA so packet analysis never added perceptible delay to client web browsing.',
        },
        {
          project: 'CodeTutor Sandbox',
          badge: 'Lab Platform',
          detail: 'Hard resource limits (256MB RAM / 5s CPU execution cap) required to safely execute untrusted student submissions.',
        },
      ],
      keyTakeaway: 'A clear boundary definition eliminates 80% of downstream architecture rework.',
    },
    {
      id: 'design',
      stepNumber: '02',
      phase: 'Design the System',
      title: 'Decouple Responsibilities & Contract Interfaces',
      principle: 'Structure systems into modular, asynchronously decoupled components with clean data contracts and appropriate caching layers.',
      projectExamples: [
        {
          project: 'chat.karunya.edu',
          badge: 'Triton + vLLM',
          detail: 'Decoupled Open WebUI frontend from a FastAPI moderation layer and Triton Inference Server with vLLM PagedAttention continuous batching for 4x higher throughput.',
        },
        {
          project: 'SIH DNS Threat Filter',
          badge: 'Zeek + Unbound',
          detail: 'Unbound DNS caching resolver tapped by Zeek protocol inspection and async Python queues to prevent socket buffer packet drops.',
        },
        {
          project: 'Infosys Enterprise Reporter',
          badge: 'Enterprise Telemetry',
          detail: 'Asynchronous FastAPI aggregation endpoints with PostgreSQL query pooling decoupled from LangGraph stateful report workers.',
        },
      ],
      keyTakeaway: 'Decoupled architectures allow individual components to fail or scale independently without taking down the platform.',
    },
    {
      id: 'failure-modes',
      stepNumber: '03',
      phase: 'Test Failure Modes',
      title: 'Build Deterministic Fallbacks & Sandbox Rails',
      principle: 'Anticipate regressions, edge cases, process crashes, and probabilistic AI hallucinations with defensive fallbacks.',
      projectExamples: [
        {
          project: 'SIH Emergency Sprint',
          badge: 'Grand Finale Crisis',
          detail: 'When the ML model misclassified X.com 6 hours before jury review, built a 3-hour async crawler fallback checking live metadata in <350ms to dynamically override false positives.',
        },
        {
          project: 'CodeTutor Sandboxing',
          badge: 'Security',
          detail: 'Replaced vulnerable in-process execution with isolated Docker containers that safely neutralize fork bombs and while(1) infinite loops.',
        },
        {
          project: 'RAG Endpoint Firewall',
          badge: 'Safety Rails',
          detail: 'Wrapped AI-generated iptables rules with hardcoded port whitelists (22, 53, 443) preventing automated self-lockout.',
        },
      ],
      keyTakeaway: 'Probabilistic systems always require deterministic safety layers in production.',
    },
    {
      id: 'measure',
      stepNumber: '04',
      phase: 'Measure the Outcome',
      title: 'Verify Impact Through Concrete Telemetry',
      principle: 'Confirm production success through measurable throughput, latency profiles, reliability numbers, and user adoption.',
      projectExamples: [
        {
          project: 'chat.karunya.edu',
          badge: '8,000+ Users',
          detail: 'Delivered sub-80ms time-to-first-token with zero recurring API costs, evaluating 500+ student teams in internal SIH hackathons.',
        },
        {
          project: 'SIH DNS Threat Filter',
          badge: 'Top 0.1%',
          detail: 'Achieved 97.4% DGA threat detection accuracy with <5ms clean query overhead, earning National Grand Finale Finalist honors.',
        },
        {
          project: 'Infosys Enterprise Reporter',
          badge: 'Production Tool',
          detail: 'Reduced sprint engineering report turnaround from 4+ hours of manual aggregation to a single automated click.',
        },
      ],
      keyTakeaway: 'Engineering is only complete when verified by production metrics.',
    },
  ],
};
