## Project Rules and Conventions

### File Structure

- **Components:** Place all reusable components in `src/components/`. Use PascalCase for filenames (e.g., `ImageCard.astro`).
- **Layouts:** Define base page structures in `src/layouts/`. Use PascalCase (e.g., `GalleryLayout.astro`).
- **Pages:** Create pages in `src/pages/`. Use kebab-case for filenames (e.g., `my-gallery.astro`).
- **Styles:** Primarily use Tailwind CSS for utility styles. For component-specific styles, use `<style>` tags within the Astro component. Keep global styles in `src/styles/global.css` to a minimum.

### Styles

- Primarily use Tailwind CSS for utility styles. For component-specific styles, use `<style>` tags within the Astro component. Keep global styles in `src/styles/global.css` to a minimum.

#### Tailwind CSS Specifics

- **Prioritize Utilities:** Apply utility classes directly in the Astro/HTML markup whenever possible.
- **Theme Variables for Customization:** Prioritize using theme variables (e.g., in `src/styles/global.css` or a dedicated theme file using `@theme`) to define or override design tokens like colors, spacing, and fonts. This is the primary way to customize Tailwind's utility classes. While `tailwind.config.mjs` (or `.cjs`) was used for theme extension in older versions or for plugin configurations, direct theme variable definition in CSS is the modern approach for Tailwind CSS v4+. `tailwind.config.mjs` remains essential for other configurations like plugins, content paths for purging, etc.
- **Readable Classes:** Group utility classes by function (e.g., layout, spacing, typography, color) to improve readability. Consider using tools like `prettier-plugin-tailwindcss` to automatically sort classes.
- **Moderate Use of `@apply`:** For repetitive class patterns (more than 3 times) or complex components, `@apply` can be used within `<style>` tags or in `global.css`, but use it moderately to avoid losing the benefits of utilities.
- **Dark Mode:** Use Tailwind's `dark:` prefix to apply dark mode specific styles, maintaining consistency with the `ThemeToggle`.
- **Purge:** Ensure the `content` configuration in `tailwind.config.mjs` (or `.cjs`) includes all relevant files so unused classes are removed in production.
- **Responsive Design:** Use Tailwind's responsive utilities to ensure components are mobile-friendly. Test across different screen sizes.
- **Custom Themes with Variables:** When defining custom themes (extending or completely overriding the default), use theme variables within `@theme`. Ensure these variables are well-documented, follow consistent naming conventions (e.g., `--color-brand-primary`, `--font-body`), and are organized logically, possibly in a dedicated theme CSS file if extensive.
- **Organized Theme Variables**: For extensive theme customizations, consider organizing theme variables (`@theme`) in a dedicated CSS file (e.g., `src/styles/theme.css`) and importing it into `global.css`. This promotes modularity and maintainability of your design tokens.
- **Comprehensive Design Token Documentation**: Document all custom theme variables. Explain their purpose, intended use, and how they map to design decisions (e.g., `--spacing-sm` is `8px` and used for small gaps between elements). This is vital for design system adoption and consistency.
- **Systematic Value Usage (No Magic Numbers)**: Avoid arbitrary 'magic numbers' in utility classes (e.g., `mt-[13px]`). If a specific value is needed repeatedly or is part of the design language, define it as a theme variable first (e.g., `--spacing-custom-13: 13px;`) to ensure consistency and maintainability.
- **Accessibility-Conscious Utility Application**: Leverage Tailwind's utilities to build accessible components. Pay attention to focus indicators (`focus:`, `focus-visible:`), screen reader text (`sr-only`), and ensure custom theme colors meet WCAG contrast guidelines. Document accessibility considerations for components.

### Assets

- Store static images and other assets in `public/`. Images requiring processing by Astro should go in `src/assets/`.

### Astro Components

- Keep components small and focused on a single responsibility.
- Use `interface Props` to define component properties.
- Leverage slots (`<slot />`) for content composition.
- Use Astro Islands (`client:load`, `client:idle`, etc.) only when client-side interactivity is necessary.

### Images

- **Optimization:** Ensure images are optimized for the web (appropriate size and format). Consider using Astro's `<Image>` component (`@astrojs/image`) if you need automatic optimization.
- **Accessibility:** Always provide descriptive alternative text (`alt`) for all images.

### Code

- **TypeScript:** Use TypeScript whenever possible to improve type safety.
- **Formatting:** Maintain consistent code formatting (using Prettier with the appropriate configuration for Astro/TypeScript is recommended).
- **Accessibility:** Follow web accessibility guidelines (WCAG). Use semantic HTML and ensure keyboard navigation.

### Naming Conventions

- **Variables and Functions:** Use camelCase.
- **CSS Classes:** Use kebab-case or Tailwind utility classes.
- **Props:** Use camelCase.
