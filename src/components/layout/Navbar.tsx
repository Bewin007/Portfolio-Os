import React, { useState, useEffect } from 'react';
import { ViewMode } from '../../types';
import { sounds } from '../../utils/audio';
import { GithubIcon } from '../common/BrandIcons';
import { 
  Volume2, 
  VolumeX, 
  Terminal, 
  Briefcase, 
  Compass, 
  Download, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  viewMode: ViewMode;
  onToggleViewMode: (mode: ViewMode) => void;
  onOpenTerminal: () => void;
  onStartTour?: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  viewMode,
  onToggleViewMode,
  onOpenTerminal,
  activeSection,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(sounds.getMuted());
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(currentScroll > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newMuted = sounds.toggleMute();
    setIsMuted(newMuted);
  };

  const handleDownloadResume = () => {
    sounds.playConfirm();
    window.open(`${import.meta.env.BASE_URL}Resume.pdf`, '_blank');
  };

  // Recruiter Mode Navigation Links
  const recruiterLinks = [
    { id: 'projects', label: 'Work', anchor: '#projects' },
    { id: 'experience', label: 'Experience', anchor: '#experience' },
    { id: 'contact', label: 'Contact', anchor: '#contact' },
  ];

  // Story Mode Navigation Links
  const storyLinks = [
    { id: 'hero', label: 'Overview', anchor: '#hero' },
    { id: 'journey', label: 'Journey', anchor: '#journey' },
    { id: 'dna', label: 'DNA', anchor: '#dna' },
    { id: 'projects', label: 'Archive', anchor: '#projects' },
    { id: 'now', label: 'Current State', anchor: '#now' },
    { id: 'contact', label: 'Contact', anchor: '#contact' },
  ];

  const handleLinkClick = (anchor: string) => {
    sounds.playBlip(750, 0.02);
    setIsMobileMenuOpen(false);
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Global Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-900 z-50 pointer-events-none">
        <div
          className={`h-full transition-all duration-150 ease-out shadow-sm ${
            viewMode === 'recruiter'
              ? 'bg-gradient-to-r from-emerald-500 via-cyan-400 to-teal-400 shadow-[0_0_8px_rgba(16,185,129,0.7)]'
              : 'bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 shadow-[0_0_8px_rgba(0,240,255,0.7)]'
          }`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Header Navbar */}
      <header className="fixed top-3 left-0 right-0 z-40 px-3 sm:px-6 flex justify-center">
        <div
          className={`w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-neutral-950/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40'
              : 'bg-neutral-950/60 backdrop-blur-md border border-white/5'
          }`}
        >
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                sounds.playBlip(900, 0.03);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 group text-left"
            >
              <div
                className={`w-7 h-7 rounded-lg border flex items-center justify-center font-mono text-xs font-bold transition-all ${
                  viewMode === 'recruiter'
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 group-hover:border-emerald-300'
                    : 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400 group-hover:border-cyan-300'
                }`}
              >
                B
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  BEWIN FELIX
                </span>
                <span className="font-mono text-[9px] text-neutral-400 leading-none">
                  {viewMode === 'recruiter' ? 'Specialist Programmer' : 'BEWIN.OS KERNEL'}
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1 rounded-xl border border-white/5">
            {viewMode === 'recruiter' ? (
              <>
                {recruiterLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.anchor)}
                      className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                        isActive
                          ? 'text-cyan-300 bg-neutral-800 border border-cyan-500/30 font-medium'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
                <button
                  onClick={() => {
                    sounds.playConfirm();
                    onToggleViewMode('story');
                  }}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg text-purple-300 hover:text-purple-200 hover:bg-purple-950/40 border border-transparent hover:border-purple-500/20 transition-all flex items-center gap-1.5"
                >
                  <Compass className="w-3 h-3 text-purple-400" />
                  <span>Story</span>
                </button>
              </>
            ) : (
              <>
                {storyLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.anchor)}
                      className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                        isActive
                          ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 font-medium'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                      }`}
                    >
                      /{link.id}
                    </button>
                  );
                })}
              </>
            )}
          </nav>

          {/* Right Action Tools: Dual View Mode Switcher, GitHub, Resume, Sound, CLI */}
          <div className="flex items-center gap-2">
            {/* View Mode Switcher Pill (Recruiter View | My Story) */}
            <div className="flex items-center bg-neutral-900/90 p-1 rounded-xl border border-white/10 text-[11px] font-mono shadow-inner">
              <button
                onClick={() => {
                  sounds.playConfirm();
                  onToggleViewMode('recruiter');
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                  viewMode === 'recruiter'
                    ? 'bg-neutral-800 text-emerald-400 border border-emerald-500/40 shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Professional Recruiter Portfolio View"
              >
                <Briefcase className="w-3 h-3" />
                <span className="hidden sm:inline">Recruiter View</span>
              </button>
              <button
                onClick={() => {
                  sounds.playConfirm();
                  onToggleViewMode('story');
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                  viewMode === 'story'
                    ? 'bg-neutral-800 text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Creative Engineering Story & Architecture"
              >
                <Compass className="w-3 h-3" />
                <span className="hidden sm:inline">My Story</span>
              </button>
            </div>

            {/* GitHub Link (Desktop) */}
            <a
              href="https://github.com/Bewin007"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Resume Button (Desktop) */}
            <button
              onClick={handleDownloadResume}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 font-mono text-xs font-semibold transition-all"
              title="Download Resume (PDF)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Terminal CLI Button */}
            <button
              onClick={() => {
                sounds.playTerminalBeep();
                onOpenTerminal();
              }}
              className="hidden sm:flex p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 text-neutral-400 hover:text-cyan-300 transition-colors"
              title="Open Terminal CLI (Ctrl+K or `)"
              aria-label="Open Terminal CLI"
            >
              <Terminal className="w-3.5 h-3.5" />
            </button>

            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              className={`p-2 rounded-xl border text-xs transition-colors ${
                isMuted
                  ? 'border-white/5 text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900'
                  : 'border-cyan-500/40 text-cyan-400 bg-cyan-950/40 shadow-[0_0_8px_rgba(0,240,255,0.2)]'
              }`}
              title={isMuted ? 'Unmute subtle audio feedback' : 'Mute audio feedback'}
              aria-label="Toggle Audio"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-neutral-950/95 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between">
          <div>
            {/* View Mode Toggle Mobile */}
            <div className="p-1 bg-neutral-900 rounded-xl border border-white/10 flex items-center mb-8 text-xs font-mono">
              <button
                onClick={() => {
                  sounds.playConfirm();
                  onToggleViewMode('recruiter');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex-1 py-2.5 rounded-lg flex items-center justify-center gap-2 ${
                  viewMode === 'recruiter'
                    ? 'bg-neutral-800 text-emerald-400 font-bold border border-emerald-500/30'
                    : 'text-neutral-400'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Recruiter View</span>
              </button>
              <button
                onClick={() => {
                  sounds.playConfirm();
                  onToggleViewMode('story');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex-1 py-2.5 rounded-lg flex items-center justify-center gap-2 ${
                  viewMode === 'story'
                    ? 'bg-neutral-800 text-cyan-300 font-bold border border-cyan-500/30'
                    : 'text-neutral-400'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>My Story</span>
              </button>
            </div>

            {/* Links List */}
            <div className="space-y-2">
              {(viewMode === 'recruiter' ? recruiterLinks : storyLinks).map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.anchor)}
                  className="w-full text-left py-3 px-4 rounded-xl bg-neutral-900/50 hover:bg-neutral-900 border border-white/5 text-sm font-mono text-neutral-200 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-neutral-500" />
                </button>
              ))}

              {viewMode === 'recruiter' && (
                <button
                  onClick={() => {
                    sounds.playConfirm();
                    onToggleViewMode('story');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-3 px-4 rounded-xl bg-purple-950/20 hover:bg-purple-950/40 border border-purple-500/20 text-sm font-mono text-purple-300 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    <span>Explore My Story</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Bottom Actions */}
          <div className="space-y-3 pt-6 border-t border-white/10 font-mono text-xs">
            <button
              onClick={() => {
                handleDownloadResume();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3.5 rounded-xl bg-emerald-500 text-neutral-950 font-bold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/Bewin007"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <button
                onClick={() => {
                  sounds.playTerminalBeep();
                  setIsMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="py-3 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Terminal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
