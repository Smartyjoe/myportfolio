import { useEffect } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Philosophy } from './components/Philosophy';
import { TechStack } from './components/TechStack';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { PageLoader } from './components/PageLoader';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
    
    // Prevent motion sickness for users who prefer reduced motion
    // Lenis handles all scrolling, including reduced motion preferences
  }, []);

  return (
    <>
      {/* Page Loader */}
      <PageLoader />
      
      {/* Scroll Progress */}
      <ScrollProgress />
      
      <SmoothScroll>
        <div className="min-h-screen bg-black text-white antialiased">
          {/* Custom Cursor */}
          <CustomCursor />
          
          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main>
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <div id="about">
              <About />
            </div>

            {/* Services Section */}
            <div id="services">
              <Services />
            </div>

            {/* Work Section */}
            <Work />

            {/* Philosophy Section */}
            <Philosophy />

            {/* Tech Stack Section */}
            <TechStack />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Contact Section */}
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Noise Texture Overlay */}
          <div 
            className="fixed inset-0 pointer-events-none opacity-[0.015] mix-blend-soft-light z-50"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />
        </div>
      </SmoothScroll>
    </>
  );
}