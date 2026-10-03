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
    phase: 'COMMUNITY LEADERSHIP & DIGITAL FORENSICS',
    title: 'KHacks Leadership, State Hackathons & Lab Exploration',
    subtitle: 'Joined KHacks July 2022 · TN Police Hackathon March 2023 · Summer Intern',
    era: '2022 — 2023 [Karunya University & KHacks]',
    story: `Evolved rapidly into campus technical leadership and competitive hackathons. Joined KHacks in July 2022—a student-run organization with the motto "Learn, Build, Compete"—and became a core team member in December 2022. During my tenure, I conducted multiple workshops (2–4 per month with 50–300+ participants based on venue) for students from schools and colleges on Docker, web development, and backend systems. Competed in the Tamil Nadu Police Hackathon in March 2023 (March 28–29, 2023, Team T3tra / Project SocialEye for video forensics). During the 2022–2023 summer internship, explored lab virtualization possibilities and constraints, and initiated the Smart Karunya centralized digital twin (capturing air pollution, weather, soil moisture, and power metrics) with 50 days of documentation and POCs.`,
    learningFocus: [
      'KHacks Core Team Leadership & Conducting 2–4 Technical Workshops Monthly',
      'Docker Containerization & Backend Foundations for 50–300+ Students per Session',
      'OSINT Video Forensics for Law Enforcement (TN Police Hackathon March 2023)',
      'Lab Virtualization Systems & Constraints Exploration (Summer Internship)',
      'Smart Karunya Digital Twin System Architecture (IoT Telemetry POCs)'
    ],
    whatWasBuilt: [
      {
        name: 'Project SocialEye (TN Police Hackathon 2023 State Finalist)',
        description: 'Engineered YouTube OSINT and video forensic analysis platform for cybercrime investigators in Chennai Finals (March 28–29, 2023, Team T3tra).',
        tech: ['Python', 'OpenCV', 'OSINT', 'FastAPI']
      },
      {
        name: 'Smart Karunya Digital Twin POCs (Summer Internship)',
        description: 'Documented architecture and built initial POCs for a centralized campus digital twin tracking air pollution, weather prediction, soil moisture, and power usage.',
        tech: ['IoT Telemetry', 'Python', 'Flask', 'PostgreSQL']
      }
    ],
    technologiesEncountered: ['Docker', 'Python', 'FastAPI', 'OpenCV', 'OSINT', 'Linux', 'PostgreSQL'],
    keyChallenges: 'Conducting high-frequency technical workshops for diverse skill levels while engineering real-time video forensics under intense hackathon deadlines.',
    lessonLearned: 'Teaching hundreds of students forces you to simplify architectures to first principles and builds exceptional communication clarity.',
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
    phase: 'NATIONAL FINALIST & CLUB FOUNDER',
    title: 'KAVACH Finalist, SIH Grand Finale & Club Head',
    subtitle: 'KAVACH Aug 2023 · Founded Web & App Club Aug 2023 · SIH Dec 2023',
    era: '2023 — 2024 [National Competitive Engineering]',
    story: `A landmark year of verified national achievements. Selected as National Grand Finale Finalist out of 3,800 teams in KAVACH 2023 (Cybersecurity Hackathon by AICTE & Ministry of Education, Govt of India) in Odisha in August 2023, building a portable Intel NUC hardware forensic appliance. In August–September 2023, founded and served as Head of the KHacks Web & App Development Club, training 200+ students in modern web engineering and mentoring them into hackathons and internal projects. Actively led teams in Karunya's "Earn While You Learn" scheme on paid internal university software projects. Culminated in Smart India Hackathon (SIH) 2023 in December 2023 (Gujarat Finals), selected as National Grand Finale Finalist out of 44,000 teams for ISRO Problem Statement SIH1524 (Team NetOptics AI DNS Threat Filter).`,
    learningFocus: [
      'National Hackathon Competition (KAVACH August 2023 Odisha & SIH December 2023 Gujarat)',
      'Founding & Leading KHacks Web & App Dev Club: Training 200+ Students',
      'Earn While You Learn Scheme: Leading Teams on Paid Internal University Projects',
      'Real-Time PCAP Packet Capture & Deep Protocol Analysis (Zeek + Unbound DNS)',
      'Hardware Forensics on Intel NUC (Volatility, TShark, Disk Carving)'
    ],
    whatWasBuilt: [
      {
        name: 'AI DNS Threat Filtering Platform (SIH 2023 Grand Finale Finalist · Dec 2023)',
        description: 'ISRO PS SIH1524: Real-time DNS threat inspection with Zeek, Unbound DNS caching, DGA ML detection, and Grafana operations dashboard (Team NetOptics, Gujarat Finals).',
        tech: ['Python', 'Zeek', 'Unbound DNS', 'Django REST', 'Grafana'],
        projectId: 'sih-dns-filter'
      },
      {
        name: 'Hardware Forensic Suite (KAVACH 2023 Grand Finale Finalist · Aug 2023)',
        description: 'Portable Intel NUC appliance for multi-OS memory, disk, and network forensics with automated court-admissible PDF reports (Odisha Finals).',
        tech: ['Intel NUC', 'Python', 'Volatility', 'TShark', 'Linux'],
        projectId: 'hardware-forensic-suite'
      },
      {
        name: 'Earn While You Learn Internal College Projects',
        description: 'Led student development teams delivering production web tools for university administration under Karunya\'s paid student scheme.',
        tech: ['React', 'Django REST', 'PostgreSQL', 'Docker']
      }
    ],
    technologiesEncountered: ['Zeek', 'Unbound DNS', 'Intel NUC', 'Volatility', 'Django REST', 'PostgreSQL', 'Grafana', 'Docker'],
    keyChallenges: 'Engineered an emergency 6-hour asynchronous crawler override at SIH 2023 when the ML model began misclassifying domains right before the jury presentation.',
    lessonLearned: 'Building for national competitions proves that code elegance is useless without defensive fallback mechanisms under unpredictable runtime stresses.',
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
    phase: 'CAMPUS AI & CAPSTONE DEPLOYMENTS',
    title: 'sofie(Chatbot), SIH 2024 Firewall & CodeTutor',
    subtitle: 'Triton vllm_backend on 4x L40S · SIH 2024 Finalist · Mentor Transition Dec 2024',
    era: '2024 — 2025 [Final Year Capstone]',
    story: `Delivered high-concurrency production deployments across Karunya University. Spearheaded sofie(Chatbot)—the campus AI platform running on Triton Inference Server with vllm_backend across a multi-GPU 4x L40S cluster with NeMo Guardrails and Graylog observability, serving 8,000+ students and faculty. Selected as College-Level Finalist in Smart India Hackathon 2024 with the RAG Endpoint Firewall Agent (Team Night\'s Watch / PS 1741). Engineered CodeTutor, successfully deploying it in production in an actual lab of 70 students for automated viva conduction and code evaluation using Judge0 for Python, C, C++, and Java (with an experimental Docker runner prototype for React/Node). In December 2024, stepped down as active club lead to become Mentor, supporting the next generation of KHacks leadership. In Summer 2025, worked as summer intern exploring a complete Drupal portal overhaul (later shelved due to institutional budget reallocation).`,
    learningFocus: [
      'Multi-GPU LLM Inference Serving (Triton Inference Server with vllm_backend on 4x L40S)',
      'NeMo Guardrails & Institutional Policy Rails for Campus-Wide Generative AI',
      'Automated Academic Evaluation via Judge0 (Python, C, C++, Java)',
      'Application-Context Aware Firewall Architecture via Hybrid RAG (SIH 2024 PS 1741)',
      'Leadership Succession: Transitioning from Club Head to Mentor (Dec 2024)'
    ],
    whatWasBuilt: [
      {
        name: 'sofie(Chatbot) — Campus AI Platform',
        description: 'Enterprise on-premise AI platform serving 8,000+ university users using Triton vllm_backend on 4x L40S GPUs with NeMo Guardrails.',
        tech: ['Triton vllm_backend', '4x L40S GPUs', 'NeMo Guardrails', 'Open WebUI', 'Graylog'],
        projectId: 'chat-karunya'
      },
      {
        name: 'RAG Endpoint Firewall Agent (SIH 2024 College Finalist)',
        description: 'Centralized application-context aware firewall daemon using hybrid RAG to generate verified iptables rules against anomalous telemetry (Team Night\'s Watch).',
        tech: ['Python', 'FastAPI', 'RAG', 'Milvus', 'iptables', 'React'],
        projectId: 'sih-2024-firewall'
      },
      {
        name: 'CodeTutor (Lab Management & Evaluation Platform)',
        description: 'Production lab platform deployed for 70 students, evaluating Python, C, C++, and Java submissions via Judge0 with automated viva testing.',
        tech: ['Django REST', 'React', 'Judge0', 'PostgreSQL', 'Docker'],
        projectId: 'codetutor'
      }
    ],
    technologiesEncountered: ['Triton vllm_backend', '4x L40S GPUs', 'NeMo Guardrails', 'Milvus', 'Judge0', 'FastAPI', 'Open WebUI', 'Graylog'],
    keyChallenges: 'Managing continuous batching across 4x L40S GPUs for simultaneous student lab queries and isolating student code evaluations safely via Judge0.',
    lessonLearned: 'Generative AI is only as robust as the software architecture surrounding it. Observability, guardrails, and deterministic fallbacks are non-negotiable.',
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
    phase: 'INDUSTRY & ENTERPRISE ENGINEERING',
    title: 'Specialist Programmer at Infosys',
    subtitle: 'TPD Portal Demand Module & Reporting Engine',
    era: 'August 2025 — PRESENT [Infosys Specialist Programmer]',
    story: `Graduated with B.Tech Computer Science and joined Infosys as a Specialist Programmer in August 2025. Developed the Demand Module for the internal TPD (Talent Planning & Deployment) portal based on requirements from business and delivery teams. Built the frontend using React (TSX) and Recharts for visualizing talent allocations against open skill demands, alongside FastAPI and PostgreSQL backend aggregation APIs for automated demand fulfillment reports. Deployment was coordinated with the platform DevOps team.`,
    learningFocus: [
      'Enterprise Demand & Resource Allocation Modeling (Infosys Specialist Programmer)',
      'Interactive Analytics Engineering with React (TSX) and Recharts',
      'High-Performance Asynchronous REST Endpoints with FastAPI & PostgreSQL',
      'Automated Demand Fulfillment Reporting & Data Reconciliation',
      'Collaborative Enterprise Workflows with Platform DevOps Teams'
    ],
    whatWasBuilt: [
      {
        name: 'Demand Module (TPD Portal)',
        description: 'Engineered dynamic Recharts views visualizing talent allocations against open demands with automated fulfillment reports.',
        tech: ['React (TSX)', 'FastAPI', 'Recharts', 'PostgreSQL'],
        projectId: 'infosys-dashboard-reporter'
      }
    ],
    technologiesEncountered: ['React (TSX)', 'FastAPI', 'Recharts', 'PostgreSQL', 'Python', 'Tailwind CSS'],
    keyChallenges: 'Designing clean SQL aggregation queries across dynamic allocation states adhering strictly to internal enterprise schemas.',
    lessonLearned: 'Building software for enterprise operations requires listening closely to business stakeholders and turning complex workflows into intuitive visual tools.',
    visualTheme: {
      accentColor: '#10b981',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      borderAccent: 'border-emerald-500/30',
      diagramType: 'cluster'
    }
  }
];
