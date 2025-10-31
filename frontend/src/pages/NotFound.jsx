import React from 'react';
import { useNavigate } from 'react-router-dom';
import SpaceBackground from '../components/SpaceBackground';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />
      
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
