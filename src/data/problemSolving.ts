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
          project: 'sofie(Chatbot)',
          badge: 'Campus AI',
          detail: 'Constrained by on-premise 4x L40S GPU capacity and institutional privacy protocols strictly forbidding external API data transmission.',
        },
        {
          project: 'SIH DNS Threat Filter',
          badge: 'SIH Finalist',
          detail: 'Enforced a strict sub-5ms lookup latency SLA so packet analysis never added perceptible delay to client web browsing.',
        },
        {
          project: 'CodeTutor (Judge0 Engine)',
          badge: 'Lab Platform',
          detail: 'Offloaded student code execution to Judge0 for Python, C, C++, and Java with isolated Docker prototypes for modern stacks.',
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
          project: 'sofie(Chatbot)',
          badge: 'Triton vllm_backend',
          detail: 'Decoupled Open WebUI frontend from NeMo Guardrails moderation and Triton Inference Server with vllm_backend on multi-GPU 4x L40S.',
        },
        {
          project: 'SIH DNS Threat Filter',
          badge: 'Zeek + Unbound',
          detail: 'Unbound DNS caching resolver tapped by Zeek protocol inspection and async Python queues to prevent socket buffer packet drops.',
        },
        {
          project: 'Infosys Demand Analytics Engine',
          badge: 'Enterprise Analytics',
          detail: 'Asynchronous FastAPI aggregation endpoints with PostgreSQL query pooling driving dynamic Recharts visualizations of bench vs. demand talent allocation.',
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
          project: 'CodeTutor Compiler Routing',
          badge: 'Security',
          detail: 'Integrated Judge0 compilation API for Python, C, C++, and Java, isolating student runs from the host application server.',
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
          project: 'sofie(Chatbot)',
          badge: '8,000+ Users',
          detail: 'Eliminated recurring external API costs while serving 8,000+ campus users and evaluating 500+ student teams in internal SIH hackathons on 4x L40S GPUs.',
        },
        {
          project: 'SIH DNS Threat Filter',
          badge: 'Top 0.1%',
          detail: 'Achieved 97.4% DGA threat detection accuracy with <5ms clean query overhead, earning National Grand Finale Finalist honors.',
        },
        {
          project: 'Infosys Demand Analytics Engine',
          badge: 'Demand Analytics',
          detail: 'Automated demand-vs-talent fulfillment reporting across 4–5 analytical views, giving management instant clarity on bench utilization.',
        },
      ],
      keyTakeaway: 'Engineering is only complete when verified by production metrics.',
    },
  ],
};
