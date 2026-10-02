import React, { useState } from 'react';
import { RecruiterHero } from './RecruiterHero';
import { RecruiterFeaturedProjects } from './RecruiterFeaturedProjects';
import { ProfessionalExperience } from './ProfessionalExperience';
import { TechnicalStackSection } from './TechnicalStackSection';
import { GenAiSection } from './GenAiSection';
import { EducationSection } from './EducationSection';
import { StoryTeaserSection } from './StoryTeaserSection';
import { RecruiterContact } from './RecruiterContact';
import { Layers, ChevronDown, Sparkles } from 'lucide-react';
import { sounds } from '../../utils/audio';

interface RecruiterViewProps {
  onSwitchToStory: () => void;
  onOpenCaseStudy: (id: string, tab?: 'origin' | 'architecture' | 'decisions' | 'metrics') => void;
}

export const RecruiterView: React.FC<RecruiterViewProps> = ({
  onSwitchToStory,
  onOpenCaseStudy,
}) => {
  const [showDeepDive, setShowDeepDive] = useState(false);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleDeepDive = () => {
    sounds.playBlip(750, 0.02);
    setShowDeepDive((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen text-neutral-200">
      {/* 1. Hero Section + Compact Impact Strip directly below */}
      <RecruiterHero
        onSwitchToStory={onSwitchToStory}
        onScrollToProjects={handleScrollToProjects}
      />

      {/* 2. Top 3 Projects: Result-Led, Scannable Cards with Outcome Metrics & Diagram Link */}
      <RecruiterFeaturedProjects
        onOpenCaseStudy={onOpenCaseStudy}
        onExploreMore={onSwitchToStory}
      />

      {/* 3. Professional Experience Timeline (Infosys, Karunya, Cisco) */}
      <ProfessionalExperience />

      {/* 4. Optional Deep Dive Module (Keeps default Recruiter View genuinely short) */}
      <div className="py-6 px-4 sm:px-6 max-w-7xl mx-auto">
        <button
          onClick={handleToggleDeepDive}
          className="w-full p-4 sm:p-5 rounded-2xl bg-neutral-950/70 border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between font-mono text-xs text-neutral-300 group shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform flex-shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white group-hover:text-cyan-300 flex items-center gap-2">
                <span>
                  {showDeepDive
                    ? 'Hide Extended Architecture & Skills Taxonomy'
                    : 'Optional Deep Dive: Full Stack Taxonomy, GenAI Flow & Honors'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-white/5 hidden sm:inline">
                  {showDeepDive ? 'COLLAPSE' : 'EXPAND'}
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-sans mt-0.5">
                Inspect 6-category technical stack, agent reasoning state machine, and national hackathon credentials.
              </p>
            </div>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${
              showDeepDive ? 'rotate-180' : ''
            }`}
          />
        </button>

        {showDeepDive && (
          <div className="mt-8 space-y-8 animate-fadeIn">
            <TechnicalStackSection />
            <GenAiSection />
            <EducationSection />
          </div>
        )}
      </div>

      {/* 5. Engineering Journey Teaser */}
      <StoryTeaserSection onSwitchToStory={onSwitchToStory} />

      {/* 6. Explicit Availability & Clean Contact Section */}
      <RecruiterContact />
    </div>
  );
};
