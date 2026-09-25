export type ViewMode = 'story' | 'recruiter';

export interface TimelineChapter {
  id: string;
  year: string;
  phase: string; // e.g. "YEAR 01", "YEAR 02", "PROFESSIONAL", "NOW"
  title: string;
  subtitle: string;
  era: string; // e.g. "2020 - 2021"
  story: string;
  learningFocus: string[];
  whatWasBuilt: {
    name: string;
    description: string;
    tech: string[];
    link?: string;
    projectId?: string;
  }[];
  technologiesEncountered: string[];
  keyChallenges: string;
  lessonLearned: string;
  visualTheme: {
    accentColor: string; // Tailwind color or hex
    badgeBg: string;
    borderAccent: string;
    diagramType?: 'circuit' | 'stack' | 'distributed' | 'cluster' | 'ai-mesh';
  };
}

export interface ProjectCaseStudy {
  id: string;
  code: string; // e.g. "001"
  title: string;
  tagline: string;
  category: 'ALL' | 'WEB' | 'BACKEND' | 'AI' | 'SYSTEMS' | 'EXPERIMENTS';
  categories?: ('AI' | 'BACKEND' | 'WEB' | 'SYSTEMS')[];
  featured: boolean;
  timelineYear: string;
  summary: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  codeStatus?: 'ACADEMIC_IP' | 'LAB_PROTOTYPE' | 'OPEN_SOURCE' | 'PROPRIETARY' | 'ARCHIVED';
  codeStatusNotice?: string; // e.g. "College Lab Artifact / Institutional IP (Code not publicly distributable)"
  originStory?: string; // Where the idea came from
  whyBuilt?: string; // Motivation behind building it
  interestingFacts?: string[]; // Fun facts, campus anecdotes, quirky constraints
  collegeContext?: string; // e.g. "Built during 3rd Year DBMS Lab on campus local subnet"
  caseStudy: {
    problem: string;
    approach: string;
    architectureDescription: string;
    architectureNodes: {
      id: string;
      name: string;
      type: 'client' | 'gateway' | 'service' | 'queue' | 'database' | 'ai' | 'cache';
      description: string;
    }[];
    architectureFlows: {
      from: string;
      to: string;
      label: string;
    }[];
    challenges: string[];
    results: {
      metric: string;
      label: string;
    }[];
    whatILearned: string;
    decisionLog: {
      question: string;
      answer: string;
    }[];
  };
}

export interface TechnologyItem {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Systems & DevOps' | 'Databases & Storage' | 'AI & Data';
  introducedIn: string; // e.g. "Year 01", "Year 02", etc.
  proficiencyLevel: 'Experienced' | 'Building With' | 'Exploring';
  icon: string;
  description: string;
}

export interface DnaDomainNode {
  id: string;
  name: string;
  label: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  size: number;
  color: string;
  summary: string;
  technologies: string[];
  timelineEra: string;
  philosophy: string;
  connections: string[]; // ids of connected nodes
}

export interface BuildLogEntry {
  id: string;
  timestamp: string; // "[2024.03]"
  category: 'EXPERIMENT' | 'ARCHITECTURE' | 'PRODUCTION' | 'LEARNING' | 'MILESTONE';
  title: string;
  summary: string;
  details: string;
  tags: string[];
}

export interface ExperimentItem {
  id: string;
  title: string;
  tagline: string;
  category: 'AI' | 'SYSTEMS' | 'AUTOMATION' | 'WEB' | 'INFRASTRUCTURE' | 'DATA';
  description: string;
  curiosityQuestion: string; // "I wanted to understand how..."
  keyFinding: string;
  tech: string[];
  type: 'rate-limiter' | 'vector-tokenizer' | 'memory-allocator';
}

export interface ProblemSolvingStory {
  title: string;
  context: string;
  steps: {
    phase: 'PROBLEM' | 'EXPERIMENT' | 'ITERATION' | 'SOLUTION' | 'LESSON';
    title: string;
    description: string;
    codeSnippet?: string;
    metricsBefore?: string;
    metricsAfter?: string;
  }[];
}
