import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star } from 'lucide-react';
import { testimonialsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
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
            { y: 60, opacity: 0, rotateY: i % 2 === 0 ? -10 : 10 },
            {
              y: 0,
              opacity: 1,
              rotateY: 0,
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
    <section ref={sectionRef} id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-xs font-medium text-red-600 uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {testimonialsConfig.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {testimonialsConfig.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsConfig.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="glass-card rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-500"
              style={{ perspective: '1000px' }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-red-500/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-500/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
