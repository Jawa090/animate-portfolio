
import React from 'react';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      title: 'Bachelor of Science in Artificial Intelligence',
      period: '2021 - 2025',
      institution: 'The Islamia University of Bahawalpur (IUB)',
      location: 'Bahawalpur',
      description: 'Pursuing comprehensive education in AI, machine learning, and software development with focus on cutting-edge technologies.',
      subjects: ['Software Engineering', 'AI/ML', 'Web Development', 'Data Science'],
      icon: '🎓',
      color: 'from-purple-400 to-pink-500',
      status: 'Current',
      gpa: '3.5/4.0'
    },
    {
      title: 'Intermediate in Computer Science',
      period: '2019 - 2021',
      institution: 'KIPS College',
      location: 'Kasur',
      description: 'Completed intermediate studies with distinction, building strong foundation in computer science.',
      subjects: ['Computer Science', 'Physics', 'Mathematics'],
      icon: '📚',
      color: 'from-yellow-400 to-orange-500',
      status: 'Completed',
      Marks: '892/1100'
    },
    {
      title: 'Matriculation (Science)',
      period: '2017 - 2019',
      institution: 'Sadiq Memorial High School',
      location: 'Khudian Khas, Kasur',
      description: 'Completed matriculation with outstanding academic performance in science subjects.',
      subjects: ['Science', 'Mathematics', 'Computer Science'],
      icon: '💻',
      color: 'from-purple-400 to-pink-500',
      status: 'Completed',
      Marks: '932/1100'
    }
  ];

  return (
    <section id="education" className="py-32 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-8">
            <BookOpen className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Academic Journey</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-orbitron font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Education
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey of continuous learning and academic excellence in technology and artificial intelligence
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="group animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                {/* Timeline Line */}
                {index < educationData.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                )}

                <div className="glass-card rounded-3xl p-8 lg:p-12 group-hover:border-purple-500/50 transition-all duration-500">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Icon & Status */}
                    <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${education.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                        {education.icon}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        education.status === 'Current' 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                          : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      }`}>
                        {education.status}
                      </span>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="mb-4 lg:mb-0">
                          <h3 className={`text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r ${education.color} bg-clip-text text-transparent`}>
                            {education.title}
                          </h3>
                          
                          <div className="text-xl font-semibold text-white mb-2">
                            {education.institution}
                          </div>
                          
                          <div className="flex items-center gap-4 text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-yellow-400" />
                              <span className="font-medium">{education.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-green-400" />
                              <span>{education.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* GPA Badge */}
                        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/30">
                          <div className="text-yellow-400 font-bold text-lg">{education.gpa}</div>
                          <div className="text-gray-300 text-sm">GPA</div>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {education.description}
                      </p>

                      {/* Subjects */}
                      <div>
                        <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          Key Subjects
                        </h4>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                          {education.subjects.map((subject, subIndex) => (
                            <div
                              key={subIndex}
                              className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 text-center border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group/subject"
                            >
                              <span className="text-gray-300 group-hover/subject:text-white transition-colors duration-300">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { EducationSection };
