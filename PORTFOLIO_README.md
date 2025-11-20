# dark1zinn Portfolio

A stunning, modern portfolio website built with **Nuxt 4** and optimized for static site generation.

## ✨ Features

-   🎨 **Modern Design** - Beautiful UI with gradient effects, glassmorphism, and smooth animations
-   🚀 **Static Site Generation** - Optimized for performance with SSG (no SSR)
-   📱 **Fully Responsive** - Works perfectly on all devices
-   🎭 **Smooth Animations** - Engaging micro-interactions and transitions
-   🎯 **SEO Optimized** - Proper meta tags and semantic HTML
-   ⚡ **Fast Performance** - Minimal bundle size and optimized assets
-   🎨 **Aura Theme** - Custom purple/cyan color scheme

## 🛠️ Tech Stack

-   **Framework**: Nuxt 3
-   **Language**: TypeScript
-   **Styling**: Vanilla CSS with custom design system
-   **Runtime**: Bun
-   **Deployment**: Static hosting ready

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

This project is configured for static site generation. After running `bun run generate`, the static files will be in the `.output/public` directory.

You can deploy to:

-   **GitHub Pages**
-   **Netlify**
-   **Vercel**
-   **Cloudflare Pages**
-   Any static hosting service

## 📁 Project Structure

```
dark1zinn/
├── assets/
│   └── css/
│       └── main.css          # Design system and global styles
├── components/
│   ├── HeroSection.vue       # Landing section
│   ├── AboutSection.vue      # About me
│   ├── SkillsSection.vue     # Tech stack
│   ├── ProjectsSection.vue   # Featured projects
│   ├── ContactSection.vue    # Contact information
│   └── FooterSection.vue     # Footer
├── pages/
│   └── index.vue             # Main page
├── public/                   # Static assets
├── nuxt.config.ts           # Nuxt configuration
└── package.json             # Dependencies
```

## 🎨 Design System

The project uses a custom design system with:

-   **Color Palette**: Aura theme (purple/cyan)
-   **Typography**: Inter (primary), Fira Code (monospace)
-   **Components**: Cards, buttons, badges with consistent styling
-   **Animations**: Fade-in, slide, float, and custom animations
-   **Responsive**: Mobile-first approach

## 📝 Customization

1. **Colors**: Edit CSS variables in `assets/css/main.css`
2. **Content**: Update component files in `components/`
3. **Projects**: Modify the projects array in `ProjectsSection.vue`
4. **Skills**: Update skill lists in `SkillsSection.vue`
5. **Social Links**: Change URLs in respective components

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Connect

-   **Discord**: [dark1zinn](https://discord.com/users/617089012003241994)
-   **GitHub**: [@dark1zinn](https://github.com/dark1zinn)
-   **Instagram**: [@dark1zinn](https://www.instagram.com/dark1zinn/)
-   **YouTube**: [@dark1zin\_](https://www.youtube.com/@dark1zin_)

---

Built with ❤️ by dark1zinn using Nuxt 4
