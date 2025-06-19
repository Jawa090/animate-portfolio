
import React from 'react';
import { Navbar } from '../components/Navbar';
import { ThreeBackground } from '../components/ThreeBackground';
import { Code, Cpu, Palette, MapPin, GraduationCap, Target, Zap, Brain, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'GSAP'],
      color: 'from-cyber-cyan via-blue-500 to-cyber-blue',
      years: '3+'
    },
    {
      category: 'Backend & AI',
      icon: <Brain className="w-8 h-8" />,
      technologies: ['Node.js', 'Python', 'TensorFlow', 'OpenAI', 'MongoDB', 'PostgreSQL'],
      color: 'from-cyber-purple via-pink-500 to-cyber-pink',
      years: '2+'
    },
    {
      category: 'Creative Tech',
      icon: <Palette className="w-8 h-8" />,
      technologies: ['Blender', 'Cinema 4D', 'After Effects', 'WebGL', 'Shaders', 'Motion Design'],
      color: 'from-cyber-neon via-emerald-500 to-green-400',
      years: '4+'
    }
  ];

  const achievements = [
    { icon: <Rocket className="w-6 h-6" />, label: 'Projects Completed', value: '25+' },
    { icon: <Zap className="w-6 h-6" />, label: 'AI Models Trained', value: '15+' },
    { icon: <GraduationCap className="w-6 h-6" />, label: 'Certifications', value: '8+' },
    { icon: <Target className="w-6 h-6" />, label: 'Happy Clients', value: '50+' }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-poppins">
      <ThreeBackground />
      <div className="relative z-10">
        <Navbar />
        
        {/* Cinematic Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="mb-8">
                <h1 className="text-7xl lg:text-8xl font-orbitron font-black mb-6 tracking-wider">
                  <span className="bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple bg-clip-text text-transparent animate-glow-pulse">
                    JAWAD ABBAS
                  </span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mb-8 animate-glow-pulse"></div>
              </div>
              
              <p className="text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                <span className="text-cyber-cyan font-medium">Creative Developer</span> • 
                <span className="text-cyber-purple font-medium"> AI Engineer</span> • 
                <span className="text-cyber-neon font-medium"> 3D Artist</span>
              </p>
              
              <p className="text-lg text-gray-400 max-w-4xl mx-auto mt-8 leading-relaxed">
                Crafting the future of digital experiences through the intersection of 
                <span className="text-cyber-cyan"> artificial intelligence</span>, 
                <span className="text-cyber-purple"> immersive 3D graphics</span>, and 
                <span className="text-cyber-neon"> cutting-edge web technologies</span>
              </p>
            </div>
          </div>
        </section>

        {/* Holographic Achievement Stats */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group animate-fade-in hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-cyber-cyan/30 hover:border-cyber-cyan/60 transition-all duration-500 animate-hologram-glitch">
                    {/* Holographic corner effects */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyber-cyan"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyber-cyan"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyber-cyan"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyber-cyan"></div>
                    
                    <div className="text-center">
                      <div className="text-cyber-cyan mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <div className="text-4xl font-orbitron font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors duration-300">
                        {achievement.value}
                      </div>
                      <div className="text-gray-400 font-medium">{achievement.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Skills Matrix */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-orbitron font-bold mb-8">
                <span className="bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                  TECH ARSENAL
                </span>
              </h2>
              <p className="text-xl text-gray-300 font-light">
                Mastering the tools that shape tomorrow's digital landscape
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group animate-fade-in hover:scale-105 transition-all duration-700"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-2xl border border-gray-800/50 hover:border-cyber-cyan/50 transition-all duration-700 overflow-hidden">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-10 transition-opacity duration-700`}></div>
                    
                    {/* Floating icon */}
                    <div className="relative z-10">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-particle-float shadow-2xl`}>
                        {skill.icon}
                      </div>
                      
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-orbitron font-bold text-white group-hover:text-cyber-cyan transition-colors duration-300">
                          {skill.category}
                        </h3>
                        <span className="text-cyber-cyan font-mono text-sm bg-cyber-cyan/10 px-3 py-1 rounded-full border border-cyber-cyan/30">
                          {skill.years} years
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        {skill.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="group/tech bg-black/30 backdrop-blur-sm rounded-xl px-4 py-3 text-gray-300 hover:bg-black/50 hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-cyber-cyan/50 hover:shadow-lg hover:shadow-cyber-cyan/20"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{tech}</span>
                              <div className="w-2 h-2 rounded-full bg-cyber-cyan opacity-60 group-hover/tech:opacity-100 group-hover/tech:animate-pulse"></div>
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

        {/* Cinematic Journey Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-8">
                  <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                    THE JOURNEY
                  </span>
                </h2>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    From the quiet streets of <span className="text-cyber-cyan font-medium">Khudian Khas, Kasur</span>, 
                    my journey into the digital realm began with pure curiosity and an insatiable hunger for innovation.
                  </p>
                  
                  <p className="text-lg">
                    Each line of code written, each AI model trained, and each 3D scene crafted has been a step towards 
                    mastering the art of <span className="text-cyber-neon font-medium">digital storytelling</span> through technology.
                  </p>
                  
                  <p className="text-lg">
                    Currently pursuing <span className="text-cyber-purple font-medium">Bachelor's in Artificial Intelligence</span> 
                    at IUB, I'm not just studying the future—I'm actively building it.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-cyber-cyan/30">
                    <MapPin className="w-8 h-8 text-cyber-cyan mx-auto mb-3" />
                    <div className="text-white font-orbitron font-bold">Location</div>
                    <div className="text-gray-400 text-sm">Pakistan</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-cyber-purple/30">
                    <GraduationCap className="w-8 h-8 text-cyber-purple mx-auto mb-3" />
                    <div className="text-white font-orbitron font-bold">Study</div>
                    <div className="text-gray-400 text-sm">BS AI (2021-2025)</div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="relative">
                  {/* Holographic display frame */}
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-black/60 to-transparent backdrop-blur-2xl border border-cyber-cyan/50 overflow-hidden animate-glow-pulse">
                    {/* Scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent animate-pulse"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyber-cyan via-cyber-blue to-cyber-purple flex items-center justify-center text-4xl animate-particle-float">
                        🚀
                      </div>
                      
                      <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Mission Statement</h3>
                      
                      <p className="text-gray-300 leading-relaxed italic">
                        "To bridge the gap between human creativity and artificial intelligence, 
                        crafting digital experiences that don't just function—they inspire, 
                        educate, and push the boundaries of what's possible."
                      </p>
                      
                      <div className="mt-6 h-0.5 w-full bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
