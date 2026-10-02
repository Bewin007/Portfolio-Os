import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Layout, Server, Database, Container, Bot } from 'lucide-react';

interface TechCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderColor: string;
  description: string;
  skills: { name: string; tag?: string }[];
}

const techCategories: TechCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    description: 'Typed systems, scripting, and backend API engineering',
    skills: [
      { name: 'Python', tag: 'Primary' },
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    description: 'Component architecture, responsive SPAs, and data visualization',
    skills: [
      { name: 'React.js', tag: 'Core' },
      { name: 'Vite' },
      { name: 'Tailwind CSS' },
      { name: 'Recharts' },
      { name: 'Material UI' },
      { name: 'HTML5 & CSS3' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    accentColor: 'text-sky-400',
    borderColor: 'border-sky-500/20',
    description: 'High-concurrency microservices, async APIs, and ORM pipelines',
    skills: [
      { name: 'FastAPI', tag: 'Primary' },
      { name: 'Django' },
      { name: 'Django REST Framework' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'RESTful Architecture' },
    ],
  },
  {
    title: 'Databases & Vector',
    icon: Database,
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    description: 'Relational data modeling, vector stores, and caching layers',
    skills: [
      { name: 'PostgreSQL', tag: 'Relational' },
      { name: 'MongoDB', tag: 'NoSQL' },
      { name: 'Milvus', tag: 'Vector Store' },
      { name: 'Redis', tag: 'Cache' },
    ],
  },
  {
    title: 'Infrastructure',
    icon: Container,
    accentColor: 'text-indigo-400',
    borderColor: 'border-indigo-500/20',
    description: 'Container orchestration, reverse proxies, and deployment pipelines',
    skills: [
      { name: 'Docker', tag: 'Containerization' },
      { name: 'Kubernetes' },
      { name: 'Nginx' },
      { name: 'Linux / Bash' },
    ],
  },
  {
    title: 'AI / GenAI',
    icon: Bot,
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    description: 'Autonomous workflows, dense vector retrieval, and model serving',
    skills: [
      { name: 'Triton vllm_backend', tag: 'Serving' },
      { name: 'NeMo Guardrails' },
      { name: 'RAG & Milvus Retrieval' },
      { name: 'Agent Workflows' },
      { name: 'Open WebUI' },
      { name: 'Structured Outputs' },
    ],
  },
];

export const TechnicalStackSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>Core Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Technical Stack
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl font-sans">
          Grounded strictly in production systems, university deployments, and verified hackathons. Grouped by architectural responsibility.
        </p>
      </div>

      {/* Grouped Stack Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`p-6 rounded-2xl bg-neutral-950/70 border border-white/10 hover:${cat.borderColor} transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl bg-neutral-900 border border-white/5 ${cat.accentColor}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 font-sans mb-5 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skills Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900/90 border border-white/5 text-xs font-mono text-neutral-200 hover:border-white/20 transition-colors"
                  >
                    <span>{skill.name}</span>
                    {skill.tag && (
                      <span className={`text-[9px] px-1 py-0.2 rounded font-semibold bg-neutral-950 ${cat.accentColor}`}>
                        {skill.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
