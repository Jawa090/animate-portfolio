
import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { EnhancedThreeBackground } from '../components/EnhancedThreeBackground';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Chatbot } from '../components/Chatbot';
import { ArrowRight, Code, Brain, Globe, Award, Users, Coffee, Target, TrendingUp, Sparkles, Zap, Briefcase, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Enterprise-grade applications with modern technologies that scale seamlessly and deliver exceptional performance',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-indigo-600/10',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-400/40',
      skills: ['React', 'Node.js', 'JavaScript', 'Next.js'],
      metric: '90.9% Uptime'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions using advanced algorithms, computer vision, and natural language processing',
      color: 'from-violet-500 to-purple-600',
      bgColor: 'from-violet-500/10 to-purple-600/10',
      borderColor: 'border-violet-500/20',
      hoverBorder: 'hover:border-violet-400/40',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV'],
      metric: '75% Accuracy'
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: 'Generative AI Specialist',
        description: 'Expert in building intelligent systems using generative models and AI-driven tools',
        color: 'from-purple-500 to-pink-600',
        bgColor: 'from-purple-500/10 to-pink-600/10',
        borderColor: 'border-purple-500/20',
        hoverBorder: 'hover:border-purple-400/40',
        skills: ['Transformers', 'LLMs', 'Stable Diffusion', 'LangChain'],
        metric: 'State-of-the-art Outputs'
      }

  ];

  const stats = [
    {
      number: '20+',
      label: 'Projects Delivered',
      icon: <Award className="w-6 h-6" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/8',
      borderColor: 'border-blue-500/20',
      description: 'Successfully completed'
    },
    {
      number: '6+',
      label: 'Certifications',
      icon: <Target className="w-6 h-6" />,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/8',
      borderColor: 'border-violet-500/20',
      description: 'Professional achievements'
    },
    {
      number: '20+',
      label: 'Happy Clients',
      icon: <Users className="w-6 h-6" />,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/8',
      borderColor: 'border-emerald-500/20',
      description: 'Satisfied worldwide'
    },
    {
      number: '24/7',
      label: 'Availability',
      icon: <Coffee className="w-6 h-6" />,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/8',
      borderColor: 'border-amber-500/20',
      description: 'Dedicated support'
    }
  ];

  const experienceHighlights = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Bitwords.Inc',
      period: '2025 - Present',
      status: 'Current',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600',
      achievement: 'Led team of 3 developers, 40% performance boost'
    },
    {
      title: 'AI/ML Developer',
      company: 'Connect Solution Lahore',
      period: '2022 - 2023',
      status: 'Completed',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-violet-500 to-purple-600',
      achievement: 'Achieved 95% accuracy in medical imaging models and learned to implement AI models in practice',

    },
    {
      title: 'WEB Developer',
      company: 'E Khata erp',
      period: '2021 - 2022',
      status: 'Completed',
      icon: <Code className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
      achievement: 'Delivered a 35% improvement in user engagement by developing and deploying high-quality web applications',

    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden font-poppins">
      <EnhancedThreeBackground />
      
      <div className="relative z-10 bg-black/20 backdrop-blur-[1px] min-h-screen">
        <Navbar />
        <HeroSection />
        
        {/* Core Services Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/30 rounded-full px-8 py-4 mb-8 transition-all duration-500 hover:border-slate-500/40 hover:bg-gradient-to-r hover:from-slate-700/60 hover:to-slate-600/60">
                <TrendingUp className="w-6 h-6 text-slate-300" />
                <span className="text-slate-200 font-medium text-lg">Core Expertise</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-orbitron font-bold mb-6 tracking-wide">
                <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-clip-text text-transparent">
                  PROFESSIONAL SOLUTIONS
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Transforming complex challenges into elegant digital solutions that drive measurable business value
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group animate-fade-in hover:scale-[1.02] transition-all duration-700 ease-out"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`relative h-full bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border ${highlight.borderColor} ${highlight.hoverBorder} rounded-2xl p-8 transition-all duration-700 overflow-hidden shadow-2xl hover:shadow-slate-900/50`}>
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgColor} opacity-40 group-hover:opacity-60 transition-all duration-700`}></div>
                    
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-xl px-4 py-2 border border-slate-600/20">
                      <span className={`text-sm font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                        {highlight.metric}
                      </span>
                    </div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        {highlight.icon}
                      </div>
                      
                      <h3 className="text-2xl font-orbitron font-bold text-slate-100 mb-4 group-hover:text-white transition-colors duration-500">
                        {highlight.title}
                      </h3>
                      
                      <p className="text-slate-400 leading-relaxed mb-6 text-base group-hover:text-slate-300 transition-colors duration-500">
                        {highlight.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {highlight.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="bg-gradient-to-r from-slate-800/70 to-slate-700/70 backdrop-blur-xl rounded-lg px-3 py-2 text-center border border-slate-600/20 hover:border-slate-500/40 hover:bg-gradient-to-r hover:from-slate-700/70 hover:to-slate-600/70 transition-all duration-500"
                          >
                            <span className="text-slate-300 text-sm font-medium hover:text-slate-200 transition-colors duration-300">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience Preview Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/30 rounded-full px-8 py-4 mb-8 transition-all duration-500 hover:border-slate-500/40 hover:bg-gradient-to-r hover:from-slate-700/60 hover:to-slate-600/60">
                <Briefcase className="w-6 h-6 text-slate-300" />
                <span className="text-slate-200 font-medium text-lg">Professional Journey</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-orbitron font-bold mb-6 tracking-wide">
                <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-clip-text text-transparent">
                  EXPERIENCE HIGHLIGHTS
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                A proven track record of delivering exceptional results across diverse technology projects
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {experienceHighlights.map((exp, index) => (
                <div
                  key={index}
                  className="group animate-fade-in hover:scale-[1.02] transition-all duration-700 ease-out"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-full bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-600/20 rounded-2xl p-8 hover:border-slate-500/40 transition-all duration-700 overflow-hidden shadow-2xl hover:shadow-slate-900/50">
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-slate-700/30 opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
                    
                    <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold transition-all duration-500 ${
                      exp.status === 'Current' 
                        ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 text-emerald-300' 
                        : 'bg-gradient-to-r from-slate-600/20 to-slate-500/20 border border-slate-500/30 text-slate-300'
                    }`}>
                      {exp.status}
                    </div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        {exp.icon}
                      </div>
                      
                      <h3 className="text-xl font-orbitron font-bold text-slate-100 mb-2 group-hover:text-white transition-colors duration-500">
                        {exp.title}
                      </h3>
                      
                      <div className="text-slate-300 font-semibold mb-2 group-hover:text-slate-200 transition-colors duration-500">{exp.company}</div>
                      
                      <div className="flex items-center gap-2 text-slate-500 mb-4 group-hover:text-slate-400 transition-colors duration-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                        {exp.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center animate-fade-in">
              <Link
                to="/experience"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-xl border border-slate-600/30 rounded-full px-8 py-4 text-slate-200 hover:text-white hover:border-slate-500/50 hover:bg-gradient-to-r hover:from-slate-700/60 hover:to-slate-600/60 transition-all duration-500 hover:scale-105"
              >
                View Full Experience
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Professional Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-xl border border-slate-600/20 rounded-2xl p-8 overflow-hidden shadow-2xl">
              <div className="relative z-10 grid md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group animate-fade-in cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`${stat.bgColor} backdrop-blur-xl border ${stat.borderColor} rounded-xl p-6 hover:border-slate-500/40 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-slate-700/10`}>
                      <div className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-orbitron font-bold text-slate-100 mb-2 group-hover:text-white transition-colors duration-500">
                        {stat.number}
                      </div>
                      <div className="text-slate-200 font-semibold text-base mb-1 group-hover:text-white transition-colors duration-500">{stat.label}</div>
                      <div className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors duration-500">{stat.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Professional CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-xl border border-slate-600/20 rounded-2xl p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-8 left-8 text-slate-400 animate-pulse">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="absolute top-12 right-12 text-slate-500 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <Zap className="w-5 h-5" />
              </div>
              
              <div className="relative z-10 animate-fade-in">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-slate-600/30">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300 font-medium">Ready to Start</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6 tracking-wide">
                  <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-clip-text text-transparent">
                    LET'S BUILD SOMETHING EXTRAORDINARY
                  </span>
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Transform your vision into reality with professional development and innovative design solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link
                    to="/contact"
                    className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full font-orbitron font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 focus:outline-none focus:ring-4 focus:ring-blue-500/30 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                  
                  <Link
                    to="/projects"
                    className="group relative px-10 py-4 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/30 rounded-full font-orbitron font-bold text-lg text-slate-200 hover:text-white transition-all duration-500 hover:scale-105 hover:border-slate-500/50 hover:bg-gradient-to-r hover:from-slate-700/80 hover:to-slate-600/80 focus:outline-none focus:ring-4 focus:ring-slate-500/20"
                  >
                    <span className="flex items-center gap-3">
                      View Portfolio
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Chatbot />
      </div>
    </div>
  );
};

export default Home;
