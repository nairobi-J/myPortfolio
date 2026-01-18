"use client"
import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center text-white">
          <div className="animate-float mb-8">
           
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Nusrat Jahan <span className="text-violet-600">Jerin</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            An Undergrad Software Engineering Student of<div className='text-black text-4xl'>Shahjalal University of science and technology</div>  passionate about software development and solving complex problems through code
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="/JerinerCV.pdf" download="JerinerCV.pdf">
  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
    <Download size={20} />
    Download Resume
  </button>
</a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/nairobi-J" className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nairobi-nusrat/" className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:jerinusrat001@gmail.com?subject=Hello, Jerin!&body=" className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
