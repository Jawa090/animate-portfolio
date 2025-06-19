import React from 'react';
import { Navbar } from '../components/Navbar';
import { EnhancedThreeBackground } from '../components/EnhancedThreeBackground';
import { Code, Cpu, Palette, MapPin, GraduationCap, Target, Zap, Brain, Rocket, Award, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EnhancedAbout = () => {
  const navigate = useNavigate();
  const skills = [
    {
      category: 'Frontend Mastery',
      icon: <Code className="w-8 h-8" />,
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Three.js', 'GSAP', 'Tailwind CSS'],
      color: 'from-cyan-400 via-blue-500 to-indigo-600',
      years: '4+',
      proficiency: 95
    },
    {
      category: 'AI & Backend',
      icon: <Brain className="w-8 h-8" />,
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Node.js', 'MongoDB', 'PostgreSQL'],
      color: 'from-purple-400 via-pink-500 to-red-500',
      years: '3+',
      proficiency: 88
    },
    {
      category: 'Creative Tech',
      icon: <Palette className="w-8 h-8" />,
      technologies: ['Blender', 'Cinema 4D', 'After Effects', 'WebGL', 'Shaders', 'Motion Design'],
      color: 'from-green-400 via-emerald-500 to-teal-600',
      years: '5+',
      proficiency: 92
    }
  ];

  const achievements = [
    { icon: <Rocket className="w-6 h-6" />, label: 'Projects Completed', value: '50+', color: 'text-cyan-400' },
    { icon: <Brain className="w-6 h-6" />, label: 'AI Models Trained', value: '25+', color: 'text-purple-400' },
    { icon: <Award className="w-6 h-6" />, label: 'Certifications', value: '12+', color: 'text-green-400' },
    { icon: <Users className="w-6 h-6" />, label: 'Happy Clients', value: '100+', color: 'text-pink-400' }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-poppins">
      <EnhancedThreeBackground />
      
      {/* Enhanced glassmorphism overlay */}
      <div className="relative z-10 bg-black/10 backdrop-blur-[1px] min-h-screen">
        <Navbar />
        
        {/* Enhanced Hero Section with better contrast */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="mb-12 relative">
                {/* Enhanced glassmorphism container for title */}
                <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <h1 className="text-6xl lg:text-8xl font-orbitron font-black mb-8 tracking-wider relative">
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-glow-pulse drop-shadow-2xl">
                      JAWAD ABBAS
                    </span>
                    
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 blur-3xl -z-10 animate-pulse"></div>
                  </h1>
                  
                  {/* Enhanced separator */}
                  <div className="h-1 w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8 animate-glow-pulse shadow-lg shadow-cyan-400/50"></div>
                </div>
              </div>
              
              {/* Enhanced subtitle with glassmorphism */}
              <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 mb-8 max-w-5xl mx-auto">
                <div className="text-2xl lg:text-4xl leading-relaxed font-light">
                  <span className="text-cyan-300 font-medium drop-shadow-lg">Creative Developer</span> • 
                  <span className="text-purple-300 font-medium drop-shadow-lg"> AI Engineer</span> • 
                  <span className="text-green-300 font-medium drop-shadow-lg"> 3D Artist</span>
                </div>
              </div>
              
              {/* Enhanced description with better contrast */}
              <div className="relative max-w-4xl mx-auto">
                <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <p className="relative text-lg text-gray-100 leading-relaxed">
                    Crafting the future of digital experiences through the intersection of 
                    <span className="text-cyan-300 font-medium"> artificial intelligence</span>, 
                    <span className="text-purple-300 font-medium"> immersive 3D graphics</span>, and 
                    <span className="text-green-300 font-medium"> cutting-edge web technologies</span>
                  </p>
                </div>
              </div>

              {/* Enhanced CTA Button */}
              <div className="mt-12">
                <button
                  className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  onClick={() => navigate('/projects')}
                >
                  <span className="relative z-10">Explore My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Achievement Stats */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group animate-fade-in hover:scale-105 transition-all duration-700 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-cyan-400/60 transition-all duration-700 overflow-hidden shadow-2xl hover:shadow-cyan-500/20">
                    
                    {/* Enhanced glassmorphism background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl"></div>
                    
                    {/* Animated corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-cyan-400 transition-all duration-500 group-hover:w-16 group-hover:h-16"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-cyan-400 transition-all duration-500 group-hover:w-16 group-hover:h-16"></div>
                    
                    <div className="relative text-center">
                      <div className={`${achievement.color} mb-6 flex justify-center group-hover:scale-125 transition-transform duration-500 drop-shadow-lg`}>
                        {achievement.icon}
                      </div>
                      <div className="text-4xl font-orbitron font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-500 drop-shadow-lg">
                        {achievement.value}
                      </div>
                      <div className="text-gray-200 font-medium">{achievement.label}</div>
                      
                      {/* Enhanced glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in">
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 inline-block">
                <h2 className="text-5xl lg:text-7xl font-orbitron font-bold mb-8">
                  <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                    TECH ARSENAL
                  </span>
                </h2>
                <p className="text-xl text-gray-100 font-light">
                  Mastering the tools that shape tomorrow's digital landscape
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group animate-fade-in hover:scale-105 transition-all duration-700"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-full p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-700 overflow-hidden shadow-2xl hover:shadow-cyan-500/20">
                    
                    {/* Enhanced animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`}></div>
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
                    
                    <div className="relative z-10">
                      {/* Enhanced floating icon */}
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl shadow-black/50`}>
                        {skill.icon}
                      </div>
                      
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-orbitron font-bold text-white group-hover:text-cyan-300 transition-colors duration-500 drop-shadow-lg">
                          {skill.category}
                        </h3>
                        <span className="text-cyan-300 font-mono text-sm bg-cyan-400/20 px-4 py-2 rounded-full border border-cyan-400/30 backdrop-blur-sm">
                          {skill.years} years
                        </span>
                      </div>
                      
                      {/* Enhanced proficiency bar */}
                      <div className="mb-8">
                        <div className="flex justify-between text-sm text-gray-300 mb-2">
                          <span>Proficiency</span>
                          <span>{skill.proficiency}%</span>
                        </div>
                        <div className="h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 shadow-lg`}
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Enhanced technology list */}
                      <div className="space-y-3">
                        {skill.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="group/tech bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 text-gray-100 hover:bg-white/20 hover:text-white transition-all duration-300 border border-white/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{tech}</span>
                              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-60 group-hover/tech:opacity-100 group-hover/tech:animate-pulse shadow-lg"></div>
                            </div>
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

        {/* Enhanced Journey Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 mb-8">
                  <h2 className="text-4xl lg:text-6xl font-orbitron font-bold mb-8">
                    <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                      THE JOURNEY
                    </span>
                  </h2>
                </div>
                
                {/* Enhanced text container */}
                <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <div className="space-y-6 text-gray-100 leading-relaxed">
                    <p className="text-lg">
                      From the quiet streets of <span className="text-cyan-300 font-medium drop-shadow-sm">Khudian Khas, Kasur</span>, 
                      my journey into the digital realm began with pure curiosity and an insatiable hunger for innovation.
                    </p>
                    
                    <p className="text-lg">
                      Each line of code written, each AI model trained, and each 3D scene crafted has been a step towards 
                      mastering the art of <span className="text-green-300 font-medium drop-shadow-sm">digital storytelling</span> through technology.
                    </p>
                    
                    <p className="text-lg">
                      Currently pursuing <span className="text-purple-300 font-medium drop-shadow-sm">Bachelor's in Artificial Intelligence</span> 
                      at IUB, I'm not just studying the future—I'm actively building it.
                    </p>
                  </div>
                </div>

                {/* Enhanced info cards */}
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <button className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 focus:outline-none focus:ring-4 focus:ring-cyan-500/50">
                    <div className="relative">
                      <MapPin className="w-8 h-8 text-cyan-300 mx-auto mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-white font-orbitron font-bold drop-shadow-sm">Location</div>
                      <div className="text-gray-200 text-sm">Pakistan</div>
                    </div>
                  </button>
                  <button className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 focus:outline-none focus:ring-4 focus:ring-purple-500/50">
                    <div className="relative">
                      <GraduationCap className="w-8 h-8 text-purple-300 mx-auto mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-white font-orbitron font-bold drop-shadow-sm">Study</div>
                      <div className="text-gray-200 text-sm">BS AI (2021-2025)</div>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Enhanced mission statement */}
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="relative">
                  <div className="relative p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden shadow-2xl">
                    
                    {/* Enhanced glassmorphism background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-3xl"></div>
                    
                    {/* Animated scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-6xl shadow-2xl shadow-black/50 hover:scale-110 transition-transform duration-500 cursor-pointer">
                        🚀
                      </div>
                      
                      <h3 className="text-3xl font-orbitron font-bold text-white mb-6 drop-shadow-lg">Mission Statement</h3>
                      
                      <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                        <p className="text-gray-100 leading-relaxed italic text-lg">
                          "To bridge the gap between human creativity and artificial intelligence, 
                          crafting digital experiences that don't just function—they inspire, 
                          educate, and push the boundaries of what's possible."
                        </p>
                      </div>
                      
                      <div className="mt-8 h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <h3 className="text-4xl font-orbitron font-bold text-white mb-6">Ready to Collaborate?</h3>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Let's bring your vision to life with cutting-edge technology and creative innovation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  onClick={() => navigate('/projects')}
                >
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                  onClick={() => navigate('/contact')}
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EnhancedAbout;
