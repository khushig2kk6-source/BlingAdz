import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Sliders, LineChart, Globe2, Sparkles } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      num: '01',
      title: 'Audit & Strategy',
      icon: Search,
      desc: 'We analyze your target CAC, unit economics, historical ad data, and competitor acquisition channels to map a zero-fluff growth strategy.',
    },
    {
      num: '02',
      title: 'Attribution & Tracking',
      icon: Compass,
      desc: 'Flawless MMP integration, S2S tracking postbacks, and strict fraud prevention filters configured before a single cent is spent.',
    },
    {
      num: '03',
      title: 'Targeted Deployment',
      icon: Sliders,
      desc: 'Multi-network launch across verified direct publishers, programmatic DSPs, search, and native performance channels.',
    },
    {
      num: '04',
      title: 'Real-Time Optimization',
      icon: LineChart,
      desc: 'Granular cohort analysis, creative rotation, and algorithmic bid adjustments to maximize conversion velocity and LTV.',
    },
    {
      num: '05',
      title: 'Global Scale',
      icon: Globe2,
      desc: 'Scaling winning channels aggressively across new geos, platforms, and audiences while maintaining strict ROI benchmarks.',
    },
  ];

  return (
    <section className="py-20 bg-[#050508] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[11px] font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The BlingAdz Engine</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase leading-snug">
            How We Turn Digital Advertising into <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Predictable, Scalable Growth</span>
          </h2>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group relative p-5 rounded-3xl bg-[#0C0C14] border border-white/10 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_25px_rgba(212,175,55,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display font-black text-2xl text-gold-500/50 group-hover:text-gold-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#141420] border border-white/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-display font-black uppercase text-white mb-1.5 group-hover:text-gold-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-2.5 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-semibold text-gold-400/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span>Phase {step.num}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}