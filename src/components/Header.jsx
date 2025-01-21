import React from 'react';
import { Github, Linkedin, Mail, Twitter, MessageCircleCode } from 'lucide-react';
import profile from '../assets/profile.jpeg'

const Header = () => {
  return (
    <header id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-red-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-red-950"></div>
      <div className="relative container mx-auto px-4 py-32 flex flex-col justify-center min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="lg:w-2/3">
            <div className="border-l-4 border-red-600 pl-6">
              <h1 className="text-7xl font-bold mb-4 uppercase tracking-tighter text-white">
                <span className="text-red-600">&lt;</span>
                Kaz Tech
                <span className="text-red-600">/&gt;</span>
              </h1>
              <h2 className="text-3xl text-red-500 mb-6 font-mono">Full Stack Developer</h2>
            </div>
            <p className="text-xl mb-8 max-w-2xl font-mono opacity-80 text-white">
              $ Building robust solutions with cutting-edge technology_
            </p>
            <div className="flex space-x-6 text-white">
            <a 
  href="https://github.com/kazutech1" 
  className="bg-red-900/30 p-3 rounded-lg hover:bg-red-800 transition-colors"
  target="_blank" 
  rel="noopener noreferrer"
>
  <Github size={24} />
</a>
              <a href="https://x.com/Kaztech0?t=AgxXurA4HiTnJ54cFzf3Aw&s=09" className="bg-red-900/30 p-3 rounded-lg hover:bg-red-800 transition-colors">
                <Twitter size={24} />
              </a>
              <a 
  href="mailto:kaztech069@gmail.com" 
  className="bg-red-900/30 p-3 rounded-lg hover:bg-red-800 transition-colors"
>
  <Mail size={24} />
</a>

              <a href="https://wa.me/2348068539935" className="bg-red-900/30 p-3 rounded-lg hover:bg-red-800 transition-colors">
                <MessageCircleCode size={24} />
               
              </a>
            </div>
          </div>

          {/* Right Section: Profile Picture */}
          <div className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center lg:justify-end">
  <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg border-4 border-red-600">
    <img 
      src={profile} 
      alt="Profile" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>
      </div>
    </header>
  );
};

export default Header;
