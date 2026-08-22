import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Instagram, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowUpRight,
  Globe
} from 'lucide-react';

export default function LetsConnect() {
  const [copiedField, setCopiedField] = useState(null);

  const contactData = {
    location: 'Ghaziabad, Uttar Pradesh, India',
    mail: 'sales@blingadz.com',
    phone: '+91 9911821217',
    linkedin: 'https://www.linkedin.com/company/blingadz/',
    instagram: 'https://www.instagram.com/blingadz/',
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="lets-connect" className="relative py-20 bg-[#040407] overflow-hidden border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-[11px] font-extrabold uppercase tracking-widest mb-3 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            <span>Direct Channels</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-snug">
            Let's <span className="text-gold-gradient">Connect.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
            Reach out directly to our corporate office or connect across our official digital and social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Direct Channels Card */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
            
            {/* Location Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#0C0C14] border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 flex items-start justify-between gap-4 group shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 p-2.5 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gold-400 mb-0.5">
                    Operating Headquarters
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white">
                    {contactData.location}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    NCR Region • India
                  </div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(contactData.location, 'location')}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-gold-300 transition-colors flex items-center gap-1 text-xs font-medium"
                title="Copy Address"
              >
                {copiedField === 'location' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 text-xs font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-xs">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Email Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#0C0C14] border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 flex items-start justify-between gap-4 group shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 p-2.5 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gold-400 mb-0.5">
                    Direct Sales & Partnerships
                  </div>
                  <a
                    href={`mailto:${contactData.mail}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-gold-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{contactData.mail}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                  </a>
                  <div className="text-xs text-gray-400 mt-0.5">
                    Response time: Within 24 hours
                  </div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(contactData.mail, 'mail')}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-gold-300 transition-colors flex items-center gap-1 text-xs font-medium"
                title="Copy Email"
              >
                {copiedField === 'mail' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 text-xs font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-xs">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Card (+91 9911821217) */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#0C0C14] border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 flex items-start justify-between gap-4 group shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 p-2.5 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gold-400 mb-0.5">
                    Phone Desk
                  </div>
                  <a
                    href="tel:+919911821217"
                    className="text-base sm:text-lg font-bold text-white hover:text-gold-300 transition-colors flex items-center gap-1.5 tracking-wide"
                  >
                    <span>+91 9911821217</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                  </a>
                  <div className="text-xs text-gray-400 mt-0.5">
                    Mon - Sat • 10:00 AM - 7:00 PM IST
                  </div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(contactData.phone, 'phone')}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-gold-300 transition-colors flex items-center gap-1 text-xs font-medium"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 text-xs font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-xs">Copy</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Social Profiles Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#131320] via-[#0E0E18] to-[#0A0A10] border border-gold-500/30 shadow-xl relative overflow-hidden">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold-500/10 text-gold-400 text-[10px] font-extrabold uppercase tracking-wider mb-3 border border-gold-500/20">
                <Globe className="w-3 h-3" />
                <span>Official Channels</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white leading-tight">
                Follow & Engage with <br />
                <span className="text-gold-gradient">BlingAdz Online</span>
              </h3>
              <p className="mt-2.5 text-xs text-gray-300 leading-relaxed">
                Stay updated with the latest performance marketing campaigns, acquisition breakdowns, and agency announcements.
              </p>
            </div>

            {/* Social Link Buttons */}
            <div className="mt-6 space-y-3">
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full p-3.5 rounded-2xl bg-[#181826] border border-white/10 hover:border-[#0A66C2] hover:bg-[#0A66C2]/15 transition-all duration-300 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0A66C2] flex items-center justify-center text-white shadow-md shadow-[#0A66C2]/30">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400">LinkedIn Company Page</div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      @blingadz
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href={contactData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full p-3.5 rounded-2xl bg-[#181826] border border-white/10 hover:border-[#E1306C] hover:bg-[#E1306C]/15 transition-all duration-300 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#F56040] via-[#E1306C] to-[#833AB4] flex items-center justify-center text-white shadow-md shadow-[#E1306C]/30">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400">Instagram Official</div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                      @blingadz
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Bottom Domain Stamp */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
              <span>Domain: <strong className="text-gold-300">blingadz.com</strong></span>
              <span className="text-gold-400 font-bold uppercase tracking-wider">Performance Marketing</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}