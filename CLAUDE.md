# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 blog site using the App Router architecture with TypeScript and Tailwind CSS. The project is a personal blog called "Mint by Minh Tam Nguyen" featuring technical and lifestyle content with an interactive sidebar system.

**Recent Updates:**
- **Blog Category System**: Implemented comprehensive category filtering with 4 categories: "Building", "Living", "Money", "Tiếng Việt"
- **Typography Overhaul**: Changed from newspaper-style fonts to Source Serif 4 for content with specific font sizing (18px, 400 weight, 32px line-height)
- **Vietnamese Content**: Added Vietnamese blog about US Treasury bonds with interactive financial term definitions
- **Interactive Anchor System**: Fixed definition lookup system and increased font sizes for better readability
- **Scroll-based Navigation**: Added automatic table of contents highlighting based on scroll position
- **Font Size Improvements**: Increased font sizes across blog content, table of contents, and definition content

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
1. **Decoding Happiness** (`/blog/decoding-happiness/`) - Comprehensive guide on happiness psychology (Living category)
2. **React Common Mistakes** (`/blog/react-common-mistakes/`) - Technical React tutorial (Building category)
3. **Hoa Kỳ Vay Tiền Như Thế Nào?** (`/blog/hoa-ky-vay-tien/`) - Vietnamese blog about US Treasury bonds (Tiếng Việt category)

### Styling Approach
- Uses Tailwind CSS v4 with `@import "tailwindcss"`
- Custom CSS variables for theming (light/dark mode support)
- **Typography**: Playfair Display for headings, Source Serif 4 for content (18px, 400 weight, 32px line-height)
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
- **Scroll-based highlighting**: Automatically highlights current section based on scroll position
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

### Vietnamese Financial Blog Features
The Vietnamese Treasury bonds blog includes financial term interactive anchors:
- **Thâm hụt ngân sách**: Budget deficit explanations
- **Trái phiếu kho bạc**: Treasury bonds types and characteristics
- **Lạm phát**: Inflation causes and historical examples
- **Hiệp định Bretton Woods**: 1944 international monetary agreement
- **Nixon Shock**: 1971 end of gold standard
- **Tiền pháp định**: Fiat currency concept
- **Petrodollar**: Oil-dollar relationship system
- **Thanh khoản**: Financial liquidity levels

### Components Architecture

#### Core Components
- `BlogLayout.tsx` - Main layout with sidebar state management and scroll-based navigation highlighting
- `BlogContext.tsx` - React Context for cross-component state
- `InteractiveAnchor.tsx` - Clickable terms with animations
- `CodeAnchor.tsx` - Links to code examples
- `CodeView.tsx` - Code example display with syntax highlighting
- `CodeBlock.tsx` - Syntax highlighted code blocks
- `definitions.tsx` - Comprehensive definitions database with Vietnamese financial terms
- `LottieAnimation.tsx` - Client-side Lottie animation component
- `CategoryFilter.tsx` - Tab-style category filtering for homepage

#### Key Implementation Details
- **Type safety**: Proper TypeScript interfaces for all components
- **State management**: Context API for sidebar mode switching
- **Animation system**: CSS transitions for smooth interactions
- **Responsive design**: Mobile-first approach with proper breakpoints
- **Text overflow**: `break-words` and proper container constraints

## Blog Category System

### Category Structure
- **4 Categories**: "Building", "Living", "Money", "Tiếng Việt"
- **Default Selection**: "Building" category loads by default
- **Tab Interface**: Clean tab design with underline styling and hover effects
- **Color Coding**: Each category has distinct color scheme (blue, green, purple, yellow)

### Implementation Files
- `src/app/data/blogPosts.ts` - Blog data structure and category types
- `src/app/components/CategoryFilter.tsx` - Tab-style filter component
- `src/app/page.tsx` - Homepage with filtering state management

### Blog Content Distribution
- **Building**: Technical/React content
- **Living**: Psychology/lifestyle content  
- **Money**: Financial content
- **Tiếng Việt**: Vietnamese language content

## Common Issues & Solutions

### Recent Session Fixes (July 14, 2025):
1. **Interactive Anchor Bug**: Fixed Vietnamese definitions showing undefined - definitions were placed outside the definitions object
2. **Typography System**: Implemented Source Serif 4 for content with specific sizing (18px, 400 weight, 32px line-height)
3. **Font Size Standardization**: Increased all content font sizes for better readability
4. **Scroll-based Navigation**: Added automatic table of contents highlighting based on scroll position
5. **Category Filtering**: Implemented complete tab-style filtering system with proper state management
6. **Vietnamese Content**: Added comprehensive financial blog with interactive definitions

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