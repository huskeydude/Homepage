import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
      {/* Animated Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-black">
        {/* Animated stars layer */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(2px 2px at 20px 30px, white, transparent),
                           radial-gradient(2px 2px at 60px 70px, white, transparent),
                           radial-gradient(1px 1px at 50px 50px, white, transparent),
                           radial-gradient(1px 1px at 130px 80px, white, transparent),
                           radial-gradient(2px 2px at 90px 10px, white, transparent)`,
          backgroundSize: '200px 200px',
          animation: 'space-move-1 80s linear infinite'
        }}></div>
        
        {/* Twinkling stars */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `radial-gradient(1px 1px at 10% 20%, white, transparent),
                           radial-gradient(1px 1px at 80% 80%, white, transparent),
                           radial-gradient(1px 1px at 50% 50%, white, transparent),
                           radial-gradient(1px 1px at 90% 10%, white, transparent),
                           radial-gradient(2px 2px at 30% 70%, cyan, transparent)`,
          backgroundSize: '200% 200%',
          animation: 'twinkle 4s ease-in-out infinite'
        }}></div>
        
        {/* Nebula glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" style={{ animation: 'pulse 8s ease-in-out infinite' }}></div>
        
        {/* Shooting stars - Reduced */}
        <div className="absolute top-[20%] left-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(0,255,255,0.5)',
          animation: 'shooting-star-1 10s linear infinite'
        }}></div>
        <div className="absolute top-[60%] left-0 w-1 h-1 bg-white rounded-full" style={{ 
          boxShadow: '0 0 6px 2px rgba(255,255,255,0.8), 0 0 10px 4px rgba(255,105,180,0.5)',
          animation: 'shooting-star-2 14s linear infinite',
          animationDelay: '7s'
        }}></div>

        {/* Floating lost astronaut icon */}
        <div className="absolute top-[15%] right-[20%] opacity-20" style={{ animation: 'float-slow 20s ease-in-out infinite' }}>
          <svg className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="8" r="4"/>
            <path d="M12 12v3"/>
            <path d="M8 15h8"/>
            <path d="M9 19l1.5-2 1.5 2 1.5-2 1.5 2"/>
            <circle cx="12" cy="8" r="6" strokeDasharray="2 2" opacity="0.3"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-2xl w-full relative z-10 text-center">
        {/* 404 Large Number */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 leading-none" style={{
            textShadow: '0 0 80px rgba(34, 211, 238, 0.3)'
          }}>
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
        </div>

        {/* Message */}
        <div className="mb-8 space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            You drifted too far, explorer.
          </h2>
          <p className="text-lg text-slate-400">
            This sector of space doesn't exist in our universe.
          </p>
        </div>

        {/* Warp Home Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => navigate('/')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Button content */}
            <span className="relative flex items-center gap-3">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Warp Back Home
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </span>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </button>
        </div>

        {/* Additional navigation hint */}
        <div className="mt-8 text-slate-500 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Lost coordinates? Check your navigation system.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
