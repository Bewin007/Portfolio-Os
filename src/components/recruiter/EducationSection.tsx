import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Award, ShieldAlert, Trophy, ShieldCheck } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const honors = [
    {
      title: 'Smart India Hackathon (SIH) 2023',
      result: 'National Grand Finale Finalist',
      context: 'Selected out of 44,000 national teams across India (Gujarat Finals, Ministry of Education / AICTE)',
      icon: Trophy,
      accent: 'text-amber-400 border-amber-500/20 bg-amber-950/20',
    },
    {
      title: 'KAVACH 2023 Cybersecurity Hackathon',
      result: 'National Grand Finale Finalist',
      context: 'Selected out of 3,800 national teams across India (Odisha Finals, AICTE & MoE)',
      icon: ShieldAlert,
      accent: 'text-emerald-400 border-emerald-500/20 bg-emerald-950/20',
    },
    {
      title: 'Tamil Nadu Police Hackathon 2023',
      result: 'State Grand Finale Finalist',
      context: 'Selected out of 300 state teams (Chennai Finals, Tamil Nadu Police Department)',
      icon: ShieldCheck,
      accent: 'text-sky-400 border-sky-500/20 bg-sky-950/20',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="p-7 sm:p-8 rounded-3xl bg-neutral-950/70 border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Concise Education (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-3">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Academic Foundation</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
              B.Tech — Computer Science & Engineering
            </h3>
            <div className="text-sm font-sans text-neutral-300 font-medium mb-2">
              Karunya Institute of Technology and Sciences
            </div>
            <div className="font-mono text-xs text-neutral-400 mb-4">
              2021 — 2025 · Coimbatore, India
            </div>

            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              Curriculum focused on Distributed Systems, Algorithms & Data Structures, Operating Systems, Database Management, and Network Security.
            </p>
          </div>

          {/* Right: Verified National Hackathon Finalist Credentials (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Competition Credentials</span>
            </div>

            {honors.map((honor) => {
              const Icon = honor.icon;
              return (
                <div
                  key={honor.title}
                  className={`p-3.5 rounded-2xl border ${honor.accent} flex items-start gap-3 transition-colors`}
                >
                  <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-white">
                        {honor.title}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.2 rounded bg-neutral-900 text-neutral-200 border border-white/5">
                        {honor.result}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-neutral-400 font-sans mt-0.5">
                      {honor.context}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
