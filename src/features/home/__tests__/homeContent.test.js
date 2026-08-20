import { describe, it, expect } from 'vitest';
import { defaultHero, heroViews } from '../homeContent';

describe('defaultHero', () => {
  it('has title and copy', () => {
    expect(defaultHero).toHaveProperty('title');
    expect(defaultHero).toHaveProperty('copy');
    expect(typeof defaultHero.title).toBe('string');
    expect(typeof defaultHero.copy).toBe('string');
  });
});

describe('heroViews', () => {
  it('has products and about views', () => {
    expect(heroViews).toHaveProperty('products');
    expect(heroViews).toHaveProperty('about');
  });

  it('each view has title and copy', () => {
    for (const view of Object.values(heroViews)) {
      expect(view).toHaveProperty('title');
      expect(view).toHaveProperty('copy');
    }
  });
});
