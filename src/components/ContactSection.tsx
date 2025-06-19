import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_qsfu4lq', // Service ID
        'template_w2nop6r', // Template ID
        {
          form_name: form.name,
          to_name: 'Jawad',
          form_email: form.email,
          to_email: 'jawadabbas680@gmail.com',
          subject: form.subject,
          message: form.message,
        },
        'Zmtb0W880pIUQauz9' // User ID
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you for your message. We will get back to you soon.');
          setForm({ name: '', email: '', message: '', subject: '' });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('An error occurred. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project, an idea, or just want to say hello? Let's collaborate and bring your vision to life with cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center mb-4">
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">💻</div>
                        <div className="grid grid-cols-4 gap-1 mb-2">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-cyan-400 rounded-sm opacity-60"></div>
                          ))}
                        </div>
                        <div className="text-sm font-mono">Ready to Code</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { name: 'LinkedIn', color: 'bg-blue-600', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/-alijawad/' },
                  { name: 'GitHub', color: 'bg-gray-700', icon: <Github className="w-5 h-5" />, url: 'https://github.com/Jawa090' },
                  { name: 'Instagram', color: 'bg-pink-600', icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/_.alijawad/' },
                  { name: 'Facebook', color: 'bg-blue-700', icon: <Facebook className="w-5 h-5" />, url: 'https://www.facebook.com/profile.php?id=100012327160372' }
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} hover:scale-110 transition-transform duration-200 w-12 h-12 rounded-lg flex items-center justify-center text-white`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter the subject of your message"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactSection };
