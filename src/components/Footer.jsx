import React from 'react';
import { Linkedin, Instagram, ArrowUp, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: "Let's Connect", href: '#lets-connect' },
  ];

  const servicesList = [
    'Affiliate Marketing',
    'User Acquisition Campaigns',
    'Performance Marketing Strategies',
    'Campaign Tracking & Attribution',
    'New App Launch & Scaling',
    'CPI Campaigns',
  ];

  return (
    <footer className="bg-gradient-to-b from-[#141424] via-[#10101C] to-[#0A0A14] text-gray-300 border-t-2 border-gold-500/40 relative overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      
      {/* Radiant ambient gold light beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gold-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <Logo size="lg" />
            <p className="text-sm text-gray-300 max-w-md leading-relaxed font-normal">
              <strong className="text-gold-300 font-semibold">BlingAdz</strong> is a premier performance marketing agency. We engineer measurable, scalable, and high-conversion digital advertising and user acquisition campaigns for apps, brands, and businesses worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/company/blingadz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-2xl bg-[#1D1D30] border border-gold-500/40 hover:border-gold-300 flex items-center justify-center text-gold-400 hover:text-white hover:bg-[#0A66C2] transition-all shadow-lg hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/blingadz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-2xl bg-[#1D1D30] border border-gold-500/40 hover:border-gold-300 flex items-center justify-center text-gold-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#F56040] hover:via-[#E1306C] hover:to-[#833AB4] transition-all shadow-lg hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-display font-black uppercase tracking-widest text-gold-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold-300 transition-colors flex items-center gap-2 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/80 shadow-[0_0_6px_#D4AF37]" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services List */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-display font-black uppercase tracking-widest text-gold-400">
              Expertise & Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesList.map((svc, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-gold-300 transition-colors flex items-center gap-2 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/80 shadow-[0_0_6px_#D4AF37]" />
                    <span>{svc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} <strong className="text-white">BlingAdz</strong>. All rights reserved.</span>
            <span>•</span>
            <span>Performance Marketing Agency</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://blingadz.com" className="text-gold-300 hover:text-white font-semibold transition-colors">
              blingadz.com
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 px-3 rounded-xl bg-[#1C1C2E] border border-gold-500/30 hover:bg-gold-500 hover:text-black text-gray-200 transition-all flex items-center gap-1.5 font-bold text-xs shadow-md"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}