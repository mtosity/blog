# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 blog site using the App Router architecture with TypeScript and Tailwind CSS. The project is a personal blog called "Mint by Minh Tam Nguyen" featuring technical and lifestyle content with an interactive sidebar system.

**Recent Updates:**
- **Lottie Animation Integration**: Replaced static soul.jpg image with animated cat-reading.json Lottie animation
- **Client/Server Component Separation**: Created dedicated LottieAnimation client component while keeping main page as server component
- **Layout Optimization**: Reduced left column width from 50% to 40% (2/5 grid columns) for better content balance
- **Animation Positioning**: Positioned Lottie animation to the left with 1.5x scale (900px × 600px)

## Development Commands

- **Start development server**: `pnpm dev` (uses Turbopack)
- **Build for production**: `pnpm build`
- **Start production server**: `pnpm start`
- **Lint code**: `pnpm lint`

The project uses pnpm as the package manager (evidenced by pnpm-lock.yaml).

## Homepage Design

The homepage features a carefully crafted layout:
- **Two-column grid**: Lottie animation on left (40% width), blog posts on right (60% width)
- **Grid system**: Uses `lg:grid-cols-5` with left column `lg:col-span-2` and right column `lg:col-span-3`
- **No scrolling**: Fixed height (`h-screen overflow-hidden`) prevents page scrolling
- **Lottie Animation**: Interactive cat-reading animation positioned left-aligned with 1.5x scaling
- **Internal scrolling**: Only the right column blog list scrolls internally
- **Clean spacing**: Reduced margins and tight typography for efficient use of space

## Architecture

### File Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/app/layout.tsx` - Root layout with Geist fonts configuration
- `src/app/page.tsx` - Homepage with blog post listing (no-scroll design)
- `src/app/blog/[slug]/page.tsx` - Individual blog post pages
- `src/app/components/` - Reusable components for blog functionality
- `src/app/globals.css` - Global styles with Tailwind CSS v4 and CSS variables

### Key Technologies
- **Next.js 15** with App Router
- **React 19**
- **TypeScript** with strict configuration
- **Tailwind CSS v4** with inline theme configuration
- **ESLint** with Next.js configuration
- **Lottie React** (`lottie-react`) for interactive animations
- **Prism.js** for syntax highlighting

### Current Blog Posts
1. **Decoding Happiness** (`/blog/decoding-happiness/`) - Comprehensive guide on happiness psychology
2. **React Common Mistakes** (`/blog/react-common-mistakes/`) - Technical React tutorial

### Styling Approach
- Uses Tailwind CSS v4 with `@import "tailwindcss"`
- Custom CSS variables for theming (light/dark mode support)
- Geist fonts (sans and mono) loaded via next/font/google
- Responsive design with max-width containers
- **Overflow management**: Careful use of `break-words`, `overflow-hidden`, and flexbox

## Blog Content Structure

### BlogLayout Component
The BlogLayout provides a sophisticated two-column layout:
- **Sidebar (left)**: Interactive navigation and definitions
- **Content (right)**: Article content with proper typography
- **Fixed height**: Uses `h-[calc(100vh-6rem)]` with sticky positioning
- **Overflow handling**: Proper text wrapping and scroll containers

### Interactive Features

#### 1. Table of Contents
- Auto-generated from article headings (h2-h6)
- **Scoped extraction**: Only extracts headings from `article.prose` to avoid duplicates
- Smooth scroll navigation to sections
- Responsive design with proper overflow handling

#### 2. Interactive Anchors
- Click terms to show detailed definitions in sidebar
- Smooth animations between views (table of contents ↔ definitions)
- Extensive definitions for psychological and technical concepts

#### 3. Code Examples (React blog)
- Wrong vs correct code comparisons
- Syntax highlighting and explanations
- Interactive code viewer in sidebar

