# dark1zinn Portfolio

A stunning, modern portfolio website built with **Nuxt 4** and **Nuxt UI**, optimized for static site generation and designed with a premium dark-mode aesthetic.

## ✨ Features

-   🎨 **Modern Design** - Beautiful UI with glassmorphism, gradients, and a pastel purple theme.
-   🌑 **Dark Mode Locked** - A curated, immersive dark experience.
-   🚀 **Static Site Generation** - Optimized for performance and GitHub Pages deployment.
-   📱 **Fully Responsive** - Flawless experience across mobile, tablet, and desktop.
-   🎭 **Smooth Animations** - Entry animations, hover effects, and marquees using standard CSS and Nuxt UI transitions.
-   🧩 **Modular Architecture** - Data-driven components for easy content updates.
-   ⚡ **Fast Performance** - Powered by Nuxt 4 and Bun.

## 🛠️ Tech Stack

-   **Framework**: Nuxt 4
-   **UI Library**: Nuxt UI (Tailwind CSS based)
-   **Icons**: Lucide & Simple Icons (via `@nuxt/icon`)
-   **Language**: TypeScript
-   **Runtime**: Bun
-   **Deployment**: GitHub Pages (via Actions)

## 📦 Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Generate static site
bun run generate

# Preview production build
bun run preview
```

## 🚀 Deployment

This project is configured for **GitHub Pages** deployment via GitHub Actions.

1.  Push your code to a GitHub repository.
2.  Ensure the workflow file `.github/workflows/deploy.yml` is present.
3.  Go to your repository **Settings** -> **Pages**.
4.  Set the **Source** to **GitHub Actions**.

The site will automatically build and deploy on every push to the `main` branch.

## 📁 Project Structure

```
dark1zinn/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment workflow
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css      # Global styles and Tailwind imports
│   ├── components/
│   │   ├── HeroSection.vue   # Landing section with GitHub status
│   │   ├── AboutSection.vue  # Bio and stats
│   │   ├── SkillsSection.vue # Tech stack tabs
│   │   ├── ProjectsSection.vue # Featured projects grid
│   │   └── ContactSection.vue # Social links
│   ├── layouts/
│   │   └── default.vue       # Main layout (Header/Footer)
│   ├── pages/
│   │   └── index.vue         # Homepage
│   ├── utils/
│   │   ├── projects.ts       # Static project data
│   │   ├── skills.ts         # Static skills data
│   │   └── ghStatus.ts       # GitHub API integration
│   └── app.config.ts         # UI Theme configuration
├── public/                   # Static assets (images, favicon)
├── nuxt.config.ts            # Nuxt configuration
└── package.json              # Dependencies
```

## 🎨 Design System

The project uses a custom design system built on top of Nuxt UI:

-   **Theme**: Defined in `app/app.config.ts`.
    -   `primary`: Violet
    -   `secondary`: Purple
    -   `success`: Green
-   **Typography**: Outfit (via `@nuxt/fonts`) & Monospace for code blocks.
-   **Icons**: Lucide for UI elements, Simple Icons for brand logos.

## 📝 Customization

1.  **Content**: Update `app/utils/projects.ts` and `app/utils/skills.ts` to modify your portfolio data without touching Vue files.
2.  **Colors**: Edit the `ui.colors` object in `app/app.config.ts`.
3.  **Bio**: Update the text and "code block" in `app/components/AboutSection.vue`.
4.  **Social Links**: Update `app/components/ContactSection.vue`.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Connect

-   **Discord**: [dark1zin](https://discord.com/users/617089012003241994)
-   **GitHub**: [@dark1zinn](https://github.com/dark1zinn)
-   **Instagram**: [@dark1zinn](https://www.instagram.com/dark1zinn/)
-   **YouTube**: [@dark1zin\_](https://www.youtube.com/@dark1zin_)

---

Built with ❤️ by dark1zinn using Nuxt 4
