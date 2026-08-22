import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'contact', 'lets-connect'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#08080E]/90 backdrop-blur-xl border-b border-gold-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.85)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Top Left Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 px-5 py-2 rounded-full bg-[#12121D]/70 backdrop-blur-md border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-white font-black'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-gold-400 to-amber-500 rounded-full shadow-[0_0_8px_#D4AF37]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Contact Us + Let's Connect */}
          <div className="hidden md:flex items-center gap-3">
            {/* Contact Us Button */}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="group relative px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-white rounded-xl border border-white/15 hover:border-gold-500/50 bg-[#141422]/90 backdrop-blur-sm transition-all duration-300 flex items-center gap-1.5 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-gold-400 group-hover:scale-110 transition-transform" />
              <span>Contact Us</span>
            </a>

            {/* Let's Connect Dedicated Button */}
            <a
              href="#lets-connect"
              onClick={(e) => scrollTo(e, '#lets-connect')}
              className="group relative px-5 py-2 text-xs font-black uppercase tracking-wider text-black rounded-xl bg-gold-gradient hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all duration-300 flex items-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/25 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12" />
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#lets-connect"
              onClick={(e) => scrollTo(e, '#lets-connect')}
              className="px-3 py-1.5 text-xs font-extrabold uppercase text-black rounded-lg bg-gold-gradient flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-black" />
              <span>Connect</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-400 hover:text-white bg-[#141422] border border-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0A0A12]/98 backdrop-blur-2xl border-b border-gold-500/30 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-xl font-display font-black uppercase text-gray-300 hover:text-gold-400 py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-gold-500/60" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="w-full text-center py-3 rounded-xl border border-gold-500/40 text-gold-300 bg-gold-500/10 font-bold uppercase tracking-wider text-xs"
              >
                Contact Us
              </a>
              <a
                href="#lets-connect"
                onClick={(e) => scrollTo(e, '#lets-connect')}
                className="w-full text-center py-3 rounded-xl bg-gold-gradient text-black font-black uppercase tracking-wider text-xs shadow-lg shadow-gold-500/20"
              >
                Let's Connect (Ghaziabad Office)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}