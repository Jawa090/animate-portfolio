import React from 'react';
import { Bot, Sparkles, Zap, Code2, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const techStack = [
    { name: 'React', color: 'text-cyan-400', glow: 'hover:shadow-cyan-400/50' },
    { name: 'Python', color: 'text-yellow-400', glow: 'hover:shadow-yellow-400/50' },
    { name: 'Three.js', color: 'text-green-400', glow: 'hover:shadow-green-400/50' },
    { name: 'Node.js', color: 'text-emerald-400', glow: 'hover:shadow-emerald-400/50' },
    { name: 'JavaScript', color: 'text-blue-400', glow: 'hover:shadow-blue-400/50' },
    { name: 'AI/ML', color: 'text-purple-400', glow: 'hover:shadow-purple-400/50' },
    { name: 'Fast Api', color: 'text-pink-400', glow: 'hover:shadow-pink-400/50' },
    { name: 'Ai Modals', color: 'text-orange-400', glow: 'hover:shadow-orange-400/50' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Enhanced Text Content */}
        <div className="text-center lg:text-left space-y-10">
          {/* Professional greeting */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-medium">Available for Projects</span>
            </div>
          </div>

          {/* Name reveal with enhanced typography */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-3xl rounded-full"></div>
              <h1 className="relative text-6xl lg:text-8xl font-orbitron font-black tracking-wider leading-tight">
                <span className="text-gray-300 font-light text-2xl lg:text-3xl block mb-4">
                  Professional Developer
                </span>
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-glow-pulse drop-shadow-2xl">
                  JAWAD
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-glow-pulse drop-shadow-2xl">
                  ABBAS
                </span>
              </h1>
            </div>
          </div>
          
          {/* Enhanced subtitle with professional titles */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative glass-card rounded-2xl p-8 mb-8">
              <h2 className="text-2xl lg:text-4xl font-orbitron font-bold mb-4">
                <span className="text-cyan-300 drop-shadow-lg">Full Stack Developer</span>
                <span className="text-gray-300 mx-4">•</span>
                <span className="text-purple-300 drop-shadow-lg">AI Engineer</span>
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
                <div className="h-1 flex-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-glow-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">Creative Technology Specialist</span>
                <div className="h-1 flex-1 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full animate-glow-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced professional description */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-xl text-gray-100 leading-relaxed font-light">
                Transforming ideas into exceptional digital experiences through the seamless integration of 
                <span className="text-cyan-300 font-semibold mx-2">cutting-edge AI</span>,
                <span className="text-purple-300 font-semibold mx-2">immersive 3D technologies</span>, and
                <span className="text-green-300 font-semibold mx-2">modern web development</span>.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                Specialized in creating scalable, performant applications that deliver measurable business value 
                while maintaining exceptional user experience standards.
              </p>
            </div>
          </div>
          
          {/* Enhanced professional CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/contact"
              className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-orbitron font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Zap className="w-6 h-6" />
                Start Project
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              to="/contact"
              className="group relative px-12 py-5 glass-card rounded-full font-orbitron font-bold text-lg text-gray-100 hover:text-white transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/20 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
            >
              <span className="flex items-center justify-center gap-3">
                Hire Me
              </span>
            </Link>
          </div>
          
          {/* Enhanced tech stack showcase */}
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-orbitron font-bold text-gray-300 mb-8 text-center lg:text-left flex items-center gap-3">
                <Code2 className="w-6 h-6 text-blue-400" />
                Core Technologies
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`group ${tech.color} text-sm font-semibold px-5 py-4 glass-card rounded-xl hover:scale-110 hover:border-current transition-all duration-300 cursor-pointer ${tech.glow} hover:shadow-lg text-center`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Visual Element */}
        <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative">
            {/* Main enhanced avatar */}
            <div className="w-[480px] h-[480px] lg:w-[520px] lg:h-[520px] rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-2 animate-pulse-slow shadow-2xl shadow-cyan-500/30">
              <div className="w-full h-full rounded-full bg-black/95 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
                
                {/* Enhanced background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-purple-500/15"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,212,255,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(138,43,226,0.1),transparent_50%)]"></div>
                
                {/* Central professional content */}
                <div className="relative text-center text-white z-10">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center mb-8 mx-auto shadow-2xl shadow-cyan-500/50 animate-glow-pulse">
                    <Bot className="w-20 h-20 lg:w-24 lg:h-24 text-white drop-shadow-2xl" />
                  </div>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex justify-center space-x-4">
                      <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{ animationDelay: '1s' }}></div>
                    </div>
                    <div className="text-xl font-orbitron font-bold text-cyan-300 drop-shadow-lg">
                      Ready to Innovate
                    </div>
                  </div>
                </div>
                
                {/* Enhanced floating elements */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-bounce-slow shadow-xl shadow-green-500/30">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                
                {/* Professional skill indicators */}
                <div className="absolute -bottom-16 -left-16 flex space-x-3">
                  {[
                    { name: 'FS', color: 'from-blue-500 to-blue-600', label: 'Full Stack' },
                    { name: 'AI', color: 'from-purple-500 to-pink-500', label: 'Artificial Intelligence' },
                    { name: '3D', color: 'from-green-500 to-emerald-500', label: '3D Graphics' },
                    { name: 'UI', color: 'from-orange-500 to-red-500', label: 'UI/UX Design' }
                  ].map((badge, index) => (
                    <div
                      key={badge.name}
                      className={`w-16 h-16 bg-gradient-to-br ${badge.color} rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer group`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                      title={badge.label}
                    >
                      <span className="text-white font-orbitron font-bold text-sm drop-shadow-lg group-hover:scale-110 transition-transform duration-200">
                        {badge.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
