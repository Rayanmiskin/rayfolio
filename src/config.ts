// ============================================================================
// Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Rayan | Software Developer & Designer",
  description: "Portfolio of Rayan - Software Developer specializing in AI, automation, and full-stack development",
  language: "en",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "RAYAN",
  items: [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
};

// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  servicesLabel: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  title: "RAYAN",
  subtitle: "Building intelligent systems that solve real-world problems through code, design, and innovation.",
  backgroundImage: "/hero-bg.jpg",
  servicesLabel: "Software Development | AI & Automation | UI/UX Design",
  copyright: "© 2025 Rayan",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface AboutConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  authorImage: string;
  authorName: string;
  authorBio: string;
}

export const aboutConfig: AboutConfig = {
  titleLine1: "I Build",
  titleLine2: "Digital Solutions with Code.",
  description: "I am Rayan, a Software Developer with a strong passion for AI-driven automation and intelligent systems. I specialize in Python-based development, NLP, machine learning, and system automation, with experience building chatbots, backend services, and engineering-focused tools.",
  image1: "/about-1.png",
  image1Alt: "Rayan working",
  image2: "/about-2.png",
  image2Alt: "Code and design",
  authorImage: "/profile.jpg",
  authorName: "Rayan Miskin",
  authorBio: "Head of IT at DAIT | Software Engineer passionate about AI, automation, and creating impactful digital solutions.",
};

// ============================================================================
// Works Section Configuration
// ============================================================================

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
  number: string;
}

export interface WorksConfig {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}

export const worksConfig: WorksConfig = {
  title: "Featured Projects",
  subtitle: "Selected work showcasing design and development expertise",
  projects: [
    {
      id: 1,
      number: "01",
      title: "Whatsapp Reminder Chat Bot",
      category: "NLP AI Automation",
      image: "/project2.png",
      link: "https://drive.google.com/drive/folders/1pzu_WKPk4Z92TtovsUPJxzPLPbf-7ets?usp=sharing",
      description: "A WhatsApp chatbot that sends automated reminders to users based on their schedules. And also updates a Google Calendar with user interactions and reminder details for easy tracking and management.",
    },
    {
      id: 2,
      number: "02",
      title: "Revit 3D Model Generator",
      category: "Machine Learning, Automation",
      image: "/project3.png",
      link: "https://drive.google.com/drive/folders/1gQr3y4b9Uei1MdY7C4YdnnTckUTiMWRh?usp=sharing",
      description: "Automated generation of 3D models in Revit using machine learning techniques based on what the user inputs.",
    },
    {
      id: 3,
      number: "03",
      title: "Metro C Design Tool",
      category: "Python Autofill Tool",
      image: "/project4.png",
      link: "https://drive.google.com/drive/folders/1oghdtjpXGMw17hSZaQFvBd2vlZ58VWct?usp=sharing",
      description: "Redesigned and modernized a design tool for Metro C, to autofill 100s of documents with a few clicks by automating repetitive tasks.",
    },
    {
      id: 4,
      number: "04",
      title: "Metro C Risk Assessment Calculator",
      category: "Python Calculation Tool",
      image: "/project4.png",
      link: "https://drive.google.com/drive/folders/1oghdtjpXGMw17hSZaQFvBd2vlZ58VWct?usp=sharing",
      description: "Created a risk assessment calculator for Metro C using Python to automate complex calculations and generate risk reports.",
    },
    {
      id: 5,
      number: "05",
      title: "Mail Backup and Management System",
      category: "Automation, Python",
      image: "/project1.jpg",
      link: "https://drive.google.com/drive/folders/1WbI4yAVD-Kx1-70rIqyUmY7konh-JAdt?usp=sharing",
      description: "A system to backup and manage emails including attachments.",
    },
  ],
};

