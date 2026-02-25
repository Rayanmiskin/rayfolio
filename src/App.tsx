import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import LiquidBackground from './components/LiquidBackground';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Skills from './sections/Skills';
import Qualifications from './sections/Qualifications';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { siteConfig } from './config';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    if (siteConfig.title) {
      document.title = siteConfig.title;
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }

    // Refresh ScrollTrigger after initial render
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <LiquidBackground />
        <div className="noise-overlay" />
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Qualifications />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