### Happiness Blog Features
The Decoding Happiness blog includes psychology-focused interactive anchors:
- **Hedonic Adaptation**: How humans return to baseline happiness
- **Affective Forecasting**: Our poor ability to predict future emotions
- **Social Comparison Theory**: How comparisons affect well-being
- **Mindfulness**: Present-moment awareness practices
- **Gratitude Practice**: Research-based gratitude methods

### Components Architecture

#### Core Components
- `BlogLayout.tsx` - Main layout with sidebar state management
- `BlogContext.tsx` - React Context for cross-component state
- `InteractiveAnchor.tsx` - Clickable terms with animations
- `CodeAnchor.tsx` - Links to code examples
- `CodeView.tsx` - Code example display with syntax highlighting
- `CodeBlock.tsx` - Syntax highlighted code blocks
- `definitions.tsx` - Comprehensive definitions database
- `LottieAnimation.tsx` - Client-side Lottie animation component

#### Key Implementation Details
- **Type safety**: Proper TypeScript interfaces for all components
- **State management**: Context API for sidebar mode switching
- **Animation system**: CSS transitions for smooth interactions
- **Responsive design**: Mobile-first approach with proper breakpoints
- **Text overflow**: `break-words` and proper container constraints

## Common Issues & Solutions

### Layout Problems Fixed This Session:
1. **Text overflow**: Added `break-words` to prevent text from overflowing containers
2. **Duplicate Table of Contents**: Fixed heading extraction to scope to article content only
3. **Scroll management**: Implemented proper flexbox with `overflow-hidden` and `overflow-y-auto`
4. **Image replacement**: Replaced static soul.jpg with animated cat-reading.json Lottie animation
5. **Column proportions**: Changed from 50/50 to 40/60 split (lg:grid-cols-5 with col-span-2/3)
6. **Client/Server optimization**: Separated Lottie animation into client component while keeping page server-side
7. **Animation positioning**: Left-aligned animation with 1.5x scaling for better visual impact

### Type Safety
- All components use proper TypeScript interfaces
- Definitions use `React.ReactNode` for rich content
- Code examples have structured type definitions
- Proper error handling for missing definitions

### Performance Considerations
- Lazy definition loading
- Proper cleanup in useEffect hooks
- Optimized re-rendering with React Context
- Minimal bundle size with tree-shaking

## Future Development Notes

### Content Strategy
- Technical posts use `CodeAnchor` for interactive code examples
- Lifestyle/psychology posts use `InteractiveAnchor` for concept definitions
- Each post type has its own definition database section

### Styling Patterns
- Use `break-words` for all user content
- Implement proper flex containers with `overflow-hidden`
- Maintain consistent spacing with Tailwind spacing scale
- Test on multiple screen sizes for responsive behavior

### Component Patterns
- Always provide TypeScript interfaces
- Use React Context for cross-component state
- Implement proper cleanup in effects
- Handle edge cases (missing content, undefined states)

This architecture supports both technical documentation and lifestyle content with rich interactive features while maintaining performance and accessibility.

## Lottie Animation Implementation

### LottieAnimation Component (`src/app/components/LottieAnimation.tsx`)
- **Purpose**: Client-side component for rendering Lottie animations
- **Features**:
  - Uses `"use client"` directive for client-side rendering
  - Imports cat-reading.json animation from public/images/
  - Left-aligned positioning with flex justify-start
  - Responsive sizing: 900px × 600px (1.5x scale)
  - Maintains rounded corners and shadow styling

### Architecture Benefits
- **Server/Client Separation**: Main page remains server component for SEO
- **Component Isolation**: Lottie logic contained in dedicated component
- **Performance**: Only animation runs client-side, reducing bundle size
- **Reusability**: Animation component can be used across different pages

### Animation Assets
- **File**: `/public/images/cat-reading.json` (3656 lines)
- **Format**: Standard Lottie JSON animation
- **Dimensions**: 200×180 native, scaled to 900×600
- **Frame Rate**: 29.97 FPS
- **Duration**: 41 frames (~1.4 seconds loop)