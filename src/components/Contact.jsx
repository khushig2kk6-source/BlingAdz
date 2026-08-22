import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, Sparkles, Mail, User, MessageSquare } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFE57F', '#D4AF37', '#F59E0B', '#FFFFFF'],
      });

      setIsSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-[#040407] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[11px] font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase leading-snug">
            Contact <span className="text-gold-gradient">BlingAdz</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-300">
            Tell us about your brand, user acquisition goals, or campaign requirements. Our strategists will respond within 24 hours.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="mt-10 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#111119] to-[#0A0A10] border border-gold-500/30 shadow-xl relative">
          
          {isSubmitted ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gold-500/20 border border-gold-400 text-gold-400 flex items-center justify-center mb-5 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-black uppercase text-white">
                Message Received!
              </h3>
              <p className="mt-2 text-gray-300 max-w-sm text-xs sm:text-sm leading-relaxed">
                Thank you for reaching out. Our performance team will review your inquiry and connect with you shortly.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-5 py-2 rounded-xl bg-gold-gradient text-black font-black text-xs uppercase tracking-wider hover:brightness-110"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              {/* Box 1: Name */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-gold-400" />
                  <span>Name <span className="text-gold-400">*</span></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name or company name"
                  {...register('name')}
                  className={`w-full px-4 py-3.5 rounded-2xl bg-[#171724] border ${
                    errors.name ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-gold-400'
                  } text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name.message}</span>
                  </p>
                )}
              </div>

              {/* Box 2: Mail */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                  <span>Mail <span className="text-gold-400">*</span></span>
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  {...register('email')}
                  className={`w-full px-4 py-3.5 rounded-2xl bg-[#171724] border ${
                    errors.email ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-gold-400'
                  } text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email.message}</span>
                  </p>
                )}
              </div>

              {/* Box 3: Message */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
                  <span>Message <span className="text-gold-400">*</span></span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your advertising campaign goals, target markets, or app install volume..."
                  {...register('message')}
                  className={`w-full px-4 py-3.5 rounded-2xl bg-[#171724] border ${
                    errors.message ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-gold-400'
                  } text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl bg-gold-gradient text-black font-black uppercase tracking-wider text-xs sm:text-sm shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting...</span>
                  </span>
                ) : (
                  <>
                    <span>Submit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}