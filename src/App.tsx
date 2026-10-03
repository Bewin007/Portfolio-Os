import React, { useState, useEffect } from 'react';
import { ViewMode, ProjectCaseStudy } from './types';
import { useAppRouter, navigateTo } from './utils/router';
import { CanvasBackground } from './components/common/CanvasBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { JourneyTimeline } from './components/journey/JourneyTimeline';
import { TechnologyEvolution } from './components/tech/TechnologyEvolution';
import { EngineeringDna } from './components/dna/EngineeringDna';
import { ProjectArchive } from './components/projects/ProjectArchive';
import { CaseStudyModal } from './components/projects/CaseStudyModal';
import { ProblemSolving } from './components/problemsolving/ProblemSolving';
import { BuildLog } from './components/buildlog/BuildLog';
import { CurrentState } from './components/now/CurrentState';
import { FutureFooter } from './components/future/FutureFooter';
import { RecruiterView } from './components/recruiter/RecruiterView';
import { TerminalModal } from './components/terminal/TerminalModal';
import { QuickTourOverlay } from './components/tour/QuickTourOverlay';
import { projectArchive } from './data/projects';
import { sounds } from './utils/audio';

export function App() {
  const { route, isStory } = useAppRouter();
  const viewMode: ViewMode = isStory ? 'story' : 'recruiter';

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [caseStudyInitialTab, setCaseStudyInitialTab] = useState<'origin' | 'architecture' | 'decisions' | 'metrics'>('origin');

  // Keyboard shortcut: Press `~` or `\` or `ctrl+k` to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === 'k') || e.key === '`') {
        e.preventDefault();
        sounds.playTerminalBeep();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track active section for navbar highlighting depending on view mode
  useEffect(() => {
    const recruiterSections = ['projects', 'experience', 'contact'];
    const storySections = ['hero', 'journey', 'dna', 'projects', 'now', 'contact'];
    const sections = viewMode === 'recruiter' ? recruiterSections : storySections;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  // Always scroll to top when switching between recruiter view and story
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [viewMode]);

  const handleOpenCaseStudyById = (
    id: string,
    tab: 'origin' | 'architecture' | 'decisions' | 'metrics' = 'origin'
  ) => {
    const found = projectArchive.find((p) => p.id === id);
    if (found) {
      setCaseStudyInitialTab(tab);
      setActiveCaseStudy(found);
    }
  };

  const handleToggleViewMode = (newMode: ViewMode) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (newMode === 'story') {
      navigateTo('/story');
    } else {
      navigateTo('/');
    }
  };

  const handleScrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050608] text-neutral-200 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Cinematic Ambient Particle Canvas Layer */}
      <CanvasBackground interactive={true} />

      {/* Floating Global Responsive Navbar */}
      <Navbar
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onStartTour={() => setIsTourOpen(true)}
        activeSection={activeSection}
      />

      {/* Route Views: Recruiter Portfolio (/) vs Creative Engineering Story (/story) */}
      {viewMode === 'recruiter' ? (
        <main className="relative z-10">
          <RecruiterView
            onSwitchToStory={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              navigateTo('/story');
            }}
            onOpenCaseStudy={handleOpenCaseStudyById}
          />
        </main>
      ) : (
        <main className="relative z-10">
          {/* 1. Hero Introduction */}
          <Hero
            onExploreJourney={handleScrollToJourney}
            onOpenTerminal={() => setIsTerminalOpen(true)}
            onSwitchToRecruiter={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              navigateTo('/');
            }}
          />

          {/* 2. Primary Development Journey Timeline */}
          <JourneyTimeline onOpenCaseStudy={handleOpenCaseStudyById} />

          {/* 3. Cumulative Technology Evolution */}
          <TechnologyEvolution />

          {/* 4. Engineering DNA Constellation Graph */}
          <EngineeringDna />

          {/* 5. Technical Project Archive & Dossiers */}
          <ProjectArchive onOpenCaseStudy={setActiveCaseStudy} />

          {/* 6. How I Approach Engineering Problems (4-Step Process) */}
          <ProblemSolving />

          {/* 7. Engineering Build Log & Changelog */}
          <BuildLog />

          {/* 9. Current State (NOW) */}
          <CurrentState />

          {/* 10. Next Chapter & Footer */}
          <FutureFooter />
        </main>
      )}

      {/* Case Study Deep-Dive Modal (Shared across both experiences) */}
      <CaseStudyModal
        project={activeCaseStudy}
        initialTab={caseStudyInitialTab}
        onClose={() => setActiveCaseStudy(null)}
        viewMode={viewMode}
      />

      {/* Interactive Terminal CLI Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onNavigateSection={(id) => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onSwitchRecruiter={() => navigateTo('/')}
      />

      {/* Quick Tour Overlay */}
      <QuickTourOverlay
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
      />
    </div>
  );
}

export default App;
