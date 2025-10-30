import React from 'react';

const SpaceBackground = () => {
  return (
    <>
      {/* Animated Helix Nebula Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-teal-950">
        {/* Animated stars layer 1 */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(2px 2px at 20px 30px, white, transparent),
                           radial-gradient(2px 2px at 60px 70px, white, transparent),
                           radial-gradient(1px 1px at 50px 50px, white, transparent),
                           radial-gradient(1px 1px at 130px 80px, white, transparent),
                           radial-gradient(2px 2px at 90px 10px, white, transparent)`,
          backgroundSize: '200px 200px',
          animation: 'space-move-1 80s linear infinite'
        }}></div>
        
        {/* Animated stars layer 2 */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(1px 1px at 40px 60px, white, transparent),
                           radial-gradient(1px 1px at 110px 90px, white, transparent),
                           radial-gradient(2px 2px at 150px 30px, white, transparent),
                           radial-gradient(1px 1px at 70px 120px, white, transparent),
                           radial-gradient(1px 1px at 20px 100px, white, transparent)`,
          backgroundSize: '250px 250px',
          animation: 'space-move-2 100s linear infinite'
        }}></div>
        
        {/* Twinkling stars with nebula colors */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `radial-gradient(1px 1px at 10% 20%, white, transparent),
                           radial-gradient(1px 1px at 80% 80%, white, transparent),
                           radial-gradient(1px 1px at 50% 50%, white, transparent),
                           radial-gradient(1px 1px at 90% 10%, white, transparent),
                           radial-gradient(2px 2px at 30% 70%, cyan, transparent),
                           radial-gradient(2px 2px at 70% 30%, #ec4899, transparent),
                           radial-gradient(2px 2px at 60% 40%, #14b8a6, transparent)`,
          backgroundSize: '200% 200%',
          animation: 'twinkle 4s ease-in-out infinite'
        }}></div>
        
        {/* Helix Nebula glow effects - blues, teals, purples, pinks */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" style={{ animation: 'pulse 8s ease-in-out infinite' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600/15 rounded-full blur-3xl" style={{ animation: 'pulse 6s ease-in-out infinite' }}></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl" style={{ animation: 'pulse 7s ease-in-out infinite' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl" style={{ animation: 'pulse 9s ease-in-out infinite' }}></div>
        
        {/* Shooting Stars - Slower rate */}
        <div className="absolute top-1/4 left-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(0,255,255,0.5)',
          animation: 'shooting-star-1 8s linear infinite'
        }}></div>
        <div className="absolute top-1/2 left-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(255,105,180,0.5)',
          animation: 'shooting-star-2 12s linear infinite',
          animationDelay: '4s'
        }}></div>
        <div className="absolute top-3/4 left-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(0,255,200,0.5)',
          animation: 'shooting-star-3 10s linear infinite',
          animationDelay: '2s'
        }}></div>
        
        {/* Distant Galaxies */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-30" style={{
          background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)',
          borderRadius: '50%',
          animation: 'galaxy-rotate 60s linear infinite'
        }}></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 opacity-25" style={{
          background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.4) 0%, rgba(20,184,166,0.2) 50%, transparent 70%)',
          borderRadius: '50%',
          animation: 'galaxy-rotate 80s linear infinite reverse'
        }}></div>
      </div>
    </>
  );
};

export default SpaceBackground;
