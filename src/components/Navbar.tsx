
import React, { useState, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Education', path: '/education' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certificates', path: '/certifications' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/home" 
            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg rounded-full group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
              <Bot className="relative w-10 h-10 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300" />
            </div>
            <span className="text-2xl font-orbitron font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-wider group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-300">
              Jawad Abbas
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group ${
                  location.pathname === item.path
                    ? 'text-white bg-gradient-to-r from-blue-600/90 to-purple-600/90 shadow-lg shadow-blue-500/25 border border-blue-400/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-md border border-transparent hover:border-white/10'
                }`}
              >
                {location.pathname === item.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}>
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg border border-blue-400/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-md border border-transparent hover:border-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
