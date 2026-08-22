import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  
  const particleIdRef = useRef(0);
  const requestRef = useRef();

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });

      if (Math.random() > 0.45) {
        const id = particleIdRef.current++;
        const size = Math.random() * 6 + 3;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 18 + 8;
        
        setParticles((prev) => [
          ...prev.slice(-16),
          {
            id,
            x: mouseX,
            y: mouseY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size,
            opacity: 1,
            rotation: Math.random() * 360,
          },
        ]);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button, a, input, textarea, [data-cursor-hover], .interactive-card');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const animateFollower = () => {
      const lerp = 0.18;
      currentX += (mouseX - currentX) * lerp;
      currentY += (mouseY - currentY) * lerp;
      setFollowerPos({ x: currentX, y: currentY });

      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx * 0.05,
            y: p.y + p.vy * 0.05,
            opacity: p.opacity - 0.05,
            size: p.size * 0.94,
          }))
          .filter((p) => p.opacity > 0.05)
      );

      requestRef.current = requestAnimationFrame(animateFollower);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    requestRef.current = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Particle Trail Sparkles Matching the Logo Star */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-75"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            opacity: p.opacity,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scale(${p.size / 6})`,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z"
              fill="#FFE57F"
              className="drop-shadow-[0_0_6px_#D4AF37]"
            />
          </svg>
        </div>
      ))}

      {/* Outer Golden Aura Ring / Magnetic Follower */}
      <div
        className={`absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out border ${
          isHovering
            ? 'w-13 h-13 border-gold-400/80 bg-gold-500/15 shadow-[0_0_25px_rgba(212,175,55,0.4)] scale-125'
            : isClicking
            ? 'w-6 h-6 border-gold-300 bg-gold-400/30 scale-90'
            : 'w-9 h-9 border-gold-500/40 bg-gold-500/5 shadow-[0_0_12px_rgba(212,175,55,0.15)]'
        }`}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
        }}
      />

      {/* Main Bling Star Cursor Matching the Logo */}
      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ${
          isClicking ? 'scale-75' : isHovering ? 'scale-125' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="filter drop-shadow-[0_0_8px_#FFE57F]">
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z"
            fill="url(#cursorGold)"
          />
          <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
          <defs>
            <linearGradient id="cursorGold" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF4B8" />
              <stop offset="0.5" stopColor="#E5B80B" />
              <stop offset="1" stopColor="#AA7C11" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}