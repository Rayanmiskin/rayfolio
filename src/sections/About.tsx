import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title words animation
      const words = titleRef.current?.querySelectorAll('.word');
      if (words) {
        gsap.fromTo(
          words,
          { y: 60, opacity: 0, rotateX: -45 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Creative Typography Title */}
        <div ref={titleRef} className="mb-16 perspective-1000">
          <span className="text-xs font-medium text-red-600 uppercase tracking-widest mb-6 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            <span className="word inline-block">{aboutConfig.titleLine1.split(' ')[0]}</span>{' '}
            <span className="word inline-block">{aboutConfig.titleLine1.split(' ')[1]}</span>
            <br />
            <span className="word inline-block text-gradient">{aboutConfig.titleLine2.split(' ')[0]}</span>{' '}
            <span className="word inline-block text-gradient">{aboutConfig.titleLine2.split(' ')[1]}</span>
            <br />
            <span className="word inline-block">{aboutConfig.titleLine2.split(' ')[2]}</span>{' '}
            <span className="word inline-block">{aboutConfig.titleLine2.split(' ')[3]}</span>
            <span className="word inline-block">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {aboutConfig.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              With experience building chatbots, backend services, and engineering-focused tools, 
              I thrive on complex technical challenges and continually seek opportunities to expand 
              my skills at the intersection of AI, software engineering, and practical problem-solving.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="stat-number">03+</div>
                <p className="text-sm text-gray-500 mt-2">Projects in Progress</p>
              </div>
              <div className="text-center">
                <div className="stat-number">10+</div>
                <p className="text-sm text-gray-500 mt-2">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="stat-number">20+</div>
                <p className="text-sm text-gray-500 mt-2">Projects Created</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="glass-card rounded-3xl overflow-hidden">
              <img
                src={aboutConfig.authorImage}
                alt={aboutConfig.authorName}
                className="w-full aspect-square object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
