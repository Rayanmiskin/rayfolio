import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { footerConfig } from '../config';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-red-100">
      <div className="max-w-6xl mx-auto">
        {/* Marquee */}
        <div className="marquee-container mb-12 overflow-hidden">
          <div className="marquee-content flex items-center gap-8 text-4xl md:text-6xl font-bold whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                {footerConfig.marqueeText.split('').map((char, j) => (
                  <span
                    key={j}
                    className={
                      footerConfig.marqueeHighlightChars.includes(char)
                        ? 'text-red-500'
                        : 'text-gray-200'
                    }
                  >
                    {char}
                  </span>
                ))}
                <span className="text-gray-200 mx-4">&bull;</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-gradient">RAYAN</span>
            <p className="text-sm text-gray-500 mt-2">
              {footerConfig.copyright}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={footerConfig.navLinks2.find(l => l.label === 'GitHub')?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center text-red-600 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={footerConfig.navLinks2.find(l => l.label === 'LinkedIn')?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center text-red-600 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={footerConfig.navLinks2.find(l => l.label === 'Instagram')?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center text-red-600 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 hover:-translate-y-1 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Tagline */}
        <p className="text-center text-sm text-gray-400 mt-8">
          {footerConfig.tagline}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
