import React, { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-neon-cyan/40 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s linear infinite, glow 3s ease-in-out infinite alternate`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-deep-space/90 to-deep-space/80 backdrop-blur-[2px]" />
    </div>
  );
};

export default ParticleBackground;
