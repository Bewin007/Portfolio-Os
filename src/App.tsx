import React, { useState, useEffect } from 'react';
import { ViewMode, ProjectCaseStudy } from './types';
import { CanvasBackground } from './components/common/CanvasBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { JourneyTimeline } from './components/journey/JourneyTimeline';
import { TechnologyEvolution } from './components/tech/TechnologyEvolution';
import { EngineeringDna } from './components/dna/EngineeringDna';
import { ProjectArchive } from './components/projects/ProjectArchive';
import { CaseStudyModal } from './components/projects/CaseStudyModal';
import { ProblemSolving } from './components/problemsolving/ProblemSolving';
import { ExperimentLab } from './components/experiments/ExperimentLab';
import { BuildLog } from './components/buildlog/BuildLog';
import { CurrentState } from './components/now/CurrentState';
import { FutureFooter } from './components/future/FutureFooter';
import { RecruiterView } from './components/recruiter/RecruiterView';
import { TerminalModal } from './components/terminal/TerminalModal';
import { QuickTourOverlay } from './components/tour/QuickTourOverlay';
import { projectArchive } from './data/projects';
import { sounds } from './utils/audio';

export function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('story');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectCaseStudy | null>(null);

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

  // Track active section for navbar highlighting
  useEffect(() => {
    if (viewMode !== 'story') return;

    const sections = ['hero', 'journey', 'stack', 'dna', 'projects', 'experiments', 'now', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const handleOpenCaseStudyById = (id: string) => {
    const found = projectArchive.find((p) => p.id === id);
    if (found) {
      setActiveCaseStudy(found);
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

      {/* Floating Global Navbar */}
      <Navbar
        viewMode={viewMode}
        onToggleViewMode={(mode) => setViewMode(mode)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onStartTour={() => setIsTourOpen(true)}
        activeSection={activeSection}
      />

      {/* Mode View: Story Mode vs Recruiter Mode */}
      {viewMode === 'story' ? (
        <main className="relative z-10">
          {/* 1. Hero Introduction */}
          <Hero
            onExploreJourney={handleScrollToJourney}
            onOpenTerminal={() => setIsTerminalOpen(true)}
            onSwitchToRecruiter={() => setViewMode('recruiter')}
          />

          {/* 2. Primary Development Journey Timeline */}
          <JourneyTimeline onOpenCaseStudy={handleOpenCaseStudyById} />

          {/* 3. Cumulative Technology Evolution */}
          <TechnologyEvolution />

          {/* 4. Engineering DNA Constellation Graph */}
          <EngineeringDna />

          {/* 5. Technical Project Archive & Dossiers */}
          <ProjectArchive onOpenCaseStudy={setActiveCaseStudy} />

          {/* 6. Systematic Problem-Solving Walkthrough */}
          <ProblemSolving />

          {/* 7. First-Principles Experiment Lab */}
          <ExperimentLab />

          {/* 8. Engineering Build Log & Changelog */}
          <BuildLog />

          {/* 9. Current State (NOW) */}
          <CurrentState />

          {/* 10. Next Chapter & Footer */}
          <FutureFooter />
        </main>
      ) : (
        <main className="relative z-10">
          <RecruiterView
            onSwitchToStory={() => setViewMode('story')}
            onOpenCaseStudy={handleOpenCaseStudyById}
          />
          <FutureFooter />
        </main>
      )}

      {/* Case Study Modal (Shared) */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />

      {/* Interactive Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onNavigateSection={(id) => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onSwitchRecruiter={() => setViewMode('recruiter')}
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
