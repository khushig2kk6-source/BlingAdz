import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Hero3D from './Hero3D';

export default function Hero() {
  const brandPillars = [
    'Affiliate Marketing',
    'User Acquisition',
    'CPI Performance',
    'Real-time Tracking',
    'App Launch & Scaling',
    'Data-Driven Growth'
  ];

  return (
    <section id="home" className="relative min-h-[80vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-[#040407]">
      {/* Dynamic 3D Particle Canvas */}
      <Hero3D />

      {/* High Contrast Background Overlays for Perfect Readability */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#040407]/60 to-[#040407] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-black/80 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Performance Marketing Agency Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12121A]/95 border border-gold-500/35 text-[11px] font-extrabold uppercase tracking-widest text-gold-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] mb-5 backdrop-blur-xl"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span>Performance Marketing & Digital Advertising</span>
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-500"></span>
          </span>
        </motion.div>

        {/* Clean, Refined Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white uppercase leading-[1.1] max-w-3xl mx-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
        >
          Growth That <span className="text-gold-gradient drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">Shines.</span><br />
          Performance That <span className="text-white underline decoration-gold-500/60 decoration-wavy decoration-2">Delivers.</span>
        </motion.h1>

        {/* Balanced Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-xs sm:text-sm md:text-base text-gray-300 max-w-xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          <strong className="text-gold-300 font-bold">BlingAdz</strong> helps brands, apps, and businesses turn digital advertising into <span className="text-white font-semibold">measurable, scalable growth</span> through data-driven performance marketing.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#services"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold-gradient text-black font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 hover:scale-[1.02] transition-all duration-300"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#lets-connect"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#12121C]/95 hover:bg-[#181826] text-white font-bold uppercase tracking-wider text-xs border border-gold-500/40 hover:border-gold-400 flex items-center justify-center gap-2 backdrop-blur-xl shadow-md transition-all duration-300 group"
          >
            <Sparkles className="w-4 h-4 text-gold-400 group-hover:rotate-12 transition-transform" />
            <span>Let's Connect</span>
          </a>
        </motion.div>

        {/* Brand Highlights Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 pt-5 border-t border-white/10 flex flex-wrap justify-center items-center gap-2 text-[11px] text-gray-300"
        >
          {brandPillars.map((pillar, idx) => (
            <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111118]/80 border border-gold-500/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_6px_#D4AF37]" />
              <span className="text-gray-200 font-semibold">{pillar}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}