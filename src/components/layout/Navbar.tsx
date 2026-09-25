import React, { useState, useEffect } from 'react';
import { ViewMode } from '../../types';
import { sounds } from '../../utils/audio';
import { Volume2, VolumeX, Terminal, Zap, Briefcase, Compass } from 'lucide-react';

interface NavbarProps {
  viewMode: ViewMode;
  onToggleViewMode: (mode: ViewMode) => void;
  onOpenTerminal: () => void;
  onStartTour: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  viewMode,
  onToggleViewMode,
  onOpenTerminal,
  onStartTour,
  activeSection,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(sounds.getMuted());
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(currentScroll > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newMuted = sounds.toggleMute();
    setIsMuted(newMuted);
  };

  const navLinks = [
    { id: 'hero', label: '/identity', anchor: '#hero' },
    { id: 'journey', label: '/journey', anchor: '#journey' },
    { id: 'dna', label: '/dna', anchor: '#dna' },
    { id: 'projects', label: '/work', anchor: '#projects' },
    { id: 'experiments', label: '/experiments', anchor: '#experiments' },
    { id: 'now', label: '/now', anchor: '#now' },
    { id: 'contact', label: '/contact', anchor: '#contact' },
  ];

  return (
    <>
      {/* Top Global Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(0,240,255,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Header */}
      <header
        className={`fixed top-4 left-0 right-0 z-40 px-3 sm:px-6 transition-all duration-300 flex justify-center`}
      >
        <div
          className={`w-full max-w-7xl flex items-center justify-between px-3.5 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'glass-panel shadow-2xl shadow-cyan-950/20 bg-neutral-950/80 backdrop-blur-xl border border-white/10'
              : 'bg-neutral-950/40 backdrop-blur-md border border-white/5'
          }`}
        >
          {/* Logo / OS Identity */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={() => sounds.playBlip(900, 0.03)}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="relative w-6 h-6 rounded-md bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                <span className="text-cyan-400 font-mono text-xs font-bold">B</span>
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-semibold tracking-wider text-neutral-200 group-hover:text-cyan-300 transition-colors">
                  BEWIN<span className="text-cyan-400">.OS</span>
                </span>
                <span className="font-mono text-[9px] text-neutral-400 tracking-tight hidden sm:inline">
                  KERNEL ONLINE
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          {viewMode === 'story' && (
            <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1 rounded-xl border border-white/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.anchor}
                    onClick={() => sounds.playBlip(750, 0.02)}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.15)] font-medium'
                        : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          )}

          {/* Right Action Tools: Story/Recruiter Toggle, Quick Tour, Terminal, Audio */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* View Mode Pill Toggle */}
            <div className="flex items-center bg-neutral-900/80 p-0.5 sm:p-1 rounded-xl border border-white/10 text-[11px] font-mono">
              <button
                onClick={() => {
                  sounds.playBlip(700, 0.03);
                  onToggleViewMode('story');
                }}
                className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg transition-all ${
                  viewMode === 'story'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
                title="Full Interactive Development Journey"
              >
                <Compass className="w-3 h-3 text-cyan-400" />
                <span className="hidden sm:inline">STORY</span>
              </button>
              <button
                onClick={() => {
                  sounds.playConfirm();
                  onToggleViewMode('recruiter');
                }}
                className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg transition-all ${
                  viewMode === 'recruiter'
                    ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
                title="Condensed Executive View for Recruiters"
              >
                <Briefcase className="w-3 h-3 text-emerald-400" />
                <span className="hidden sm:inline">RECRUITER</span>
              </button>
            </div>

            {/* Quick Tour Button */}
            {viewMode === 'story' && (
              <button
                onClick={() => {
                  sounds.playConfirm();
                  onStartTour();
                }}
                className="hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono transition-all group"
                title="Start Guided Interactive Quick Tour"
              >
                <Zap className="w-3 h-3 text-amber-400 group-hover:rotate-12 transition-transform" />
                <span>TOUR</span>
              </button>
            )}

            {/* Terminal Button */}
            <button
              onClick={() => {
                sounds.playTerminalBeep();
                onOpenTerminal();
              }}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-cyan-300 border border-white/10 text-xs font-mono transition-all"
              title="Launch Interactive Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">CLI</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              className={`p-1.5 sm:p-2 rounded-xl border text-xs transition-colors ${
                isMuted
                  ? 'border-white/5 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                  : 'border-cyan-500/40 text-cyan-400 bg-cyan-950/40 shadow-[0_0_8px_rgba(0,240,255,0.2)]'
              }`}
              title={isMuted ? 'Enable subtle audio feedback' : 'Mute audio feedback'}
              aria-label="Toggle Audio"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
