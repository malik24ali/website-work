# Animation Implementation Guide

Your Orvix website now includes professional animations similar to the original WordPress theme. Here's what was added:

## 📁 New Files Created

### 1. **styles/animations.css**
- Comprehensive animation library with keyframes
- Utility classes for easy use in components
- Includes: fade-in, slide, scale, bounce, glow, and counter animations

### 2. **hooks/useScrollAnimation.ts**
- Custom React hook for scroll-triggered animations
- Uses Intersection Observer API for performance
- Automatically detects when elements enter viewport

### 3. **hooks/useCounter.ts**
- Custom React hook for animated number counters
- Smoothly counts from 0 to target number
- Used in About section stats

## 🎨 Animation Types Implemented

### Fade Animations
- `fadeIn` - Simple opacity fade
- `fadeInUp` - Fade in while moving up
- `fadeInDown` - Fade in while moving down
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right

### Slide Animations
- `slideInUp` - Slide up with fade
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right

### Scale & Zoom
- `scaleUp` - Scale from small to normal
- `zoomIn` - More pronounced scale effect

### Interactive Effects
- `bounce` - Bouncing animation
- `pulse` - Opacity pulse effect
- `glow` - Red glow effect (matches brand color)

### Staggered Effects
- `.animate-stagger` - Sequential animation delays for child elements
- Each child animates with 0.1s delay between them

## 🎯 Where Animations Are Used

### Hero Section
- Left text: `fadeInLeft`
- Divider: `pulse`
- Buttons: Stagger effect with hover scale

### Services Section
- Header: `fadeInUp` + `fadeInRight`
- Service cards: `fadeInUp` with stagger + hover scale
- Icons: Scale on hover

### About Section
- Image: `fadeInLeft` with bounce icon
- Text: `fadeInRight`
- Achievements: `fadeInUp` stagger with check icons
- Stats: Counter animation with `countUp` effect

### Testimonials
- Text content: `fadeInLeft`
- Quote: `fadeInUp`
- Image: `fadeInRight` with bounce icon

### Case Studies
- Header: `fadeInUp` + `fadeInRight`
- Case cards: `fadeInUp` stagger with hover scale
- Play button: `scaleUp` on hover

### Blog
- Header: `fadeInUp` + `fadeInRight`
- Blog posts: `fadeInUp` stagger with hover scale
- Read More links: Translate animation

### Footer
- Newsletter: `fadeInUp`
- Footer columns: `fadeInUp` stagger
- Social links: Hover scale effect

## ⚙️ How Animations Work

### Scroll Trigger
```jsx
const { ref, isVisible } = useScrollAnimation();
// Apply animation class when isVisible is true
```

### Counter Numbers
```jsx
const count = useCounter(targetNumber, duration, shouldStart);
// Animates counting from 0 to target
```

### Hover Effects
```jsx
// Built-in hover scale effect
<element className="hover-scale" />

// Or custom event handlers
onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
```

## 🎬 Animation Properties

- **Duration**: Most animations are 0.6-0.7s
- **Timing**: `ease-out` for smooth, natural feel
- **Stagger Delay**: 0.1s between each element (0.1s, 0.2s, 0.3s, etc.)
- **Hover Transitions**: 0.3s smooth color/scale transitions

## 📊 Performance Optimizations

1. **Intersection Observer**: Animations only trigger when elements come into view
2. **Single Observer Per Section**: Efficient viewport detection
3. **GPU-Accelerated**: Uses transform/opacity for smooth 60fps
4. **Auto-Cleanup**: Observer disconnects after animation triggers

## 🚀 Running Your Site

```bash
npm run dev
```

Visit `http://localhost:3000` to see all animations in action!

## 💡 Customization Tips

### Change Animation Speed
Edit `animations.css`:
```css
.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards; /* Change 0.6s to desired duration */
}
```

### Change Scroll Trigger Threshold
In components using animations:
```jsx
const { ref, isVisible } = useScrollAnimation({
  threshold: 0.2,      // 20% of element must be visible
  rootMargin: '0px 0px -50px 0px' // Trigger 50px before bottom
});
```

### Add New Animation
1. Add keyframes in `styles/animations.css`
2. Create utility class
3. Use in components: `className={isVisible ? 'animate-yourAnimation' : 'opacity-0'}`

## 🎨 Color Integration

All animations seamlessly use your black, red, and white color scheme:
- Red accents glow smoothly
- Buttons scale with hover color transitions
- Dividers pulse with red color

Enjoy your animated website! 🎉
