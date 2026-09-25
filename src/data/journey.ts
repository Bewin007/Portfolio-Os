import { TimelineChapter } from '../types';

/**
 * =======================================================================
 * BEWIN FELIX R A — REAL DEVELOPMENT JOURNEY TIMELINE
 * From Karunya CS & National Hackathons to Infosys Specialist Programmer
 * =======================================================================
 */

export const journeyChapters: TimelineChapter[] = [
  {
    id: 'year-01',
    year: '2021',
    phase: 'GENESIS & NETWORKS',
    title: 'Discovery, Computer Networks & Foundational Vision',
    subtitle: 'From Subnet Calculations to Computer Vision Pipelines',
    era: '2021 — 2022 [Karunya University]',
    story: `Began B.Tech Computer Science and Engineering at Karunya Institute of Technology and Sciences. Immersed early in Python scripting, core algorithm complexity, and networking protocols. Completed a Python Programmer Internship at CISCO, writing algorithms to validate IPv4 and IPv6 subnet masks, prefix lengths, and network broadcast boundaries. Concurrently built an OpenCV and TensorFlow workout posture tracker.`,
    learningFocus: [
      'IPv4 / IPv6 Subnetting & Network CIDR Mask Validation (Cisco)',
      'Core Python Programming & Automation',
      'Computer Vision Basics with OpenCV & TensorFlow (Pose Estimation)',
      'Data Structures & Algorithmic Foundations (Big-O)',
      'Object-Oriented Programming & Linux Environment Fluency'
    ],
    whatWasBuilt: [
      {
        name: 'CISCO Subnet & Address Validator Suite',
        description: 'Engineered Python functions validating IPv4/IPv6 addresses, subnet ranges, and broadcast bounds under strict networking constraints.',
        tech: ['Python', 'Networking', 'IPv4/IPv6', 'Cisco']
      },
      {
        name: 'Computer Vision Workout Rep Tracker',
        description: 'Applied OpenCV and TensorFlow pose estimation to automatically detect push-ups, pull-ups, and squats with real-time repetition counting.',
        tech: ['Python', 'OpenCV', 'TensorFlow', 'Tkinter']
      }
    ],
    technologiesEncountered: ['Python', 'Cisco Networking', 'IPv4/IPv6', 'OpenCV', 'TensorFlow', 'Git', 'Linux Basics'],
    keyChallenges: 'Handling complex bitwise subnet calculations across varying IPv6 prefix boundaries and stabilizing noisy camera coordinates in pose estimation.',
    lessonLearned: 'Solid fundamentals in computer networks and systems make high-level application development significantly more intuitive.',
    visualTheme: {
      accentColor: '#38bdf8',
      badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      borderAccent: 'border-sky-500/30',
      diagramType: 'circuit'
    }
  },
  {
    id: 'year-02',
    year: '2022',
    phase: 'CYBERSECURITY & COMMUNITY',
    title: 'Digital Forensics, Web3 & Tech Community Leadership',
    subtitle: 'KAVACH 2023 Grand Finale Finalist & KHacks Leadership',
    era: '2022 — 2023 [Karunya University]',
    story: `Evolved from individual scripting into national competitive hackathons and campus technical leadership. Stepped up as Head of App and Web Development for KHacks Karunya, conducting workshops on Docker, Git, and Tableau for 250+ students. Selected as National Grand Finale Finalist from 3,800 teams in KAVACH 2023 (Cybersecurity Hackathon conducted by AICTE & Ministry of Education, Govt of India) in Odisha, engineering a portable hardware forensic suite on an Intel NUC.`,
    learningFocus: [
      'Digital Forensics: Volatile RAM inspection (Volatility) & Disk carving',
      'Community Workshop Leadership & Mentoring Hackathon Teams',
      'Decentralized Messaging & Web3 Architecture (Teachnook)',
      'Event Organization: Stackmasters in Mindkraft (500+ participants)',
      'Docker Containerization for Reproducible Environments'
    ],
    whatWasBuilt: [
      {
        name: 'Hardware Forensic Suite (Kavach 2023 Grand Finale Finalist)',
        description: 'A portable, virtualized Intel NUC hardware unit executing memory, disk, and network forensics with automated court-admissible PDF reports.',
        tech: ['Intel NUC', 'Python', 'Volatility', 'TShark', 'Linux'],
        projectId: 'hardware-forensic-suite'
      },
      {
        name: 'Web3 Decentralized Chat Prototype',
        description: 'Developed during Web Developer Internship at Teachnook exploring peer-to-peer and blockchain-backed messaging channels.',
        tech: ['JavaScript', 'Web3', 'Node.js', 'React']
      }
    ],
    technologiesEncountered: ['Docker', 'Digital Forensics', 'Intel NUC', 'React', 'Node.js', 'Tableau', 'Linux Forensics'],
    keyChallenges: 'Preserving strict bitstream evidence integrity on compact hardware without triggering thermal throttling during raw memory dumps.',
    lessonLearned: 'Explaining technology to 250+ students in workshops forced me to master concepts far more deeply than just reading documentation.',
    visualTheme: {
      accentColor: '#818cf8',
      badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      borderAccent: 'border-indigo-500/30',
      diagramType: 'stack'
    }
  },
  {
    id: 'year-03',
    year: '2023',
    phase: 'NATIONAL FINALIST & SCALE',
    title: 'Smart India Hackathon Finalist & Campus Web Engineering',
    subtitle: 'Selected in Top 0.1% of India (SIH 2023) & TN-Police Finalist',
    era: '2023 — 2024 [Karunya University]',
    story: `A pivotal milestone year. Selected as National Grand Finale Finalist from 44,000 teams across India in Smart India Hackathon (SIH) 2023 (conducted by AICTE and Ministry of Education, Govt of India) in Gujarat, engineering an AI/ML DNS Filtering Service with Zeek and Unbound DNS. Selected as Grand Finale Finalist in TN-Police 2023 from 300 state teams in Chennai. Worked as Web Developer in Karunya Computer Technology Center contributing to Smart Karunya and official campus portals.`,
    learningFocus: [
      'Real-Time PCAP Packet Capture & Deep Protocol Analysis (Zeek)',
      'Recursive DNS Resolvers & Dynamic Sinkhole Policies (Unbound)',
      'Enterprise Backend Development with Django & Django REST Framework',
      'Database Modeling & Index Optimization in PostgreSQL',
      'Production Content Management Systems (Drupal) & Code-Server integration'
    ],
    whatWasBuilt: [
      {
        name: 'AI DNS Threat Filtering Platform (SIH 2023 Grand Finale Finalist)',
        description: 'DNS packet filter analyzing threat intelligence feeds and DGA domain entropy in real time with Grafana visualization.',
        tech: ['Python', 'Zeek', 'Unbound DNS', 'Django REST', 'Grafana'],
        projectId: 'sih-dns-filter'
      },
      {
        name: 'Translation of Book PDF (Google Solution Challenge)',
        description: 'Web-based e-library platform parsing PDF books and integrating the Gemini API for live multi-language reading.',
        tech: ['Django REST', 'React', 'Gemini API', 'PostgreSQL']
      }
    ],
    technologiesEncountered: ['Zeek', 'Unbound DNS', 'Django REST', 'PostgreSQL', 'Grafana', 'Drupal', 'Gemini API', 'Docker'],
    keyChallenges: 'Analyzing thousands of live DNS packet streams without introducing perceptible network latency on high-speed internet backbones.',
    lessonLearned: 'Building for national competitions teaches you that code elegance is useless if the system cannot survive sudden edge-case input floods.',
    visualTheme: {
      accentColor: '#2dd4bf',
      badgeBg: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
      borderAccent: 'border-teal-500/30',
      diagramType: 'distributed'
    }
  },
  {
    id: 'year-04',
    year: '2024',
    phase: 'CAMPUS AI & CAPSTONE',
    title: 'University LLM Deployment & RAG Security Agents',
    subtitle: 'chat.karunya.edu, SIH 2024 College Finalist & CodeTutor Platform',
    era: '2024 — 2025 [Final Year Capstone]',
    story: `Final year centered on high-impact institutional infrastructure and modern generative AI architectures. Spearheaded chat.karunya.edu—the university\'s private ChatGPT-style platform running on Triton Inference Server with vLLM PagedAttention and Graylog telemetry. Selected as SIH 2024 College-Level Finalist with a RAG-driven endpoint firewall agent. Built CodeTutor, successfully deploying it in production in an actual lab of 70 students for automated evaluation and viva conduction.`,
    learningFocus: [
      'High-Throughput LLM Model Serving (vLLM, Triton Inference Server)',
      'Guardrails AI & Moderation Pipelines in Institutional Environments',
      'Retrieval-Augmented Generation (RAG) for Automated Firewall Policy Synthesis',
      'Sandboxed Docker Code Execution & Automated Test Verification',
      'Elliptic-Curve Cryptography (ECC) for Enhanced Electronic Health Records'
    ],
    whatWasBuilt: [
      {
        name: 'chat.karunya.edu (Official Campus AI Platform)',
        description: 'Enterprise private AI platform for Karunya University using Open WebUI, Triton + vLLM serving, and Graylog observability.',
        tech: ['vLLM', 'Triton Server', 'FastAPI', 'Open WebUI', 'Graylog'],
        projectId: 'chat-karunya'
      },
      {
        name: 'RAG Endpoint Firewall Agent (SIH 2024 College Finalist)',
        description: 'Lightweight endpoint security daemon using RAG to dynamically generate hardened firewall policies against zero-day anomalies.',
        tech: ['Python', 'FastAPI', 'RAG', 'iptables', 'React'],
        projectId: 'sih-2024-firewall'
      },
      {
        name: 'CodeTutor (Lab Management & Evaluation Platform)',
        description: 'Comprehensive academic lab platform deployed in a real lab of 70 students, automating viva examinations and batch grading.',
        tech: ['Django REST', 'React', 'PostgreSQL', 'Docker'],
        projectId: 'codetutor'
      }
    ],
    technologiesEncountered: ['vLLM', 'Triton Inference Server', 'FastAPI', 'LangGraph & RAG', 'Open WebUI', 'Graylog', 'ECC Cryptography'],
    keyChallenges: 'Balancing GPU memory footprints during concurrent class lab sessions and preventing autonomous AI agents from hallucinating system commands.',
    lessonLearned: 'Generative AI is only as good as the software architecture surrounding it. Observability, guardrails, and deterministic fallbacks are non-negotiable.',
    visualTheme: {
      accentColor: '#00f0ff',
      badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      borderAccent: 'border-cyan-500/40',
      diagramType: 'ai-mesh'
    }
  },
  {
    id: 'now-chapter',
    year: '2025 – PRESENT',
    phase: 'INDUSTRY & AGENTIC AI',
    title: 'Specialist Programmer at Infosys & Agentic Systems',
    subtitle: 'From Karunya CS Graduate to Enterprise Engineering & Agentic AI',
    era: 'August 2025 — PRESENT [Infosys Specialist Programmer]',
    story: `Graduated with B.Tech Computer Science and joined Infosys as a Specialist Programmer in August 2025. Bridging solid enterprise development with cutting-edge Agentic AI engineering: building internal telemetry dashboards and automated report engines, autonomous workflows using LangGraph, multi-agent reflection loops, RAG knowledge bases, and scalable full-stack architectures. Focused on high-impact engineering that automates complex human workflows.`,
    learningFocus: [
      'Enterprise Engineering at Scale (Specialist Programmer, Infosys Aug 2025 – Present)',
      'Agentic Workflows & Multi-Agent Coordination with LangGraph',
      'Advanced RAG, Vector Stores & Local Inference Engines',
      'Production Observability, Guardrails & Deterministic Fallbacks',
      'Full Stack Developer & Agentic AI Engineering Excellence'
    ],
    whatWasBuilt: [
      {
        name: 'InterviewBot ("Rachel")',
        description: 'Interactive AI-powered mock interview bot leveraging fine-tuned open-source LLMs to evaluate resume alignment and confidence.',
        tech: ['Python', 'FastAPI', 'Fine-Tuned LLM', 'React'],
        projectId: 'interviewbot-rachel'
      },
      {
        name: 'Autonomous Agentic Workflow Pipelines',
        description: 'Exploring LangGraph cyclic state machines and multi-agent coordination for complex automated reasoning.',
        tech: ['LangGraph', 'Python', 'RAG', 'Vector DB']
      }
    ],
    technologiesEncountered: ['LangGraph', 'LangChain', 'vLLM', 'FastAPI', 'Docker', 'RAG', 'Next.js', 'Enterprise Full Stack'],
    keyChallenges: 'Designing systems that gracefully bridge probabilistic AI capabilities with strict, deterministic software reliability.',
    lessonLearned: 'The most rewarding engineering journey is one that consistently solves real human friction and never stops questioning assumptions.',
    visualTheme: {
      accentColor: '#10b981',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      borderAccent: 'border-emerald-500/30',
      diagramType: 'cluster'
    }
  }
];
