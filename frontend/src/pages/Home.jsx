import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Globe, BookOpen } from 'lucide-react';
import { Card } from '../components/ui/card';

const Home = () => {
  const navigate = useNavigate();

  const tabs = [
    {
      icon: FileText,
      title: 'Resume',
      description: 'View my professional experience',
      path: '/resume',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'North Tech IT',
      description: 'Visit my main website',
      path: '/northtech',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Blog & Updates',
      description: 'Latest projects and thoughts',
      path: '/blog',
      gradient: 'from-purple-500 to-pink-500'
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
    <div className="min-h-screen relative flex items-center justify-center p-6">
      {/* Space Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1570556319136-3cfc640168a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYXxlbnwwfHx8YmxhY2t8MTc2MTc5NjIyNnww&ixlib=rb-4.1.0&q=85)'
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="max-w-4xl w-full relative z-10">
        {/* Avatar Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            {/* Avatar supports PNG, JPG, GIF, and other image formats */}
            <img
              src="https://cloud.yeksuh.xyz/image/placeholder.png"
              alt="Yeksuh San"
              className="relative w-48 h-48 rounded-full border-4 border-slate-800 shadow-2xl object-cover mx-auto"
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
                className="group relative bg-slate-900/80 backdrop-blur-md border-slate-700/50 hover:border-slate-600 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
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
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg text-slate-400 hover:text-white transition-all duration-300 group"
                title={social.name}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
                <span className="text-sm font-medium">{social.name}</span>
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
