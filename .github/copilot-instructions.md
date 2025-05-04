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
- **Configuration over Custom CSS:** Before writing custom CSS, consider extending the Tailwind theme (`tailwind.config.cjs`) to add colors, spacing, fonts, etc.
- **Readable Classes:** Group utility classes by function (e.g., layout, spacing, typography, color) to improve readability. Consider using tools like `prettier-plugin-tailwindcss` to automatically sort classes.
- **Moderate Use of `@apply`:** For repetitive class patterns (more than 3 times) or complex components, `@apply` can be used within `<style>` tags or in `global.css`, but use it moderately to avoid losing the benefits of utilities.
- **Dark Mode:** Use Tailwind's `dark:` prefix to apply dark mode specific styles, maintaining consistency with the `ThemeToggle`.
- **Purge:** Ensure the `content` configuration in `tailwind.config.cjs` includes all relevant files so unused classes are removed in production.

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
