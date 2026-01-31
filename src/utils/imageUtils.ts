/**
 * Generates an optimized Cloudinary URL with auto format and quality.
 *
 * @param url - The original Cloudinary secure_url
 * @param width - Optional resize width
 * @returns The optimized URL string
 */
export function getOptimizedUrl(url: string, width?: number): string {
  // Check if it's already a Cloudinary URL to avoid breaking external images if any
  if (!url.includes('cloudinary.com')) return url;

  // Insert transformations after /upload/
  // f_auto: automatic format (webp/avif)
  // q_auto: automatic quality
  // c_limit: resize maintaining aspect ratio, don't upscale
  // w_{width}: resize to specific width

  const transformation = ['f_auto', 'q_auto', 'c_limit'];
  if (width) {
    transformation.push(`w_${width}`);
  }

  const parts = url.split('/upload/');
  if (parts.length !== 2) return url;

  return `${parts[0]}/upload/${transformation.join(',')}/${parts[1]}`;
}

/**
 * Generates a srcset string for responsive images.
 * @param url - The original Cloudinary URL
 * @returns A srcset string with widths 640w, 768w, 1024w, 1280w, 1536w
 */
export function getSrcSet(url: string): string {
  const widths = [640, 768, 1024, 1280, 1536];
  return widths
    .map(w => `${getOptimizedUrl(url, w)} ${w}w`)
    .join(', ');
}

/**
 * Common sizes attribute for the gallery grid layout.
 * columns-1 sm:columns-2 md:columns-3 lg:columns-4
 */
export const GRID_SIZES = "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw";
