import { describe, it, expect } from 'vitest';
import { principles, timeline } from '../experienceContent';

describe('principles', () => {
  it('has exactly 4 entries', () => {
    expect(principles).toHaveLength(4);
  });

  it('each entry has number, title, and copy', () => {
    for (const p of principles) {
      expect(p).toHaveProperty('number');
      expect(p).toHaveProperty('title');
      expect(p).toHaveProperty('copy');
      expect(typeof p.number).toBe('string');
      expect(typeof p.title).toBe('string');
      expect(typeof p.copy).toBe('string');
    }
  });

  it('numbers are sequential', () => {
    const numbers = principles.map((p) => p.number);
    expect(numbers).toEqual(['01', '02', '03', '04']);
  });
});

describe('timeline', () => {
  it('has at least one entry', () => {
    expect(timeline.length).toBeGreaterThan(0);
  });

  it('each entry has period, title, org, and copy', () => {
    for (const entry of timeline) {
      expect(entry).toHaveProperty('period');
      expect(entry).toHaveProperty('title');
      expect(entry).toHaveProperty('org');
      expect(entry).toHaveProperty('copy');
    }
  });
});
