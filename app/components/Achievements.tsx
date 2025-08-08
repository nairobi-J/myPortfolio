"use client"
import React from 'react';
import { Award, AlignCenterVertical as Certificate, Trophy, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Supervised Machine Learning",
      issuer: "Coursera",
      date: "2025",
      description: "",
      icon: Award,
      color: "bg-orange-100 text-orange-600",
      //image: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "HackerRank Intermediate database",
      issuer: "hackerRank",
      date: "2025",
      //description: "Professional certificate program covering React, JavaScript, HTML/CSS, and modern web development",
      icon: Certificate,
      color: "bg-blue-100 text-blue-600",
      //image: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "EDGE - Python & Data Science",
      issuer: "ICT Ministry of Bangladesh",
      date: "2024",
      //description: "Harvard's introduction to computer science covering algorithms, data structures, and programming",
      icon: Star,
      color: "bg-blue-100 text-blue-600",
      //image: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
   
   
  ];

  const competitions = [
    {
      title: "NASA SpaceApp Challenge Finalist",
      year: "2024",
      //description: "Secured second position in annual university-wide programming competition"
    },
    {
      title: "Leading university Heckathon",
      year: "2024", 
      //description: "Successfully qualified for next round in Google's annual coding competition"
    },
     {
      title: "Therap Javafest 2025",
      year: "2025", 
      //description: "Successfully qualified for next round in Google's annual coding competition"
    },
     {
      title: "University innovation Hub",
      year: "2023", 
      //description: "Successfully qualified for next round in Google's annual coding competition"
    },
    
    {
      title: "Exgeris-1.0",
      year: "2022",
      //description: "Won best beginner project award for innovative solution in 24-hour hackathon"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Achievements & <span className="text-blue-600">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <img 
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className={`w-12 h-12 rounded-full ${achievement.color} flex items-center justify-center mb-4`}>
                  <achievement.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{achievement.issuer}</p>
                <p className="text-gray-500 text-sm mb-3">{achievement.date}</p>
                <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Competition Wins */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Competitions
          </h3>
          <div className="space-y-6">
            {competitions.map((competition, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="flex items-start gap-4">
                  
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{competition.title}</h4>
                    <p className="text-blue-600 font-medium mb-2">{competition.year}</p>
                    <p className="text-gray-700 leading-relaxed">{competition.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
      
      </div>
    </section>
  );
};

export default Achievements;