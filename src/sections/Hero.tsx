import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Sparkles } from 'lucide-react';
import { heroConfig } from '../config';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Title animation
      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'expo.out' }
      );

      // Subtitle animation
      tl.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' },
        '-=0.6'
      );

      // Buttons animation
      tl.fromTo(
        buttonsRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'expo.out' },
        '-=0.4'
      );

      // Meta info animation
      tl.fromTo(
        metaRef.current?.children || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        '-=0.3'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12"
    >
      {/* Tag */}
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="w-4 h-4 text-red-500" />
        <span className="text-xs font-medium text-red-600 uppercase tracking-widest">
          {heroConfig.servicesLabel.split(' | ')[0]} & {heroConfig.servicesLabel.split(' | ')[2]}
        </span>
        <Sparkles className="w-4 h-4 text-red-500" />
      </div>

      {/* Main Title */}
      <h1
        ref={titleRef}
        className="text-[13vw] md:text-[12vw] lg:text-[10vw] font-black text-center leading-none tracking-tight mb-6 break-words px-4"
      >
        <span className="text-gradient">{heroConfig.title}</span>
      </h1>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="text-lg md:text-xl text-gray-600 text-center max-w-xl mb-10"
      >
        {heroConfig.subtitle}
      </p>

      {/* CTA Buttons */}
      <div ref={buttonsRef} className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <a
          href="#projects"
          onClick={(e) => handleScrollTo(e, '#projects')}
          className="glass-button text-white font-medium px-8 py-4 rounded-full flex items-center gap-2"
        >
          Explore Projects
          <ChevronDown className="w-4 h-4" />
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScrollTo(e, '#contact')}
          className="glass-button-outline text-gray-700 font-medium px-8 py-4 rounded-full"
        >
          Get in Touch
        </a>
      </div>

      {/* Bottom Meta Info */}
      <div
        ref={metaRef}
        className="absolute bottom-8 left-0 right-0 px-6 flex items-center justify-between text-xs text-gray-400"
      >
        <span className="font-mono">EST. 2020</span>
        <div className="flex items-center gap-2 scroll-indicator">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="uppercase tracking-wider">Scroll</span>
        </div>
        <span className="font-mono">ROME / ITALY</span>
      </div>
    </section>
  );
};

export default Hero;
