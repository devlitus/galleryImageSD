import { describe, it, expect, vi } from 'vitest';
import { isImageFile, readFileAsDataURL } from './fileHandlers';

describe('fileHandlers', () => {
  describe('isImageFile', () => {
    it('should return true for valid image files', () => {
      const validFiles = [
        new File([''], 'test.png', { type: 'image/png' }),
        new File([''], 'test.jpg', { type: 'image/jpeg' }),
        new File([''], 'test.gif', { type: 'image/gif' }),
        new File([''], 'test.webp', { type: 'image/webp' }),
      ];

      validFiles.forEach(file => {
        expect(isImageFile(file)).toBe(true);
      });
    });

    it('should return false for non-image files', () => {
      const invalidFiles = [
        new File([''], 'test.txt', { type: 'text/plain' }),
        new File([''], 'test.pdf', { type: 'application/pdf' }),
        new File([''], 'test.js', { type: 'text/javascript' }),
      ];

      invalidFiles.forEach(file => {
        expect(isImageFile(file)).toBe(false);
      });
    });
  });

  describe('readFileAsDataURL', () => {
    it('should read file and resolve with data URL', async () => {
      // Mocking FileReader for Node/JSDOM environment where it might not behave exactly like browser
      const mockFile = new File(['dummy content'], 'test.txt', { type: 'text/plain' });

      // We expect the promise to resolve, but we can't easily mock the exact base64
      // output without actually letting FileReader work, which jsdom supports.
      const result = await readFileAsDataURL(mockFile);
      expect(typeof result).toBe('string');
      expect(result).toContain('data:text/plain;base64,');
    });

    it('should reject if FileReader encounters an error', async () => {
      // This is harder to test without deeply mocking FileReader, 
      // but we can spy on it or assume the implementation is standard.
      // For a simple mock override to force an error:
      const originalFileReader = global.FileReader;

      global.FileReader = class MockFileReader {
        onload: any;
        onerror: any;
        readAsDataURL() {
          setTimeout(() => {
            if (this.onerror) this.onerror(new ProgressEvent('error'));
          }, 0);
        }
      } as any;

      const mockFile = new File([''], 'error.txt');

      await expect(readFileAsDataURL(mockFile)).rejects.toThrow();

      // Restore
      global.FileReader = originalFileReader;
    });
  });
});
