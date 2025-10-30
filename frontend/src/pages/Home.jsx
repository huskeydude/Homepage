import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';

const Home = () => {
  const navigate = useNavigate();

  // Custom fancy icon components
  const ResumeIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="9" y1="7" x2="15" y2="7"/>
      <line x1="9" y1="11" x2="15" y2="11"/>
      <line x1="9" y1="15" x2="13" y2="15"/>
      <circle cx="7.5" cy="7" r="0.5" fill="currentColor"/>
      <circle cx="7.5" cy="11" r="0.5" fill="currentColor"/>
      <circle cx="7.5" cy="15" r="0.5" fill="currentColor"/>
    </svg>
  );

  const TechIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 2L4 6l4 4"/>
      <path d="M16 2l4 4-4 4"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <path d="M8 22l-4-4 4-4"/>
      <path d="M16 22l4-4-4-4"/>
    </svg>
  );

  const BlogIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3s3 1.343 3 3v12c0 1.657-1.343 3-3 3z"/>
      <path d="M4 17h16"/>
      <path d="M4 13h16"/>
      <path d="M4 9h16"/>
      <circle cx="7" cy="9" r="1" fill="currentColor"/>
      <circle cx="7" cy="13" r="1" fill="currentColor"/>
      <circle cx="7" cy="17" r="1" fill="currentColor"/>
    </svg>
  );

  const tabs = [
    {
      icon: ResumeIcon,
      title: 'Resume',
      description: 'View my professional experience',
      path: '/resume',
      gradient: 'from-cyan-400 to-blue-600',
      glow: 'group-hover:shadow-cyan-500/50'
    },
    {
      icon: TechIcon,
      title: 'NorthTech',
      description: 'IT Solutions Business',
      path: '/northtech',
      gradient: 'from-teal-400 to-purple-600',
      glow: 'group-hover:shadow-teal-500/50'
    },
    {
      icon: BlogIcon,
      title: 'Blog',
      description: 'Latest projects and thoughts',
      path: '/blog',
      gradient: 'from-pink-400 to-purple-600',
      glow: 'group-hover:shadow-pink-500/50'
    }
  ];

  const socials = [
    {
      name: 'Steam',
      url: 'https://steamcommunity.com/id/Yeksuh/',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
        </svg>
      )
    }
  ];

  const handleTabClick = (path) => {
    if (path === '/northtech') {
      window.open('https://northtech-it.ca', '_blank');
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
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
      
      <div className="max-w-4xl w-full relative z-10">
        {/* Avatar Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            {/* Avatar supports PNG, JPG, GIF, and other image formats */}
            <img
              src="https://shared.akamai.steamstatic.com/community_assets/images/items/2873080/33e549955162361a7684873731207e3cce5d66ad.gif"
              alt="Yeksuh San"
              className="relative w-48 h-48 rounded-full border-4 border-cyan-500/30 shadow-2xl object-cover mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-2 tracking-tight">
            Yeksuh San's Home Page
          </h1>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">Available for opportunities</span>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <Card
                key={index}
                onClick={() => handleTabClick(tab.path)}
                className={`group relative bg-slate-900/85 backdrop-blur-md border-slate-700/50 hover:border-slate-500 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${tab.glow} overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tab.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="p-8 relative z-10 flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tab.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {tab.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {tab.description}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 space-y-4">
          {/* Socials */}
          <div className="flex items-center justify-center gap-3">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg text-slate-400 hover:text-white transition-all duration-300 group"
                title={social.name}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
          <p className="text-slate-500 text-sm">Built with creativity & passion</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
