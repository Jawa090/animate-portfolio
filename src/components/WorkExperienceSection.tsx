import React from 'react';
import { Calendar, MapPin, Award, Briefcase, ExternalLink, Star, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorkExperienceSection = () => {
  const navigate = useNavigate();
  const workExperience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Bitwords.Inc',
      period: '2025 - Present',
      location: 'Lahore',
      type: 'Full-time',
      description: 'Leading development of enterprise-level web applications using modern React and Node.js stack. Implemented AI-powered features and optimized performance for 1M+ users.',
      achievements: [
        'Increased application performance by 40% through code optimization',
        'Led a team of 5 developers on critical projects',
        'Implemented microservices architecture reducing deployment time by 60%',
        'Mentored junior developers and established coding standards'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker'],
      icon: '💼',
      color: 'from-blue-400 to-cyan-500',
      status: 'Current',
      companyLogo: '🏢',
      website: 'https://bitwords.com/'
    },
    {
      title: 'AI/ML Developer Intern',
      company: 'Connect Solution',
      period: '2022 - 2023',
      location: 'Hybrid',
      type: 'Contract',
      description: 'Developed machine learning models and AI solutions for various client projects. Specialized in computer vision and natural language processing applications.',
      achievements: [
        'Built CV models with 95% accuracy for medical imaging',
        'Developed chatbot system handling 1000+ daily interactions',
        'Reduced model training time by 50% through optimization',
        'Published research paper on deep learning techniques'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
      icon: '🤖',
      color: 'from-purple-400 to-pink-500',
      status: 'Completed',
      companyLogo: '🔬',
      website: 'https://connect-sol.com/'
    },
    {
      title: 'Full Stack Web Developer',
      company: 'E Khata erp',
      period: '2024 - 2025',
      location: 'On-site',
      type: 'Full-time',
      description: 'Developed responsive web applications and mobile-first designs. Collaborated with UX/UI team to create engaging user experiences.',
      achievements: [
        'Improved user engagement by 35% through UX enhancements',
        'Implemented progressive web app features',
        'Reduced page load times by 45%',
        'Established component library used across multiple projects'
      ],
      technologies: ['React', 'React.js', 'Tailwind CSS', 'JavaScript', 'Firebase'],
      icon: '💻',
      color: 'from-green-400 to-emerald-500',
      status: 'Completed',
      companyLogo: '🚀',
      website: 'https://www.ekhataerp.com/'
    }
  ];

  const stats = [
    {
      number: '3+',
      label: 'Years Experience',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '50+',
      label: 'Projects Delivered',
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '10M+',
      label: 'Users Impacted',
      icon: <Star className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '15+',
      label: 'Technologies',
      icon: <Building className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="experience" className="py-32 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-8 py-4 mb-8 hover-lift">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <span className="text-blue-300 font-medium text-lg">Professional Journey</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-orbitron font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Experience
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A proven track record of delivering exceptional results across diverse technology projects and innovative solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card rounded-2xl p-8 text-center group-hover:border-blue-500/50 transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2 font-orbitron">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {workExperience.map((experience, index) => (
            <div
              key={index}
              className="relative group animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline Line */}
              {index < workExperience.length - 1 && (
                <div className="absolute left-16 lg:left-1/2 top-32 w-0.5 h-40 bg-gradient-to-b from-blue-500/50 to-transparent transform -translate-x-1/2"></div>
              )}

              <div className="glass-card rounded-3xl p-8 lg:p-12 group-hover:border-blue-500/50 transition-all duration-500">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Company Info & Status */}
                  <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${experience.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                      {experience.icon}
                    </div>
                    
                    <div className="text-center lg:text-left space-y-3">
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                        experience.status === 'Current' 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                          : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      } shadow-lg`}>
                        {experience.status}
                      </span>
                      
                      <div className="glass-card rounded-xl p-4">
                        <div className="text-2xl mb-2">{experience.companyLogo}</div>
                        <div className="text-blue-400 font-semibold">{experience.type}</div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="lg:col-span-9">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="mb-4 lg:mb-0 flex-1">
                        <h3 className={`text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                          {experience.title}
                        </h3>
                        
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-2xl font-semibold text-white">
                            {experience.company}
                          </div>
                          <a
                            href={experience.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-blue-400" />
                            <span className="font-medium text-lg">{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-green-400" />
                            <span className="text-lg">{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {experience.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
                        <Award className="w-6 h-6" />
                        Key Achievements
                      </h4>
                      <div className="grid gap-4">
                        {experience.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start gap-4 glass-card rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                            <span className="text-gray-300 leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-semibold text-purple-400 mb-6 flex items-center gap-3">
                        <Star className="w-6 h-6" />
                        Technologies Used
                      </h4>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {experience.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="glass-card rounded-xl px-4 py-3 text-center border border-white/20 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group/tech"
                          >
                            <span className="text-gray-300 group-hover/tech:text-white transition-colors duration-300 font-medium">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Highlight */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="glass-card rounded-3xl p-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Briefcase className="w-16 h-16 text-blue-400" />
              <h3 className="text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ready for New Challenges
                </span>
              </h3>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about tackling complex problems and delivering innovative solutions that make a real impact
            </p>
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-200 shadow-2xl"
              onClick={() => navigate('/contact')}
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WorkExperienceSection };
