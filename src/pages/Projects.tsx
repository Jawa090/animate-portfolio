import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { EnhancedThreeBackground } from '../components/EnhancedThreeBackground';
import { Github, ExternalLink, Calendar, Users, Star, Code, Filter, Zap, Layers } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredProjects = [
    {
      id: 1,
      title: 'FreeTool AI',
      description: 'AI-powered tools for PDFs, images, videos, and summarization',
      longDescription: 'A comprehensive suite of free AI tools designed to simplify daily tasks, offering features like PDF management, image editing, video trimming, and text summarization.',
      category: 'AI/ML',
      technologies: ['AI', 'Machine Learning', 'Web Tools', 'NLP'],
      github: '#',
      live: 'https://freetoolai.com/',
      featured: true,
      stats: { stars: 150, forks: 40, contributors: 10 },
      date: '2024-07-01',
      status: 'Active',
      color: 'from-purple-500 via-pink-500 to-red-500',
      icon: '🧠'
    },
    {
      id: 2,
      title: 'Paradise Estimating',
      description: 'Online platform providing estimating services',
      longDescription: 'A professional online platform dedicated to providing accurate and efficient estimating services for various industries.',
      image: '/api/placeholder/600/400',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'Database', 'Estimating'],
      github: '#',
      live: 'https://paradiseestimating.com/',
      featured: false,
      stats: { stars: 75, forks: 15, contributors: 3 },
      date: '2023-09-10',
      status: 'Completed',
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      icon: '📈'
    },
    {
      id: 3,
      title: 'Estimating Hub',
      description: 'A centralized hub for estimating solutions and resources',
      longDescription: 'A comprehensive online hub offering tools, resources, and expert insights for various estimating needs across different sectors.',
      image: '/api/placeholder/600/400',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
      github: '#',
      live: 'http://estimatinghub.com/',
      featured: false,
      stats: { stars: 60, forks: 10, contributors: 2 },
      date: '2023-06-20',
      status: 'Completed',
      color: 'from-green-500 via-emerald-500 to-cyan-500',
      icon: '📊'
    },
    {
      id: 4,
      title: 'BitWords Inc. - AI/ML Solutions',
      description: 'Innovative AI and Machine Learning solutions for digital transformation',
      longDescription: 'Developing cutting-edge AI and Machine Learning applications, including predictive analytics, intelligent automation, and data-driven insights for businesses.',
      category: 'AI/ML',
      technologies: ['AI', 'Machine Learning', 'Blockchain', 'IoT', 'Python', 'Data Science'],
      github: '#',
      live: 'https://bitwords.com/services/digital-transformation/',
      featured: true,
      stats: { stars: 180, forks: 55, contributors: 15 },
      date: '2024-05-15',
      status: 'Active',
      color: 'from-red-500 via-orange-500 to-pink-500',
      icon: '🤖'
    },
    {
      id: 5,
      title: 'BitWords Inc. - E-commerce Platform',
      description: 'Robust e-commerce platforms and B2B/B2C portal development',
      longDescription: 'Building scalable and secure e-commerce solutions, specializing in Magento development and creating tailored B2B and B2C online portals for businesses.',
      image: '/api/placeholder/600/400',
      category: 'E-commerce',
      technologies: ['E-commerce', 'Magento', 'Web Development', 'UI/UX', 'Payment Gateways'],
      github: '#',
      live: 'https://bitwords.com/services/ecommerce/',
      featured: true,
      stats: { stars: 120, forks: 30, contributors: 7 },
      date: '2024-02-01',
      status: 'Completed',
      color: 'from-orange-500 via-yellow-500 to-amber-500',
      icon: '🛒'
    },
    {
      id: 6,
      title: 'BitWords Inc. - Custom Chatbot',
      description: 'Developing intelligent and responsive custom chatbot solutions',
      longDescription: 'Expertise in creating AI-powered chatbots for enhanced customer service, lead generation, and automated business processes, tailored to specific client needs.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['Chatbot', 'NLP', 'AI', 'Node.js', 'Dialogflow', 'AWS Lambda'],
      github: '#',
      live: 'https://bitwords.com/',
      featured: false,
      stats: { stars: 95, forks: 25, contributors: 4 },
      date: '2023-10-01',
      status: 'Completed',
      color: 'from-purple-500 via-blue-500 to-cyan-500',
      icon: '💬'
    },
    {
      id: 7,
      title: 'Skimming.ai',
      description: 'AI-powered document summarization and content extraction',
      longDescription: 'An advanced AI platform that efficiently skims and summarizes large documents, extracting key information and providing concise overviews for quick understanding.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['AI', 'NLP', 'Document Processing', 'Deep Learning', 'Text Analysis'],
      github: '#',
      live: 'https://www.skimming.ai/',
      featured: true,
      stats: { stars: 200, forks: 60, contributors: 18 },
      date: '2024-04-20',
      status: 'Active',
      color: 'from-teal-500 via-green-500 to-emerald-500',
      icon: '📄'
    },
    {
      id: 8,
      title: 'Modern MERN E-commerce',
      description: 'Full-stack e-commerce application built with MongoDB, Express, React, Node.js',
      longDescription: 'A scalable and interactive e-commerce platform featuring product management, user authentication, shopping cart functionality, and secure payment integration, all developed using the MERN stack.',
      category: 'Full Stack',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Stripe API'],
      github: '#',
      live: '#',
      featured: true,
      stats: { stars: 160, forks: 45, contributors: 6 },
      date: '2023-11-01',
      status: 'Completed',
      color: 'from-orange-500 via-red-500 to-pink-500',
      icon: '🛍️'
    },
    {
      id: 9,
      title: 'AI-Powered Customer Support Chatbot',
      description: 'An intelligent chatbot for automated customer support and query resolution',
      longDescription: 'Designed to provide instant and accurate responses to customer inquiries, improving support efficiency and user satisfaction through natural language understanding.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['AI', 'NLP', 'Dialogflow', 'Python', 'React', 'Machine Learning'],
      github: '#',
      live: '#',
      featured: false,
      stats: { stars: 110, forks: 28, contributors: 5 },
      date: '2024-01-25',
      status: 'In Progress',
      color: 'from-indigo-500 via-purple-500 to-fuchsia-500',
      icon: '🗣️'
    }
  ];

  const categories = ['All', 'AI/ML', 'Full Stack', 'Web Development', 'E-commerce'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === selectedCategory);

  const stats = [
    {
      number: `${featuredProjects.length}+`,
      label: 'Projects',
      icon: <Code className="w-8 h-8" />,
      color: 'from-purple-500 to-blue-500'
    },
    {
      number: '50+',
      label: 'GitHub Stars',
      icon: <Star className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '10+',
      label: 'Contributors',
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-cyan-500'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <EnhancedThreeBackground />
      
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
                <Layers className="w-6 h-6 text-blue-400" />
                <span className="text-blue-300 font-medium text-lg">Portfolio Showcase</span>
              </div>
              
              <h1 className="text-7xl lg:text-8xl font-orbitron font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  Projects
                </span>
              </h1>
              
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Innovative solutions showcasing the intersection of creativity and cutting-edge technology
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="glass-card rounded-2xl p-8 text-center group-hover:border-purple-500/50 transition-all duration-300">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-white mb-2 font-orbitron">{stat.number}</div>
                    <div className="text-gray-300 font-medium text-lg">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="glass-card rounded-2xl p-2">
                <div className="flex items-center gap-3 mb-4 px-4 py-2">
                  <Filter className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300 font-medium">Filter by Category</span>
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="glass-card rounded-2xl overflow-hidden group-hover:border-purple-500/50 transition-all duration-500 h-full">
                    {/* Project Header */}
                    <div className="relative h-56 overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-80">
                          {project.icon}
                        </div>
                      </div>
                      
                      {/* Status & Featured Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          project.status === 'Active' ? 'bg-green-500/80 text-white' : 
                          project.status === 'Completed' ? 'bg-blue-500/80 text-white' : 
                          'bg-yellow-500/80 text-black'
                        }`}>
                          {project.status}
                        </span>
                        {project.featured && (
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-xs font-bold text-black flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="glass-card text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-3">
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card text-white p-3 rounded-lg hover:bg-white/30 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <a 
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-lg hover:scale-105 transition-transform"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {new Date(project.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {project.stats.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <Code className="w-4 h-4" />
                            {project.stats.forks}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="glass-card text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="glass-card text-gray-400 px-3 py-1 rounded-full text-sm">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 glass-card text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 font-medium border border-white/10 hover:border-white/20"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card rounded-3xl p-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <Zap className="w-16 h-16 text-purple-400" />
                <h3 className="text-5xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Ready to Build Something Amazing?
                  </span>
                </h3>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate on your next innovative project and bring your ideas to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-200 shadow-2xl">
                  Start a Project
                </button>
                <button className="glass-card text-gray-300 px-10 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 border border-white/20">
                  View All Projects
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
