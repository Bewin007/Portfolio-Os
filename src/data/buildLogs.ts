import { BuildLogEntry } from '../types';

/**
 * =======================================================================
 * BEWIN FELIX R A — REAL ENGINEERING BUILD LOG
 * Real national hackathons, campus infrastructure milestones, and deployments
 * =======================================================================
 */

export const buildLogEntries: BuildLogEntry[] = [
  {
    id: 'log-01',
    timestamp: '[2024.12]',
    category: 'PRODUCTION',
    title: 'Deployed chat.karunya.edu Campus AI on Triton + vLLM',
    summary: 'Orchestrated the official private ChatGPT-style platform for Karunya University using Open WebUI, Triton Inference Server, and vLLM PagedAttention.',
    details: 'Configured continuous batching to maximize multi-user concurrency on university GPU hardware. Added Guardrails AI for academic integrity moderation and Graylog for real-time prompt telemetry.',
    tags: ['vLLM', 'Triton Server', 'FastAPI', 'Open WebUI', 'AI Platforms']
  },
  {
    id: 'log-02',
    timestamp: '[2024.09]',
    category: 'MILESTONE',
    title: 'Smart India Hackathon (SIH) 2024 College Selection',
    summary: 'Selected at college level for SIH 2024 national competition with an autonomous RAG-driven endpoint firewall agent.',
    details: 'Engineered a lightweight daemon that monitors endpoint network sockets and leverages RAG over CVE patterns to synthesize verified, hardened Linux iptables firewall rules.',
    tags: ['SIH 2024', 'RAG', 'Cybersecurity', 'FastAPI', 'iptables']
  },
  {
    id: 'log-03',
    timestamp: '[2024.06]',
    category: 'ARCHITECTURE',
    title: 'Engineered CodeTutor Automated Lab & Viva Platform',
    summary: 'Constructed an end-to-end laboratory evaluation platform in Django REST and React with automated code execution verification.',
    details: 'Eliminated manual grading on 60+ lab screens with Docker containerized test execution sandboxes and randomized viva questions, cutting faculty evaluation paperwork by 75%.',
    tags: ['Django REST', 'React', 'Docker', 'PostgreSQL', 'Education']
  },
  {
    id: 'log-04',
    timestamp: '[2024.02]',
    category: 'EXPERIMENT',
    title: 'Google Solution Challenge: PDF Book Translation via Gemini API',
    summary: 'Built a web-based e-library platform parsing PDF books and integrating the Gemini API for live multi-language reading.',
    details: 'Created an async chunking parser preserving PDF formatting and typography during cross-language translation with PostgreSQL storage.',
    tags: ['Gemini API', 'Django REST', 'React', 'Google Solution Challenge']
  },
  {
    id: 'log-05',
    timestamp: '[2023.12]',
    category: 'MILESTONE',
    title: 'Smart India Hackathon (SIH) 2023 National Finalist (Gujarat)',
    summary: 'Selected as Finalist out of 44,000 teams across India in SIH 2023 conducted by AICTE & Ministry of Education, Govt of India.',
    details: 'Presented a real-time DNS Filtering Service using Zeek packet inspection, dynamic threat intelligence feeds, Unbound DNS server, and Grafana telemetry.',
    tags: ['SIH 2023', 'National Finalist', 'Zeek', 'Unbound DNS', 'Grafana']
  },
  {
    id: 'log-06',
    timestamp: '[2023.08]',
    category: 'MILESTONE',
    title: 'KAVACH 2023 National Cybersecurity Hackathon Finalist (Odisha)',
    summary: 'Selected as Finalist out of 3,800 teams across India in KAVACH 2023 cybersecurity hackathon.',
    details: 'Engineered the Hardware Forensic Suite: a portable virtualized Intel NUC device executing volatile RAM memory dumps (Volatility), disk carving (Sleuth Kit), and network traffic forensics with automated reports.',
    tags: ['KAVACH 2023', 'Forensics', 'Intel NUC', 'Volatility', 'Cybersecurity']
  },
  {
    id: 'log-07',
    timestamp: '[2023.03]',
    category: 'MILESTONE',
    title: 'TN-Police 2023 State Hackathon Finalist (Chennai)',
    summary: 'Selected as Finalist out of 300 teams in the Tamil Nadu Police Department State Level Hackathon.',
    details: 'Designed cybersecurity incident analysis and reporting prototypes tailored for state police cyber defense units.',
    tags: ['TN-Police 2023', 'State Finalist', 'Cybersecurity']
  },
  {
    id: 'log-08',
    timestamp: '[2022.05]',
    category: 'PRODUCTION',
    title: 'CISCO Internship: IPv4 / IPv6 Subnet Range & CIDR Verification',
    summary: 'Completed Python Programmer Internship at CISCO, developing networking validation functions for IPv4 and IPv6 subnets.',
    details: 'Validated network addresses, broadcast boundaries, and prefix length masks to ensure rigorous mathematical correctness across network routing tools.',
    tags: ['CISCO', 'Networking', 'Python', 'IPv4/IPv6']
  }
];
