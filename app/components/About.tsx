"use client"
import React from 'react';
import { Code, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Im a passionate Software Engineering undergraduate student with a strong interest in 
              software development and web technologies. I love learning new technologies and 
              turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              My journey in programming started with problem solving, and it has 
              evolved into a deep passion for creating innovative applications.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              When Im not studying or coding, you can find me exploring new technologies, 
              participating in coding competitions, or working on personal projects to enhance my skills.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold text-gray-900">Clean Code</h3>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Coffee className="text-green-600" size={32} />
                </div>
                <h3 className="font-semibold text-gray-900">Coffee & Tea Lover</h3>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="text-yellow-600" size={32} />
                </div>
                <h3 className="font-semibold text-gray-900">Problem Solver</h3>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Personal Projects</span>
                    <span className="text-2xl font-bold text-blue-600">20+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Years of Learning</span>
                    <span className="text-2xl font-bold text-blue-600">3+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Courses Completed</span>
                    <span className="text-2xl font-bold text-blue-600">30+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Technologies Learned</span>
                    <span className="text-2xl font-bold text-blue-600">10+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;