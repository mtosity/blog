# Interactive Anchor Feature Documentation

## Overview
The Interactive Anchor feature allows readers to click on specific terms in blog posts to see detailed definitions in the left sidebar. When clicked, the anchor animates into a pill shape and shows contextual information.

## Components Architecture

### 1. InteractiveAnchor Component (`src/app/components/InteractiveAnchor.tsx`)
- **Purpose**: Creates clickable anchor elements with animated pill expansion
- **Key Features**:
  - Pill animation that expands from button position (right to left)
  - Info button (ⓘ) when inactive, close button (×) when active
  - Smooth transitions and animations
  - Unique ID generation for each anchor instance

**Props**:
- `text`: The text to display (e.g., "useEffect")
- `definitionKey`: Key to lookup definition content

**State Management**:
- `isAnimating`: Controls expansion animation
- `isClosing`: Controls collapse animation
- `wasActive`: Tracks previous active state for proper cleanup

### 2. BlogContext (`src/app/components/BlogContext.tsx`)
- **Purpose**: Manages global state for interactive anchors
- **State**: `activeAnchor` - tracks which anchor is currently active
- **Methods**:
  - `onInteract(definitionKey, anchorId)`: Opens definition sidebar
  - `onClose()`: Closes all anchors and returns to table of contents

### 3. BlogLayout Integration (`src/app/components/BlogLayout.tsx`)
- **Sidebar Modes**: 
  - `'toc'`: Shows table of contents
  - `'definition'`: Shows anchor definition with back button
- **State Management**:
  - `sidebarMode`: Controls sidebar content
  - `currentDefinition`: Stores active definition data

### 4. Definitions (`src/app/components/definitions.tsx`)
- **Purpose**: Contains rich content for each anchor type
- **Structure**: Key-value pairs with title and JSX content
- **Current Definitions**: useEffect, useState, useMemo, useCallback, etc.

## Animation System

### CSS Animations (`src/app/globals.css`)
```css
@keyframes expand-pill {
  0% {
    transform: scaleX(0);
    transform-origin: right center; /* Starts from button position */
  }
  100% {
    transform: scaleX(1);
    transform-origin: right center;
  }
}

@keyframes collapse-pill {
  0% {
    transform: scaleX(1);
    transform-origin: right center;
  }
  100% {
    transform: scaleX(0);
    transform-origin: right center;
  }
}
```

### Animation Flow
1. User clicks info button (ⓘ)
2. `isAnimating` state triggers expansion animation
3. After 300ms, `onInteract` called to show definition
4. Pill state shows close button (×)
5. Close button triggers collapse animation and sidebar reset

## Styling Details

### Pill States
- **Inactive**: Subtle hover effect, info button visible
- **Active**: Blue background pill with close button
- **Padding**: `px-1.5 py-0` (minimized to reduce layout shift)
- **Typography**: `leading-relaxed tracking-wide` for better readability

### Layout Considerations
- Uses `inline-flex` to prevent breaking text flow
- `transform-origin: right center` ensures animation starts from button
- Minimal padding to reduce vertical layout shift
- Consistent spacing with `px-1` on inactive state

## User Interactions

### Click Behavior
1. **Single Anchor Click**: Expands clicked anchor, shows definition
2. **Multiple Anchors**: Clicking new anchor closes previous ones
3. **Close Button**: Collapses anchor and returns to table of contents
4. **Back Button**: Returns to TOC and closes all anchors

### State Synchronization
- Context ensures only one anchor active at a time
- Sidebar automatically switches between TOC and definition modes
- Clean animations prevent visual glitches

## Implementation Example

```tsx
// In blog content
<p>
  Learn about <InteractiveAnchor text="useEffect" definitionKey="useEffect" /> 
  and <InteractiveAnchor text="useMemo" definitionKey="useMemo" /> hooks.
</p>
```

## Current Anchors
1. **useEffect** - React lifecycle hook explanation
2. **useMemo** - Performance optimization hook
3. **useCallback** - Function memoization hook

## Technical Decisions

### Why React Context?
- Avoids prop drilling through multiple components
- Centralizes anchor state management
- Enables communication between sidebar and anchors

### Why CSS Animations over JS?
- Better performance
- Smoother transitions
- Hardware acceleration
- Easier to maintain

### Why Unique IDs?
- Supports multiple instances of same term
- Prevents conflicts in state management
- Enables proper cleanup and animations

## Known Issues Resolved
1. ✅ **Function passing in Client Components**: Fixed with Context pattern
2. ✅ **HTML validation errors**: Used `<span>` instead of `<div>` in paragraphs
3. ✅ **Hydration errors**: Proper inline element nesting
4. ✅ **Animation direction**: Right-to-left expansion from button position
5. ✅ **Layout shift**: Minimized padding and added consistent spacing

## Future Enhancements
- Add keyboard navigation support
- Implement focus management for accessibility
- Add more definition types beyond React hooks
- Consider animation preferences (prefers-reduced-motion)
- Add analytics tracking for anchor interactions