import { TechnologyItem } from '../types';

/**
 * =======================================================================
 * BEWIN FELIX R A — REAL CUMULATIVE TECHNOLOGY EVOLUTION
 * Derived from Resume, Production Deployments & Hackathons
 * =======================================================================
 */

export interface EraTechMilestone {
  eraId: string;
  eraName: string;
  yearLabel: string;
  tagline: string;
  accumulatedCount: number;
  newTechnologies: TechnologyItem[];
}

export const technologyEras: EraTechMilestone[] = [
  {
    eraId: '2021',
    eraName: '2021',
    yearLabel: 'Genesis & Vision',
    tagline: 'Python, Networking CIDR & Computer Vision Foundations',
    accumulatedCount: 6,
    newTechnologies: [
      {
        name: 'Python',
        category: 'Languages',
        introducedIn: '2021',
        proficiencyLevel: 'Experienced',
        icon: '🐍',
        description: 'Core daily programming language; algorithms, automation, backend services, and AI pipelines.'
      },
      {
        name: 'Cisco Networking & Subnetting',
        category: 'Systems & DevOps',
        introducedIn: '2021',
        proficiencyLevel: 'Experienced',
        icon: '🌐',
        description: 'IPv4 / IPv6 subnet calculations, network mask boundaries, and socket protocol fundamentals (Cisco Intern).'
      },
      {
        name: 'OpenCV & Computer Vision',
        category: 'AI & Data',
        introducedIn: '2021',
        proficiencyLevel: 'Experienced',
        icon: '👁️',
        description: 'Image processing, pose estimation algorithms, and video frame analysis for workout tracking.'
      },
      {
        name: 'TensorFlow',
        category: 'AI & Data',
        introducedIn: '2021',
        proficiencyLevel: 'Building With',
        icon: '🧠',
        description: 'Machine learning model inference and pose estimation landmark detection.'
      },
      {
        name: 'HTML5 & CSS3',
        category: 'Frontend',
        introducedIn: '2021',
        proficiencyLevel: 'Experienced',
        icon: '🎨',
        description: 'Web document structuring, responsive CSS layouts, and interface styling.'
      },
      {
        name: 'Git & Version Control',
        category: 'Systems & DevOps',
        introducedIn: '2021',
        proficiencyLevel: 'Experienced',
        icon: '🌿',
        description: 'Distributed source control, branch workflows, merge strategies, and team collaboration.'
      }
    ]
  },
  {
    eraId: '2022',
    eraName: '2022',
    yearLabel: 'Expansion & Web',
    tagline: 'React, Node.js, Digital Forensics & Community Workshops',
    accumulatedCount: 13,
    newTechnologies: [
      {
        name: 'React JS',
        category: 'Frontend',
        introducedIn: '2022',
        proficiencyLevel: 'Experienced',
        icon: '⚛️',
        description: 'Component architecture, virtual DOM reconciliation, state hooks, and dynamic SPAs.'
      },
      {
        name: 'JavaScript (ES6+)',
        category: 'Languages',
        introducedIn: '2022',
        proficiencyLevel: 'Experienced',
        icon: '⚡',
        description: 'Modern asynchronous programming, promises, DOM manipulation, and frontend logic.'
      },
      {
        name: 'Node.js & Express',
        category: 'Backend',
        introducedIn: '2022',
        proficiencyLevel: 'Experienced',
        icon: '🟢',
        description: 'Event-driven server runtimes, RESTful routing, and asynchronous API endpoints.'
      },
      {
        name: 'Docker & Containers',
        category: 'Systems & DevOps',
        introducedIn: '2022',
        proficiencyLevel: 'Experienced',
        icon: '🐳',
        description: 'Containerizing applications, Dockerfiles, and conducting workshops for 250+ students.'
      },
      {
        name: 'Digital Forensics (Volatility/TShark)',
        category: 'Systems & DevOps',
        introducedIn: '2022',
        proficiencyLevel: 'Experienced',
        icon: '🔍',
        description: 'Memory dump analysis, disk forensics, and packet capture on Intel NUC (KAVACH 2023).'
      },
      {
        name: 'MongoDB',
        category: 'Databases & Storage',
        introducedIn: '2022',
        proficiencyLevel: 'Experienced',
        icon: '🍃',
        description: 'Document-oriented NoSQL storage, collections, schema indexing, and aggregation pipelines.'
      },
      {
        name: 'Postman',
        category: 'Systems & DevOps',
        introducedIn: '2022',
        proficiencyLevel: 'Experienced',
        icon: '📬',
        description: 'API testing, mock servers, automated contract verification, and endpoint debugging.'
      }
    ]
  },
  {
    eraId: '2023',
    eraName: '2023',
    yearLabel: 'Enterprise & Security',
    tagline: 'Django REST, PostgreSQL, Zeek, Unbound DNS & Grafana',
    accumulatedCount: 20,
    newTechnologies: [
      {
        name: 'Django & Django REST Framework',
        category: 'Backend',
        introducedIn: '2023',
        proficiencyLevel: 'Experienced',
        icon: '🎯',
        description: 'Enterprise backend APIs, ORM migrations, secure authentication, and scalable service design.'
      },
      {
        name: 'PostgreSQL & SQL',
        category: 'Databases & Storage',
        introducedIn: '2023',
        proficiencyLevel: 'Experienced',
        icon: '🐘',
        description: 'Relational data modeling, ACID transactions, complex joins, index tuning, and constraints.'
      },
      {
        name: 'Zeek (Bro Network Security)',
        category: 'Systems & DevOps',
        introducedIn: '2023',
        proficiencyLevel: 'Experienced',
        icon: '🛡️',
        description: 'Real-time deep packet protocol inspection, network event extraction, and anomaly alerting (SIH 2023).'
      },
      {
        name: 'Unbound DNS Server',
        category: 'Systems & DevOps',
        introducedIn: '2023',
        proficiencyLevel: 'Experienced',
        icon: '🚦',
        description: 'High-performance recursive DNS caching server, dynamic sinkhole policies, and DNSSEC.'
      },
      {
        name: 'Grafana Telemetry',
        category: 'Systems & DevOps',
        introducedIn: '2023',
        proficiencyLevel: 'Experienced',
        icon: '📊',
        description: 'Live operational dashboards, threat intelligence visualization, and metrics monitoring.'
      },
      {
        name: 'Nginx Web Server',
        category: 'Systems & DevOps',
        introducedIn: '2023',
        proficiencyLevel: 'Experienced',
        icon: '🌐',
        description: 'Reverse proxying, SSL/TLS termination, static file serving, and upstream load routing.'
      },
      {
        name: 'Drupal CMS',
        category: 'Frontend',
        introducedIn: '2023',
        proficiencyLevel: 'Experienced',
        icon: '💧',
        description: 'University enterprise website development at Karunya Computer Technology Center.'
      }
    ]
  },
  {
    eraId: '2024',
    eraName: '2024',
    yearLabel: 'AI Platforms & Serving',
    tagline: 'vLLM, Triton Inference, Open WebUI, RAG & FastAPI',
    accumulatedCount: 27,
    newTechnologies: [
      {
        name: 'vLLM (PagedAttention Serving)',
        category: 'AI & Data',
        introducedIn: '2024',
        proficiencyLevel: 'Building With',
        icon: '⚡',
        description: 'High-throughput LLM model serving, continuous batching, and low-latency token streaming for chat.karunya.edu.'
      },
      {
        name: 'Triton Inference Server',
        category: 'AI & Data',
        introducedIn: '2024',
        proficiencyLevel: 'Building With',
        icon: '🔱',
        description: 'Multi-model orchestration, dynamic batching, and GPU acceleration in institutional clusters.'
      },
      {
        name: 'FastAPI',
        category: 'Backend',
        introducedIn: '2024',
        proficiencyLevel: 'Experienced',
        icon: '⚡',
        description: 'Ultra-fast asynchronous Python APIs, Pydantic validation, and modern microservices.'
      },
      {
        name: 'RAG (Retrieval-Augmented Gen)',
        category: 'AI & Data',
        introducedIn: '2024',
        proficiencyLevel: 'Building With',
        icon: '📚',
        description: 'Vector embeddings, semantic search, and automated firewall policy generation (SIH 2024).'
      },
      {
        name: 'Open WebUI',
        category: 'Frontend',
        introducedIn: '2024',
        proficiencyLevel: 'Experienced',
        icon: '💬',
        description: 'Deploying ChatGPT-style institutional web interfaces with custom model routing.'
      },
      {
        name: 'Graylog & Observability',
        category: 'Systems & DevOps',
        introducedIn: '2024',
        proficiencyLevel: 'Experienced',
        icon: '🪵',
        description: 'Centralized log aggregation, audit tracking, and security event detection.'
      },
      {
        name: 'Tailwind CSS',
        category: 'Frontend',
        introducedIn: '2024',
        proficiencyLevel: 'Experienced',
        icon: '🌊',
        description: 'Rapid UI design systems, utility styling, and sleek dark mode development.'
      }
    ]
  },
  {
    eraId: '2025-present',
    eraName: '2025 – PRESENT',
    yearLabel: 'Continuous Evolution',
    tagline: 'Infosys Specialist Programmer · Agentic AI · LangGraph & Full-Stack Systems',
    accumulatedCount: 35,
    newTechnologies: [
      {
        name: 'LangGraph (Agentic Workflows)',
        category: 'AI & Data',
        introducedIn: '2025',
        proficiencyLevel: 'Building With',
        icon: '🤖',
        description: 'Cyclic graph-based agent orchestration, self-reflection loops, and multi-agent state machines.'
      },
      {
        name: 'LangChain & Advanced RAG',
        category: 'AI & Data',
        introducedIn: '2025',
        proficiencyLevel: 'Building With',
        icon: '🦜',
        description: 'Retrieval pipelines, chunking strategies, vector embeddings, and hybrid semantic search.'
      },
      {
        name: 'Guardrails AI & Moderation',
        category: 'AI & Data',
        introducedIn: '2025',
        proficiencyLevel: 'Building With',
        icon: '🛡️',
        description: 'Deterministic input/output validation, prompt injection defense, and content moderation filters.'
      },
      {
        name: 'Prompt Engineering & System Personas',
        category: 'AI & Data',
        introducedIn: '2025',
        proficiencyLevel: 'Experienced',
        icon: '✨',
        description: 'Structured reasoning frameworks, few-shot prompting, and persona design for custom LLM agents.'
      },
      {
        name: 'MERN / MEAN Full-Stack Ecosystem',
        category: 'Backend',
        introducedIn: '2025',
        proficiencyLevel: 'Experienced',
        icon: '⚛️',
        description: 'End-to-end full-stack architectures integrating React/Angular, Node/Express, and MongoDB/SQL.'
      },
      {
        name: 'Fine-Tuned LLMs',
        category: 'AI & Data',
        introducedIn: '2025',
        proficiencyLevel: 'Building With',
        icon: '🎯',
        description: 'Custom fine-tuning open-source LLMs for interview preparation ("Rachel") and domain evaluation.'
      },
      {
        name: 'ECC (Elliptic-Curve Cryptography)',
        category: 'Systems & DevOps',
        introducedIn: '2025',
        proficiencyLevel: 'Building With',
        icon: '🔐',
        description: 'Advanced asymmetric cryptography for secure Electronic Health Record (EHR) systems.'
      }
    ]
  }
];

export const allUniqueTechnologies: TechnologyItem[] = technologyEras.flatMap(era => era.newTechnologies);
