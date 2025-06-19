import React from 'react';
import { Star, Quote, User, Building, Award, Sparkles, ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mujeeb ul Rahman",
      role: "AI Developer",
      company: "Axiom World",
      image: "/api/placeholder/150/150",
      content: "Jawad's expertise in AI and machine learning is exceptional. His innovative solutions and deep understanding of cutting-edge technologies have been invaluable to our projects.",
      rating: 5,
      highlight: "AI Excellence"
    },
    {
      name: "Nabeel",
      role: "DevOps Engineer",
      company: "Netsol",
      image: "/api/placeholder/150/150",
      content: "Working with Jawad on DevOps projects has been a great experience. His technical skills and problem-solving abilities are outstanding, delivering robust and scalable solutions.",
      rating: 5,
      highlight: "DevOps Mastery"
    },
    {
      name: "Ayesha Zahid",
      role: "Graphic Designer",
      company: "Creative Studio",
      image: "/api/placeholder/150/150",
      content: "Jawad's collaborative approach and technical expertise make him an excellent partner for design projects. His understanding of both design and development creates seamless integrations.",
      rating: 5,
      highlight: "Design Collaboration"
    },
    {
      name: "Zain Khalid",
      role: "CEO",
      company: "E Khata",
      image: "/api/placeholder/150/150",
      content: "Jawad's full-stack development skills and business acumen have been crucial for our company's growth. His solutions are not just technically sound but also business-focused.",
      rating: 5,
      highlight: "Business Solutions"
    },
    {
      name: "Umar Ali",
      role: "Python Developer",
      company: "Logistic",
      image: "/api/placeholder/150/150",
      content: "Jawad's Python development skills are top-notch. His clean code, efficient algorithms, and innovative approaches have significantly improved our development processes.",
      rating: 5,
      highlight: "Python Expertise"
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-8 py-4 mb-8">
            <Award className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-300 font-medium text-lg">Client Success Stories</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-orbitron font-black mb-8 tracking-wider">
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
              TESTIMONIALS
            </span>
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Hear from amazing clients who have transformed their businesses with cutting-edge solutions
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { number: "50+", label: "Happy Clients", color: "text-green-400" },
            { number: "98%", label: "Success Rate", color: "text-blue-400" },
            { number: "24/7", label: "Support", color: "text-purple-400" },
            { number: "5.0★", label: "Average Rating", color: "text-yellow-400" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass-card rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                <div className={`text-4xl font-orbitron font-black ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-full glass-card rounded-3xl p-8 hover:border-cyan-400/30 transition-all duration-700 overflow-hidden">
                
                {/* Floating quote icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-cyan-400" />
                </div>
                
                {/* Highlight badge */}
                <div className="absolute top-6 left-6 glass-card rounded-xl px-4 py-2">
                  <span className="text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    {testimonial.highlight}
                  </span>
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-6 mt-12">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-gray-200 leading-relaxed mb-8 text-lg italic">
                  "{testimonial.content}"
                </p>

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full blur-md"></div>
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center border-2 border-white/20">
                      <User className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Building className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-300 text-sm font-medium">{testimonial.company}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute top-4 left-4 text-purple-400 animate-pulse">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="absolute top-4 right-4 text-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <Sparkles className="w-6 h-6" />
              </div>
              
              <h3 className="text-4xl font-orbitron font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Join These Success Stories?
                </span>
              </h3>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Let's create something extraordinary together and make your vision a reality
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-orbitron font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </button>
                
                <button className="group glass-card px-10 py-4 rounded-full font-orbitron font-bold text-lg text-gray-100 hover:text-white transition-all duration-300 hover:scale-105 hover:border-cyan-400/50">
                  <span className="flex items-center gap-3">
                    View More Reviews
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
