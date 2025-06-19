import React from 'react';
import { Bot, Heart, Code, Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Education', path: '/education' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Jawa090', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/-alijawad/', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/_.alijawad/', color: 'hover:text-pink-400' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/profile.php?id=100012327160372', color: 'hover:text-blue-500' }
  ];

  const services = [
    'Full Stack Development',
    'AI/ML Solutions',
    '3D Web Applications',
    'UI/UX Design',
    'System Architecture',
    'Technical Consulting'
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-400/30 blur-xl rounded-full"></div>
                <Bot className="relative w-12 h-12 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-orbitron font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Jawad Abbas
                </h3>
                <p className="text-gray-400 text-sm">Creative Developer</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Crafting innovative digital experiences through the perfect blend of artificial intelligence, 
              modern web technologies, and creative design.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>Khudian Khas, Kasur, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@jawadabbas.dev</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+92 XXX XXXXXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
              Services
            </h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group cursor-pointer"
                >
                  <Code className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-blue-400 rounded-full"></div>
              Let's Connect
            </h4>
            
            <p className="text-gray-300 leading-relaxed">
              Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
            </p>
            
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-200 shadow-lg shadow-purple-500/25"
            >
              Start a Project
            </Link>
            
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`w-12 h-12 glass-card rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {currentYear} Jawad Abbas. Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and lots of</span>
              <Code className="w-4 h-4 text-cyan-400" />
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors duration-300">
                Terms of Service
              </button>
              <button className="hover:text-white transition-colors duration-300">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
