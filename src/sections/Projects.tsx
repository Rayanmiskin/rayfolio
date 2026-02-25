import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { worksConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.15,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="mb-16">
          <span className="text-xs font-medium text-red-600 uppercase tracking-widest mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {worksConfig.title}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {worksConfig.projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="project-card glass-card group cursor-pointer"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative min-h-[400px] md:min-h-0 md:aspect-[21/9]"
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-10 overflow-hidden">
                  {/* Number */}
                  <div className="absolute top-6 left-6 md:top-10 md:left-10">
                    <span className="text-4xl md:text-8xl font-black text-white/20">
                      {project.number}
                    </span>
                  </div>

                  {/* Project Counter */}
                  <div className="absolute top-6 right-6 md:top-10 md:right-10">
                    <span className="text-sm font-mono text-white/60">
                      {project.number} / 05
                    </span>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.category.split(', ').map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-4xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-base text-white/80 max-w-2xl mb-3 line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>

                  {/* View Project Button */}
                  <div className="flex items-center gap-2 text-white font-medium">
                    <span>View Project</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
