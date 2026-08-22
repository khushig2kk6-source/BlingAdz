import React from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import Contact from './components/Contact';
import LetsConnect from './components/LetsConnect';
import Footer from './components/Footer';

export default function App() {
  // Initialize Lenis smooth scrolling
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-[#040407] text-white selection:bg-gold-500 selection:text-black">
      {/* Animated Brand Sparkle Cursor */}
      <CustomCursor />

      {/* Header & Sticky Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section (6 Core Pillars) */}
        <Services />

        {/* 5-Step Performance Process Engine */}
        <ProcessTimeline />

        {/* Contact Form (3 Boxes: Name, Mail, Message) */}
        <Contact />

        {/* Dedicated Let's Connect Hub */}
        <LetsConnect />
      </main>

      {/* Luxury Standout Footer */}
      <Footer />
    </div>
  );
}