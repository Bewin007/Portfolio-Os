import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { engineeringDnaNodes } from '../../data/dna';
import { DnaDomainNode } from '../../types';
import { sounds } from '../../utils/audio';
import { Network, Compass, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const EngineeringDna: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('agentic-ai');

  const selectedNode = engineeringDnaNodes.find((n) => n.id === activeNodeId) || engineeringDnaNodes[0];

  const handleNodeClick = (node: DnaDomainNode) => {
    if (activeNodeId === node.id) return;
    setActiveNodeId(node.id);
    sounds.playBlip(650, 0.04);
  };

  // SVG dimensions for responsive scaling
  const viewBoxWidth = 1000;
  const viewBoxHeight = 600;

  const getNodeCoords = (node: DnaDomainNode) => ({
    x: (node.x / 100) * viewBoxWidth,
    y: (node.y / 100) * viewBoxHeight,
  });

  return (
    <section id="dna" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
          <Network className="w-3.5 h-3.5" />
          <span>ARCHITECTURAL CONSTELLATION GRAPH</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Engineering DNA
        </h2>
        <p className="mt-3 text-base text-neutral-400 max-w-2xl mx-auto font-sans">
          Engineering disciplines are not isolated silos. Click any domain node below to inspect cross-disciplinary cohesion, architectural philosophies, and companion systems.
        </p>

        {/* Quick Node Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {engineeringDnaNodes.map((node) => {
            const isActive = activeNodeId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => handleNodeClick(node)}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-neutral-800 text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                    : 'bg-neutral-950/60 hover:bg-neutral-900 border border-white/5 text-neutral-400'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
                <span>{node.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Constellation SVG Interactive Canvas (8 cols) */}
        <div className="lg:col-span-8 p-4 sm:p-6 rounded-3xl glass-panel border border-white/10 relative overflow-hidden flex flex-col justify-between h-[530px]">
          {/* Subtle Grid pattern overlay */}
          <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

          {/* Telemetry Status in corner */}
          <div className="font-mono text-[11px] text-neutral-400 flex items-center justify-between mb-2">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>TOPOLOGY: ARCHITECTURAL CONSTELLATION GRAPH</span>
            </span>
            <span className="text-cyan-400 font-semibold">[CLICK NODE TO LOCK FOCUS]</span>
          </div>

          <div className="relative w-full flex-1 flex items-center justify-center">
            <svg
              viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
              className="w-full h-full max-h-[440px] select-none"
            >
              {/* Dynamic Connection Lines between Nodes */}
              {engineeringDnaNodes.flatMap((sourceNode) => {
                const sourceCoords = getNodeCoords(sourceNode);
                return sourceNode.connections.map((targetId) => {
                  const targetNode = engineeringDnaNodes.find((n) => n.id === targetId);
                  if (!targetNode) return null;
                  const targetCoords = getNodeCoords(targetNode);

                  const isSourceActive = activeNodeId === sourceNode.id;
                  const isTargetActive = activeNodeId === targetNode.id;
                  const isHighlighted = isSourceActive || isTargetActive;

                  return (
                    <g key={`${sourceNode.id}-${targetId}`}>
                      {/* Base link */}
                      <line
                        x1={sourceCoords.x}
                        y1={sourceCoords.y}
                        x2={targetCoords.x}
                        y2={targetCoords.y}
                        stroke={isHighlighted ? 'rgba(0, 240, 255, 0.8)' : 'rgba(255, 255, 255, 0.12)'}
                        strokeWidth={isHighlighted ? 2 : 1}
                        strokeDasharray={isHighlighted ? '4,4' : undefined}
                        className="transition-all duration-300"
                      />

                      {/* Animated traveling data pulse when highlighted */}
                      {isHighlighted && (
                        <circle r="3" fill="#00f0ff" opacity="0.9">
                          <animateMotion
                            dur="2.5s"
                            repeatCount="indefinite"
                            path={`M ${sourceCoords.x} ${sourceCoords.y} L ${targetCoords.x} ${targetCoords.y}`}
                          />
                        </circle>
                      )}
                    </g>
                  );
                });
              })}

              {/* Constellation Nodes */}
              {engineeringDnaNodes.map((node) => {
                const coords = getNodeCoords(node);
                const isSelected = activeNodeId === node.id;

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer group"
                    onClick={() => handleNodeClick(node)}
                  >
                    {/* Generous invisible hit-area circle to prevent cursor edge jitter */}
                    <circle
                      cx={coords.x}
                      cy={coords.y}
                      r={node.size * 0.75}
                      fill="transparent"
                      pointerEvents="all"
                    />

                    {/* Outer Glowing halo */}
                    {isSelected && (
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r={node.size * 0.9}
                        fill={node.color}
                        opacity="0.25"
                        className="animate-pulse"
                      />
                    )}

                    {/* Node Core Body - NO CSS scale transform (prevents 60Hz mouseout loop) */}
                    <circle
                      cx={coords.x}
                      cy={coords.y}
                      r={node.size * 0.55}
                      fill="#0c1017"
                      stroke={isSelected ? '#00f0ff' : 'rgba(255,255,255,0.25)'}
                      strokeWidth={isSelected ? 3 : 1.5}
                      className="transition-colors duration-200 group-hover:stroke-cyan-400"
                    />

                    {/* Inner Colored Dot */}
                    <circle
                      cx={coords.x}
                      cy={coords.y}
                      r={node.size * 0.22}
                      fill={node.color}
                      opacity={isSelected ? 1 : 0.8}
                    />

                    {/* Node Label Below */}
                    <text
                      x={coords.x}
                      y={coords.y + node.size * 0.75 + 10}
                      textAnchor="middle"
                      fill={isSelected ? '#00f0ff' : '#cbd5e1'}
                      fontSize="14"
                      fontFamily="JetBrains Mono, monospace"
                      fontWeight={isSelected ? '700' : '500'}
                      letterSpacing="0.05em"
                      className="transition-colors group-hover:fill-cyan-300"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="text-center font-mono text-[11px] text-neutral-400 pt-1">
            CLICK ANY NODE IN THE GRAPH OR USE PILLS ABOVE TO INSPECT SYSTEMS
          </div>
        </div>

        {/* Node Deep Dive Inspector (4 cols) with locked height */}
        <div className="lg:col-span-4 h-[530px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-3xl glass-panel border border-cyan-500/30 relative h-[530px] flex flex-col justify-between overflow-hidden"
            >
              <div className="overflow-y-auto pr-1">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-neutral-900 text-cyan-300 border border-cyan-500/30">
                    {selectedNode.label}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {selectedNode.timelineEra}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                  {selectedNode.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 mb-4 font-sans leading-relaxed">
                  {selectedNode.summary}
                </p>

                {/* Architectural Philosophy Callout */}
                <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-white/5 mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1 font-bold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>ENGINEERING PHILOSOPHY</span>
                  </div>
                  <p className="text-xs text-neutral-300 italic font-sans leading-relaxed">
                    "{selectedNode.philosophy}"
                  </p>
                </div>

                {/* Associated Technologies */}
                <div className="mb-4">
                  <div className="text-[11px] font-mono text-neutral-400 mb-2">
                    TECHNOLOGIES & TOOLING:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNode.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg bg-neutral-950 text-neutral-200 border border-white/10 text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interconnected Neighbors (Pinned to bottom) */}
              <div className="pt-3 border-t border-white/5 flex-shrink-0">
                <div className="text-xs font-mono text-neutral-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>INTERFACES DIRECTLY WITH:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.connections.map((cId) => {
                    const connNode = engineeringDnaNodes.find((n) => n.id === cId);
                    if (!connNode) return null;
                    return (
                      <button
                        key={cId}
                        onClick={() => handleNodeClick(connNode)}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-900 hover:bg-neutral-800 text-cyan-400 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors flex items-center gap-1"
                      >
                        <span>{connNode.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
