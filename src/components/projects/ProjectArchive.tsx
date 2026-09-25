import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectArchive } from '../../data/projects';
import { ProjectCaseStudy } from '../../types';
import { sounds } from '../../utils/audio';
import { FolderGit2, ArrowRight, Filter, Sparkles, Lock, Archive, Star } from 'lucide-react';

interface ProjectArchiveProps {
  onOpenCaseStudy?: (project: ProjectCaseStudy) => void;
}

export const ProjectArchive: React.FC<ProjectArchiveProps> = ({ onOpenCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('HIGHLIGHTS');

  const categories = [
    { id: 'HIGHLIGHTS', label: '★ HIGHLIGHTS', count: projectArchive.filter(p => p.featured).length },
    { id: 'AI', label: 'AI & AGENTIC', count: projectArchive.filter(p => p.category === 'AI' || p.categories?.includes('AI')).length },
    { id: 'BACKEND', label: 'BACKEND', count: projectArchive.filter(p => p.category === 'BACKEND' || p.categories?.includes('BACKEND')).length },
    { id: 'WEB', label: 'WEB', count: projectArchive.filter(p => p.category === 'WEB' || p.categories?.includes('WEB')).length },
    { id: 'SYSTEMS', label: 'SYSTEMS & SECURITY', count: projectArchive.filter(p => p.category === 'SYSTEMS' || p.categories?.includes('SYSTEMS')).length },
  ];

  const filteredProjects = projectArchive.filter((p) => {
    if (selectedCategory === 'HIGHLIGHTS') return p.featured;
    if (selectedCategory === 'AI') return p.category === 'AI' || p.categories?.includes('AI');
    if (selectedCategory === 'BACKEND') return p.category === 'BACKEND' || p.categories?.includes('BACKEND');
    if (selectedCategory === 'WEB') return p.category === 'WEB' || p.categories?.includes('WEB');
    if (selectedCategory === 'SYSTEMS') return p.category === 'SYSTEMS' || p.categories?.includes('SYSTEMS');
    return true;
  });

  const handleOpenCase = (project: ProjectCaseStudy) => {
    sounds.playConfirm();
    if (onOpenCaseStudy) {
      onOpenCaseStudy(project);
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>TECHNICAL DOSSIER // CASE STUDIES & ORIGIN STORIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Project Archive & Case Files
        </h2>
        <p className="mt-3 text-base text-neutral-400 max-w-2xl mx-auto font-sans">
          Click any case file to uncover the origin spark, why it was built, college lab constraints, and architectural trade-offs behind the scenes.
        </p>

        {/* Category Filters: HIGHLIGHTS default, ALL removed */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-8">
          <span className="text-xs font-mono text-neutral-400 mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3 text-cyan-400" />
            FILTER:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  sounds.playBlip(750, 0.02);
                  setSelectedCategory(cat.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-neutral-800 text-cyan-300 border border-cyan-500/50 shadow-sm font-bold'
                    : 'text-neutral-400 hover:text-neutral-200 bg-neutral-950/60 border border-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${
                  isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-neutral-900 text-neutral-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Files Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleOpenCase(project)}
              className="p-6 rounded-3xl glass-panel-interactive border border-white/10 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400 transition-all" />

              <div>
                {/* Header Meta: Code & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                      CASE // {project.code}
                    </span>
                    {project.featured && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-0.5">
                        <Star className="w-2.5 h-2.5 fill-amber-400" />
                        <span>FLAGSHIP</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {project.codeStatus === 'ACADEMIC_IP' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/60 border border-purple-500/30 text-purple-300 flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" />
                        <span>LAB IP</span>
                      </span>
                    ) : project.codeStatus === 'PROPRIETARY' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" />
                        <span>PROPRIETARY</span>
                      </span>
                    ) : project.codeStatus === 'ARCHIVED' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950/60 border border-amber-500/30 text-amber-300 flex items-center gap-1">
                        <Archive className="w-2.5 h-2.5" />
                        <span>ARCHIVED</span>
                      </span>
                    ) : null}
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900 border border-white/10 text-neutral-300">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>

                {/* Tagline / Subtitle */}
                <p className="font-mono text-xs text-neutral-400 mb-3 line-clamp-1">
                  {project.tagline}
                </p>

                {/* Origin Story Teaser Box */}
                {project.originStory && (
                  <div className="p-3 rounded-xl bg-neutral-900/60 border border-cyan-500/20 mb-4 group-hover:border-cyan-500/40 transition-colors">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold flex items-center gap-1 mb-1">
                      <Sparkles className="w-3 h-3" />
                      THE ORIGIN SPARK:
                    </span>
                    <p className="text-xs text-neutral-300 font-sans italic line-clamp-2 leading-relaxed">
                      "{project.originStory}"
                    </p>
                  </div>
                )}

                {/* Summary */}
                <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-5 line-clamp-2">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-neutral-900 text-neutral-300 border border-white/5 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-neutral-900 text-neutral-400 font-mono text-[10px]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: OPEN CASE Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 group-hover:text-cyan-300 font-bold flex items-center gap-1.5 tracking-wider">
                  <span>INSPECT DOSSIER & FACTS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-neutral-500 text-[11px]">
                  {project.timelineYear}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
