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
        
        {/* Shooting Stars - More varied positions and paths */}
        <div className="absolute top-[15%] left-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(0,255,255,0.5)',
          animation: 'shooting-star-1 8s linear infinite'
        }}></div>
        <div className="absolute top-[45%] left-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(255,105,180,0.5)',
          animation: 'shooting-star-2 12s linear infinite',
          animationDelay: '4s'
        }}></div>
        <div className="absolute top-[75%] left-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(0,255,200,0.5)',
          animation: 'shooting-star-3 10s linear infinite',
          animationDelay: '2s'
        }}></div>
        <div className="absolute top-[5%] right-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(147,197,253,0.5)',
          animation: 'shooting-star-right-1 9s linear infinite',
          animationDelay: '3s'
        }}></div>
        <div className="absolute top-[55%] right-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(196,181,253,0.5)',
          animation: 'shooting-star-right-2 11s linear infinite',
          animationDelay: '6s'
        }}></div>
        <div className="absolute top-[30%] left-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(167,243,208,0.5)',
          animation: 'shooting-star-4 13s linear infinite',
          animationDelay: '7s'
        }}></div>
        <div className="absolute top-[90%] left-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(251,207,232,0.5)',
          animation: 'shooting-star-5 9.5s linear infinite',
          animationDelay: '1s'
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
        
        {/* Twinkling Stars scattered across the background */}
        <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-white rounded-full" style={{ animation: 'twinkle-star 3s ease-in-out infinite' }}></div>
        <div className="absolute top-[25%] left-[75%] w-1 h-1 bg-white rounded-full" style={{ animation: 'twinkle-star 4s ease-in-out infinite', animationDelay: '1s' }}></div>
        <div className="absolute top-[45%] left-[15%] w-1 h-1 bg-cyan-300 rounded-full" style={{ animation: 'twinkle-star 3.5s ease-in-out infinite', animationDelay: '0.5s' }}></div>
        <div className="absolute top-[55%] left-[85%] w-1 h-1 bg-white rounded-full" style={{ animation: 'twinkle-star 4.5s ease-in-out infinite', animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] left-[30%] w-1 h-1 bg-pink-300 rounded-full" style={{ animation: 'twinkle-star 3.2s ease-in-out infinite', animationDelay: '1.5s' }}></div>
        <div className="absolute top-[80%] left-[65%] w-1 h-1 bg-white rounded-full" style={{ animation: 'twinkle-star 3.8s ease-in-out infinite', animationDelay: '0.8s' }}></div>
        <div className="absolute top-[10%] left-[50%] w-1 h-1 bg-purple-300 rounded-full" style={{ animation: 'twinkle-star 4.2s ease-in-out infinite', animationDelay: '2.5s' }}></div>
        <div className="absolute top-[35%] left-[90%] w-1 h-1 bg-white rounded-full" style={{ animation: 'twinkle-star 3.6s ease-in-out infinite', animationDelay: '1.2s' }}></div>
        <div className="absolute top-[65%] left-[10%] w-1 h-1 bg-teal-300 rounded-full" style={{ animation: 'twinkle-star 4.8s ease-in-out infinite', animationDelay: '3s' }}></div>
        <div className="absolute top-[20%] left-[40%] w-1 h-1 bg-white rounded-full" style={{ animation: 'twinkle-star 3.3s ease-in-out infinite', animationDelay: '0.3s' }}></div>
        <div className="absolute top-[50%] left-[55%] w-1 h-1 bg-white rounded-full" style={{ animation: 'twinkle-star 4.1s ease-in-out infinite', animationDelay: '1.8s' }}></div>
        <div className="absolute top-[85%] left-[80%] w-1 h-1 bg-blue-300 rounded-full" style={{ animation: 'twinkle-star 3.7s ease-in-out infinite', animationDelay: '2.2s' }}></div>
        
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
        {/* Saturn-like planet with ring */}
        <div className="absolute top-[20%] right-[15%] opacity-40" style={{ animation: 'float-slow 15s ease-in-out infinite' }}>
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/40 to-orange-300/40 blur-sm"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/60 to-orange-300/60"></div>
            {/* Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-6 border-2 border-amber-300/30 rounded-full" style={{ transform: 'translate(-50%, -50%) rotateX(75deg)' }}></div>
          </div>
        </div>
        
        {/* Blue Neptune-like planet */}
        <div className="absolute bottom-[25%] left-[12%] opacity-35" style={{ animation: 'float-slow 18s ease-in-out infinite', animationDelay: '-5s' }}>
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/40 to-cyan-400/40 blur-sm"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/60 to-cyan-400/60"></div>
          </div>
        </div>
        
        {/* Purple planet */}
        <div className="absolute top-[60%] right-[8%] opacity-30" style={{ animation: 'float-slow 20s ease-in-out infinite', animationDelay: '-10s' }}>
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300/40 to-pink-400/40 blur-sm"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300/60 to-pink-400/60"></div>
          </div>
        </div>
        
        {/* Small teal planet */}
        <div className="absolute top-[40%] left-[8%] opacity-35" style={{ animation: 'float-slow 16s ease-in-out infinite', animationDelay: '-7s' }}>
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-300/40 to-emerald-400/40 blur-sm"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-300/60 to-emerald-400/60"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaceBackground;
