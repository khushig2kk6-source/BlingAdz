import React from 'react';

export default function Logo({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-12 sm:h-14',
  };

  const currentHeight = sizeClasses[size] || sizeClasses.md;

  return (
    <a 
      href="#home" 
      className={`group relative flex items-center gap-2 select-none transition-all duration-300 ${className}`}
      aria-label="BlingAdz Home"
    >
      {/* Ambient hover glow */}
      <div className="absolute -inset-2 bg-gold-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Official Uploaded Logo Image */}
      <div className="relative flex items-center">
        <img
          src="/logo-transparent.png"
          alt="BlingAdz - Powered by Performance"
          className={`${currentHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]`}
          onError={(e) => {
            // Fallback to original image if transparent not available
            e.currentTarget.src = '/logo.png';
          }}
        />
      </div>
    </a>
  );
}