import React, { useState, useEffect } from 'react';

const VisitorGreeting = () => {
  const [greeting, setGreeting] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const trackVisit = () => {
      const now = new Date();
      const today = now.toDateString();
      
      // Get visitor data from localStorage
      const visitorData = localStorage.getItem('visitorData');
      let data = visitorData ? JSON.parse(visitorData) : null;

      if (!data) {
        // First visit ever
        data = {
          firstVisit: now.toISOString(),
          lastVisit: now.toISOString(),
          totalVisits: 1,
          lastVisitDate: today,
          dailyVisits: 1,
          consecutiveDays: 1
        };
        setGreeting(getFirstVisitGreeting());
      } else {
        // Calculate days since last visit
        const lastVisit = new Date(data.lastVisit);
        const daysSince = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        
        // Update visit counts
        data.totalVisits += 1;
        
        // Check if same day
        if (data.lastVisitDate === today) {
          data.dailyVisits += 1;
        } else {
          data.dailyVisits = 1;
          data.lastVisitDate = today;
        }
        
        // Update last visit
        data.lastVisit = now.toISOString();
        
        // Generate appropriate greeting
        setGreeting(getGreeting(data, daysSince));
      }

      // Save updated data
      localStorage.setItem('visitorData', JSON.stringify(data));
      setIsVisible(true);
      
      // Fade out after 8 seconds
      setTimeout(() => setIsVisible(false), 8000);
    };

    trackVisit();
  }, []);

  const getFirstVisitGreeting = () => {
    const greetings = [
      "✨ Welcome, new traveler. The cosmos awaits your exploration...",
      "🌟 A new soul enters the cosmic realm. Welcome, wanderer.",
      "⭐ The stars align for your first visit. Welcome, traveler.",
      "🌌 First light detected. Welcome to this corner of the universe.",
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const getGreeting = (data, daysSince) => {
    // 3 visits in one day - special message
    if (data.dailyVisits >= 3) {
      const messages = [
        "🌠 The universe notices your frequent presence today. A curious soul indeed...",
        "✨ Three orbits in a single day? The cosmos is impressed by your dedication.",
        "💫 Your third visit today! The stars whisper that you seek something special...",
        "🌟 The fabric of space-time ripples with your persistent visits. Welcome, seeker.",
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }

    // Daily visitor - consecutive days
    if (daysSince === 0 && data.dailyVisits === 2) {
      const messages = [
        "🌙 Twice in one day? The cosmos recognizes your loyalty, traveler.",
        "⭐ Your orbit brings you back today. The stars remember your path.",
        "✨ Another visit today. The universe acknowledges your presence.",
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }

    // Returning visitor - show days since
    if (daysSince === 1) {
      return "🌟 The stars shine brighter with your return. Last visit: yesterday.";
    } else if (daysSince < 7) {
      const messages = [
        `💫 Welcome back, cosmic traveler. The void felt your absence... ${daysSince} days ago.`,
        `✨ Your orbit crosses this realm again. Last passage: ${daysSince} days ago.`,
        `🌌 The universe remembers. Your last visit was ${daysSince} days ago, traveler.`,
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    } else if (daysSince < 30) {
      const messages = [
        `🌠 Long has the cosmos awaited your return. ${daysSince} days have passed...`,
        `⭐ The celestial bodies tracked your absence. ${daysSince} days since last orbit.`,
        `✨ Time flows differently in space. ${daysSince} days since we last crossed paths.`,
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    } else {
      const messages = [
        `🌌 A traveler returns from the distant void! ${daysSince} days since your last visit.`,
        `💫 The cosmic winds carry you back after ${daysSince} days. Welcome, wanderer.`,
        `🌟 ${daysSince} days... The universe never forgets a traveler's signature.`,
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }
  };

  if (!greeting || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 rounded-lg px-6 py-3 shadow-2xl max-w-2xl">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm text-slate-300 font-light tracking-wide">
            {greeting}
          </p>
        </div>
        {/* Decorative gradient border */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 -z-10 blur-sm"></div>
      </div>
    </div>
  );
};

export default VisitorGreeting;
