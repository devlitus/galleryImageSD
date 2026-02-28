import { describe, it, expect } from 'vitest';
import { getOptimizedUrl, getSrcSet, GRID_SIZES } from './imageUtils';

describe('imageUtils', () => {
  describe('getOptimizedUrl', () => {
    it('should add transformations to a purely cloudinary url', () => {
      const originalUrl = 'https://res.cloudinary.com/demo/image/upload/v12345/sample.jpg';
      const expectedUrl = 'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,c_limit/v12345/sample.jpg';

      expect(getOptimizedUrl(originalUrl)).toBe(expectedUrl);
    });

    it('should add specific width transformation if width is provided', () => {
      const originalUrl = 'https://res.cloudinary.com/demo/image/upload/v12345/sample.jpg';
      const expectedUrl = 'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,c_limit,w_800/v12345/sample.jpg';

      expect(getOptimizedUrl(originalUrl, 800)).toBe(expectedUrl);
    });

    it('should return the original URL if it is not a cloudinary url', () => {
      const originalUrl = 'https://example.com/images/sample.jpg';

      expect(getOptimizedUrl(originalUrl)).toBe(originalUrl);
    });

    it('should return original string if upload/ path is missing in a cloudinary url', () => {
      // Unlikely edge case but good for coverage
      const originalUrl = 'https://res.cloudinary.com/demo/image/weirdpath/v12345/sample.jpg';
      expect(getOptimizedUrl(originalUrl)).toBe(originalUrl);
    });
  });

  describe('getSrcSet', () => {
    it('should generate a correct srcset string for multiple widths', () => {
      const originalUrl = 'https://res.cloudinary.com/demo/image/upload/v12345/sample.jpg';
      const srcSet = getSrcSet(originalUrl);

      expect(srcSet).toContain('w_640/v12345/sample.jpg 640w');
      expect(srcSet).toContain('w_768/v12345/sample.jpg 768w');
      expect(srcSet).toContain('w_1024/v12345/sample.jpg 1024w');
      expect(srcSet).toContain('w_1280/v12345/sample.jpg 1280w');
      expect(srcSet).toContain('w_1536/v12345/sample.jpg 1536w');

      // Check it's comma separated
      expect(srcSet.split(', ')).toHaveLength(5);
    });
  });

  describe('GRID_SIZES', () => {
    it('exports correct sizes string', () => {
      expect(typeof GRID_SIZES).toBe('string');
      expect(GRID_SIZES).toContain('max-width: 640px');
    });
  });
});
