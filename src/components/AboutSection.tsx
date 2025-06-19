
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer from Khudian Khas, Kasur, Pakistan, specializing in full-stack development and AI
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">🌐 Full Stack Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Proficient in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and more. 
                I create end-to-end digital solutions that are both efficient and elegant.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">🤖 Artificial Intelligence & Machine Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Expert in Python, TensorFlow, PyTorch, OpenCV, and Scikit-learn. Building intelligent systems that solve real-world problems.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-green-400 mb-4">🎨 Generative AI & Prompt Engineering</h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized in working with advanced language models, image generation tools (DALL·E, Midjourney), 
                and fine-tuning AI outputs for high-impact applications in content creation, development, automation, and personalization.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Background</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold">From:</span> Khudian Khas, Kasur, Pakistan
                </div>
                <div>
                  <span className="font-semibold">Education:</span> BS Artificial Intelligence, IUB
                </div>
                <div>
                  <span className="font-semibold">Specialty:</span> Full Stack + AI Development
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-yellow-400 mb-4">Mission</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Building the future through innovation - creating experiences that are not just functional, but transformative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
