# Enhanced Rock Weathering Website

## About the Project

This interactive web application presents a visually rich underwater journey that combines cutting-edge web technologies with environmental storytelling.

## 🚀 Technical Highlights

- **Long-Scroll Storytelling**: Immersive parallax scrolling with GSAP ScrollTrigger
- **Micro-Animations**: Smooth, performant animations using Framer Motion
- **Progressive Loading**: Smart image placeholders for optimal performance
- **Accessibility First**: Reduced motion support for enhanced user experience
- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Optimized for laptop/desktop experiences

## 🏗️ Code Structure

```
src/
├── components/
│   ├── animations/          # Motion & animation components
│   │   ├── AnimatedFishLeft.tsx
│   │   ├── AnimatedFishRight.tsx
│   │   └── BlurReveal.tsx
│   ├── common/              # Reusable components
│   │   ├── Image.tsx        # Progressive loading image component
│   │   └── Logo.tsx
│   ├── section/             # Page sections
│   │   ├── BackgroundSection.tsx
│   │   ├── CoralClustersSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MarineLifeSection.tsx
│   │   └── TooltipsSection.tsx
│   └── ui/                  # Interface
│       ├── CustomTooltipContent.tsx
│       ├── CustomTooltip.tsx
│       └── SpriteImage.tsx
├── hooks/
│   └── useScrollProgress.ts # Custom scroll tracking hook
├── utils/
│   ├── animate.ts           # Animation utilities with reduced motion
│   ├── placeholders.ts      # Image placeholder constants
│   └── index.ts             # General utilities
└── App.tsx                  # Main application component
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend-rock-weathering
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🛠️ Technologies Used

- **React 18** - UI library with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **GSAP** - High-performance animations
- **Framer Motion** - React animation library
- **Ant Design** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lenis** - Smooth scrolling library
