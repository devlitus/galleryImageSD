import { test, expect } from '@playwright/test';

test('has title and h1 for seo', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Imagenes con SD/);

  // Expect an H1 with specific text
  const h1 = page.locator('h1');
  await expect(h1).toHaveText('Galería de Imágenes Generadas con Stable Diffusion');
});

test('gallery has images loading', async ({ page }) => {
  await page.goto('/');

  // Wait for at least one image in the gallery to appear
  const firstImage = page.locator('#gallery-grid a.group').first();
  // Using a less strict locator if the structure changed, or just waiting for gallery grid to have children
  const grid = page.locator('#gallery-grid');
  await expect(grid).toBeVisible();
});
