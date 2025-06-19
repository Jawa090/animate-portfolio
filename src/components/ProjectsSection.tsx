import React, { useState } from 'react';
import { Github, ExternalLink, Star, Code, Calendar, Tag } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'FreeTool AI',
      description: 'AI-powered tools for PDFs, images, videos, and summarization',
      longDescription: 'A comprehensive suite of free AI tools designed to simplify daily tasks, offering features like PDF management, image editing, video trimming, and text summarization.',
      image: '/aiassentials.jpg',
      category: 'AI/ML',
      technologies: ['AI', 'Machine Learning', 'Web Tools', 'NLP'],
      github: '#',
      live: 'https://freetoolai.com/',
      featured: true,
      stats: { stars: 150, forks: 40 },
      date: '2024-07-01',
      status: 'Active',
      color: 'from-purple-500 to-pink-500',
      icon: '🧠'
    },
    {
      title: 'Paradise Estimating',
      description: 'Online platform providing estimating services',
      longDescription: 'A professional online platform dedicated to providing accurate and efficient estimating services for various industries.',
      image: '/api/placeholder/600/400',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'Database'],
      github: '#',
      live: 'https://paradiseestimating.com/',
      featured: false,
      stats: { stars: 75, forks: 15 },
      date: '2023-09-10',
      status: 'Completed',
      color: 'from-blue-500 to-cyan-500',
      icon: '📈'
    },
    {
      title: 'Estimating Hub',
      description: 'A centralized hub for estimating solutions and resources',
      longDescription: 'A comprehensive online hub offering tools, resources, and expert insights for various estimating needs across different sectors.',
      image: '/api/placeholder/600/400',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      live: 'http://estimatinghub.com/',
      featured: false,
      stats: { stars: 60, forks: 10 },
      date: '2023-06-20',
      status: 'Completed',
      color: 'from-green-500 to-emerald-500',
      icon: '📊'
    },
    {
      title: 'BitWords Inc. - AI/ML Solutions',
      description: 'Innovative AI and Machine Learning solutions for digital transformation',
      longDescription: 'Developing cutting-edge AI and Machine Learning applications, including predictive analytics, intelligent automation, and data-driven insights for businesses.',
      image: '/languagemodal.jpg',
      category: 'AI/ML',
      technologies: ['AI', 'Machine Learning', 'Blockchain', 'IoT', 'Python'],
      github: '#',
      live: 'https://bitwords.com/services/digital-transformation/',
      featured: true,
      stats: { stars: 180, forks: 55 },
      date: '2024-05-15',
      status: 'Active',
      color: 'from-red-500 to-orange-500',
      icon: '🤖'
    },
    {
      title: 'BitWords Inc. - E-commerce Platform',
      description: 'Robust e-commerce platforms and B2B/B2C portal development',
      longDescription: 'Building scalable and secure e-commerce solutions, specializing in Magento development and creating tailored B2B and B2C online portals for businesses.',
      image: '/api/placeholder/600/400',
      category: 'E-commerce',
      technologies: ['E-commerce', 'Magento', 'Web Development', 'UI/UX'],
      github: '#',
      live: 'https://bitwords.com/services/ecommerce/',
      featured: true,
      stats: { stars: 120, forks: 30 },
      date: '2024-02-01',
      status: 'Completed',
      color: 'from-yellow-500 to-orange-500',
      icon: '🛒'
    },
    {
      title: 'BitWords Inc. - Custom Chatbot',
      description: 'Developing intelligent and responsive custom chatbot solutions',
      longDescription: 'Expertise in creating AI-powered chatbots for enhanced customer service, lead generation, and automated business processes, tailored to specific client needs.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['Chatbot', 'NLP', 'AI', 'Node.js'],
      github: '#',
      live: 'https://bitwords.com/',
      featured: false,
      stats: { stars: 95, forks: 25 },
      date: '2023-10-01',
      status: 'Completed',
      color: 'from-purple-500 to-blue-500',
      icon: '💬'
    },
    {
      title: 'Skimming.ai',
      description: 'AI-powered document summarization and content extraction',
      longDescription: 'An advanced AI platform that efficiently skims and summarizes large documents, extracting key information and providing concise overviews for quick understanding.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['AI', 'NLP', 'Document Processing', 'Deep Learning'],
      github: '#',
      live: 'https://www.skimming.ai/',
      featured: true,
      stats: { stars: 200, forks: 60 },
      date: '2024-04-20',
      status: 'Active',
      color: 'from-teal-500 to-green-500',
      icon: '📄'
    },
    {
      title: 'Modern MERN E-commerce',
      description: 'Full-stack e-commerce application built with MongoDB, Express, React, Node.js',
      longDescription: 'A scalable and interactive e-commerce platform featuring product management, user authentication, shopping cart functionality, and secure payment integration, all developed using the MERN stack.',
      image: '/mernstackcode.jpg',
      category: 'Full Stack',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Stripe'],
      github: '#',
      live: '#',
      featured: true,
      stats: { stars: 160, forks: 45 },
      date: '2023-11-01',
      status: 'Completed',
      color: 'from-orange-500 to-red-500',
      icon: '🛍️'
    },
    {
      title: 'AI-Powered Customer Support Chatbot',
      description: 'An intelligent chatbot for automated customer support and query resolution',
      longDescription: 'Designed to provide instant and accurate responses to customer inquiries, improving support efficiency and user satisfaction through natural language understanding.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['AI', 'NLP', 'Dialogflow', 'Python', 'React'],
      github: '#',
      live: '#',
      featured: false,
      stats: { stars: 110, forks: 28 },
      date: '2024-01-25',
      status: 'In Progress',
      color: 'from-indigo-500 to-purple-500',
      icon: '🗣️'
    }
  ];

  const categories = ['All', 'AI/ML', 'Full Stack', 'Web Development', 'E-commerce'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-32 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-8">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-orbitron font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions showcasing the intersection of creativity and cutting-edge technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="glass-card rounded-2xl p-2">
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeFilter === category
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

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden group-hover:border-purple-500/50 transition-all duration-500 h-full">
                {/* Project Image/Icon */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
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
                    <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <a 
                        href={project.github}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.live}
                        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
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

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-semibold text-purple-400">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white/5 backdrop-blur-sm text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-white/5 text-gray-400 px-3 py-1 rounded-full text-sm">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 font-medium border border-white/10 hover:border-white/20"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
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

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next innovative project and bring your ideas to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-200">
                Start a Project
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200 border border-white/20">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProjectsSection };
