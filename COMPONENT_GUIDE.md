# ornix - Next.js Website Conversion

This project is a modern conversion of the ornix business consulting website from WordPress/HTML to a Next.js TypeScript application with Tailwind CSS.

## 📁 Project Structure

```
ornix-next/
├── components/           # React components
│   ├── Navbar.tsx       # Navigation with dropdowns and mobile menu
│   ├── Hero.tsx         # Hero banner with CTA buttons
│   ├── Services.tsx     # Services showcase (4 cards)
│   ├── About.tsx        # About section with stats
│   ├── Testimonials.tsx # CEO testimonial section
│   ├── CaseStudies.tsx  # Case studies/portfolio showcase
│   ├── Process.tsx      # Process steps and consulting info
│   ├── Blog.tsx         # Blog posts showcase
│   └── Footer.tsx       # Footer with links and newsletter
├── pages/
│   ├── _app.tsx         # Next.js app wrapper
│   └── index.tsx        # Main home page
├── public/              # Static assets
├── styles/
│   └── globals.css      # Global styles
├── types/
│   └── index.ts         # TypeScript type definitions
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.ts
└── README.md
```

## 🎨 Components Overview

### Navbar
- Fixed header with logo and navigation
- Dropdown menus for Home, Company, and Blog sections
- Mobile-responsive hamburger menu
- CTA button for "Schedule Consultation"

### Hero
- Large banner section with headline
- Call-to-action buttons (Work Together, Call buttons)
- Responsive layout with placeholder for hero image
- Professional typography and spacing

### Services
- 4-column grid of service cards
- Each card shows number, icon, title, description, and read more link
- Responsive design (1 col mobile, 2 col tablet, 4 col desktop)
- Hover effects on cards

### About
- Two-column layout with image and text
- Key achievements with checkmarks
- Company founding info
- 4-stat counters (projects, years, team, satisfaction)

### Testimonials
- CEO quote and testimonial
- Professional layout with blockquote styling
- Author information
- Call-to-action button

### CaseStudies
- 3-column grid of case study cards
- Each card shows category, title, and image placeholder
- Play button overlay on hover
- Read more links

### Process
- 4-step process with numbered cards
- Right column with consulting information
- 3 skill bars showing proficiency levels
- CTA buttons and dividers

### Blog
- 3-column grid of blog posts
- Cards include image, category, date, title, author, and read more
- Responsive layout
- Hover effects

### Footer
- Newsletter subscription section
- 4-column footer with company info, links, and popular posts
- Social media links
- Bottom copyright section

## 🛠️ Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management (useState for menu)

## 🎯 Key Features

✅ **Fully Responsive** - Mobile, tablet, and desktop layouts
✅ **TypeScript** - Type-safe components
✅ **Tailwind CSS** - Modern, utility-first styling
✅ **Component-based** - Reusable, modular architecture
✅ **Mobile Menu** - Hamburger navigation for small screens
✅ **Professional Design** - Modern business website aesthetic
✅ **Accessibility** - Semantic HTML and proper ARIA labels
✅ **Performance** - Optimized Next.js configuration

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are optimized for each breakpoint using Tailwind's responsive utilities.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the website.

## 🎨 Color Scheme

- **Primary Blue**: `#2563eb` (blue-600)
- **Light Blue**: `#eff6ff` (blue-50)
- **Gray**: `#1f2937` (gray-900) for text
- **Light Gray**: `#f3f4f6` (gray-50) for backgrounds

## 📝 Customization

### Updating Content

All component content is easily customizable within each TSX file:

```tsx
const services = [
  { id: 1, title: "Your Title", description: "Your description", ... },
  // Add more items
];
```

### Modifying Styles

Tailwind classes can be adjusted directly in components:

```tsx
<div className="text-4xl font-bold text-blue-600">
  Update classes here
</div>
```

### Adding New Components

1. Create new file in `components/` folder
2. Export as default React component
3. Import and use in `pages/index.tsx`

## 🔗 Component Dependencies

- All components are independent and can be reused
- Navbar appears on every page
- Other components are stacked in the index page

## 📄 License

This project is available for use and modification.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Created**: January 2026
**Original Design**: ornix WordPress Theme
**Conversion**: TypeScript + Next.js + Tailwind CSS
