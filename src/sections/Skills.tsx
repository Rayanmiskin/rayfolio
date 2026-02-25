import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Server, Palette, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 70 },
      { name: 'JavaScript', level: 55 },
      { name: 'React JS', level: 65 },
      { name: 'TypeScript', level: 50 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'PHP', level: 50 },
      { name: 'Java', level: 50 },
      { name: 'C#', level: 45 },
      { name: 'Node JS', level: 40 },
    ],
  },
  {
    id: 'design',
    title: 'Design & Illustrations',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'Adobe Illustrator', level: 75 },
      { name: 'MediBang Paint Pro', level: 85 },
      { name: 'Adobe Photoshop', level: 65 },
      { name: 'Canva', level: 65 },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    icon: Cpu,
    skills: [
      { name: 'Machine Learning', level: 70 },
      { name: 'NLP', level: 65 },
      { name: 'Chatbots', level: 80 },
      { name: 'System Automation', level: 75 },
      { name: 'API Integration', level: 70 },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

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

      // Progress bars animation
      progressRefs.current.forEach((bar) => {
        if (bar) {
          const width = bar.getAttribute('data-width');
          gsap.fromTo(
            bar,
            { width: '0%' },
            {
              width: `${width}%`,
              duration: 1.2,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: bar,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  let progressIndex = 0;

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-xs font-medium text-red-600 uppercase tracking-widest mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse toolkit built through years of hands-on experience across development, design, and AI.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                ref={(el) => { cardsRef.current[catIndex] = el; }}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const currentIndex = progressIndex++;
                    return (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm font-bold text-red-600">{skill.level}%</span>
                        </div>
                        <div className="skill-progress-bg h-2">
                          <div
                            ref={(el) => { progressRefs.current[currentIndex] = el; }}
                            className="skill-progress-fill h-full"
                            data-width={skill.level}
                            style={{ width: '0%' }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
