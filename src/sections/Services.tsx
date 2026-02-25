import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Bot, Layout, Code, ArrowUpRight } from 'lucide-react';
import { servicesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Bot,
  Layout,
  Code,
};

const Services = () => {
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
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: i * 0.1,
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
    <section ref={sectionRef} id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-xs font-medium text-red-600 uppercase tracking-widest mb-4 block">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {servicesConfig.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {servicesConfig.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {servicesConfig.services.map((service, index) => {
            const Icon = iconMap[service.id === '01' ? 'Palette' : service.id === '02' ? 'Bot' : service.id === '03' ? 'Layout' : 'Code'] || Code;
            return (
              <div
                key={service.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="glass-card rounded-2xl p-8 group hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <span className="text-sm font-mono text-red-600">[{service.id}]</span>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
