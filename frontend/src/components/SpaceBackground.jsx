import React, { useMemo } from 'react';

const SpaceBackground = () => {
  // Generate random star positions for twinkling stars
  const twinklingStars = useMemo(() => {
    const stars = [];
    const starCount = 15;
    const colors = ['white', 'cyan-300', 'pink-300', 'purple-300', 'teal-300', 'blue-300'];
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        top: `${Math.random() * 90 + 5}%`,
        left: `${Math.random() * 90 + 5}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: `${3 + Math.random() * 2}s`,
        animationDelay: `${Math.random() * 3}s`
      });
    }
    return stars;
  }, []);

  return (
    <>
      {/* Animated Helix Nebula Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-teal-950">
        {/* Animated stars layer 1 */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(2px 2px at ${Math.random() * 200}px ${Math.random() * 200}px, white, transparent),
                           radial-gradient(2px 2px at ${Math.random() * 200}px ${Math.random() * 200}px, white, transparent),
                           radial-gradient(1px 1px at ${Math.random() * 200}px ${Math.random() * 200}px, white, transparent),
                           radial-gradient(1px 1px at ${Math.random() * 200}px ${Math.random() * 200}px, white, transparent),
                           radial-gradient(2px 2px at ${Math.random() * 200}px ${Math.random() * 200}px, white, transparent)`,
          backgroundSize: '200px 200px',
          animation: 'space-move-1 80s linear infinite'
        }}></div>
        
        {/* Animated stars layer 2 */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(1px 1px at ${Math.random() * 250}px ${Math.random() * 250}px, white, transparent),
                           radial-gradient(1px 1px at ${Math.random() * 250}px ${Math.random() * 250}px, white, transparent),
                           radial-gradient(2px 2px at ${Math.random() * 250}px ${Math.random() * 250}px, white, transparent),
                           radial-gradient(1px 1px at ${Math.random() * 250}px ${Math.random() * 250}px, white, transparent),
                           radial-gradient(1px 1px at ${Math.random() * 250}px ${Math.random() * 250}px, white, transparent)`,
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
        
        {/* Shooting Stars - Reduced to 3 max */}
        <div className="absolute top-[25%] left-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(0,255,255,0.5)',
          animation: 'shooting-star-1 10s linear infinite'
        }}></div>
        <div className="absolute top-[60%] left-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(255,105,180,0.5)',
          animation: 'shooting-star-2 14s linear infinite',
          animationDelay: '7s'
        }}></div>
        <div className="absolute top-[15%] right-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(147,197,253,0.5)',
          animation: 'shooting-star-right-1 12s linear infinite',
          animationDelay: '4s'
        }}></div>
        
        {/* Rare Meteors with long trails */}
        <div className="absolute top-[10%] left-0 w-2 h-2 bg-white rounded-full" style={{ 
          boxShadow: '0 0 10px 4px rgba(255,255,255,0.9), 0 0 20px 8px rgba(255,150,50,0.6), -40px -20px 60px 10px rgba(255,150,50,0.3)',
          animation: 'rare-meteor-1 18s linear infinite',
          animationDelay: '5s'
        }}></div>
        <div className="absolute top-[60%] left-0 w-2 h-2 bg-white rounded-full" style={{ 
          boxShadow: '0 0 10px 4px rgba(255,255,255,0.9), 0 0 20px 8px rgba(100,200,255,0.6), -50px -30px 70px 12px rgba(100,200,255,0.3)',
          animation: 'rare-meteor-2 22s linear infinite',
          animationDelay: '12s'
        }}></div>
        <div className="absolute top-[35%] left-0 w-2 h-2 bg-white rounded-full" style={{ 
          boxShadow: '0 0 10px 4px rgba(255,255,255,0.9), 0 0 20px 8px rgba(200,100,255,0.6), -45px -25px 65px 11px rgba(200,100,255,0.3)',
          animation: 'rare-meteor-3 20s linear infinite',
          animationDelay: '18s'
        }}></div>
        
        {/* Twinkling Stars scattered across the background - Now with random positions */}
        {twinklingStars.map((star, index) => (
          <div 
            key={index}
            className={`absolute w-1 h-1 bg-${star.color} rounded-full`} 
            style={{ 
              top: star.top,
              left: star.left,
              animation: `twinkle-star ${star.animationDuration} ease-in-out infinite`,
              animationDelay: star.animationDelay
            }}
          ></div>
        ))}
        
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
        
        {/* Minimalist Planets */}
        {/* Saturn-like planet with enhanced ring system */}
        <div className="absolute top-[20%] right-[15%] opacity-40" style={{ animation: 'float-slow 15s ease-in-out infinite' }}>
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/40 to-orange-300/40 blur-sm"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/60 to-orange-300/60"></div>
            {/* Horizontal bands on surface */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute top-[30%] left-0 right-0 h-[6%] bg-amber-400/30"></div>
              <div className="absolute top-[50%] left-0 right-0 h-[8%] bg-orange-400/25"></div>
              <div className="absolute top-[68%] left-0 right-0 h-[6%] bg-amber-300/30"></div>
            </div>
            {/* Main ring system - enhanced with box-shadow for better visibility */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-8" style={{ transform: 'translate(-50%, -50%) rotateX(75deg)' }}>
              {/* Outer ring with glow */}
              <div className="absolute inset-0 rounded-full" style={{
                border: '3px solid rgba(251, 191, 36, 0.6)',
                boxShadow: '0 0 8px 2px rgba(251, 191, 36, 0.4), inset 0 0 8px 1px rgba(251, 191, 36, 0.3)'
              }}></div>
              {/* Middle ring */}
              <div className="absolute inset-[5px] rounded-full" style={{
                border: '2px solid rgba(253, 186, 116, 0.5)',
                boxShadow: '0 0 6px 1px rgba(253, 186, 116, 0.3)'
              }}></div>
              {/* Inner ring */}
              <div className="absolute inset-[9px] rounded-full" style={{
                border: '2px solid rgba(254, 215, 170, 0.4)',
                boxShadow: '0 0 4px 1px rgba(254, 215, 170, 0.2)'
              }}></div>
            </div>
            {/* Ring shadow on planet */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute top-[42%] left-[10%] right-[10%] h-[16%] bg-gradient-to-r from-transparent via-black/25 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Jupiter-like planet with bands */}
        <div className="absolute bottom-[25%] left-[12%] opacity-35" style={{ animation: 'float-slow 18s ease-in-out infinite', animationDelay: '-5s' }}>
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300/40 to-red-400/40 blur-sm"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300/60 to-red-400/60"></div>
            {/* Horizontal bands */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute top-[25%] left-0 right-0 h-[8%] bg-orange-400/40"></div>
              <div className="absolute top-[45%] left-0 right-0 h-[10%] bg-red-400/30"></div>
              <div className="absolute top-[65%] left-0 right-0 h-[8%] bg-orange-300/40"></div>
            </div>
            {/* Great Red Spot */}
            <div className="absolute top-[40%] right-[20%] w-3 h-2 rounded-full bg-red-500/50"></div>
          </div>
        </div>
        
        {/* Planet with orbiting moons */}
        <div className="absolute top-[60%] right-[8%] opacity-30" style={{ animation: 'float-slow 20s ease-in-out infinite', animationDelay: '-10s' }}>
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300/40 to-indigo-400/40 blur-sm"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300/60 to-indigo-400/60"></div>
            {/* Orbiting moons */}
            <div className="absolute inset-0" style={{ animation: 'galaxy-rotate 10s linear infinite' }}>
              <div className="absolute -top-2 left-1/2 -ml-1 w-2 h-2 rounded-full bg-slate-300/60"></div>
            </div>
            <div className="absolute inset-0" style={{ animation: 'galaxy-rotate 15s linear infinite reverse' }}>
              <div className="absolute top-1/2 -right-2 -mt-0.5 w-1.5 h-1.5 rounded-full bg-slate-300/50"></div>
            </div>
          </div>
        </div>
        
        {/* Crescent planet with shadow */}
        <div className="absolute top-[40%] left-[8%] opacity-35" style={{ animation: 'float-slow 16s ease-in-out infinite', animationDelay: '-7s' }}>
          <div className="relative w-11 h-11">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-300/40 to-cyan-400/40 blur-sm"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-300/60 to-cyan-400/60"></div>
            {/* Crescent shadow overlay */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute -right-1 top-0 bottom-0 w-8 rounded-full bg-gradient-to-l from-black/60 to-transparent"></div>
            </div>
            {/* Surface spots/craters */}
            <div className="absolute top-[30%] left-[25%] w-1.5 h-1.5 rounded-full bg-teal-600/40"></div>
            <div className="absolute top-[55%] left-[35%] w-1 h-1 rounded-full bg-cyan-600/40"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaceBackground;
