import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { TrendingUp, ShoppingBag, Gamepad2, Landmark, Smartphone, Zap, ArrowUpRight, Sparkles } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function PortfolioSlider() {
  const verticals = [
    {
      title: 'Mobile Gaming & Entertainment',
      metric: '+340% CPI Velocity',
      tag: 'Gaming UA',
      icon: Gamepad2,
      desc: 'Rapid top-chart ranking, high D1/D7 player retention, and programmatic burst install campaigns for iOS & Android.',
      results: '2.4M+ Installs Delivered',
    },
    {
      title: 'FinTech & Banking Apps',
      metric: '68% Lower CPA',
      tag: 'FinTech & Wealth',
      icon: Landmark,
      desc: 'KYC verified registrations, secure postback attribution, and high-intent customer acquisition for credit, loans, and trading.',
      results: '$18M+ In-App Volume',
    },
    {
      title: 'E-Commerce & D2C Brands',
      metric: '5.2x ROAS Scaling',
      tag: 'E-Commerce',
      icon: ShoppingBag,
      desc: 'Dynamic catalog retargeting, multi-touch affiliate networks, and purchase conversion optimization on high-intent channels.',
      results: '450k+ Orders Generated',
    },
    {
      title: 'SaaS & Productivity Tools',
      metric: '42% Higher Trial-to-Paid',
      tag: 'B2B & SaaS',
      icon: Zap,
      desc: 'High-intent search, LinkedIn B2B acquisition, and automated qualification funnels that convert visitors to paying subscriptions.',
      results: '85k+ Qualified Leads',
    },
    {
      title: 'Utility & On-Demand Apps',
      metric: '99.4% Anti-Fraud Score',
      tag: 'Utility Scale',
      icon: Smartphone,
      desc: 'Large-scale global install delivery across Tier-1, Tier-2, and Tier-3 geographies with strict non-incentive verification.',
      results: '5M+ Device Activations',
    },
  ];

  return (
    <section className="py-24 bg-[#08080E] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Industry Verticals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
              Scalable Performance Across <span className="text-gold-gradient">High-Growth Sectors</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Whether launching a tier-1 mobile game, scaling e-commerce sales, or driving verified fintech acquisitions, BlingAdz delivers predictable results.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {verticals.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SwiperSlide key={idx}>
                <div className="h-full p-8 rounded-3xl bg-[#0F0F17] border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    {/* Top tag & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/20">
                        {item.tag}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#161622] border border-white/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="text-2xl font-display font-black text-gold-gradient mb-2">
                      {item.metric}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-gold-200 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-300">
                      {item.results}
                    </span>
                    <span className="p-1.5 rounded-lg bg-white/5 group-hover:bg-gold-500 group-hover:text-black text-gold-400 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
}