
import React from 'react';
import { Navbar } from '../components/Navbar';
import { EnhancedThreeBackground } from '../components/EnhancedThreeBackground';
import { WorkExperienceSection } from '../components/WorkExperienceSection';

const WorkExperience = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      <EnhancedThreeBackground />
      
      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <WorkExperienceSection />
      </div>
    </div>
  );
};

export default WorkExperience;
