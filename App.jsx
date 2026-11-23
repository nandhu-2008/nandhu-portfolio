import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Common Components
import CustomCursor from './components/common/CustomCursor';
import BackgroundNoise from './components/common/BackgroundNoise';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import BackToTop from './components/common/BackToTop';

// Active Section Components
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/about/AboutSection';
import ProjectsSection from './components/projects/ProjectsSection';
import EducationSection from './components/education/EducationSection';
import HighlightsSection from './components/highlights/HighlightsSection';
import ContactSection from './components/contact/ContactSection';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subtle luxury entrance loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Warm Ivory Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-[#F5F3ED] flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="flex flex-col items-center">
              <span className="font-display font-extrabold text-3xl tracking-tight text-[#242923]">
                NANDHU P<span className="text-[#496B55]">.</span>
              </span>
              <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-[#777B73] tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#496B55] animate-pulse" />
                <span>2026 / PORTFOLIO</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen relative bg-[#F5F3ED] text-[#242923] selection:bg-[#496B55]/20 selection:text-[#242923]">
        {/* Custom Minimal Desktop Cursor */}
        <CustomCursor />

        {/* Subtle Ambient Warm Grid & Soft Accents */}
        <BackgroundNoise />

        {/* Sticky Minimal Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10 flex flex-col">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EducationSection />
          <HighlightsSection />
          <ContactSection />
        </main>

        {/* Minimal Warm Footer */}
        <Footer />

        {/* Back To Top Button */}
        <BackToTop />
      </div>
    </>
  );
}
