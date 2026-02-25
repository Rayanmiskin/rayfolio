import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    id: 1,
    title: 'Higher National Diploma BTEC Software Engineering UK',
    institution: 'Esoft Metro Campus',
    date: '2022 - 2024',
  },
  {
    id: 2,
    title: 'Pearson Diploma in IT',
    institution: 'Esoft Metro Campus',
    date: '2020 - 2021',
  },
  {
    id: 3,
    title: 'GCE O/Level',
    institution: 'Wesley College Colombo',
    date: '2018',
  },
];

const experience = [
  {
    id: 1,
    title: 'Head Of IT DAIT',
    company: 'Dai srl',
    date: 'Jul 2025 - Present',
  },
  {
    id: 2,
    title: 'Software Engineering (Intern)',
    company: 'Dai srl',
    date: 'May 2025 - Jul 2025',
  },
  {
    id: 3,
    title: 'Reservation Specialist',
    company: 'Travel Center Rome',
    date: 'Mar 2018 - Sep 2018',
  },
];

const Qualifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const currentItems = activeTab === 'education' ? education : experience;

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate items when tab changes
    itemsRef.current.forEach((item, i) => {
      if (item) {
        gsap.fromTo(
          item,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'expo.out',
          }
        );
      }
    });
  }, [activeTab]);

  return (
    <section ref={sectionRef} id="qualifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12">
          <span className="text-xs font-medium text-red-600 uppercase tracking-widest mb-4 block">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Qualifications
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'glass-button text-white'
                  : 'glass-button-outline text-gray-700'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'glass-button text-white'
                  : 'glass-button-outline text-gray-700'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Experience
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 to-red-100 transform md:-translate-x-1/2" />

          {/* Items */}
          <div className="space-y-8">
            {currentItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => { itemsRef.current[index] = el; }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                  }`}
                >
                  <div className="glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {activeTab === 'education'
                        ? (item as typeof education[0]).title
                        : (item as typeof experience[0]).title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {activeTab === 'education'
                        ? (item as typeof education[0]).institution
                        : (item as typeof experience[0]).company}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-red-600 font-medium">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2" />

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
