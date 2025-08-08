"use client"
import React from 'react';
import { Trophy, Code, Target, Users } from 'lucide-react';

const ProblemSolving = () => {
  const platforms = [
    {
      name: "CodeForces", 
      handle: "@Rub_y", 
      handle2: "@StrikingHard",
      stats: "Pupil rating (1200+), 550+ Problem Solved",
      //ranking: "60+ contests participated",
      icon: Target,
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "LeetCode",
      handle: "@striking_hard",
      stats: "35+ problems solved",
      //ranking: "Working towards Expert level",
      icon: Code,
      color: "bg-orange-100 text-orange-600"
    },
    
    {
      name: "HackerRank",
      handle: "@jerinusrat001",
      stats: "3-star problem solver",
      ranking: "Silver badges in algorithms",
      icon: Trophy,
      color: "bg-green-100 text-green-600"
    },
     {
      name: "Vjudge",
      handle: "@Die_01",
      stats: "141 Problem solved",
      //ranking: "Silver badges in algorithms",
      icon: Code,
      color: "bg-green-100 text-green-600"
    },
   
  ];

  const achievements = [
    "Solved 500+ algorithmic problems across platforms",
    //"Consistently improving ranking in monthly contests",
    //"Active member of university's competitive programming club",
    "Participated in ACM-ICPC regional contests"
  ];

  return (
    <section id="problem-solving" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Problem Solving <span className="text-blue-600">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My competitive programming achievements and algorithmic problem-solving journey
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 card-hover text-center">
              <div className={`w-16 h-16 rounded-full ${platform.color} flex items-center justify-center mx-auto mb-4`}>
                <platform.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{platform.handle}</p>
              
              <p className="text-gray-600 text-sm mb-2">{platform.handle2}</p>
              <p className="text-gray-700 font-medium mb-1">{platform.stats}</p>
              <p className="text-sm text-gray-500">{platform.ranking}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Achievements */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Problem Categories */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Problem Categories Mastered</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Dynamic Programming',
                'Graph Algorithms', 
                'Data Structures',
                'String Processing',
                'Greedy Algorithms',
                'Binary Search',
                'Tree Algorithms',
                'Number Theory'
              ].map((category, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 text-center">
                  <span className="font-medium text-gray-700">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contest Performance */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-200 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">Contest Performance</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">60+</div>
              <div className="text-blue-100">Contests Participated</div>
            </div>
           
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Problems Solved</div>
            </div>
             <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Top 50% Finishes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;