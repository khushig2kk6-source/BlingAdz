import React from 'react';
import { motion } from 'framer-motion';
import { Target, Cpu, LineChart, Rocket, Sparkles, Check } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: 'Precision Targeting',
      desc: 'Connecting businesses and apps with high-intent audiences across worldwide publisher networks and direct programmatic inventory.',
    },
    {
      icon: Cpu,
      title: 'Continuous Optimization',
      desc: 'Real-time cohort refinement, creative A/B testing, and smart bidding models that maximize conversion velocity and lower CAC.',
    },
    {
      icon: LineChart,
      title: 'Transparent Attribution',
      desc: 'Complete end-to-end performance tracking with granular postbacks and deep analytics, ensuring zero guesswork on every dollar spent.',
    },
    {
      icon: Rocket,
      title: 'Full-Funnel Scaling',
      desc: 'From app installs and qualified leads to paying subscribers and lifetime revenue, scaling campaigns sustainably for long-term growth.',
    },
  ];

  const bulletPoints = [
    'More quality users & high conversion volume',
    'Stronger ROAS & sustainable growth',
    'Custom CPI, CPA, and Hybrid Attribution Models',
  ];

  return (
    <section id="about" className="relative py-20 bg-[#06060A] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[11px] font-extrabold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase leading-snug"
          >
            Engineering Growth That Is <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Measurable, Scalable & Transparent.</span>
          </motion.h2>
        </div>

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#12121D] via-[#0E0E16] to-[#0A0A10] border border-gold-500/25 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          
          <div className="max-w-4xl mx-auto space-y-5 text-gray-200 text-sm sm:text-base leading-relaxed font-normal">
            <p className="text-base sm:text-lg text-white font-medium">
              At <strong className="text-gold-300 font-bold">BlingAdz</strong>, we believe growth should be measurable, scalable, and driven by performance—not guesswork. We partner with brands, app developers, and agencies to create data-driven digital advertising and user acquisition campaigns that connect businesses with the right audiences and turn attention into meaningful results.
            </p>
            <p className="text-gray-300">
              Our approach combines <span className="text-white font-semibold">precision targeting</span>, <span className="text-white font-semibold">continuous optimization</span>, and <span className="text-white font-semibold">transparent performance tracking</span> to deliver more than just traffic. From app installs and leads to conversions and revenue, we focus on the metrics that matter most to your business, helping you improve campaign performance, scale efficiently, and build long-term growth.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-5 border-t border-white/10">
              {bulletPoints.map((item, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-[#161624]/80 border border-gold-500/20 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-gold-500/15 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 + 0.1 }}
                className="group p-6 rounded-3xl bg-[#0C0C14] border border-white/10 hover:border-gold-500/50 hover:bg-[#11111E] transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-10 h-10 p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-black transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold uppercase text-white group-hover:text-gold-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}