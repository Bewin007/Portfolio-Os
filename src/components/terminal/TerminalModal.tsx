import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sounds } from '../../utils/audio';
import { X, Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection?: (sectionId: string) => void;
  onSwitchRecruiter?: () => void;
}

interface CommandHistoryItem {
  cmd: string;
  output: string | React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
  onSwitchRecruiter,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      cmd: 'init',
      output: (
        <div className="space-y-1 text-neutral-400">
          <div>BEWIN.OS [Version 2.6.4-release.x86_64]</div>
          <div>Type <span className="text-cyan-300 font-bold">'help'</span> to see available system commands.</div>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    sounds.playTerminalBeep();
    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    let output: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-neutral-300">
            <div>Available BEWIN.OS commands:</div>
            <div>• <span className="text-cyan-400">whoami</span> — Developer identity and discipline</div>
            <div>• <span className="text-cyan-400">ls</span> — List portfolio directories</div>
            <div>• <span className="text-cyan-400">cat &lt;file&gt;</span> — Read file content (e.g. `cat journey`, `cat philosophy`, `cat stack`)</div>
            <div>• <span className="text-cyan-400">journey</span> — Navigate directly to Development Journey</div>
            <div>• <span className="text-cyan-400">projects</span> — List active case studies</div>
            <div>• <span className="text-cyan-400">status</span> — Check kernel health and uptime</div>
            <div>• <span className="text-cyan-400">resume</span> — Open and download PDF Resume</div>
            <div>• <span className="text-cyan-400">recruiter</span> — Launch condensed recruiter view</div>
            <div>• <span className="text-cyan-400">contact</span> — Output encrypted transmission coordinates</div>
            <div>• <span className="text-cyan-400">sudo hire</span> — Authorize employment protocol</div>
            <div>• <span className="text-cyan-400">clear</span> — Purge screen history</div>
            <div>• <span className="text-cyan-400">exit</span> — Terminate CLI session</div>
          </div>
        );
        break;

      case 'whoami':
        output = 'bewin@portfolio — Full Stack Developer & GenAI Engineer (Karunya CS graduate). Specialist Programmer at Infosys. SIH 2023 & Kavach 2023 National Finalist. Specialized in Python, Django REST, React, Docker, and vLLM AI model serving.';
        break;

      case 'ls':
        output = (
          <div className="text-cyan-400 flex flex-wrap gap-4 font-bold">
            <span>identity/</span>
            <span>journey/</span>
            <span>dna/</span>
            <span>work/</span>
            <span>experiments/</span>
            <span>now/</span>
            <span>contact/</span>
          </div>
        );
        break;

      case 'cat':
        if (arg === 'journey') {
          output = 'Development Journey: From 2021 Cisco networking & computer vision to 2023 National Hackathons (SIH 2023 Grand Finale DNS filtering, Kavach 2023 Grand Finale Forensics) and 2024 campus AI deployment (chat.karunya.edu on vLLM/Triton) to Specialist Programmer at Infosys.';
        } else if (arg === 'philosophy') {
          output = '"Building systems. Breaking assumptions. Learning continuously. Real software solves real friction."';
        } else if (arg === 'stack') {
          output = 'Core: Python, Django REST, React, FastAPI, Docker, PostgreSQL, vLLM, Triton, Zeek, Unbound DNS, Git, Nginx, MongoDB.';
        } else {
          output = `cat: ${arg || 'file'}: No such file or directory. Try 'cat journey' or 'cat stack'`;
        }
        break;

      case 'journey':
        onNavigateSection?.('journey');
        onClose();
        output = 'Navigating to /journey...';
        break;

      case 'projects':
        output = (
          <div className="space-y-1">
            <div>[001] chat.karunya.edu — Campus AI Platform (Triton, vLLM, Open WebUI)</div>
            <div>[002] SIH DNS Filter — Threat Intelligence (Zeek, Unbound, Grafana, ML)</div>
            <div>[003] RAG Endpoint Firewall — Autonomous Rule Agent (SIH 2024, iptables)</div>
            <div>[004] Hardware Forensic Suite — Intel NUC Forensics (Kavach 2023 Finalist)</div>
            <div>[005] CodeTutor — Automated Lab & Viva Management (Django, React, Docker)</div>
            <div>[006] InterviewBot ("Rachel") — Mock Interview Bot with Fine-Tuned LLM</div>
          </div>
        );
        break;

      case 'status':
        output = 'KERNEL: BEWIN.OS v1.0.0 // STATUS: OPTIMAL // LOCATION: Nagercoil / Coimbatore, IN // UPTIME: 99.98%';
        break;

      case 'resume':
        sounds.playConfirm();
        window.open(`${import.meta.env.BASE_URL}Resume.pdf`, '_blank');
        output = 'Opening Resume.pdf in a new tab...';
        break;

      case 'recruiter':
        onSwitchRecruiter?.();
        onClose();
        output = 'Switching to Recruiter Mode...';
        break;

      case 'contact':
        output = 'Direct email: biwinfelix@gmail.com | Phone: +91 7598393250 | GitHub: Bewin007 | LinkedIn: bewin-felix-4153a9232';
        break;

      case 'sudo':
        if (arg === 'hire' || arg === 'hire-bewin') {
          sounds.playConfirm();
          output = (
            <div className="text-emerald-400 font-bold">
              [PERMISSION GRANTED]: Excellent decision. Email transmission ready at biwinfelix@gmail.com!
            </div>
          );
        } else {
          output = 'sudo: authentication token required.';
        }
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        output = `Command not recognized: '${cmd}'. Type 'help' for supported commands.`;
    }

    setHistory((prev) => [...prev, { cmd: trimmed, output }]);
    setInputVal('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
        />

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl glass-panel bg-neutral-950/95 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden font-mono z-10 flex flex-col max-h-[80vh]"
        >
          {/* Top Title Bar */}
          <div className="px-4 py-3 bg-neutral-900 border-b border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-neutral-400 font-semibold ml-2 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                bewin@os: ~/terminal
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Screen Body */}
          <div ref={scrollRef} className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs flex-1">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-neutral-500">$</span>
                  <span>{item.cmd}</span>
                </div>
                <div className="pl-4 text-neutral-300 leading-relaxed">{item.output}</div>
              </div>
            ))}

            {/* Current Input Line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(inputVal);
              }}
              className="flex items-center gap-2 text-xs pt-2"
            >
              <span className="text-cyan-400 font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'whoami', 'ls', 'journey'..."
                className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder:text-neutral-600 font-mono"
                autoFocus
              />
              <button type="submit" className="text-neutral-500 hover:text-cyan-400 p-1">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
