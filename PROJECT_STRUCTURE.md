# Joseph Smart - Premium Portfolio

A luxury, dark-themed React portfolio website featuring 3D elements, cinematic animations, and modern web technologies.

## 🎨 Features

- **3D Hero Section** - Interactive Three.js orb with mouse tracking
- **Smooth Scrolling** - Lenis-powered smooth scroll experience
- **Cinematic Animations** - Motion (Framer Motion) animations throughout
- **Magnetic Buttons** - Interactive hover effects
- **Responsive Design** - Works seamlessly on all devices
- **Dark Luxury Theme** - Premium black and indigo color palette
- **Performance Optimized** - 60fps target with optimized animations
- **Accessibility** - Respects reduced motion preferences

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Three.js / React Three Fiber** - 3D graphics
- **Motion (Framer Motion)** - Advanced animations
- **Lenis** - Smooth scrolling
- **Vite** - Fast build tool

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Hero.tsx              # Hero section with 3D orb
│   │   ├── HeroOrb.tsx           # 3D animated sphere
│   │   ├── MagneticButton.tsx    # Interactive button component
│   │   ├── Navigation.tsx        # Sticky navigation bar
│   │   ├── About.tsx             # About section
│   │   ├── Services.tsx          # Services with cards
│   │   ├── Work.tsx              # Featured projects
│   │   ├── Philosophy.tsx        # Design philosophy
│   │   ├── TechStack.tsx         # Tech stack marquee
│   │   ├── Testimonials.tsx      # Client testimonials
│   │   ├── Contact.tsx           # Contact CTA
│   │   ├── Footer.tsx            # Footer section
│   │   └── SmoothScroll.tsx      # Lenis wrapper
│   └── App.tsx                   # Main app component
└── styles/
    ├── fonts.css                 # Font imports
    ├── tailwind.css              # Tailwind config
    ├── theme.css                 # Design tokens
    └── index.css                 # Main CSS

```

## 🎯 Key Sections

1. **Hero** - Full-screen intro with 3D orb and animated text
2. **About** - Background and stats with scroll animations
3. **Services** - Four service cards with hover effects
4. **Work** - Featured projects with details
5. **Philosophy** - Core principles
6. **Tech Stack** - Animated marquee of technologies
7. **Testimonials** - Client reviews with glassmorphism
8. **Contact** - Strong CTA with social links

## 🎨 Design System

### Colors
- Primary: Indigo (#6366f1)
- Accent: Purple (#a855f7)
- Background: Deep Black (#0a0a0a)
- Cards: Charcoal (#1a1a1a)
- Text: Off-white (#f5f5f5)

### Typography
- Font: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700

### Animations
- Entrance: Fade + slide up
- Hover: Lift + glow
- Scroll: Progressive reveal
- 3D: Rotation + mouse tracking

## 🚀 Performance Features

- Lazy loading with Suspense
- Optimized 3D rendering
- CSS-based animations where possible
- Reduced motion support
- Efficient re-renders

## 💡 Customization

### Update Content
Edit the data arrays in each component:
- Services: `Services.tsx` - services array
- Projects: `Work.tsx` - projects array
- Testimonials: `Testimonials.tsx` - testimonials array
- Tech: `TechStack.tsx` - technologies array

### Update Colors
Modify `src/styles/theme.css`:
- Change CSS variables in `:root` and `.dark`
- Update gradient colors throughout

### Update Fonts
Edit `src/styles/fonts.css`:
- Import different Google Fonts
- Update font-family

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Tips

1. Images should be optimized and lazy-loaded
2. 3D complexity can be reduced on mobile
3. Animation duration can be adjusted
4. Lenis smooth scroll can be disabled on low-end devices

## 🔧 Environment

Built with:
- Node.js 18+
- pnpm package manager
- Vite 6.x

## 📄 License

Private portfolio project for Joseph Smart

---

**Note**: This is a premium portfolio template designed to showcase high-end web development skills. All animations, interactions, and design elements have been carefully crafted for maximum impact while maintaining performance.