// ============================================================================
// Services Section Configuration
// ============================================================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  title: "Services",
  subtitle: "What I Offer",
  services: [
    {
      id: "01",
      title: "Graphic Design",
      description: "Innovative graphic design solutions tailored to your unique needs.",
      image: "/service1.jpg",
      features: [
        "Logo design & brand identity",
        "Marketing materials",
        "Print & digital graphics",
        "Visual storytelling",
      ],
    },
    {
      id: "02",
      title: "AI Automations",
      description: "Intelligent automation solutions to streamline your workflows.",
      image: "/service2.jpg",
      features: [
        "Chatbot development",
        "Workflow automation",
        "NLP integration",
        "Custom AI solutions",
      ],
    },
    {
      id: "03",
      title: "UI/UX Design",
      description: "Crafting user-friendly interfaces for seamless experiences.",
      image: "/service3.jpg",
      features: [
        "User research & testing",
        "Wireframing & prototyping",
        "Visual design systems",
        "Interaction design",
      ],
    },
    {
      id: "04",
      title: "Software Development",
      description: "Full-stack development for complete digital solutions.",
      image: "/service4.jpg",
      features: [
        "Web applications",
        "Backend services",
        "API development",
        "Database design",
      ],
    },
  ],
};

// ============================================================================
// Testimonials Section Configuration
// ============================================================================

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  title: string;
  subtitle: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  title: "What Clients Say",
  subtitle: "Feedback from people I've had the pleasure of working with",
  testimonials: [

    {
      id: 2,
      name: "Athiq Ahmeer",
      title: "Client",
      quote: "Working with Rayan was a fantastic experience. I needed a website, and he delivered beyond my expectations. He was communicative and understood my vision perfectly.",
      image: "/testimonial2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Shrena",
      title: "Client",
      quote: "Working with Rayan has been an absolute pleasure! From conceptualizing ideas to bringing them to life with precision, the delivered results have been amazing.",
      image: "/testimonial3.jpg",
      rating: 5,
    },
  ],
};

// ============================================================================
// FAQ Section Configuration
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  title: "Common Questions",
  faqs: [
    {
      question: "What services do you offer?",
      answer: "I offer software development, AI automation, UI/UX design, and graphic design services. Each project is tailored to meet your specific needs and goals.",
    },
    {
      question: "What is your development process?",
      answer: "My process includes discovery, planning, design, development, testing, and deployment. I maintain clear communication throughout to ensure the final product exceeds expectations.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website might take 2-3 weeks, while complex applications can take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, I offer maintenance and support packages to ensure your project continues to run smoothly after launch. This includes bug fixes, updates, and feature enhancements.",
    },
  ],
};

// ============================================================================
// Contact Section Configuration
// ============================================================================

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: ContactFormOption[];
  messageLabel: string;
  submitButtonText: string;
  image: string;
  phone: string;
  email: string;
  location: string;
}

export const contactConfig: ContactConfig = {
  title: "Let's build something amazing",
  subtitle: "Have a project in mind? I'd love to hear about it.",
  nameLabel: "Name *",
  emailLabel: "Email *",
  projectTypeLabel: "Project Type",
  projectTypePlaceholder: "Select project type",
  projectTypeOptions: [
    { value: "web", label: "Web Development" },
    { value: "design", label: "UI/UX Design" },
    { value: "ai", label: "AI Automation" },
    { value: "graphic", label: "Graphic Design" },
    { value: "other", label: "Other" },
  ],
  messageLabel: "Message",
  submitButtonText: "Send Message",
  image: "/contact.jpg",
  phone: "+39 333 364 2656",
  email: "rayanmiskin321@gmail.com",
  location: "254 Via Merulana, Rome, Italy",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterConfig {
  marqueeText: string;
  marqueeHighlightChars: string[];
  navLinks1: FooterLink[];
  navLinks2: FooterLink[];
  ctaText: string;
  ctaHref: string;
  copyright: string;
  tagline: string;
}

export const footerConfig: FooterConfig = {
  marqueeText: "Let's Build Something Amazing Together",
  marqueeHighlightChars: ["B", "A"],
  navLinks1: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
  ],
  navLinks2: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tuwan-rayan-miskin-87a13826b", icon: "Linkedin" },
    { label: "GitHub", href: "https://github.com/rayanmiskin", icon: "Github" },
    { label: "Instagram", href: "https://www.instagram.com/itsrayanfr", icon: "Instagram" },
  ],
  ctaText: "Get In Touch",
  ctaHref: "#contact",
  copyright: "© 2025 Rayan. All rights reserved.",
  tagline: "Crafted with passion & code",
};
