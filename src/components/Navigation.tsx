import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navigationConfig } from '../config';
import { useTheme } from '../context/ThemeContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed left-4 right-4 z-50 mx-auto max-w-6xl transition-all duration-500 ${isScrolled ? 'top-4' : 'top-6'
          }`}
      >
        <div
          className={`glass-nav rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'shadow-lg' : ''
            }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent-red)] transition-colors"
          >
            {navigationConfig.logo}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationConfig.items.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side - Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="glass-button text-white text-sm font-medium px-5 py-2.5 rounded-full"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--text-primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-xl transition-all duration-500 md:hidden ${isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }`}
        style={{ background: 'var(--bg-primary)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {/* Theme Toggle in Mobile Menu */}
          <button
            onClick={() => {
              toggleTheme();
            }}
            className="flex items-center gap-3 text-lg font-medium text-[var(--text-primary)] hover:text-[var(--accent-red)] transition-colors"
            style={{
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
            }}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>

          {navigationConfig.items.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-medium text-[var(--text-primary)] hover:text-[var(--accent-red)] transition-colors"
              style={{
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${(i + 1) * 0.1}s`,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
