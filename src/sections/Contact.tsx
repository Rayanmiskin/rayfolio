import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { contactConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

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

      // Form animation
      gsap.fromTo(
        formRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Info animation
      gsap.fromTo(
        infoRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formspree integration
    const form = e.target as HTMLFormElement;
    form.action = 'https://formspree.io/f/xbdakval';
    form.method = 'POST';
    form.submit();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-xs font-medium text-red-600 uppercase tracking-widest mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {contactConfig.title.split(' ').slice(0, 3).join(' ')}
            <br />
            <span className="text-gradient">{contactConfig.title.split(' ').slice(3).join(' ')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            {contactConfig.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-8"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {contactConfig.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass-input w-full"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {contactConfig.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass-input w-full"
                  placeholder="your@email.com"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {contactConfig.projectTypeLabel}
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="glass-input w-full"
                >
                  <option value="">{contactConfig.projectTypePlaceholder}</option>
                  {contactConfig.projectTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {contactConfig.messageLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="glass-input w-full resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="glass-button w-full text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {contactConfig.submitButtonText}
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                      {contactConfig.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${contactConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                      {contactConfig.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">
                      {contactConfig.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Available for new projects</span>
              </div>
              <p className="text-gray-600">
                Currently open to freelance opportunities and collaborations. 
                Let's discuss how I can help bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
