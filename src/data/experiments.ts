import { ExperimentItem } from '../types';

/**
 * =======================================================================
 * EXPERIMENT LAB DATA
 * =======================================================================
 * "Things I built because I wanted to understand how they work."
 * =======================================================================
 */

export const experimentItems: ExperimentItem[] = [
  {
    id: 'exp-rate-limiter',
    title: 'Token Bucket Rate Limiter Simulator',
    tagline: 'Visualizing token replenishment, burst capacity & drop dynamics',
    category: 'SYSTEMS',
    description: 'An interactive simulator modeling how token bucket rate-limiting algorithms handle bursty HTTP request traffic vs steady rates.',
    curiosityQuestion: 'How does an API gateway smoothly absorb momentary spikes without drowning backend databases?',
    keyFinding: 'Token buckets allow natural bursts up to bucket capacity while strictly enforcing long-term average rates, unlike rigid fixed-window counters.',
    tech: ['TypeScript', 'Algorithms', 'Interactive Canvas', 'Concurrency'],
    type: 'rate-limiter'
  },
  {
    id: 'exp-vector-tokenizer',
    title: 'Semantic Tokenizer & Vector Projection Visualizer',
    tagline: 'Exploring token embeddings, cosine similarity & dimensionality projection',
    category: 'AI',
    description: 'An interactive playground demonstrating how text tokens are translated into vector spaces and mapped via cosine distance.',
    curiosityQuestion: 'How does a computer actually measure "meaning" and semantic proximity between words and code tokens?',
    keyFinding: 'Semantic distance is linear dot product arithmetic in high dimensions; high-dimensional vectors naturally cluster semantic intent.',
    tech: ['Linear Algebra', 'Vector Math', 'TypeScript', 'Data Viz'],
    type: 'vector-tokenizer'
  },
  {
    id: 'exp-memory-allocator',
    title: 'Heap Memory Allocator & Fragmentation Visualizer',
    tagline: 'First-Fit vs Best-Fit dynamic memory block allocations and coalescing',
    category: 'SYSTEMS',
    description: 'A visual heap inspector simulating free-list block allocations, showing internal vs external fragmentation during random malloc and free calls.',
    curiosityQuestion: 'Why does memory fragmentation happen, and how do operating systems coalesce adjacent freed memory blocks?',
    keyFinding: 'Segregated size-class bins eliminate most search overhead and dramatically reduce external fragmentation compared to naive sequential scans.',
    tech: ['Systems', 'C-Style Pointers', 'Canvas 2D', 'Memory Management'],
    type: 'memory-allocator'
  }
];
