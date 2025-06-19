import React from 'react';
import { Navbar } from '../components/Navbar';
import { EnhancedThreeBackground } from '../components/EnhancedThreeBackground';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Facebook, Twitter, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      value: 'jawadabbas680@gmail.com',
      description: 'Send me an email anytime!',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone',
      value: '+92 313 6955749',
      description: 'Call me for urgent matters',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Location',
      value: 'Lahore, Pakistan',
      description: 'Pakistan',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialMedia = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'bg-blue-600 hover:bg-blue-700',
      url: 'https://www.linkedin.com/in/-alijawad/'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      color: 'bg-gray-700 hover:bg-gray-800',
      url: 'https://github.com/Jawa090'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      color: 'bg-pink-600 hover:bg-pink-700',
      url: 'https://www.instagram.com/_.alijawad/'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      color: 'bg-blue-700 hover:bg-blue-800',
      url: 'https://www.facebook.com/profile.php?id=100012327160372'
    }
  ];

  const services = [
    'Full Stack Development',
    'AI/ML Solutions',
    'Generative AI Applications',
    'Web Application Development',
    'API Development & Integration',
    'Database Design & Optimization',
    'Cloud Solutions',
    'Technical Consulting'
  ];

  const stats = [
    {
      number: '24h',
      label: 'Response Time',
      icon: <Clock className="w-8 h-8" />,
      color: 'from-purple-500 to-blue-500'
    },
    {
      number: '100%',
      label: 'Satisfaction Rate',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '50+',
      label: 'Projects Delivered',
      icon: <Send className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
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
                <MessageSquare className="w-6 h-6 text-purple-400" />
                <span className="text-purple-300 font-medium text-lg">Get In Touch</span>
              </div>
              
              <h1 className="text-7xl lg:text-8xl font-orbitron font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  Let's Connect
                </span>
              </h1>
              
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? Let's collaborate and create something extraordinary together
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

        {/* Contact Information */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="glass-card rounded-2xl p-8 text-center h-full group-hover:border-purple-500/50 transition-all duration-300">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{info.title}</h3>
                    <p className="text-xl text-purple-400 font-semibold mb-3">{info.value}</p>
                    <p className="text-gray-300">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="glass-card rounded-3xl p-8 lg:p-12 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <MessageSquare className="w-10 h-10 text-purple-400" />
                    <h2 className="text-4xl font-bold text-white">Send Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-medium text-gray-300 mb-3">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 glass-card rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-lg font-medium text-gray-300 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 glass-card rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-lg font-medium text-gray-300 mb-3">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 glass-card rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-lg font-medium text-gray-300 mb-3">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-6 py-4 glass-card rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-200"
                        placeholder="Tell me about your project, ideas, or just say hello..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-5 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-3 shadow-2xl"
                    >
                      <Send className="w-6 h-6" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                
                {/* Social Media */}
                <div className="glass-card rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <span className="text-2xl">🌐</span>
                    </div>
                    Connect on Social Media
                  </h3>
                  <div className="grid grid-cols-4 gap-4">
                    {socialMedia.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} w-16 h-16 rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 shadow-lg`}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="glass-card rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    Services I Offer
                  </h3>
                  <div className="grid gap-4">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="glass-card rounded-xl px-6 py-4 text-gray-300 hover:bg-white/10 transition-colors duration-200 flex items-center gap-4"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                        <span className="text-lg">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="glass-card rounded-3xl p-8 bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    Availability
                  </h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold text-xl">Currently Available for Projects</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I'm actively looking for exciting opportunities to collaborate on innovative projects. 
                    Whether you need a full-stack developer, AI specialist, or technical consultant, 
                    I'm here to help bring your vision to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
