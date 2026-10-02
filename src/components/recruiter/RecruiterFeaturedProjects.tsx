import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { projectArchive } from '../../data/projects';
import { sounds } from '../../utils/audio';
import { GithubIcon } from '../common/BrandIcons';
import { 
  FileText, 
  ArrowRight, 
  Layers
} from 'lucide-react';

interface RecruiterFeaturedProjectsProps {
  onOpenCaseStudy: (projectId: string, initialTab?: 'origin' | 'architecture' | 'decisions' | 'metrics') => void;
  onExploreMore?: () => void;
}

interface FlagshipConfig {
  id: string;
  displayTitle: string;
  resultOpening: string;
  keyMetrics: { label: string; value: string }[];
  technologies: string[];
}

const flagshipConfigs: Record<string, FlagshipConfig> = {
  'chat-karunya': {
    id: 'chat-karunya',
    displayTitle: 'sofie(Chatbot)',
    resultOpening: 'On-premise AI platform for 8,000+ university users powered by Triton vllm_backend and NeMo Guardrails on 4x L40S GPUs.',
    keyMetrics: [
      { value: '8,000+', label: 'Campus Users' },
      { value: '4x L40S', label: 'Multi-GPU Cluster' },
      { value: 'Zero Cost', label: 'Recurring API Fees' },
    ],
    technologies: ['Triton vllm_backend', 'NeMo Guardrails', 'Open WebUI', 'FastAPI', 'Docker'],
  },
  'sih-dns-filter': {
    id: 'sih-dns-filter',
    displayTitle: 'SIH DNS Threat Filter',
    resultOpening: 'National Grand Finale Finalist (SIH 2023, top 0.1% of 44,000 teams) — high-accuracy packet inspection and DNS threat sinkholing with <5ms lookup overhead.',
    keyMetrics: [
      { value: 'Top 0.1%', label: 'Of 44k National Teams' },
      { value: '97.4%', label: 'Threat Accuracy' },
      { value: '< 5ms', label: 'Lookup Overhead' },
    ],
    technologies: ['Python', 'Zeek', 'Unbound DNS', 'PCAP Analysis', 'React'],
  },
  'infosys-dashboard-reporter': {
    id: 'infosys-dashboard-reporter',
    displayTitle: 'Enterprise Analytics & Automated Report Engine',
    resultOpening: 'Internal enterprise Demand Module at Infosys, delivering interactive Recharts visualizations and automated talent-allocation reports.',
    keyMetrics: [
      { value: 'Demand Module', label: 'Bench & Allocation' },
      { value: 'Dynamic Visuals', label: 'Recharts Breakdown' },
      { value: 'Production', label: 'Infosys Enterprise Tool' },
    ],
    technologies: ['React (TSX)', 'FastAPI', 'Recharts', 'PostgreSQL', 'Docker'],
  },
};

export const RecruiterFeaturedProjects: React.FC<RecruiterFeaturedProjectsProps> = ({
  onOpenCaseStudy,
  onExploreMore,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Exactly Top 3 Projects for genuinely short, high-impact recruiter scan
  const topProjectIds = ['chat-karunya', 'sih-dns-filter', 'infosys-dashboard-reporter'];
  const topProjects = topProjectIds
    .map((id) => projectArchive.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const handleOpenStudy = (id: string, tab: 'origin' | 'architecture' = 'origin') => {
    sounds.playBlip(750, 0.02);
    onOpenCaseStudy(id, tab);
  };

  return (
    <section id="projects" className="py-14 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Top Proven Systems</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="text-xs font-mono text-neutral-400 bg-neutral-900/60 px-3 py-1.5 rounded-xl border border-white/5 w-fit">
          <span>TOP 3 ARCHITECTURES // SCANNABLE</span>
        </div>
      </div>

      {/* 3 Compact, Result-Led Cards without CASE numbers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {topProjects.map((project, idx) => {
          const cfg = flagshipConfigs[project.id];
          const title = cfg?.displayTitle || project.title;
          const opening = cfg?.resultOpening || project.tagline;
          const metrics = cfg?.keyMetrics || [
            { value: 'Verified', label: 'Outcome' },
            { value: 'High', label: 'Performance' },
          ];
          const techList = cfg?.technologies || project.technologies.slice(0, 4);

          return (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header: Clean Category Badge & Timeline Year (CASE numbers removed) */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/5 font-mono text-xs text-neutral-400">
                  <span className="text-cyan-400 font-semibold">{project.category}</span>
                  <span className="text-neutral-500 text-[11px] truncate max-w-[200px]">
                    {project.timelineYear}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                  {title}
                </h3>

                {/* Result-Led One-Line Opening Description */}
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-5">
                  {opening}
                </p>

                {/* 2-3 Compact Outcome Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-xl bg-neutral-900/90 border border-white/5 text-center flex flex-col justify-center"
                    >
                      <div className="font-mono font-bold text-xs text-emerald-400 truncate">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-sans leading-tight mt-0.5 truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {techList.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-neutral-900 border border-white/5 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Case Study + Architecture Diagram Evidence Link */}
              <div className="space-y-2 pt-4 border-t border-white/5">
                <button
                  onClick={() => handleOpenStudy(project.id, 'origin')}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn shadow-md active:scale-[0.98]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenStudy(project.id, 'architecture')}
                    className="flex-1 py-2 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-mono text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5"
                    title="Inspect Interactive Architecture Diagram"
                  >
                    <Layers className="w-3 h-3 text-cyan-400" />
                    <span>Architecture Diagram</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white font-mono text-[11px] transition-colors flex items-center gap-1"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Subtle Link to Full Archive */}
      {onExploreMore && (
        <div className="mt-8 text-center">
          <button
            onClick={onExploreMore}
            className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-cyan-300 transition-colors group"
          >
            <span>Showing top 3 flagship architectures</span>
            <span className="text-neutral-600">•</span>
            <span className="text-cyan-400 font-semibold group-hover:underline">
              View all 14 projects in archive →
            </span>
          </button>
        </div>
      )}
    </section>
  );
};
