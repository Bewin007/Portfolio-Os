import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Infosys',
    role: 'Specialist Programmer',
    period: 'August 2025 — Present',
    location: 'Coimbatore / Enterprise Engineering',
    isCurrent: true,
    summary:
      'Engineered the internal Demand Module focused on real-time talent visualization, bench analytics, and automated demand-vs-talent fulfillment reporting.',
    responsibilities: [
      'Developed interactive visualization dashboards with Recharts rendering 4–5 dynamic chart views tracking talent bench counts, active demands, unconfirmed allocations, and fulfillment ratios.',
      'Built automated demand-vs-talent reporting pipelines delivering structured executive breakdowns on assigned personnel and available bench strength.',
      'Engineered high-performance asynchronous aggregation endpoints and queries using FastAPI and PostgreSQL, adhering to strict enterprise confidentiality standards.',
    ],
    technologies: ['React (TSX)', 'FastAPI', 'Recharts', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
  },
  {
    company: 'Karunya University',
    role: 'Campus Developer & KHacks App & Web Club Lead',
    period: '2023 — 2025',
    location: 'Coimbatore, India',
    isCurrent: false,
    summary:
      'Led web and campus development initiatives, deployed the institutional AI chatbot, and conducted regular technical workshops for university and inter-college students.',
    responsibilities: [
      'Deployed sofie(Chatbot), Karunya’s institutional campus AI chatbot platform utilizing Triton Inference Server with vllm_backend on a multi-GPU 4x L40S cluster with NeMo Guardrails.',
      'Engineered CodeTutor, an automated lab grading and viva evaluation platform for Python, C, C++, and Java integrated with Judge0 for code compilation across 70 students.',
      'Conducted 2–4 hands-on workshops per month (with 50–300+ participants per venue) on Web Development, Docker containerization, and modern backend architectures as KHacks Lead.',
      'Trained 200+ students in modern web development and led development teams through Karunya’s Earn While You Learn scheme on internal campus software systems.',
    ],
    technologies: ['Triton vllm_backend', 'NeMo Guardrails', 'Python', 'FastAPI', 'Django REST', 'React', 'Judge0', 'Docker'],
  },
  {
    company: 'Cisco',
    role: 'Python Programmer Intern',
    period: 'May 2022 — July 2022',
    location: 'Virtual Internship',
    isCurrent: false,
    summary:
      'Completed software engineering internship focused on algorithmic networking, IP subnet calculations, and automation scripting.',
    responsibilities: [
      'Engineered bitwise IPv4 and IPv6 subnet calculation modules validating network boundaries, broadcast addresses, and CIDR masks.',
      'Automated IP range split allocations and routing table configuration scripts using standard Python network libraries.',
      'Gained deep foundational mastery of network OSI layers, socket communication, and algorithmic efficiency under constraints.',
    ],
    technologies: ['Python', 'Network Algorithms', 'IPv4/IPv6', 'Bitwise Logic', 'Automation'],
  },
];

export const ProfessionalExperience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-2">
          <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
          <span>Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Professional Experience
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl font-sans">
          Factual timeline of software engineering roles, enterprise responsibilities, and campus infrastructure leadership.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company + exp.period}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={`p-7 sm:p-8 rounded-3xl bg-neutral-950/80 border transition-all duration-300 ${exp.isCurrent
                ? 'border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.06)]'
                : 'border-white/10 hover:border-white/20'
              }`}
          >
            {/* Top row: Company, Role, Period, Location */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/5">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <h3 className="text-2xl font-display font-bold text-white">
                    {exp.company}
                  </h3>
                  {exp.isCurrent && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>PRESENT ROLE</span>
                    </span>
                  )}
                </div>

                <div className="text-base font-mono font-semibold text-cyan-300">
                  {exp.role}
                </div>
              </div>

              <div className="flex flex-col md:items-end font-mono text-xs text-neutral-400 gap-1">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-500 text-[11px]">
                  <MapPin className="w-3 h-3" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Summary & Responsibilities */}
            <div className="mb-6">
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed mb-4">
                {exp.summary}
              </p>

              <ul className="space-y-2.5">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400/80 mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Strip */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-neutral-500 uppercase mr-1">
                Stack:
              </span>
              {exp.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-900 border border-white/5 text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
