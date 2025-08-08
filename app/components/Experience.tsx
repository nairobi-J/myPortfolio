
"use client"
import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Supplyr",
      location: "Remote",
      duration: "January 2024 - April 2024",
      description: "First Worked on frontend development tasks using VueJs and then started working as full stack developer. Gained hands-on experience in professional development environment.",
      achievements: [
        "Developed responsive UI components used across the application",
        "Fixed bugs and improved user experience based on feedback",
        "Collaborated with fellow developers using Git and Agile methodologies"
      ]
    },
   
    
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-16 bg-gray-50 rounded-2xl p-8 card-hover">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                      <h4 className="text-xl font-semibold text-blue-600 mb-2">{experience.company}</h4>
                    </div>
                    <div className="flex flex-col md:text-right text-gray-600">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{experience.description}</p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;