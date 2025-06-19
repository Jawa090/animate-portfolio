import React from 'react';
import { Navbar } from '../components/Navbar';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star, Trophy } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      title: 'Bachelor of Science in Artificial Intelligence',
      institution: 'The Islamia University of Bahawalpur (IUB)',
      period: '2021 - 2025',
      location: 'Bahawalpur, Pakistan',
      description: 'Pursuing comprehensive education in AI, machine learning, and software development. Focusing on cutting-edge technologies and practical applications.',
      subjects: ['Software Engineering', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing', 'Web Development'],
      icon: '🎓',
      color: 'from-purple-400 to-pink-500',
      status: 'Current',
      gpa: '3.5/4.0',
      marks: null,
      type: 'bachelor'
    },
    {
      title: 'Intermediate in Computer Science',
      institution: 'KIPS College',
      period: '2019 - 2021',
      location: 'Kasur, Pakistan',
      description: 'Completed intermediate studies with distinction, building a strong foundation in computer science and mathematics.',
      subjects: ['Computer Science', 'Physics', 'Mathematics', 'Programming Fundamentals'],
      icon: '💻',
      color: 'from-blue-400 to-cyan-500',
      status: 'Completed',
      gpa: null,
      marks: '892/1100',
      type: 'intermediate'
    },
    {
      title: 'Matriculation (Science)',
      institution: 'Sadiq Memorial High School',
      period: '2017 - 2019',
      location: 'Khudian Khas, Kasur',
      description: 'Completed matriculation with outstanding academic performance, laying the groundwork for future technological pursuits.',
      subjects: ['Science', 'Mathematics', 'Computer Science', 'English'],
      icon: '📚',
      color: 'from-green-400 to-blue-500',
      status: 'Completed',
      gpa: null,
      marks: '932/1100',
      type: 'matric'
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistently maintained high academic standards throughout educational journey',
      icon: <Award className="w-6 h-6" />,
      stats: '3.5+ GPA',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Technical Projects',
      description: 'Developed multiple AI and web development projects during studies',
      icon: <BookOpen className="w-6 h-6" />,
      stats: '15+ Projects',
      color: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Research Focus',
      description: 'Specialized research in Generative AI and Full Stack Development',
      icon: <GraduationCap className="w-6 h-6" />,
      stats: '2 Research Areas',
      color: 'from-green-400 to-cyan-500'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Removed <EnhancedThreeBackground /> to eliminate the 3D sphere/circle background */}
      
      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-3 glass-card rounded-full px-8 py-4 mb-8 hover-lift">
                <BookOpen className="w-6 h-6 text-purple-400" />
                <span className="text-purple-300 font-medium text-lg">Academic Journey</span>
              </div>
              
              <h1 className="text-7xl lg:text-8xl font-orbitron font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  Education
                </span>
              </h1>
              
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A continuous path of learning, growth, and academic excellence in technology and artificial intelligence
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="glass-card rounded-2xl p-8 text-center group-hover:border-purple-500/50 transition-all duration-500">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                      {achievement.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 font-orbitron">{achievement.stats}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {educationData.map((education, index) => (
                <div
                  key={index}
                  className="relative group animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Line */}
                  {index < educationData.length - 1 && (
                    <div className="absolute left-16 lg:left-1/2 top-32 w-0.5 h-40 bg-gradient-to-b from-purple-500/50 to-transparent transform -translate-x-1/2"></div>
                  )}

                  <div className="glass-card rounded-3xl p-8 lg:p-12 group-hover:border-purple-500/50 transition-all duration-500">
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                      {/* Icon & Status */}
                      <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
                        <div className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${education.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                          {education.icon}
                        </div>
                        
                        <div className="text-center lg:text-left space-y-3">
                          <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                            education.status === 'Current' 
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                              : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                          } shadow-lg`}>
                            {education.status}
                          </span>
                          
                          <div className="glass-card rounded-xl p-4">
                            <div className="text-2xl font-bold text-yellow-400 mb-1">
                              {education.gpa ? education.gpa : education.marks}
                            </div>
                            <div className="text-gray-300 text-sm">
                              {education.gpa ? 'GPA' : 'Marks'}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="lg:col-span-9">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="mb-4 lg:mb-0 flex-1">
                            <h3 className={`text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r ${education.color} bg-clip-text text-transparent`}>
                              {education.title}
                            </h3>
                            
                            <div className="text-2xl font-semibold text-white mb-4">
                              {education.institution}
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-purple-400" />
                                <span className="font-medium text-lg">{education.period}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-green-400" />
                                <span className="text-lg">{education.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                          {education.description}
                        </p>

                        {/* Subjects */}
                        <div>
                          <h4 className="text-xl font-semibold text-purple-400 mb-6 flex items-center gap-3">
                            <Award className="w-6 h-6" />
                            Key Subjects & Areas
                          </h4>
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            {education.subjects.map((subject, subIndex) => (
                              <div
                                key={subIndex}
                                className="glass-card rounded-xl px-4 py-3 text-center border border-white/20 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group/subject"
                              >
                                <span className="text-gray-300 group-hover/subject:text-white transition-colors duration-300 font-medium">
                                  {subject}
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
          </div>
        </section>

        {/* Achievement Highlight */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card rounded-3xl p-12 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <Trophy className="w-16 h-16 text-yellow-400" />
                <h3 className="text-5xl font-bold">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Excellence in Learning
                  </span>
                </h3>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                My educational journey reflects a commitment to academic excellence and continuous growth in technology and innovation
              </p>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-200 shadow-2xl">
                View Academic Credentials
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
