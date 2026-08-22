import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Smartphone, 
  Target, 
  Activity, 
  Rocket, 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  ChevronRight,
  X
} from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'affiliate-marketing',
      title: 'Affiliate Marketing',
      tagline: 'High-intent publisher distribution with fraud-free performance',
      icon: Users,
      badge: 'Scalable Distribution',
      desc: 'Build and scale high-performing affiliate partnerships across top global networks. We connect your brand with verified publishers, influencers, and media buyers who deliver high-intent audiences on performance-only commission models.',
      deliverables: [
        'Curated Direct Publisher Network',
        'Custom Commission & Payout Structuring',
        'Anti-Fraud Real-Time Traffic Verification',
        'Automated Postback & Reconciliation Tracking'
      ],
      color: 'from-amber-500/20 to-gold-500/5'
    },
    {
      id: 'user-acquisition',
      title: 'User Acquisition Campaigns',
      tagline: 'High-LTV customer acquisition across multi-channel funnels',
      icon: Target,
      badge: 'Full Funnel Acquisition',
      desc: 'Hyper-targeted user acquisition strategies designed to attract, convert, and retain high-value users. We leverage programmatic bidding, search, social, and native channels to drive sustainable organic and paid user volume.',
      deliverables: [
        'Multi-Channel Media Buying (Meta, Google, DSPs)',
        'Audience Persona Segmentation & Lookalikes',
        'Dynamic Creative Testing & Iteration',
        'Down-Funnel LTV Optimization'
      ],
      color: 'from-gold-500/20 to-amber-600/5'
    },
    {
      id: 'performance-marketing',
      title: 'Performance Marketing Strategies',
      tagline: 'Data-driven, full-funnel digital advertising with measurable ROAS',
      icon: Activity,
      badge: 'Data & ROI Driven',
      desc: 'Comprehensive end-to-end performance marketing that aligns creative excellence with algorithmic bidding. From brand awareness to direct checkout, we optimize every touchpoint for maximum return on ad spend.',
      deliverables: [
        'Full-Funnel Campaign Architecture',
        'Real-Time Bid & Budget Allocation',
        'Cross-Platform Conversion Rate Optimization',
        'Transparent Bi-Weekly ROI Reporting'
      ],
      color: 'from-yellow-500/20 to-gold-500/5'
    },
    {
      id: 'campaign-tracking',
      title: 'Campaign Tracking & Attribution',
      tagline: 'Precision measurement and multi-touch attribution without blind spots',
      icon: Layers,
      badge: '100% Attribution Accuracy',
      desc: 'Eliminate attribution gaps with our state-of-the-art tracking architecture. We integrate seamlessly with all major MMPs (Mobile Measurement Partners) and analytics stacks for transparent data intelligence.',
      deliverables: [
        'MMP Integration (AppsFlyer, Adjust, Branch, Singular)',
        'Server-to-Server (S2S) Postback Verification',
        'Multi-Touch Attribution & Incrementality Testing',
        'Real-Time Cohort & Retention Dashboards'
      ],
      color: 'from-gold-400/20 to-yellow-600/5'
    },
    {
      id: 'app-launch-scaling',
      title: 'New App Launch & Scaling',
      tagline: 'Go-to-market acceleration and rapid store chart climbing',
      icon: Rocket,
      badge: 'High Velocity GTM',
      desc: 'Supercharge your new mobile application from pre-registration to millions of downloads. We craft viral launch momentum, optimize App Store & Google Play metadata, and scale acquisition volume efficiently.',
      deliverables: [
        'Pre-Launch Teaser & Early Access Campaigns',
        'App Store Optimization (ASO) & Keyword Strategy',
        'Burst Campaigns for Store Ranking Velocity',
        'Post-Install Engagement & Push Setup'
      ],
      color: 'from-amber-400/20 to-gold-600/5'
    },
    {
      id: 'cpi-campaigns',
      title: 'CPI Campaigns',
      tagline: 'Cost-Per-Install marketing with guaranteed quality and retention',
      icon: Smartphone,
      badge: 'Verified App Installs',
      desc: 'Scale your mobile app installs with confidence under transparent Cost-Per-Install pricing. You only pay for verified, authentic app installs that meet your exact geo, OS, and post-install activity criteria.',
      deliverables: [
        'Guaranteed Volume Delivery Across Target Geos',
        'Deep Event & Post-Install KPI Optimization',
        'Device-Level Anti-Bot & Click-Injection Filters',
        'Flexible Pricing (Incent & Non-Incent Models)'
      ],
      color: 'from-yellow-400/20 to-amber-500/5'
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-[#040408] overflow-hidden">
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
            <span>Our Core Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase leading-snug"
          >
            Performance Services Tailored for <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Exponential Business Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs sm:text-sm text-gray-400 max-w-xl mx-auto"
          >
            Every campaign is built on rigorous analytics, verified publisher inventory, and transparent attribution to ensure maximum return on every marketing dollar.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 + 0.1 }}
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#0B0B12] border border-white/10 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#141420] border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-105 group-hover:border-gold-400 group-hover:bg-gold-500/20 transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/20">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-black uppercase text-white group-hover:text-gold-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold text-gold-400/90">
                    {service.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/10 space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-gold-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-3 border-t border-white/5 flex items-center justify-end">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#151522] hover:bg-gold-500 text-gold-300 hover:text-black border border-gold-500/30 hover:border-gold-400 transition-all flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider shadow-sm"
                    aria-label={`View details for ${service.title}`}
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#12121E] via-[#18182A] to-[#12121E] border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-2xl font-display font-black uppercase text-white">
              Ready to scale your next campaign with BlingAdz?
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Custom campaign roadmaps, guaranteed KPIs, and dedicated account management.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gold-gradient text-black font-black uppercase tracking-wider text-xs shadow-md shadow-gold-500/20 hover:brightness-110 flex items-center gap-2 flex-shrink-0"
          >
            <span>Launch Campaign</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-[#0E0E16] border border-gold-500/40 rounded-3xl p-6 sm:p-7 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400">
                  <selectedService.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gold-400 uppercase tracking-wider">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-3">
                {selectedService.desc}
              </p>

              <div className="mt-5">
                <h4 className="text-[11px] uppercase tracking-wider font-bold text-gold-400 mb-2.5">
                  Key Capabilities & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.deliverables.map((item, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-[#141420] border border-white/5 flex items-start gap-2 text-xs text-gray-200">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-gray-400 font-medium">
                  BlingAdz Performance Framework
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gold-gradient text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}