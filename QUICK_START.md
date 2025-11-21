# 🚀 Quick Start Guide

## Your Portfolio is Ready! 🎉

I've created a **stunning, modern portfolio** for you, built with **Nuxt 4** and **Nuxt UI**, optimized for static deployment and locked to a premium dark mode.

## 📂 What's Inside

### **Sections**

1.  **Hero** - Animated introduction with GitHub status integration.
2.  **About** - Personal info, experience stats, and a creative "code block" bio.
3.  **Skills** - Tech stack organized by proficiency (Daily Drivers, Familiar With, Explored).
4.  **Projects** - Featured work showcase with empty state handling.
5.  **Contact** - Social links and contact information.
6.  **Footer** - Navigation and copyright.

### **Design Features**

-   🎨 **Pastel Purple Theme**: Defined centrally in `app.config.ts`.
-   🌑 **Dark Mode Locked**: Optimized for a premium, immersive experience.
-   ✨ **Smooth Animations**: Entry animations, hover effects, and marquees.
-   💎 **Glassmorphism**: Modern translucent elements.
-   📱 **Fully Responsive**: Looks great on mobile, tablet, and desktop.
-   ⚡ **Static Site Generation**: Ready for GitHub Pages.

## 🎯 How to Use

### 1. **Development**

The dev server should already be running! If not:

```bash
bun install
bun run dev
```

Then open: **http://localhost:3000**

### 2. **Customize Content**

This project is designed to be modular. You don't need to dig into complex component code to update your data.

#### **Update Your Projects:**

Edit `app/utils/projects.ts`.
Simply add or remove objects from the `projects` array. If the array is empty, a "Work in Progress" placeholder will automatically appear.

```typescript
export const projects = [
    {
        title: 'My New Project',
        description: 'A brief description of what I built.',
        icon: 'i-lucide-rocket', // Use any Lucide icon
        link: 'https://github.com/yourusername/project',
        tags: ['Vue', 'Nuxt', 'Tailwind'],
    },
    // ...
];
```

#### **Update Your Skills:**

Edit `app/utils/skills.ts`.
You can modify `dailyDrivers`, `familiarWith`, and `explored` arrays to reflect your current tech stack.

#### **Change Colors:**

Edit `app/app.config.ts`.
The theme uses semantic color names (`primary`, `secondary`, `success`, etc.) mapped to Tailwind colors.

```typescript
export default defineAppConfig({
    ui: {
        colors: {
            primary: 'violet', // Main brand color
            secondary: 'purple', // Accents and gradients
            success: 'green', // Status indicators
            // ...
        },
    },
});
```

### 3. **Deploy**

#### **GitHub Pages (Recommended):**

A workflow file is already set up for you at `.github/workflows/deploy.yml`.

1.  Push your code to a GitHub repository.
2.  Go to **Settings** -> **Pages**.
3.  Set **Source** to **GitHub Actions**.
4.  The action will automatically build and deploy your site on every push to `main`.

#### **Manual Build:**

To generate the static site locally:

```bash
bun run generate
```

The output will be in the `.output/public` directory.

## 🎨 Customization Tips

### **Update Profile Image:**

1.  Place your image in the `public/` folder (or use an external URL).
2.  Update `app/components/HeroSection.vue` (line ~17) to reference your image.

### **GitHub Status Integration:**

The Hero section fetches your GitHub status.

1.  Ensure your `GITHUB_TOKEN` is set if you are running in a context that needs higher rate limits (though public data is often sufficient).
2.  The logic is in `app/utils/ghStatus.ts`.

## 📝 Important Files

-   `nuxt.config.ts`: Main Nuxt configuration (modules, fonts, SEO).
-   `app/app.config.ts`: UI Theme and Color configuration.
-   `app/utils/`: Data files for Projects and Skills.
-   `app/components/`: UI Components (Hero, About, Skills, Projects, Contact).
-   `app/layouts/default.vue`: Main layout structure (Header, Footer).

## ✅ Checklist Before Deploying

-   [ ] Update `app/utils/projects.ts` with your real projects.
-   [ ] Update `app/utils/skills.ts` with your actual skills.
-   [ ] Update social links in `app/components/ContactSection.vue`.
-   [ ] Update your bio and stats in `app/components/AboutSection.vue`.
-   [ ] Check `nuxt.config.ts` `app.baseURL` if deploying to a subpath (like `/repo-name/`).

## 🎉 You're All Set!

**Next:** Open http://localhost:3000 and start personalizing your portfolio! 🚀
