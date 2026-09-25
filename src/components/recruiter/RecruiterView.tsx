import React, { useState } from 'react';
import { journeyChapters } from '../../data/journey';
import { projectArchive } from '../../data/projects';
import { sounds } from '../../utils/audio';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { 
  CheckCircle2, 
  Copy, 
  Download, 
  Briefcase, 
  Calendar, 
  Layers, 
  ArrowRight
} from 'lucide-react';

interface RecruiterViewProps {
  onSwitchToStory: () => void;
  onOpenCaseStudy: (id: string) => void;
}

export const RecruiterView: React.FC<RecruiterViewProps> = ({ onSwitchToStory, onOpenCaseStudy }) => {
  const [copied, setCopied] = useState(false);
  const email = 'biwinfelix@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    sounds.playConfirm();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadResume = () => {
    sounds.playConfirm();
    window.open('/Resume.pdf', '_blank');
  };

  const featuredProjects = projectArchive.filter((p) => p.featured);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Top Banner Explaining Recruiter Mode */}
      <div className="mb-10 p-5 rounded-2xl bg-neutral-900/80 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-emerald-400">RECRUITER MODE ACTIVE</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-800 text-neutral-300">
                SCANNABLE EXECUTIVE SUMMARY
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">
              Optimized for rapid technical evaluation. You can return to the cinematic story mode at any time.
            </p>
          </div>
        </div>

        <button
          onClick={onSwitchToStory}
          className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition-colors flex-shrink-0"
        >
          <span>RETURN TO STORY MODE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Candidate Profile Dossier Card */}
      <div className="p-8 rounded-3xl glass-panel border border-white/10 mb-12 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CANDIDATE // BEWIN FELIX R A</span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">SPECIALIST PROGRAMMER @ INFOSYS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-2">
              Bewin Felix R A
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 font-sans max-w-2xl leading-relaxed">
              Specialist Programmer at <strong>Infosys</strong> (August 2025 – Present) and B.Tech CSE Graduate from Karunya University. Specialized in <strong>Full Stack Web Development</strong> and <strong>Agentic AI Engineering</strong>. <strong>National Grand Finale Finalist</strong> in Smart India Hackathon (SIH 2023) and KAVACH 2023, <strong>State Grand Finale Finalist</strong> in TN-Police Hackathon 2023, and SIH 2024 College-Level Finalist. Architected internal enterprise analytics and automated reporting engines, institutional AI serving for chat.karunya.edu (vLLM + Triton), automated university grading systems (CodeTutor), and real-time DNS threat defense.
            </p>
          </div>

          {/* Quick Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleDownloadResume}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-neutral-950 font-mono text-xs font-bold tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </button>
            <button
              onClick={handleCopyEmail}
              className="px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-200 font-mono text-xs transition-colors flex items-center justify-center gap-2"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'EMAIL COPIED' : 'COPY EMAIL'}</span>
            </button>
          </div>
        </div>

        {/* Vital Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 font-mono text-xs">
          <div>
            <div className="text-neutral-400 text-[11px]">ROLE FIT</div>
            <div className="text-cyan-300 font-bold mt-1">Full Stack · Agentic AI</div>
          </div>
          <div>
            <div className="text-neutral-400 text-[11px]">CURRENT ROLE</div>
            <div className="text-emerald-400 font-bold mt-1">Specialist Programmer @ Infosys</div>
          </div>
          <div>
            <div className="text-neutral-400 text-[11px]">CORE STACK</div>
            <div className="text-neutral-200 font-bold mt-1">LangGraph, Python, React, vLLM</div>
          </div>
          <div>
            <div className="text-neutral-400 text-[11px]">HONORS</div>
            <div className="text-emerald-300 font-bold mt-1">SIH & KAVACH Grand Finalist</div>
          </div>
        </div>
      </div>

      {/* Scannable Career & Education Timeline */}
      <div className="mb-14">
        <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-cyan-400" />
          <span>Timeline & Milestones (Condensed)</span>
        </h2>

        <div className="space-y-4 font-sans">
          {journeyChapters.map((ch) => (
            <div
              key={ch.id}
              className="p-5 rounded-2xl bg-neutral-950/60 border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 font-mono text-xs mb-1">
                  <span className="font-bold text-cyan-400">{ch.year}</span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-neutral-400">{ch.era}</span>
                </div>
                <h3 className="text-base font-semibold text-white font-display">
                  {ch.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                  {ch.subtitle}. {ch.lessonLearned}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 md:justify-end max-w-sm">
                {ch.technologiesEncountered.slice(0, 4).map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-900 text-neutral-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured High-Impact Engineering Work */}
      <div className="mb-14">
        <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
          <Layers className="w-5 h-5 text-cyan-400" />
          <span>Selected Architectural Case Studies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((p) => (
            <div
              key={p.id}
              className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                  <span>CASE // {p.code}</span>
                  <span className="text-cyan-400 font-bold">{p.category}</span>
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-1">
                  {p.title}
                </h3>
                <p className="text-xs text-neutral-400 font-mono mb-3">
                  {p.tagline}
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-4">
                  {p.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.technologies.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900 text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenCaseStudy(p.id)}
                  className="w-full py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>INSPECT FULL CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Competency Summary */}
      <div className="p-6 rounded-2xl glass-panel border border-white/10 mb-12">
        <h2 className="text-lg font-display font-bold text-white mb-4">
          Core Competency Summary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-neutral-950/80 border border-emerald-500/20">
            <span className="text-emerald-400 font-bold block mb-2">LANGUAGES & CORE:</span>
            <div className="text-neutral-300 space-y-1">
              <div>• Python (Advanced — APIs & AI)</div>
              <div>• TypeScript / JavaScript (ES6+)</div>
              <div>• SQL (PostgreSQL, Data Modeling)</div>
              <div>• C / C++ (Foundational)</div>
              <div>• HTML5 & Modern CSS / Tailwind</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950/80 border border-cyan-500/20">
            <span className="text-cyan-400 font-bold block mb-2">FULL STACK & BACKEND:</span>
            <div className="text-neutral-300 space-y-1">
              <div>• React.js (Component Architecture)</div>
              <div>• Node.js & Express (REST APIs)</div>
              <div>• Django & Django REST Framework</div>
              <div>• FastAPI (Async Microservices)</div>
              <div>• PostgreSQL & MongoDB</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950/80 border border-purple-500/20">
            <span className="text-purple-400 font-bold block mb-2">AGENTIC AI & SERVING:</span>
            <div className="text-neutral-300 space-y-1">
              <div>• LangGraph (Cyclic Agent Loops)</div>
              <div>• LangChain & Advanced RAG</div>
              <div>• vLLM (PagedAttention Serving)</div>
              <div>• Triton Inference Server</div>
              <div>• Deterministic Guardrails & Telemetry</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recruiter Links Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-neutral-950 border border-white/5 font-mono text-xs">
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Bewin007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub (Bewin007)</span>
          </a>
          <span className="text-neutral-600">•</span>
          <a
            href="https://linkedin.com/in/bewin-felix-4153a9232"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        <div className="text-neutral-400">
          Direct email: <a href={`mailto:${email}`} className="text-cyan-400 underline">{email}</a>
        </div>
      </div>
    </div>
  );
};
