"use client"

import React, { useEffect, useState } from 'react';

const Skills = () => {
  const skillCategories = [

    {
      

      title: "Frontend Development",
      skills: [
        "Next.js",
        "React.js",
        "TypeScript", 
        "Vue.js",
        "HTML/CSS",
        "Tailwind CSS"
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        "Node.js",
        "Express.js", 
        "SpringBoot",
         "Python",
        "PostgreSQL",
        "MongoDB"
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git/GitHub",
        "Docker",
        "Azure",
        "Figma",
        "Flask",
        "Supabase",
        "Java-Swing",
        "SFML",
        "Flutter"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <span className="font-medium text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Programming Languages */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['C', 'C++', 'Java','Python','JavaScript', 'TypeScript', ].map((lang, index) => (
              <span 
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transition-shadow duration-300"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;