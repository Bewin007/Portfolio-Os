# Master Engineering Dossier & System Knowledge Base (`Datas.md`)

> **Document Purpose:** Single source of truth for Bewin Felix's engineering achievements, hackathons, verified technical roles, and project architectures. Maintained as a structured reference for drafting targeted resumes, technical portfolios, and interview talking points.  
> **Last Updated:** October 2026 · Portfolio Version: `v1.0.1`  
> **Current Role:** Specialist Programmer at Infosys (August 2025 – Present)  
> **Target Roles:** Full Stack Developer · Backend / Distributed Systems Engineer · GenAI / LLM Platform Engineer  

---

## 1. Executive Bio & Contact

* **Full Name:** Bewin Felix R A
* **Current Title:** Specialist Programmer, Infosys
* **Education:** B.Tech in Computer Science and Engineering (2021 – 2025), Karunya Institute of Technology and Sciences, Coimbatore
* **Location:** Coimbatore / Nagercoil, India · Open to Relocate / Remote
* **Contact:**
  * **Email:** `biwinfelix@gmail.com`
  * **Phone:** `+91 7598393250`
  * **LinkedIn:** [linkedin.com/in/bewin-felix-4153a9232](https://linkedin.com/in/bewin-felix-4153a9232)
  * **GitHub:** [github.com/Bewin007](https://github.com/Bewin007)
* **Summary Statement:**
  > Full-stack and systems engineer with deep expertise in scalable backend services (FastAPI, Django, PostgreSQL, Docker), interactive frontend interfaces (React TSX, Recharts), and high-throughput generative AI infrastructure (Triton Inference Server with `vllm_backend`, NeMo Guardrails, Milvus). Proven track record across national hackathons (Smart India Hackathon 2023 National Finalist, KAVACH 2023 Finalist, TN Police Hackathon Finalist) and campus-scale production platforms serving 8,000+ users.

---

## 2. Technical Stack Directory

### Languages
* **Primary:** Python (Advanced), TypeScript, JavaScript (ES6+), SQL
* *(Note: Java and C/C++ have been intentionally removed from primary technical stack as per current focus)*

### Frontend Development
* **Libraries & Frameworks:** React.js (TSX), Vite, Tailwind CSS, Recharts (Data Visualizations), HTML5, Modern CSS3, Material UI
* *(Note: Next.js has been intentionally removed)*

### Backend & Distributed Systems
* **Frameworks & Runtimes:** FastAPI (Async/Pydantic), Django, Django REST Framework, Node.js, Express.js
* **Architecture:** RESTful APIs, Asynchronous Queues, Service Isolation, Bitwise Algorithms, Linux System Daemons

### Databases, Storage & Vector
* **Relational:** PostgreSQL (Complex Joins, Aggregations, Index Optimization)
* **NoSQL:** MongoDB
* **Vector Store:** **Milvus** (Dense vector embeddings for hybrid retrieval)
* **Caching:** Redis

### Generative AI & Inference Systems
* **Inference Serving:** Triton Inference Server with `vllm_backend` (`triton-inference-server/vllm_backend`)
* **Hardware Deployments:** Multi-GPU `4x L40S` cluster
* **Safety & Rails:** NeMo Guardrails (NVIDIA), Pydantic Schema Validation
* **Architectures:** Hybrid Semantic Retrieval (BM25 + Milvus dense vectors), Cross-Encoder Re-rankers, Corrective RAG (CRAG), Agent State Machines
* **Interfaces & Ops:** Open WebUI, Graylog (Token & Latency Observability)

### Infrastructure & DevOps
* **Containers & Orchestration:** Docker, Docker Compose, Kubernetes, Nginx
* **Operating Systems:** Linux (Ubuntu/Debian), Shell/Bash Scripting
* **Network & Security Tooling:** Zeek (Bro) Network Analysis, Unbound DNS Resolver, Wireshark / TShark, Volatility (Memory Forensics), Linux `iptables`
* *(Note: Traefik has been intentionally removed)*

---

## 3. Verified Hackathons & Competitions Timeline

| Event | Date | Location / Authority | Team & Problem Statement | Project Name & Solution | Result / Level |
|---|---|---|---|---|---|
| **Tamil Nadu Police Hackathon 2023** | **March 28–29, 2023** | Chennai Finals · Tamil Nadu Police Department | **Team T3tra** | **SocialEye**: YouTube OSINT & video forensic analysis engine for cybercrime investigators | **State Grand Finale Finalist** (Top 300 state teams) |
| **KAVACH 2023 Cybersecurity Hackathon** | **August 2023** | Odisha Grand Finale · AICTE & Ministry of Education, Govt of India | Cybercrime & Digital Forensics | **Hardware Forensic Suite**: Portable virtualized Intel NUC running Volatility, Sleuth Kit, and TShark with court-admissible PDF reports | **National Grand Finale Finalist** (Selected out of 3,800 national teams) |
| **Smart India Hackathon (SIH) 2023** | **December 2023** | Gujarat Grand Finale · AICTE & MoE / ISRO | **Team NetOptics** · ISRO Problem Statement **SIH1524** | **SIH DNS Threat Filter**: Real-time packet tap with Zeek, Unbound DNS caching, DGA ML detection, Grafana dashboard, and 6-hr async crawler fallback | **National Grand Finale Finalist** (Top 0.1% out of 44,000 national teams) |
| **Smart India Hackathon (SIH) 2024** | **October 2024** | Karunya University Institutional Selection | **Team Night's Watch** · Problem Statement **1741** | **RAG Endpoint Firewall Agent**: Centralized application-context aware firewall daemon using hybrid RAG (Milvus) to dynamically synthesize verified Linux iptables rules | **Institutional College Finalist** |

---

## 4. Leadership, Community & Campus Career

### KHacks (Student-Run Organization · Motto: "Learn, Build, Compete")
* **July 2022:** Joined KHacks as a contributing member.
* **December 2022:** Elevated to **Core Team Member**.
  * Conducted multiple technical workshops (averaging **2–4 workshops per month**) with **50–300+ participants** per session depending on venue, covering Docker containerization, Git workflows, and backend architectures for students across schools and colleges.
* **August – September 2023:** **Founder & Head of Web & App Development Club**.
  * Planned and executed the club's comprehensive roadmap.
  * Trained **200+ engineering students** in modern web development, actively encouraging and mentoring them into competitive hackathons and internal university development projects.
* **December 2024:** Transitioned to **Mentor**.
  * Voluntarily stepped down as the active executive lead to establish succession and empower the next generation of club leadership, continuing to serve as technical advisor.

### Karunya "Earn While You Learn" Scheme (2023 – 2025)
* Participated during summer breaks (2023–2025) in Karunya's competitive, paid student engineering initiative.
* Led student development teams delivering mission-critical internal university web tools and services, bridging academic theory with production deployment constraints.

### Karunya Computer Technology Center (CTC) Summer Internships
* **2022–2023 Summer:**
  * Explored laboratory virtualization systems, analyzing hardware and software reuse feasibility and constraints across university computer labs.
  * Initiated the **Smart Karunya** project: architected a centralized campus digital twin proof-of-concept to capture air pollution, weather forecasting, soil moisture, and electricity billing metrics. Spent 50 days gathering technical documentation and building initial POCs.
* **2024–2025 Summer:**
  * Explored a ground-up redesign of the primary campus web portal by heavily customizing Drupal templates. (Later shelved due to institutional budget and resource allocation).

---

## 5. Flagship Projects Deep Dive

### 1. `sofie(Chatbot)` (Formerly `chat.karunya.edu`)
* **Role:** Lead Architect & Systems Engineer
* **Scope:** Campus-wide private AI chatbot platform serving **8,000+ university students, faculty, and research labs**.
* **Key Architecture & Technologies:**
  * **Inference Serving:** Triton Inference Server with `vllm_backend` (`https://github.com/triton-inference-server/vllm_backend`) deployed on a private multi-GPU **4x L40S** server cluster.
  * **Safety Rails:** **NeMo Guardrails** enforcing strict institutional guidelines, prompt injection suppression, and student assignment compliance (preventing raw copy-paste code while guiding conceptual problem-solving).
  * **Frontend & Gateways:** Open WebUI containerized with custom university SSO and FastAPI middleware.
  * **Observability:** Centralized Graylog telemetry monitoring token generation latencies, GPU temperatures, and safety tripwires.
* **Key Workload:** Automatically evaluated and verified technical procedure manuals for **500+ student teams** participating in internal college-level SIH hackathons where experienced faculty evaluators were scarce.
* **Metrics / Outcomes:** 100% on-premise university data privacy; zero recurring cloud API subscription costs; resilient continuous batching across 4x L40S GPUs. *(Note: All previous "sub-80ms" claims have been removed).*

### 2. Enterprise Analytics & Demand Report Engine (Infosys)
* **Role:** Specialist Programmer (August 2025 – Present)
* **Scope:** Internal enterprise Demand Analytics and resource allocation engine.
* **Key Architecture & Technologies:**
  * **Frontend:** React (TSX), Recharts, Tailwind CSS.
  * **Backend:** FastAPI (Async endpoints, Pydantic schemas), PostgreSQL, Docker.
  * *(Note: LangGraph and Node.js are excluded from this module).*
* **What Bewin Built:**
  * **Demand Module:** Designed and implemented 4–5 dynamic interactive analytical views visualizing:
    1. Talent on the bench (bench counts by skillset and tenure).
    2. Active incoming project demands requiring engineering talent.
    3. Allocated talent pending final confirmation.
    4. Bench utilization vs unassigned headcount.
  * **Automated Fulfillment Reporting:** Engineered report generation reconciling demands against allocated talent, providing delivery and resource managers with instant visibility into staffing bottlenecks and surplus talent.

### 3. CodeTutor (Lab Management & Automated Evaluation Platform)
* **Role:** Full-Stack Developer & Department Lead
* **Scope:** Academic lab evaluation platform deployed in production for an active laboratory section of **70 students** in the Department of Computer Science and Engineering.
* **Key Architecture & Technologies:**
  * **Stack:** Django, Django REST Framework, React.js, PostgreSQL, Docker, Tailwind CSS.
  * **Compilation Engine:** Integrated **Judge0** API for compiling and evaluating student code in **Python, C, C++, and Java** against parameterized test cases.
  * **Experimental Docker Runner:** Engineered a custom Docker runner engine for executing React and Node.js environments. (Kept experimental and not promoted to production due to complexities in programmatically verifying dynamic client-side rendering).
  * **Viva Voce Engine:** Automated randomized technical viva questioning modules and scoring rubrics.
* **Outcomes:** Cut faculty grading time by over 75%; eliminated paper rosters; generated tamper-evident, auditable PDF grade sheets with test-case breakdowns.

### 4. SIH DNS Threat Filter (SIH 2023 National Grand Finale · Team NetOptics)
* **Authority:** Ministry of Education & AICTE / ISRO Problem Statement SIH1524 (Gujarat Finals).
* **Key Architecture & Technologies:**
  * Python, Zeek (Bro) Network Analysis, Unbound DNS Resolver, PCAP parsing, Django REST, Grafana.
  * In-flight DNS packet capture tapped from recursive Unbound resolvers into Zeek protocol streams.
  * Machine learning classifier evaluating domain entropy and DGA botnet signatures in real time.
* **The 2:00 PM Emergency Hackathon Sprint:**
  * At 2:00 PM (6 hours before the 8:00 PM jury deadline), the model began misclassifying legitimate high-traffic domains (e.g. tagging X.com as adult content).
  * Rather than risking a 5-hour model retrain, Bewin engineered an asynchronous secondary crawler in Python (`httpx` + `BeautifulSoup`).
  * The crawler scraped page titles and meta semantics in under 350ms in the background, dynamically overriding false positives without adding latency to DNS resolution. Shipped live before the 8:00 PM deadline to government evaluators.
* **Outcomes:** National Grand Finale Finalist (Top 0.1% of 44,000 teams across India); 97.4% DGA threat identification accuracy; < 5ms clean query lookup overhead.

### 5. RAG Endpoint Firewall Agent (SIH 2024 College Finalist · Team Night's Watch)
* **Authority:** Smart India Hackathon 2024 Problem Statement 1741 ("Centralized application-context aware firewall").
* **Key Architecture & Technologies:**
  * Python, FastAPI, Hybrid RAG, **Milvus** vector database, Linux `iptables`, React, Docker.
  * Lightweight endpoint daemon monitoring host socket activity and streaming behavioral anomalies over mTLS.
  * Centralized orchestrator matches anomalous telemetry against CVE and Mitre ATT&CK patterns indexed in Milvus.
  * Generates hardened packet-filtering policies applied directly to host Linux kernel tables.
  * **Deterministic Guardrails:** Hardcoded immutable whitelists for critical system ports (22, 53, 80, 443) preventing automated self-lockout.

### 6. Hardware Forensic Suite (KAVACH 2023 National Grand Finale)
* **Authority:** AICTE & Ministry of Education, Govt of India (Odisha Finals).
* **Key Architecture & Technologies:**
  * Intel NUC portable form factor, Volatility (RAM analysis), Sleuth Kit (Disk forensics), TShark / Wireshark (Network PCAP), Python, Linux.
  * Self-contained, write-blocked portable hardware appliance capable of field triage on seized media without corrupting volatile memory.
  * Automated report generator synthesizing memory strings, process trees, and cryptographic SHA-256 hashes into court-admissible PDF dossiers.
* **Outcomes:** National Grand Finale Finalist (Top 1% of 3,800 national teams across India).

### 7. SocialEye (Tamil Nadu Police Hackathon 2023 · Team T3tra)
* **Authority:** Tamil Nadu Police Department (Chennai Finals, March 28–29, 2023).
* **Key Architecture & Technologies:**
  * Python, OpenCV, YouTube Data API, OSINT tools, FastAPI.
  * Automated video scraping, frame extraction, sentiment categorization, and visual keyword indexing to assist cybercrime investigators tracking malicious content.
* **Outcomes:** State Grand Finale Finalist out of 300 competing engineering teams.

---

## 6. Targeted Resume Bullet Points (Tailored by Role)

### For Full-Stack Developer Roles
* Engineered the core **Demand Module** for Infosys' enterprise resource platform using **React (TSX)**, **FastAPI**, and **PostgreSQL**, delivering 4–5 dynamic **Recharts** analytical views that track bench talent vs. open project demands.
* Automated enterprise demand-vs-talent fulfillment reporting, reducing manual spreadsheet reconciliation time by over 75% for project and delivery managers.
* Architected **CodeTutor**, a university lab management platform deployed for 70 students, integrating **Judge0** API for multi-language program verification (Python, C, C++, Java) and interactive viva grading.
* Developed responsive single-page applications with clean component state, sub-second query caching, and Docker containerization across Linux environments.

### For Backend & Distributed Systems Roles
* Architected high-throughput asynchronous REST APIs using **FastAPI** and **Django REST Framework**, backed by optimized **PostgreSQL** query pipelines and connection pooling.
* Designed an AI-driven DNS packet anomaly detection service using **Zeek** protocol tapping and an **Unbound DNS** caching resolver, selected as **National Grand Finale Finalist** out of 44,000 teams in **Smart India Hackathon 2023**.
* Engineered an asynchronous background web crawler in Python during an emergency 6-hour hackathon sprint to dynamically inspect in-flight web metadata (< 350ms) and eliminate false-positive security sinkholes.
* Built lightweight Linux endpoint daemon hooks to analyze live socket traffic and apply dynamic **iptables** packet filtering with deterministic whitelist protection against system lockouts.

### For GenAI & LLM Platform Roles
* Spearheaded **sofie(Chatbot)**, an institutional LLM platform serving **8,000+ university users**, deploying open-source LLaMA models on a private **4x L40S GPU** cluster using **Triton Inference Server** with `vllm_backend`.
* Implemented **NeMo Guardrails** and custom FastAPI moderation middleware to prevent prompt injection and enforce pedagogical compliance across student coursework.
* Integrated **Milvus** vector database with sparse lexical search (BM25) and Cross-Encoder re-rankers for hybrid retrieval in a host endpoint security firewall agent (SIH 2024 Finalist).
* Configured enterprise **Graylog** observability pipelines to monitor token generation latencies, GPU thermals, and guardrail tripwires in production.
