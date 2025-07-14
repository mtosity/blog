# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 blog site using the App Router architecture with TypeScript and Tailwind CSS. The project follows a minimal blog structure with static pages for individual blog posts.

## Development Commands

- **Start development server**: `pnpm dev` (uses Turbopack)
- **Build for production**: `pnpm build`
- **Start production server**: `pnpm start`
- **Lint code**: `pnpm lint`

The project uses pnpm as the package manager (evidenced by pnpm-lock.yaml).

## Architecture

### File Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/app/layout.tsx` - Root layout with Geist fonts configuration
- `src/app/page.tsx` - Homepage with blog post listing
- `src/app/blog/[slug]/page.tsx` - Individual blog post pages
- `src/app/globals.css` - Global styles with Tailwind CSS v4 and CSS variables

### Key Technologies
- **Next.js 15** with App Router
- **React 19**
- **TypeScript** with strict configuration
- **Tailwind CSS v4** with inline theme configuration
- **ESLint** with Next.js configuration

### Routing Pattern
Blog posts are organized as route folders under `src/app/blog/`:
- `/blog/hello-world/` - First blog post
- `/blog/getting-started-nextjs/` - Next.js tutorial post

Each blog post is a separate page.tsx file in its own directory.

### Styling Approach
- Uses Tailwind CSS v4 with `@import "tailwindcss"`
- Custom CSS variables for theming (light/dark mode support)
- Geist fonts (sans and mono) loaded via next/font/google
- Responsive design with max-width containers

### Build Configuration
- Deployment configured for Vercel (vercel.json specifies pnpm build)
- TypeScript path mapping for `@/*` imports pointing to `./src/*`
- Standard Next.js configuration with minimal customization

## Blog Content Structure

Blog posts use the BlogLayout component which provides:
- Two-column layout (sidebar + content)
- Table of contents with smooth scrolling navigation
- Interactive anchor feature for contextual definitions
- Responsive design with equal-width columns (50/50)

### Interactive Anchor Feature
The blog includes a sophisticated interactive anchor system:
- Click on terms like "useEffect", "useMemo", "useCallback" to see definitions
- Animated pill expansion from button position (right-to-left)
- Sidebar switches between table of contents and definition view
- React Context manages state across components
- Detailed documentation available in `claude/anchor.md`

### Components
- `BlogLayout.tsx` - Main layout with sidebar and content areas
- `InteractiveAnchor.tsx` - Clickable terms with pill animations
- `BlogContext.tsx` - State management for anchor interactions
- `definitions.tsx` - Rich content definitions for React concepts

### Styling
- Uses `prose prose-xl` for enhanced typography
- `tracking-wide` for improved letter spacing
- Custom CSS animations for pill expand/collapse effects
- Minimal padding to prevent layout shift