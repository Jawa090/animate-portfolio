import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Clock, CheckCircle, Filter } from 'lucide-react';

const CertificationsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const certifications = [
    {
      title: 'AI Essentials',
      issuer: 'AI Institute',
      date: '2024',
      hours: '10 hours',
      badge: '',
      description: 'Certificate in AI Essentials, covering foundational concepts in artificial intelligence.',
      skills: ['AI', 'Machine Learning', 'Foundations'],
      color: 'from-purple-400 to-pink-500',
      image: '/aiassentials.jpg',
      level: 'Foundation',
      category: 'Artificial Intelligence',
      verified: true
    },
    {
      title: 'AWS Cloud Certificate',
      issuer: 'Amazon Web Services',
      date: '2024',
      hours: '15 hours',
      badge: '',
      description: 'AWS Cloud certification demonstrating proficiency in cloud technologies.',
      skills: ['AWS', 'Cloud', 'Infrastructure'],
      color: 'from-orange-400 to-yellow-500',
      image: '/aws.jpg',
      level: 'Foundation',
      category: 'Cloud Computing',
      verified: true
    },
    {
      title: 'DevOps Certification',
      issuer: 'DevOps Academy',
      date: '2024',
      hours: '12 hours',
      badge: '',
      description: 'Certification in DevOps practices and tools.',
      skills: ['DevOps', 'CI/CD', 'Automation'],
      color: 'from-blue-400 to-cyan-500',
      image: '/devops.jpg',
      level: 'Intermediate',
      category: 'Cloud Computing',
      verified: true
    },
    {
      title: 'Large Language Model Certificate',
      issuer: 'Language Modal Institute',
      date: '2024',
      hours: '8 hours',
      badge: '',
      description: 'Certificate in Large Language Models and their applications.',
      skills: ['LLM', 'AI', 'NLP'],
      color: 'from-purple-400 to-blue-500',
      image: '/languagemodal.jpg',
      level: 'Advanced',
      category: 'Artificial Intelligence',
      verified: true
    },
    {
      title: 'MERN Stack Certificate',
      issuer: 'MERN Academy',
      date: '2024',
      hours: '20 hours',
      badge: '',
      description: 'Certification in MERN stack web development.',
      skills: ['MongoDB', 'Express', 'React', 'Node.js'],
      color: 'from-green-400 to-blue-500',
      image: '/mernstack.jpg',
      level: 'Intermediate',
      category: 'Web Development',
      verified: true
    },
    {
      title: 'MERN Stack Code Certificate',
      issuer: 'MERN Academy',
      date: '2024',
      hours: '18 hours',
      badge: '',
      description: 'Certificate for MERN stack code proficiency.',
      skills: ['Full Stack', 'JavaScript', 'React', 'Node.js'],
      color: 'from-blue-400 to-cyan-500',
      image: '/mernstackcode.jpg',
      level: 'Intermediate',
      category: 'Web Development',
      verified: true
    },
    {
      title: 'MongoDB Certificate',
      issuer: 'MongoDB University',
      date: '2024',
      hours: '10 hours',
      badge: '',
      description: 'Certification in MongoDB database management.',
      skills: ['MongoDB', 'Database', 'NoSQL'],
      color: 'from-green-500 to-emerald-500',
      image: '/mongodb.jpg',
      level: 'Foundation',
      category: 'Web Development',
      verified: true
    },
  ];

  const categories = ['All', 'Cloud Computing', 'Web Development', 'Artificial Intelligence'];
  
  const filteredCertifications = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  const stats = [
    {
      number: `${certifications.length}+`,
      label: 'Certifications',
      icon: <Award className="w-8 h-8" />,
      color: 'from-purple-500 to-blue-500'
    },
    {
      number: '58+',
      label: 'Learning Hours',
      icon: <Clock className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '100%',
      label: 'Verified',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="certificates" className="py-32 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-8">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Professional Growth</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-orbitron font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Certifications
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development in cutting-edge technologies and industry best practices
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card rounded-2xl p-8 text-center group-hover:border-purple-500/50 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2 font-orbitron">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card rounded-2xl p-2">
            <div className="flex items-center gap-3 mb-4 px-4 py-2">
              <Filter className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Filter by Category</span>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCertifications.map((cert, index) => (
            <div
              key={index}
              className="animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card rounded-2xl p-8 group-hover:border-purple-500/50 transition-all duration-500 h-full">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    {cert.image && (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="object-cover w-20 h-20 rounded-2xl border-2 border-white shadow-lg"
                      />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        cert.level === 'Foundation' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                        cert.level === 'Intermediate' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' :
                        'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      }`}>
                        {cert.level}
                      </span>
                      <span className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-white/20">
                        {cert.category}
                      </span>
                      {cert.verified && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 rounded-full text-sm font-bold text-white flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h3>
                    
                    <div className="text-purple-400 font-semibold text-lg">
                      {cert.issuer}
                    </div>
                  </div>
                </div>
                
                {/* Meta Information */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-yellow-400" />
                    <div>
                      <span className="text-gray-400">Issued:</span>
                      <div className="font-semibold text-white">{cert.date}</div>
                    </div>
                  </div>
                  {cert.hours && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-green-400" />
                      <div>
                        <span className="text-gray-400">Duration:</span>
                        <div className="font-semibold text-white">{cert.hours}</div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {cert.description}
                </p>
                
                {/* Skills */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white/5 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-lg text-sm font-medium border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  {cert.image && (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-200 flex-1"
                    >
                      <Award className="w-4 h-4" />
                      View Certificate
                    </a>
                  )}
                  {cert.badge && (
                    <a
                      href={cert.badge}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200 border border-white/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlight */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="glass-card rounded-3xl p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Award className="w-12 h-12 text-yellow-400" />
              <h3 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Continuous Learning
                </span>
              </h3>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Committed to staying at the forefront of technology through ongoing professional development and industry certifications
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-200">
              View All Credentials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CertificationsSection };
