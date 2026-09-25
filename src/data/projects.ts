import { ProjectCaseStudy } from '../types';

/**
 * =======================================================================
 * BEWIN FELIX R A — REAL PROJECT CASE STUDIES ARCHIVE
 * Populated from Resume & Academic Engineering Dossiers
 * =======================================================================
 */

export const projectArchive: ProjectCaseStudy[] = [
  {
    id: 'chat-karunya',
    code: '001',
    title: 'chat.karunya.edu',
    tagline: 'Institutional ChatGPT-Style AI Platform with Triton & vLLM Serving',
    category: 'AI',
    categories: ['AI', 'WEB', 'BACKEND'],
    featured: true,
    timelineYear: '2024 / Campus AI Deployment',
    summary: 'A secure, high-throughput campus AI chatbot platform built for Karunya University, utilizing Open WebUI frontend, Triton Inference Server with vLLM model serving, Guardrails moderation, and Graylog observability.',
    technologies: ['vLLM', 'Triton Server', 'Open WebUI', 'Python', 'FastAPI', 'Guardrails AI', 'Graylog', 'Docker'],
    codeStatus: 'ACADEMIC_IP',
    codeStatusNotice: 'Official Karunya University Infrastructure Project // Institutional Intellectual Property. Deployed on campus private server cluster.',
    collegeContext: 'Built directly for university-wide deployment across Karunya Institute of Technology and Sciences to provide faculty and students with secure, curriculum-aware generative AI.',
    originStory: 'Started from two powerful catalysts: First, I saw NVIDIA\'s NIM chatbot blueprint and had a debate with a friend where I claimed I could build an equivalent architecture entirely using open-source tools. He challenged me that I couldn\'t pull it off—at that time, I wasn\'t even into AI! Driven purely to prove him wrong, I dove headfirst into Triton Server, vLLM, and Open WebUI. Second, our campus computer labs had strictly blocked public AI tools like ChatGPT and Claude because students were blindly generating assignment code. We needed an in-house AI tutor that knew our curriculum and guided students like a professor—explaining concepts, answering doubts, and breaking down logic without handing over raw copy-paste code.',
    whyBuilt: 'Built to give 8,000+ students and faculty an official, secure campus AI interface powered by open-source LLMs without recurring API fees, while serving as the official verification engine for 500+ student teams participating in internal Smart India Hackathon (SIH) rounds.',
    interestingFacts: [
      'Built initially to win a friendly bet: A friend claimed open-source tools couldn\'t match NVIDIA\'s NIM blueprint. With zero prior AI background, I dove in and proved it was possible.',
      'Campus labs restricted ChatGPT and Claude to stop raw copy-pasting; our custom tutor mode guides students with conceptual hints without dumping raw code solutions.',
      'Primary institutional production workload: Automatically evaluates and verifies procedure manuals for 500+ student teams participating in internal college-level SIH hackathons where experienced faculty evaluators are scarce.',
      'Serving LLMs with Triton + vLLM PagedAttention continuous batching allowed multi-user token streaming with 4x higher throughput and minimal VRAM overhead.',
      'Integrated Graylog observability to monitor token generation latency, detect prompt injection attempts, and track GPU thermals in real time.'
    ],
    caseStudy: {
      problem: 'Commercial AI APIs were cost-prohibitive for thousands of students and violated university data privacy protocols for internal exams and proprietary research.',
      approach: 'Deployed high-speed open-source LLMs inside the campus intranet using vLLM backends orchestrated via Triton Inference Server, fronted by Open WebUI with custom API authentication.',
      architectureDescription: 'Campus users authenticate through university SSO into Open WebUI. Requests route through a FastAPI moderation layer enforcing Guardrails filters. Valid prompts hit Triton Server utilizing vLLM PagedAttention continuous batching, streaming response tokens back via WebSockets while streaming audit logs to Graylog.',
      architectureNodes: [
        { id: 'users', name: 'Campus Web Clients', type: 'client', description: 'Students and faculty on desktop and mobile' },
        { id: 'webui', name: 'Open WebUI Gateway', type: 'gateway', description: 'Institutional UI & chat session manager' },
        { id: 'guardrails', name: 'Guardrails & Moderation', type: 'service', description: 'Input filtering, prompt injection defense' },
        { id: 'triton_vllm', name: 'Triton Server + vLLM', type: 'ai', description: 'GPU-accelerated continuous batching LLM engine' },
        { id: 'graylog', name: 'Graylog Observability', type: 'database', description: 'Centralized telemetry, latency & audit logging' }
      ],
      architectureFlows: [
        { from: 'users', to: 'webui', label: 'HTTPS Chat Query' },
        { from: 'webui', to: 'guardrails', label: 'Safety & Policy Evaluation' },
        { from: 'guardrails', to: 'triton_vllm', label: 'Inference Request (Token Stream)' },
        { from: 'triton_vllm', to: 'graylog', label: 'Async Telemetry & Token Metrics' },
        { from: 'triton_vllm', to: 'webui', label: 'SSE Response Token Stream' }
      ],
      challenges: [
        'Preventing GPU VRAM exhaustion during simultaneous class lab sessions through tuned continuous batching.',
        'Balancing safety guardrail latency with snappy time-to-first-token streaming.',
        'Containerizing the full Triton + CUDA runtime within university on-premise hardware constraints.'
      ],
      results: [
        { metric: '100%', label: 'On-Premise University Data Privacy' },
        { metric: 'Sub-80ms', label: 'Time-to-First-Token Latency' },
        { metric: 'Zero Cost', label: 'Zero Recurring External API Fees' }
      ],
      whatILearned: 'Serving LLMs in production is an infrastructure and systems engineering problem, not just prompt engineering. PagedAttention and proper observability are essential for multi-tenant deployments.',
      decisionLog: [
        {
          question: 'Why vLLM with Triton instead of plain Ollama or FastAPI?',
          answer: 'vLLM provides PagedAttention and continuous batching, which increases multi-user throughput by 4x to 10x compared to naive inference wrappers.'
        },
        {
          question: 'Why Graylog for logging?',
          answer: 'Graylog efficiently handles high-velocity structured logs and provides instant alerting on abnormal query bursts or moderation tripwires.'
        },
        {
          question: 'What trade-offs were accepted?',
          answer: 'Self-hosting requires local GPU hardware maintenance and model quantization choices to balance context length with VRAM limits.'
        },
        {
          question: 'Why did the first approach fail?',
          answer: 'Initial test using standard HuggingFace transformers crashed after 5 concurrent requests due to VRAM fragmentation and sequential query blocking.'
        }
      ]
    }
  },
  {
    id: 'sih-dns-filter',
    code: '002',
    title: 'SIH DNS Threat Filter',
    tagline: 'AI/ML DNS Filtering Service with Threat Intelligence Feeds & PCAP Analysis',
    category: 'SYSTEMS',
    categories: ['SYSTEMS', 'AI', 'BACKEND'],
    featured: true,
    timelineYear: '2023 / SIH Grand Finale Finalist',
    summary: 'Selected as National Grand Finale Finalist out of 44,000 teams across India in Smart India Hackathon (SIH) 2023. Built a high-accuracy DNS filtering and threat identification service using PCAP inspection, Zeek network analysis, Unbound DNS server, and Grafana visualization.',
    technologies: ['Python', 'Zeek', 'Unbound DNS', 'PCAP Analysis', 'Django REST', 'React', 'Grafana', 'Machine Learning'],
    codeStatus: 'ACADEMIC_IP',
    codeStatusNotice: 'Smart India Hackathon 2023 National Grand Finale Finalist Project // Conducted by AICTE & Ministry of Education, Govt of India (Gujarat Finals).',
    collegeContext: 'Developed representing Karunya University at the national level against teams from all over India in Gujarat.',
    originStory: 'Malware and phishing domains evolve hourly by using Domain Generation Algorithms (DGA) that easily evade static IP blocklists. We wanted to build an intelligent DNS firewall that analyzes raw packet streams in real-time and detects malicious domain behavior using machine learning before users ever connect.',
    whyBuilt: 'Built to solve the problem statement issued by national security agencies for AI-driven threat intelligence and DNS packet anomaly detection.',
    interestingFacts: [
      'Selected as National Grand Finale Finalist from 44,000 participating teams across India for the grand finale in Gujarat.',
      'The 2:00 PM Emergency Hackathon Sprint: At 2:00 PM (with the hackathon deadline at 8:00 PM, just 6 hours remaining!), our fine-tuned AI model began misclassifying legitimate high-traffic websites under erroneous categories—like tagging X.com as an adult content site! Rather than relying purely on domain metadata, we engineered an emergency asynchronous background crawler in those final 6 hours. The crawler scraped in-flight web content in the background, analyzed live page semantics, and automatically overrode false-positive blocks without hurting client DNS lookup latency. We shipped the feature before 8:00 PM and demonstrated the self-healing override live to the government jury!',
      'Integrated Zeek network analysis directly with an Unbound DNS resolver to dynamically sinkhole dangerous domain queries in sub-5ms.',
      'Trained an ML classifier on thousands of real-world malware PCAP network dumps to recognize DGA algorithmic patterns with high precision.'
    ],
    caseStudy: {
      problem: 'Conventional DNS blockers rely on stale threat feeds that take days to update, leaving networks vulnerable to zero-day phishing and DGA botnet command-and-control servers.',
      approach: 'Engineered a multi-stage pipeline: live packet capture using PCAP, deep protocol inspection via Zeek, dynamic regex and ML domain score evaluation, and automatic sinkholing via an Unbound DNS server integrated with a Grafana operations dashboard.',
      architectureDescription: 'DNS queries hit an Unbound DNS caching resolver. In-flight packet payloads are tapped and analyzed by Zeek and custom Python PCAP parsers. Extracted domain features pass through an ML anomaly classifier; malicious domains are instantaneously injected into the local blocking zone while threat telemetry is streamed to Grafana.',
      architectureNodes: [
        { id: 'clients', name: 'Network Endpoints', type: 'client', description: 'Laptops and devices sending DNS queries' },
        { id: 'unbound', name: 'Unbound DNS Resolver', type: 'gateway', description: 'Caching recursive DNS with dynamic policy zone' },
        { id: 'zeek_pcap', name: 'Zeek & PCAP Inspector', type: 'service', description: 'Deep packet protocol inspection engine' },
        { id: 'ml_engine', name: 'Threat Classifier (ML)', type: 'ai', description: 'DGA detection and domain entropy analysis' },
        { id: 'grafana', name: 'Grafana Threat Dashboard', type: 'client', description: 'Live network telemetry & threat visualization' }
      ],
      architectureFlows: [
        { from: 'clients', to: 'unbound', label: 'UDP/53 DNS Queries' },
        { from: 'unbound', to: 'zeek_pcap', label: 'Tapped Packet Stream' },
        { from: 'zeek_pcap', to: 'ml_engine', label: 'Domain Features & Entropy' },
        { from: 'ml_engine', to: 'unbound', label: 'Dynamic Sinkhole Block Rule' },
        { from: 'zeek_pcap', to: 'grafana', label: 'Telemetry Visuals & Alert Metrics' }
      ],
      challenges: [
        'Processing thousands of DNS packets per second without adding perceptible network lookup latency to normal browsing.',
        'Minimizing false positives on legitimate Content Delivery Networks (CDNs) that use complex multi-subdomain architectures.',
        'Coordinating real-time block rule synchronization between Python analyzer workers and the Unbound daemon.'
      ],
      results: [
        { metric: 'Top 0.1%', label: 'Selected from 44,000 National Teams' },
        { metric: '97.4%', label: 'DGA Threat Identification Accuracy' },
        { metric: '< 5ms', label: 'Lookup Overhead on Clean Queries' }
      ],
      whatILearned: 'Network security at scale is about packet pipeline efficiency. Combining rule-based filtering with machine learning heuristics gives the best balance of speed and zero-day threat defense.',
      decisionLog: [
        {
          question: 'Why Unbound DNS instead of BIND or dnsmasq?',
          answer: 'Unbound is purpose-built as a high-performance recursive caching resolver with native support for local-zone dynamic overrides and DNSSEC validation.'
        },
        {
          question: 'Why Zeek for packet analysis?',
          answer: 'Zeek excels at converting raw network packet streams into structured event logs with built-in connection state tracking.'
        },
        {
          question: 'What trade-offs were accepted?',
          answer: 'Deep packet inspection was targeted specifically at DNS payloads to prevent CPU exhaustion on general network traffic.'
        },
        {
          question: 'Why did the first approach fail?',
          answer: 'Initial version attempted regex matching directly in Python on raw socket buffers; it dropped 30% of packets during burst traffic until we moved inspection behind an async queue.'
        }
      ]
    }
  },
  {
    id: 'sih-2024-firewall',
    code: '003',
    title: 'RAG Endpoint Firewall Agent',
    tagline: 'Lightweight Agent & Endpoint Firewall with Dynamic Policy Generation via RAG',
    category: 'AI',
    categories: ['AI', 'SYSTEMS', 'BACKEND'],
    featured: true,
    timelineYear: '2024 / SIH College Finalist',
    summary: 'Developed for Smart India Hackathon 2024 (College-Level Finalist): A lightweight host endpoint agent and firewall server featuring a centralized dashboard for dynamic firewall policy generation using Retrieval-Augmented Generation (RAG) and machine learning to block anomalous network events.',
    technologies: ['Python', 'FastAPI', 'RAG', 'Machine Learning', 'Linux iptables', 'React', 'Docker', 'Tailwind'],
    codeStatus: 'ACADEMIC_IP',
    codeStatusNotice: 'Smart India Hackathon 2024 Project // Selected as College-Level Finalist for National Level Evaluation.',
    collegeContext: 'Engineered as an advanced cybersecurity solution combining local OS packet filtering with AI-generated firewall rules.',
    originStory: 'Traditional firewalls have static rule sets that administrators rarely update because writing custom iptables or packet rules for novel threats requires deep expertise. We asked: "What if an AI agent analyzed incoming attack telemetry, searched historical CVE databases via RAG, and autonomously generated precise, hardened firewall rules?"',
    whyBuilt: 'Built to automate incident response on client endpoints by bridging machine learning anomaly alerts with automated, verifiable firewall policy synthesis.',
    interestingFacts: [
      'The lightweight client agent runs in the background with negligible CPU footprint while monitoring network socket activity.',
      'Uses RAG to reference Mitre ATT&CK patterns before suggesting firewall rules to prevent administrators from locking themselves out of their own servers.',
      'Selected as College-Level Finalist for SIH 2024 (evaluated at institutional selection round).'
    ],
    caseStudy: {
      problem: 'Enterprise endpoints are frequently breached by lateral movement attacks because static firewall rules fail to adapt dynamically to anomalous process behaviors.',
      approach: 'Engineered a lightweight daemon on endpoints streaming behavioral telemetry to a central server. When anomalous traffic occurs, an ML detector triggers a RAG pipeline that retrieves threat remediation patterns and compiles verified firewall blocking rules deployed back to the endpoint.',
      architectureDescription: 'Endpoint agents monitor socket connections via kernel hooks. Telemetry is transmitted over secure mTLS to the central FastAPI orchestrator. The RAG engine indexes known attack vectors in a vector database, formulates a targeted packet filter, and pushes the policy to the host agent to update local iptables.',
      architectureNodes: [
        { id: 'agent', name: 'Endpoint Agent Daemon', type: 'client', description: 'Lightweight background socket monitor & iptables hook' },
        { id: 'server', name: 'Central Firewall Orchestrator', type: 'gateway', description: 'FastAPI control plane & policy coordinator' },
        { id: 'rag_kb', name: 'RAG Threat Knowledge Base', type: 'database', description: 'Indexed Mitre ATT&CK techniques & CVEs' },
        { id: 'policy_gen', name: 'AI Policy Generator', type: 'ai', description: 'Synthesizes hardened port/IP blocking rules' },
        { id: 'dashboard', name: 'Security Operations UI', type: 'client', description: 'Centralized admin view for real-time approvals' }
      ],
      architectureFlows: [
        { from: 'agent', to: 'server', label: 'Encrypted Telemetry & Anomalies' },
        { from: 'server', to: 'rag_kb', label: 'Semantic Threat Lookup' },
        { from: 'rag_kb', to: 'policy_gen', label: 'Contextual Mitigation Strategies' },
        { from: 'policy_gen', to: 'dashboard', label: 'Generated Rule Preview' },
        { from: 'server', to: 'agent', label: 'Automated iptables Policy Push' }
      ],
      challenges: [
        'Preventing hallucinated firewall rules that could accidentally drop vital SSH or DNS traffic on critical servers.',
        'Minimizing agent CPU and memory footprint to run unobtrusively on client machines.',
        'Validating generated policy syntax automatically before applying to host kernel tables.'
      ],
      results: [
        { metric: 'Finalist', label: 'College Level SIH 2024 Selection' },
        { metric: '< 2%', label: 'Host Agent CPU Overhead' },
        { metric: 'Instant', label: 'Automated Threat Mitigation Deployment' }
      ],
      whatILearned: 'Autonomous AI agents must have strict deterministic validation layers. You should never let an LLM run raw shell commands without sandbox verification.',
      decisionLog: [
        {
          question: 'Why RAG for firewall policies?',
          answer: 'RAG grounds the rule generation in verified security documentation and CVE remediation advisories rather than relying on raw probabilistic model guesses.'
        },
        {
          question: 'What trade-offs were accepted?',
          answer: 'Crucial system ports (22, 53, 80, 443) are protected by a deterministic hardcoded whitelist that the AI is forbidden from blocking.'
        },
        {
          question: 'Why did the first approach fail?',
          answer: 'An early prompt template allowed the LLM to generate blanket subnet drops that severed the agent’s own connection to the orchestrator.'
        }
      ]
    }
  },
  {
    id: 'hardware-forensic-suite',
    code: '004',
    title: 'Hardware Forensic Suite',
    tagline: 'Portable Virtualized Intel NUC for Memory, Disk & Network Forensics',
    category: 'SYSTEMS',
    categories: ['SYSTEMS', 'BACKEND'],
    featured: true,
    timelineYear: '2023 / Kavach Grand Finale Finalist',
    summary: 'Selected as National Finalist out of 3,800 teams in KAVACH 2023 (conducted by AICTE & Ministry of Education, Govt of India). Built a portable, virtualized Intel NUC hardware device supporting multi-OS memory, disk, and network forensics with automated reporting.',
    technologies: ['Intel NUC', 'Python', 'Volatility', 'Wireshark / TShark', 'Sleuth Kit', 'Linux / Windows', 'Cloud Sync'],
    codeStatus: 'ACADEMIC_IP',
    codeStatusNotice: 'KAVACH 2023 National Cyber Security Hackathon Finalist // Govt of India Cybersecurity Initiative (Odisha Finals).',
    collegeContext: 'Presented in the grand finale in Odisha representing Karunya University against top national cybersecurity teams.',
    originStory: 'When police or forensic investigators seize digital devices at crime scenes, transporting bulky forensic workstations is impractical, and turning on a suspect machine risks corrupting volatile RAM memory evidence. We wanted to build a grab-and-go hardware appliance that could acquire and analyze evidence in the field.',
    whyBuilt: 'Built to solve the national cybersecurity challenge of field-ready, portable digital forensics for law enforcement agencies.',
    interestingFacts: [
      'Selected as Finalist from 3,800 teams across India for the grand finale in Odisha.',
      'Packaged all forensic analysis engines into an ultra-compact portable Intel NUC hardware box with multi-boot capabilities.',
      'Engineered an automated report generator that synthesized hex dumps, memory string artifacts, and PCAP logs into a court-admissible PDF summary.'
    ],
    caseStudy: {
      problem: 'Digital evidence at crime scenes is fragile. Field investigators need rapid, write-blocked extraction of volatile RAM, disk images, and network captures without requiring deep terminal expertise.',
      approach: 'Built a specialized Linux-based portable appliance on an Intel NUC with a unified tool launcher UI orchestrating Volatility (memory), Sleuth Kit (disk), and TShark (packets) with automatic cloud artifact backup.',
      architectureDescription: 'The investigator connects target storage or RAM dump interfaces to the NUC. The launcher runs automated integrity checksums (SHA-256), triggers parallel extraction scripts, analyzes running processes, and compiles structured forensic findings.',
      architectureNodes: [
        { id: 'target', name: 'Target Suspect Media', type: 'client', description: 'Hard drives, memory dumps, live network tap' },
        { id: 'nuc', name: 'Intel NUC Portable Engine', type: 'gateway', description: 'Compact field hardware running custom OS' },
        { id: 'forensic_tools', name: 'Forensic Engine Suite', type: 'service', description: 'Volatility, Sleuth Kit, TShark, Carvers' },
        { id: 'reporter', name: 'PDF Report Generator', type: 'service', description: 'Compiles timeline and cryptographic hashes' },
        { id: 'cloud', name: 'Encrypted Cloud Vault', type: 'database', description: 'Off-site backup of verified case evidence' }
      ],
      architectureFlows: [
        { from: 'target', to: 'nuc', label: 'Write-Blocked Bitstream Image' },
        { from: 'nuc', to: 'forensic_tools', label: 'Automated Artifact Extraction' },
        { from: 'forensic_tools', to: 'reporter', label: 'Parsed Strings & Anomalies' },
        { from: 'reporter', to: 'cloud', label: 'Encrypted Evidence Upload' }
      ],
      challenges: [
        'Ensuring strict write-blocking so evidence timestamps and hash sums are never compromised.',
        'Handling multi-gigabyte memory dumps efficiently on compact NUC hardware.',
        'Building a clean GUI for investigators that abstracted complex CLI flags.'
      ],
      results: [
        { metric: 'Top 1%', label: 'Selected from 3,800 Teams Across India' },
        { metric: '3-in-1', label: 'Disk, Memory & Network Analysis in One Device' },
        { metric: '100%', label: 'Cryptographic Chain of Custody Integrity' }
      ],
      whatILearned: 'In forensics, reproducibility and integrity are everything. A tool is useless if its findings cannot be proven in a legal or audit setting.',
      decisionLog: [
        {
          question: 'Why an Intel NUC form factor?',
          answer: 'It offers full desktop x86 processor power and high-speed NVMe/USB 3.2 bus speeds in a device small enough to fit in a backpack.'
        },
        {
          question: 'What trade-offs were accepted?',
          answer: 'Heavy RAM analysis can take several minutes on compact cooling; added progressive status bars to keep operators informed.'
        },
        {
          question: 'Why did the first approach fail?',
          answer: 'First prototype used a Raspberry Pi; disk I/O and RAM processing were far too slow for real forensic image files.'
        }
      ]
    }
  },
  {
    id: 'codetutor',
    code: '005',
    title: 'CodeTutor',
    tagline: 'Automated Lab Management, Viva Conduction & Evaluation Platform',
    category: 'BACKEND',
    categories: ['BACKEND', 'WEB'],
    featured: true,
    timelineYear: '2024 / Campus Lab Production',
    summary: 'An educational platform built using Django, Django REST Framework, React, and PostgreSQL for college laboratory management, viva conduction, automated program verification, grading automation, and student academic tracking.',
    technologies: ['Django', 'Django REST Framework', 'React', 'PostgreSQL', 'Docker', 'Tailwind'],
    codeStatus: 'ACADEMIC_IP',
    codeStatusNotice: 'Department Academic Platform // Developed for Karunya Computer Science Lab Management.',
    collegeContext: 'Created for the Department of Computer Science and Engineering; tested and deployed in production for a real laboratory section of 70 students.',
    originStory: 'Lab sessions in college were exhausting: professors and teaching assistants had to manually verify code on 70 individual student monitors, conduct 1-on-1 viva voce, and scribble marks on paper rosters that frequently went missing. I wanted an automated evaluator where students submit code, get instant execution feedback against test cases, and undergo interactive viva testing directly from their terminal.',
    whyBuilt: 'Built to digitize and automate the entire university practical lab and examination workflow, reducing faculty grading overhead from days to minutes while eliminating paper lab records.',
    interestingFacts: [
      'Successfully deployed in production in an actual university laboratory of 70 students for live automated code verification and viva conduction.',
      'Isolated Docker runner executes student code under strict memory (256MB) and CPU timeouts (5s) to safely neutralize infinite loops and malicious fork bombs.',
      'Automated grading rubrics and randomized viva question modules reduced faculty grading time by over 75% for participating batches.',
      'Generated tamper-evident, auditable PDF grade sheets with full test case pass/fail breakdowns for departmental accreditation.'
    ],
    caseStudy: {
      problem: 'Manual lab grading was time-consuming, prone to human error, and provided students with zero immediate feedback on why their code failed edge test cases.',
      approach: 'Constructed a robust role-based platform (Faculty, Student, Admin) with automated sandboxed program verification, automated grading rubrics, and comprehensive PDF report generation.',
      architectureDescription: 'React frontend interfaces with a Django REST backend backed by PostgreSQL. Student code submissions are executed inside isolated Docker worker containers with resource limits (CPU/memory), returning instant stdout/stderr and test case assertions.',
      architectureNodes: [
        { id: 'students', name: 'Student Terminal UI', type: 'client', description: 'Code editor & viva test interface' },
        { id: 'faculty', name: 'Faculty Grading Portal', type: 'client', description: 'Course allocation & progress analytics' },
        { id: 'backend', name: 'Django REST API', type: 'service', description: 'Auth, role-based controls, course logic' },
        { id: 'sandbox', name: 'Docker Execution Sandbox', type: 'service', description: 'Isolated runner for student code verification' },
        { id: 'db', name: 'PostgreSQL Database', type: 'database', description: 'Encrypted marks, submissions, and audit trail' }
      ],
      architectureFlows: [
        { from: 'students', to: 'backend', label: 'Submit Code / Viva Answers' },
        { from: 'backend', to: 'sandbox', label: 'Execute with Resource Limits' },
        { from: 'sandbox', to: 'backend', label: 'Test Case Results & Exit Codes' },
        { from: 'backend', to: 'db', label: 'Store Grades & Feedback' },
        { from: 'backend', to: 'faculty', label: 'Real-Time Batch Dashboard' }
      ],
      challenges: [
        'Preventing student submissions from running infinite loops or malicious system calls like fork bombs in the sandbox.',
        'Handling concurrent submissions from 60+ students at the end of a 2-hour lab exam window.',
        'Designing an intuitive viva question randomizer preventing students from copying adjacent screens.'
      ],
      results: [
        { metric: '75%', label: 'Reduction in Faculty Grading Overhead' },
        { metric: 'Instant', label: 'Student Test Case Feedback' },
        { metric: '100%', label: 'Auditable Academic Record Generation' }
      ],
      whatILearned: 'Building software for educational institutions requires obsessive role-based permissions and strict sandboxing to protect shared lab servers from rogue processes.',
      decisionLog: [
        {
          question: 'Why Django REST Framework for this platform?',
          answer: 'Django offers built-in enterprise authentication, robust ORM schema migrations, and admin controls that accelerated backend development.'
        },
        {
          question: 'What trade-offs were accepted?',
          answer: 'Code execution sandboxes are constrained to 256MB RAM and 5-second CPU timeouts to guarantee server stability.'
        },
        {
          question: 'Why did the first approach fail?',
          answer: 'First prototype used Python exec() directly in the web server process—one student submitted while(1){} and froze the entire university web portal.'
        }
      ]
    }
  },
  {
    id: 'interviewbot-rachel',
    code: '006',
    title: 'InterviewBot ("Rachel")',
    tagline: 'AI-Powered Interactive Interview Bot with Fine-Tuned LLM',
    category: 'AI',
    categories: ['AI', 'WEB'],
    featured: false,
    timelineYear: '2024 / Placement AI System',
    summary: 'An AI-powered interview preparation bot designed to help students prepare for real-world placement interviews. Built on a fine-tuned open-source Large Language Model that analyzes student resumes and target job descriptions to conduct interactive mock interviews with detailed feedback.',
    technologies: ['Python', 'Fine-Tuned LLM', 'FastAPI', 'React', 'Tailwind', 'NLP'],
    codeStatus: 'LAB_PROTOTYPE',
    codeStatusNotice: 'Campus Placement Prep Project // Developed to train engineering students for technical placements.',
    collegeContext: 'Created during college campus placement season and deployed to help engineering batchmates practice technical and HR interviews with real-time feedback.',
    originStory: 'During campus placement season, many students with solid technical and coding skills panicked during verbal technical screenings or struggled to articulate complex system trade-offs under pressure. Mock interview mentors were in short supply, so I built and deployed an interactive bot powered by a fine-tuned open-source LLM that conducts full-length simulated technical viva sessions.',
    whyBuilt: 'Built to provide unlimited, personalized mock interviews where an AI analyzes the candidate\'s actual resume and provides constructive feedback on answer depth, communication, and confidence.',
    interestingFacts: [
      'Deployed on campus infrastructure for student batchmates preparing for product and service company interviews.',
      'Fine-tuned an open-source LLM on hundreds of real software engineering interview question-and-answer pairs to probe deeper rather than accepting surface-level answers.',
      'Named "Rachel" after an encouraging, intelligent mentor persona.',
      'Generates a comprehensive post-interview diagnostic scorecard rating communication clarity, technical accuracy, and improvement areas.'
    ],
    caseStudy: {
      problem: 'College students lack access to personalized, repeatable technical mock interviews before critical company hiring drives.',
      approach: 'Engineered a full-stack interactive mock interview platform where an open-source LLM ingests candidate resume PDFs and target job descriptions, generates dynamic sequential questions, and evaluates responses.',
      architectureDescription: 'Candidate uploads their resume and selects a target role. FastAPI parses resume text and feeds it into the fine-tuned LLM context. The bot conducts a multi-turn conversation, dynamically adapting follow-up questions based on the candidate’s answers, and computes a final score breakdown.',
      architectureNodes: [
        { id: 'candidate', name: 'Candidate Browser UI', type: 'client', description: 'Speech/text interactive interview interface' },
        { id: 'api', name: 'FastAPI Backend', type: 'service', description: 'Session coordinator and resume parser' },
        { id: 'llm', name: 'Fine-Tuned Interview LLM', type: 'ai', description: 'Dynamic questioner and answer evaluator' },
        { id: 'feedback', name: 'Scoring & Feedback Engine', type: 'service', description: 'Generates detailed performance reports' }
      ],
      architectureFlows: [
        { from: 'candidate', to: 'api', label: 'Resume & Job Description Upload' },
        { from: 'api', to: 'llm', label: 'Synthesize Personalized Interview Persona' },
        { from: 'llm', to: 'candidate', label: 'Sequential Interview Questions' },
        { from: 'candidate', to: 'llm', label: 'Verbal / Typed Answers' },
        { from: 'llm', to: 'feedback', label: 'Evaluation Metrics & Scorecard' }
      ],
      challenges: [
        'Keeping interview questions adaptive rather than sounding like a rigid static quiz script.',
        'Minimizing latency between candidate answers and next question generation.',
        'Providing gentle yet rigorous feedback that genuinely prepares students for tough technical interviews.'
      ],
      results: [
        { metric: '500+', label: 'Mock Interview Sessions Simulated' },
        { metric: '90%', label: 'Student Confidence Improvement Score' },
        { metric: 'Dynamic', label: 'Customized Questions per Resume' }
      ],
      whatILearned: 'Conversational state management in LLMs requires tight context window pruning to prevent the bot from repeating previous topics.',
      decisionLog: [
        {
          question: 'Why fine-tune an open-source model?',
          answer: 'Fine-tuning specifically on interview dialogues taught the model when to probe deeper with follow-up questions rather than simply accepting surface answers.'
        },
        {
          question: 'What trade-offs were accepted?',
          answer: 'Evaluation scorecards are grounded in specific answer criteria rubrics to ensure objective grading.'
        },
        {
          question: 'Why did the first approach fail?',
          answer: 'Zero-shot generic prompts tended to be overly polite and gave 10/10 scores even for completely incorrect technical answers.'
        }
      ]
    }
  },
  {
    id: 'infosys-dashboard-reporter',
    code: '007',
    title: 'Enterprise Analytics & Automated Report Engine',
    tagline: 'Internal Telemetry Dashboard & AI-Driven Report Generation',
    category: 'WEB',
    categories: ['WEB', 'BACKEND', 'AI'],
    featured: true,
    timelineYear: 'Infosys (2025 — Present)',
    summary: 'Internal enterprise telemetry and business metrics dashboard built at Infosys using React, FastAPI, Node.js, and Agentic AI workflows to synthesize distributed data streams into real-time KPI visuals and automated executive reports.',
    technologies: ['React', 'FastAPI', 'Node.js', 'LangGraph', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    codeStatus: 'PROPRIETARY',
    codeStatusNotice: 'Infosys Enterprise Internal Project // Proprietary Intellectual Property.',
    collegeContext: 'Architected as a Specialist Programmer at Infosys to solve internal analytics friction and automate repetitive report generation across engineering teams.',
    originStory: 'Engineering leads and project managers were spending multiple hours every sprint manually aggregating deployment logs, ticket velocities, and pipeline health into slide decks and spreadsheets. I designed an interactive telemetry dashboard paired with an autonomous Agentic AI reporting worker that extracts live metrics, computes anomaly deltas, and generates structured executive reports on demand.',
    whyBuilt: 'Built to provide cross-functional teams with unified real-time visibility and eliminate manual administrative overhead through intelligent data synthesis.',
    interestingFacts: [
      'Engineered multi-dimensional dashboards with sub-second chart re-renders and custom filter dimensions using React and optimized backend aggregation queries.',
      'Employed Agentic AI loops to synthesize qualitative sprint summaries and performance observations directly into downloadable PDF and Excel summaries.',
      'Reduced sprint reporting compilation time from 4+ hours to a single automated click.'
    ],
    caseStudy: {
      problem: 'Distributed engineering telemetry was trapped in siloed databases and issue trackers, forcing managers to assemble reports manually.',
      approach: 'Built a full-stack dashboard platform featuring unified REST endpoints, optimized SQL caching, and an automated background reporting agent that runs scheduled and ad-hoc aggregations.',
      architectureDescription: 'React client visualizes metrics via dynamic charts. Backend FastAPI service queries relational databases and message streams, caching aggregates. An agentic report worker compiles markdown and data tables into publication-ready PDF formats.',
      architectureNodes: [
        { id: 'client', name: 'Analytics UI (React)', type: 'client', description: 'Real-time telemetry and KPI drill-down dashboard' },
        { id: 'api', name: 'FastAPI Gateway', type: 'gateway', description: 'Asynchronous aggregation endpoints and cache coordinator' },
        { id: 'agent', name: 'Reporting Agent (AI)', type: 'ai', description: 'Synthesizes insights and formats executive summaries' },
        { id: 'db', name: 'Metrics Repository', type: 'database', description: 'PostgreSQL storage for time-series metrics and logs' }
      ],
      architectureFlows: [
        { from: 'client', to: 'api', label: 'Query Filtered Telemetry' },
        { from: 'api', to: 'db', label: 'Fetch Aggregated Metrics' },
        { from: 'api', to: 'agent', label: 'Trigger Report Synthesis' },
        { from: 'agent', to: 'client', label: 'Stream Generated PDF / Charts' }
      ],
      challenges: [
        'Aggregating high-volume time-series events without spiking backend CPU.',
        'Ensuring strict role-based access control across different management tiers.'
      ],
      results: [
        { metric: '75%', label: 'Reporting Overhead Reduction' },
        { metric: '< 200ms', label: 'Dashboard Query Latency' },
        { metric: 'Automated', label: 'One-Click Executive Summaries' }
      ],
      whatILearned: 'Enterprise dashboards are only as good as their data aggregation speed and clarity of insights; automating report synthesis frees teams to focus on actual engineering.',
      decisionLog: [
        {
          question: 'Why FastAPI for metrics aggregation?',
          answer: 'Asynchronous Python handles parallel database queries and external service pings with minimal concurrency overhead.'
        }
      ]
    }
  },
  {
    id: 'book-pdf-translation',
    code: '008',
    title: 'Gemini Multilingual PDF Library',
    tagline: 'Accessible E-Library & Document Translation Platform (Google Solution Challenge)',
    category: 'AI',
    categories: ['AI', 'WEB'],
    featured: false,
    timelineYear: '2023 / Google Solution Challenge',
    summary: 'Web-based accessible digital library developed for the Google Solution Challenge. Parses complex PDF books and integrates Google Gemini API for real-time multilingual translation and chapter summaries, bridging regional educational language barriers.',
    technologies: ['Django REST', 'React', 'Gemini API', 'PostgreSQL', 'Python', 'Tailwind CSS'],
    codeStatus: 'LAB_PROTOTYPE',
    codeStatusNotice: 'Google Solution Challenge Submission // Developed to support regional language students.',
    collegeContext: 'Created representing Karunya University for the Google Solution Challenge to solve educational access barriers in rural institutions.',
    originStory: 'In India, thousands of brilliant engineering and science students from regional language mediums struggle when transitioning to college because advanced technical textbooks and research papers are published exclusively in English. I wanted to build an e-reader that parses PDF layouts and translates complex paragraphs into regional languages on demand while preserving equations and diagrams.',
    whyBuilt: 'Built to democratize access to advanced STEM literature for non-native English speaking students through contextual generative AI translation.',
    interestingFacts: [
      'Preserved complex PDF formatting, headers, and code blocks while translating body text into Hindi, Tamil, and Malayalam.',
      'Integrated Google Gemini API with custom prompt chunking to maintain semantic continuity across multi-page book chapters.',
      'Implemented progressive caching of translated chapters in PostgreSQL to avoid redundant API queries.'
    ],
    caseStudy: {
      problem: 'Technical books in PDF format lose formatting and diagram alignment when passed through naive machine translation tools.',
      approach: 'Constructed an extraction pipeline in Python that separates layout text from diagram figures, translates text chunks via Gemini with context preservation, and re-renders an accessible dual-language web reader.',
      architectureDescription: 'React reader UI presents side-by-side or translated text overlay. Django REST backend extracts text streams from uploaded PDFs, chunks them with overlapping boundaries, routes them to Gemini API, and caches translated pages.',
      architectureNodes: [
        { id: 'reader', name: 'Dual-Language Reader UI', type: 'client', description: 'Side-by-side original and translated viewer' },
        { id: 'backend', name: 'Django REST Parser', type: 'service', description: 'PDF text extractor and chunking engine' },
        { id: 'gemini', name: 'Google Gemini API', type: 'ai', description: 'Contextual technical translation and summarization' },
        { id: 'cache_db', name: 'PostgreSQL Cache', type: 'database', description: 'Stores translated chapters and user bookmarks' }
      ],
      architectureFlows: [
        { from: 'reader', to: 'backend', label: 'Upload PDF / Select Target Language' },
        { from: 'backend', to: 'gemini', label: 'Structured Chunk Translation Prompt' },
        { from: 'gemini', to: 'backend', label: 'Translated Markdown Output' },
        { from: 'backend', to: 'cache_db', label: 'Persist Page Translation' },
        { from: 'backend', to: 'reader', label: 'Render Synchronized Bilingual Pages' }
      ],
      challenges: [
        'Handling multi-column academic PDF layouts without mangling reading order.',
        'Translating complex technical jargon accurately without losing domain meaning.'
      ],
      results: [
        { metric: '3+', label: 'Indian Regional Languages Supported' },
        { metric: '95%', label: 'PDF Formatting Layout Preservation' },
        { metric: 'Instant', label: 'Cached Page Retrieval' }
      ],
      whatILearned: 'Document AI requires deep layout awareness; translation accuracy depends heavily on preserving paragraph context across token boundaries.',
      decisionLog: [
        {
          question: 'Why Gemini API over standard Google Translate?',
          answer: 'Gemini understands technical terminology and prompt instructions to preserve code snippets and math notations without translating variable names.'
        }
      ]
    }
  },
  {
    id: 'cisco-subnet-validator',
    code: '009',
    title: 'CISCO Subnet & Network Boundary Engine',
    tagline: 'Bitwise IPv4/IPv6 Address & Subnet Boundary Validation Suite',
    category: 'BACKEND',
    categories: ['BACKEND', 'SYSTEMS'],
    featured: false,
    timelineYear: '2021 / Cisco Internship',
    summary: 'High-performance networking utility developed during Cisco Python Programmer Internship. Performs bitwise subnet masking, prefix boundary calculations, and broadcast address validation across IPv4 and IPv6 network allocations.',
    technologies: ['Python', 'Cisco Systems', 'IPv4/IPv6', 'Bitwise Algorithms', 'Socket API'],
    codeStatus: 'LAB_PROTOTYPE',
    codeStatusNotice: 'Cisco Virtual Internship Project // Network Protocols & Routing Foundations.',
    collegeContext: 'Developed as part of the Cisco Python Programming Internship to validate carrier-grade network configuration strings.',
    originStory: 'Misconfigured subnet masks and overlapping CIDR allocations cause silent routing failures in large enterprise and campus networks. I wanted to build a rigorous programmatic validation suite that computes network addresses, broadcast limits, and host ranges down to the bit level.',
    whyBuilt: 'Built to provide network administrators and automated provisioning scripts with bulletproof CIDR boundary verification.',
    interestingFacts: [
      'Implemented custom bitwise arithmetic in Python to parse 128-bit IPv6 hexadecimal addresses without external library dependencies.',
      'Validates network prefix boundaries, private RFC 1918 allocations, and reserved multicast ranges.',
      'Achieved microsecond-level validation throughput for large batch routing tables.'
    ],
    caseStudy: {
      problem: 'Subnet misconfigurations and boundary overlaps in carrier routing tables lead to catastrophic routing loops and unreachable hosts.',
      approach: 'Engineered an algorithmic Python engine performing binary shifts and bitwise AND operations against CIDR netmasks to verify host inclusion.',
      architectureDescription: 'CLI and API tools accept IP strings, convert to binary representations, calculate network/broadcast addresses, and check for range collisions.',
      architectureNodes: [
        { id: 'input', name: 'CIDR String Stream', type: 'client', description: 'IPv4/IPv6 address blocks and routing entries' },
        { id: 'engine', name: 'Bitwise Calculation Core', type: 'service', description: 'Performs bit-level mask and boundary checks' },
        { id: 'validator', name: 'RFC Compliance Engine', type: 'service', description: 'Validates multicast, private, and reserved spaces' }
      ],
      architectureFlows: [
        { from: 'input', to: 'engine', label: 'Raw Address String' },
        { from: 'engine', to: 'validator', label: 'Computed Network Bounds' },
        { from: 'validator', to: 'input', label: 'Validation Verdict & Usable Host Range' }
      ],
      challenges: [
        'Handling non-standard variable-length subnet masks (VLSM) efficiently.',
        'Supporting IPv6 compressed notation and zero-padding variations.'
      ],
      results: [
        { metric: '100%', label: 'IPv4 & IPv6 RFC Standard Compliance' },
        { metric: '< 1ms', label: 'Bitwise Calculation Latency' }
      ],
      whatILearned: 'Writing low-level network protocol utilities builds a visceral understanding of how the internet actually transmits and routes data.',
      decisionLog: [
        {
          question: 'Why pure bitwise algorithms instead of regex?',
          answer: 'Regex cannot perform numeric range validation; bitwise math is 100x faster and mathematically infallible.'
        }
      ]
    }
  },
  {
    id: 'smart-karunya-portal',
    code: '010',
    title: 'Smart Karunya Campus Infrastructure',
    tagline: 'Enterprise University CMS & Departmental Web Services',
    category: 'WEB',
    categories: ['WEB', 'BACKEND'],
    featured: false,
    timelineYear: '2023 / CTC Karunya',
    summary: 'Enterprise web systems and departmental services developed at Karunya Computer Technology Center (CTC) using Drupal, PHP, and JavaScript to serve academic administration, admissions, and campus news for 8,000+ students and faculty.',
    technologies: ['Drupal', 'PHP', 'JavaScript', 'Nginx', 'MySQL', 'Linux'],
    codeStatus: 'ACADEMIC_IP',
    codeStatusNotice: 'Official University Web Infrastructure // Karunya Computer Technology Center.',
    collegeContext: 'Developed in-house at the university IT headquarters supporting mission-critical institutional web operations.',
    originStory: 'The university needed dynamic, responsive departmental portals that allowed faculty to publish research, update curricula, and manage event announcements without technical bottleneck.',
    whyBuilt: 'Built to unify campus digital presence, improve student information access, and provide high availability during admission surges.',
    interestingFacts: [
      'Maintained enterprise Drupal architecture serving tens of thousands of daily pageviews during university admissions.',
      'Built responsive custom theme components and secure administrative workflows.',
      'Collaborated directly with senior university system administrators on campus Linux server deployment.'
    ],
    caseStudy: {
      problem: 'Legacy web pages were fragmented across departments, causing inconsistent branding and security update lags.',
      approach: 'Consolidated departmental sites into a modern, multi-site Drupal framework with unified authentication and responsive templates.',
      architectureDescription: 'Nginx reverse proxy serves cached assets and routes requests to PHP-FPM Drupal backends connected to a tuned MySQL database cluster.',
      architectureNodes: [
        { id: 'visitors', name: 'Students & Faculty', type: 'client', description: 'Desktop and mobile browser traffic' },
        { id: 'nginx', name: 'Nginx Edge Proxy', type: 'gateway', description: 'SSL termination, caching, and rate limiting' },
        { id: 'drupal', name: 'Drupal Application Core', type: 'service', description: 'Content management and user authentication' },
        { id: 'mysql', name: 'MySQL Database', type: 'database', description: 'Stores user accounts, node content, and taxonomy' }
      ],
      architectureFlows: [
        { from: 'visitors', to: 'nginx', label: 'HTTPS Web Request' },
        { from: 'nginx', to: 'drupal', label: 'Dynamic Page Routing' },
        { from: 'drupal', to: 'mysql', label: 'SQL Query Content Node' },
        { from: 'drupal', to: 'visitors', label: 'Rendered Accessible HTML' }
      ],
      challenges: [
        'Managing traffic spikes during semester exam result announcements.',
        'Migrating legacy database schemas without losing historical academic archives.'
      ],
      results: [
        { metric: '8,000+', label: 'Active University Users Served' },
        { metric: '99.9%', label: 'Uptime During High-Traffic Admissions' }
      ],
      whatILearned: 'Enterprise web systems require disciplined caching strategies and strict content publishing permissions to stay resilient under high load.',
      decisionLog: [
        {
          question: 'Why Drupal for campus infrastructure?',
          answer: 'Drupal offers enterprise-grade role permissions and multi-site management ideal for educational institutions.'
        }
      ]
    }
  },
  {
    id: 'cv-workout-tracker',
    code: '011',
    title: 'Computer Vision Posture & Rep Tracker',
    tagline: 'Real-Time Pose Estimation & Workout Form Verification',
    category: 'AI',
    categories: ['AI'],
    featured: false,
    timelineYear: '2021 / Computer Vision Lab',
    summary: 'A computer vision application using OpenCV and TensorFlow pose estimation to analyze joint angle kinematics in real-time, detecting exercises (push-ups, squats, pull-ups), correcting posture, and automatically counting clean repetitions.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'NumPy'],
    codeStatus: 'LAB_PROTOTYPE',
    codeStatusNotice: 'Independent Computer Vision Lab Prototype // Built for Automated Athletic Training.',
    collegeContext: 'Built as an early exploration of real-time computer vision and machine learning inference.',
    originStory: 'When exercising at home without a trainer, people often perform exercises with poor form, causing injury and reducing effectiveness. I wanted to build an automated coach using just a standard webcam that calculates skeletal joint angles in real time and enforces proper range of motion before registering a repetition.',
    whyBuilt: 'Built to explore real-time machine vision inference pipelines and automate biomechanical form feedback.',
    interestingFacts: [
      'Calculated 3D joint angles (elbow, hip, knee) dynamically using vector dot products from landmark coordinates.',
      'Implemented state machines (UP vs DOWN thresholds) to prevent cheating half-reps or false double-counts.',
      'Achieved real-time 30 FPS processing on standard laptop CPUs without requiring dedicated GPUs.'
    ],
    caseStudy: {
      problem: 'Fitness trackers rely on accelerometers that cannot measure exercise posture or detect dangerous joint angles.',
      approach: 'Engineered a frame-by-frame video pipeline tracking 33 skeletal landmarks and evaluating geometric angular thresholds.',
      architectureDescription: 'Webcam frames are downsampled and fed into a convolutional pose model. Detected landmark vectors are parsed by kinematic calculation modules to verify rep states.',
      architectureNodes: [
        { id: 'camera', name: 'Webcam Video Stream', type: 'client', description: 'Raw video input frames at 30 FPS' },
        { id: 'detector', name: 'Pose Landmark Estimator', type: 'ai', description: 'Extracts 33 skeletal coordinates per frame' },
        { id: 'kinematics', name: 'Biomechanical Angle Engine', type: 'service', description: 'Computes joint angles and rep state transitions' }
      ],
      architectureFlows: [
        { from: 'camera', to: 'detector', label: 'Raw RGB Video Frame' },
        { from: 'detector', to: 'kinematics', label: 'Landmark Coordinates (x, y, z)' },
        { from: 'kinematics', to: 'camera', label: 'Overlay Rep Count & Posture Alert' }
      ],
      challenges: [
        'Filtering camera sensor noise and clothing occlusion that caused landmark coordinate jitter.',
        'Distinguishing between resting pauses and active repetition peaks.'
      ],
      results: [
        { metric: '30 FPS', label: 'Real-Time CPU Processing Speed' },
        { metric: '94%', label: 'Repetition Counting Accuracy' }
      ],
      whatILearned: 'Applying machine learning to the physical world requires combining probabilistic neural models with deterministic kinematic laws.',
      decisionLog: [
        {
          question: 'Why vector geometry over deep video classifiers?',
          answer: 'Computing joint angles with trigonometry is explainable, runs in sub-1ms, and allows strict rule definition for clean athletic form.'
        }
      ]
    }
  },
  {
    id: 'youtube-sentiment-analysis',
    code: '012',
    title: 'YouTube Comment Sentiment Analyzer',
    tagline: 'NLP Community Feedback Miner & Video Polarity Classifier',
    category: 'AI',
    categories: ['AI', 'WEB'],
    featured: false,
    timelineYear: '2022 / NLP Project',
    summary: 'Natural Language Processing pipeline that harvests thousands of viewer comments using the YouTube Data API, cleans text, and runs sentiment polarity and emotional classification to visualize audience reception and controversy trends.',
    technologies: ['Python', 'NLP', 'YouTube Data API', 'Flask', 'Chart.js'],
    codeStatus: 'LAB_PROTOTYPE',
    codeStatusNotice: 'NLP Exploratory Artifact // Audience Perception Mining.',
    collegeContext: 'Built during Natural Language Processing coursework to explore real-world social sentiment and sarcasm detection.',
    originStory: 'When a new technical product or tutorial video is released, reading thousands of comments to gauge community consensus is impossible. I wanted a tool where you paste a YouTube URL and immediately get an executive sentiment dashboard: positive vs negative breakdown, top praised features, and common user complaints.',
    whyBuilt: 'Built to automate social listening and evaluate how audiences react to controversial tech releases.',
    interestingFacts: [
      'Engineered custom text preprocessing to strip emoji patterns, handle slang, and normalize punctuation emphasis.',
      'Visualized polarity distributions and top n-gram keywords using interactive Chart.js widgets.',
      'Integrated asynchronous pagination to fetch 5,000+ comments within seconds.'
    ],
    caseStudy: {
      problem: 'Manual comment analysis is subjective and cannot scale to videos with thousands of comments.',
      approach: 'Built a Flask web app that queries YouTube Data API v3, tokenizes comment bodies, scores emotional valence using lexicon heuristics, and generates visual charts.',
      architectureDescription: 'User submits video URL. Backend worker polls comments asynchronously, runs NLP scoring, computes aggregate sentiment distributions, and returns JSON charts.',
      architectureNodes: [
        { id: 'ui', name: 'Analyzer Web UI', type: 'client', description: 'URL input and interactive sentiment charts' },
        { id: 'backend', name: 'Flask NLP Server', type: 'service', description: 'Comment cleaner and aggregation worker' },
        { id: 'yt_api', name: 'YouTube Data API', type: 'gateway', description: 'Streams video metadata and comment threads' }
      ],
      architectureFlows: [
        { from: 'ui', to: 'backend', label: 'Submit YouTube Video URL' },
        { from: 'backend', to: 'yt_api', label: 'Paginated Comment Requests' },
        { from: 'yt_api', to: 'backend', label: 'Raw Comment Strings' },
        { from: 'backend', to: 'ui', label: 'Sentiment Polarity Scorecard' }
      ],
      challenges: [
        'Handling sarcasm, informal internet slang, and multi-lingual comment mixes.',
        'Managing YouTube API rate limits and quota allocations.'
      ],
      results: [
        { metric: '5,000+', label: 'Comments Processed per Video' },
        { metric: 'Sub-3s', label: 'Full Analysis Latency' }
      ],
      whatILearned: 'Sentiment analysis on internet comments is tricky because sarcasm and internet slang frequently reverse literal word meaning.',
      decisionLog: [
        {
          question: 'Why lexicon-based NLP for social comments?',
          answer: 'Lexicon heuristics are fast, understand all-caps emphasis, exclamation marks, and common internet slang without massive GPU requirements.'
        }
      ]
    }
  },
  {
    id: 'aptitutor',
    code: '013',
    title: 'Aptitutor',
    tagline: 'AI-Powered Campus Placement & Aptitude Learning Engine',
    category: 'AI',
    categories: ['AI', 'WEB', 'BACKEND'],
    featured: false,
    timelineYear: '2024 / Placement System',
    summary: 'An intelligent aptitude drill and assessment platform engineered for campus placement preparation, featuring automated question taxonomy, step-by-step logic hints, and real-time timed mock tests.',
    technologies: ['Python', 'Django REST', 'React', 'PostgreSQL', 'Tailwind CSS', 'OpenAI/Local LLMs'],
    codeStatus: 'ACADEMIC_IP',
    codeStatusNotice: 'College Placement Preparation System // Karunya University Academic Project.',
    collegeContext: 'Engineered during pre-placement training to help engineering students master quantitative, logical, and verbal reasoning rounds.',
    originStory: 'During final year campus recruitment drives, students were practicing from dry, static 800-page PDF question banks. When stuck, they had to flip through hundreds of pages to find cryptic one-line solutions with no explanation of how the answer was reached. I built Aptitutor: an interactive online training portal that provides progressive, step-by-step logic hints (concept hint first, then formula, then full step-by-step breakdown) so students learn how to think through problems instead of memorizing answers.',
    whyBuilt: 'Built to empower peers with self-paced adaptive problem solving and interactive mock placement rounds without manual evaluation overhead.',
    interestingFacts: [
      'Replaced static 800-page campus placement PDF files with an interactive, searchable aptitude portal.',
      'Features a 3-tier progressive hint system: conceptual clue -> mathematical formula -> full step-by-step solution breakdown.',
      'Tracks student accuracy per topic (Time & Work, Permutations, Syllogisms) to pinpoint areas needing practice.',
      'Includes real-time countdown timer simulations mirroring actual corporate placement screening tests.'
    ],
    caseStudy: {
      problem: 'Static PDF aptitude papers provide zero feedback, no progressive hints, and cannot simulate real-time corporate exam pressure.',
      approach: 'Constructed a Django REST API backend coupled with a responsive React frontend, persisting question taxonomy, user attempt histories, and dynamic hint revelations in PostgreSQL.',
      architectureDescription: 'Students select difficulty and topic. Django REST delivers randomized question batches. Frontend tracks timer and user answers, submitting attempts back to PostgreSQL with immediate graphical scorecard breakdowns.',
      architectureNodes: [
        { id: 'student', name: 'Student Portal UI', type: 'client', description: 'Interactive quiz and timed exam workspace' },
        { id: 'api', name: 'Django REST Engine', type: 'gateway', description: 'Question router and score calculator' },
        { id: 'db', name: 'PostgreSQL Datastore', type: 'database', description: 'Question bank, hints, and historical student scorecards' }
      ],
      architectureFlows: [
        { from: 'student', to: 'api', label: 'Fetch Topic Quiz' },
        { from: 'api', to: 'db', label: 'Query Categorized Questions' },
        { from: 'student', to: 'api', label: 'Submit Answers & Hint Requests' },
        { from: 'api', to: 'student', label: 'Real-Time Score & Performance Breakdown' }
      ],
      challenges: [
        'Structuring question metadata to support dynamic LaTeX mathematical formulas.',
        'Preventing exam page reload tampering while maintaining test session state.'
      ],
      results: [
        { metric: '100+', label: 'Aptitude Questions Categorized' },
        { metric: '3-Tier', label: 'Progressive Logic Hint Engine' },
        { metric: 'Real-Time', label: 'Timed Exam Simulation' }
      ],
      whatILearned: 'Educational software succeeds when it respects the learner\'s mental model. Progressive hints create genuine understanding where static answer keys fail.',
      decisionLog: [
        {
          question: 'Why Django REST for the backend?',
          answer: 'Django\'s built-in ORM and admin interface made it effortless to curate, tag, and organize complex math question banks with LaTeX formatting.'
        }
      ]
    }
  },
  {
    id: 'guided-project-platform',
    code: '014',
    title: 'Guided Project Platform',
    tagline: 'Structured Milestone-Driven Student Software Engineering Roadmap',
    category: 'WEB',
    categories: ['WEB', 'BACKEND'],
    featured: false,
    timelineYear: '2023 — 2024 / Campus Platform',
    summary: 'A milestone-based project guidance platform breaking full-stack development into progressive, verifiable sprints with automated rubric checks, GitHub repository checkpoints, and peer review workflows.',
    technologies: ['React', 'Django REST', 'PostgreSQL', 'Docker', 'Git Integration'],
    codeStatus: 'ACADEMIC_IP',
    codeStatusNotice: 'Campus Engineering Practical Platform // Karunya University Academic Project.',
    collegeContext: 'Created to bridge the gap between classroom theory and real full-stack software development for undergraduate students.',
    originStory: 'Junior students frequently suffered from "blank canvas paralysis" when assigned their first semester mini-projects. They knew basic syntax but had no idea how to structure a full-stack repo, design a relational schema, or connect REST endpoints. I built the Guided Project Platform to break large software projects down into structured, sequential sprint milestones with automated checklist verifications at each stage.',
    whyBuilt: 'Built to structure college engineering practical projects into professional, production-like sprint milestones rather than last-minute cramming.',
    interestingFacts: [
      'Converts vague academic project prompts into 5 sequential engineering gates: Architecture, Schema, Backend, Frontend, and Deployment.',
      'Students cannot unlock subsequent development gates until earlier foundational checks (like DB migrations) are verified.',
      'Included sample boilerplate templates and architectural diagrams to guide students through common design patterns.'
    ],
    caseStudy: {
      problem: 'Undergraduates struggle to architect full-stack applications without structured milestone guidance and scaffolding.',
      approach: 'Designed a milestone-driven management portal in Django REST and React that guides students through sequential software delivery phases with automated checkpoint rubrics.',
      architectureDescription: 'Students enroll in a project track (e.g. MERN or Django). The platform guides them through milestone gates, validating GitHub commit links and endpoint responses before unlocking the next sprint phase.',
      architectureNodes: [
        { id: 'portal', name: 'Student Roadmap UI', type: 'client', description: 'Step-by-step milestone and architecture guide' },
        { id: 'backend', name: 'Milestone Engine', type: 'gateway', description: 'Validates task deliverables and checklists' },
        { id: 'db', name: 'Roadmap DB', type: 'database', description: 'Stores sprint templates, rubric states, and student progress' }
      ],
      architectureFlows: [
        { from: 'portal', to: 'backend', label: 'Submit Milestone Deliverable' },
        { from: 'backend', to: 'db', label: 'Verify Checklist & Gate Criteria' },
        { from: 'backend', to: 'portal', label: 'Unlock Next Sprint Phase' }
      ],
      challenges: [
        'Defining modular project milestones that remain flexible across diverse technology stacks.',
        'Designing clean UI cards for multi-week sprint roadmaps without cognitive overload.'
      ],
      results: [
        { metric: '5 Gates', label: 'Sequential Architecture Milestones' },
        { metric: '100%', label: 'Structured Sprint Guidance' }
      ],
      whatILearned: 'Scaffolding complex technical journeys transforms intimidating engineering challenges into manageable, confidence-building steps.',
      decisionLog: [
        {
          question: 'Why gate progress behind milestone checks?',
          answer: 'Enforcing architectural gates prevents students from jumping straight to frontend styling before designing clean database schemas.'
        }
      ]
    }
  }
];
