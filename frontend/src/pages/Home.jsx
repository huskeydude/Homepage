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

  const handleTabClick = (path) => {
    if (path === '/northtech') {
      window.open('https://northtech-it.ca', '_blank');
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Avatar Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
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
                className="group relative bg-slate-900/50 border-slate-800 hover:border-slate-700 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
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
        <div className="text-center mt-12 text-slate-500 text-sm">
          <p>Built with creativity & passion</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
