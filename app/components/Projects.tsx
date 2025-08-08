"use client"
import React from 'react';
import { Github, ExternalLink, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "GradGuide",
      description: "A comprehensive career guidance platform that provides data-driven insights and personalized advice. The application fetches university expense data from Kaggle and real-time job listings to inform user decisions. It features an AI-powered module that uses the Gemini API to generate personalized career roadmaps and a unique interview simulator powered by the DeepSpeech API for real-time speech evaluation. The platform also includes a review system and robust search functionality. This full-stack project is securely hosted using a multi-cloud approach with Supabase, Azure, and Vercel, demonstrating proficiency in modern deployment practices.",
      image: "gradguide.png",
      //video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Express","Azure"],
      github: "https://github.com/nairobi-J/Swe-350-gradguide",
      live: "https://gradguide.vercel.app",
      hasVideo: false
    },
    {
      title: "Home Rental Website",
      description: "A full-stack web application for My Course - Web Technology(3/1)  designed to facilitate the process of finding and renting homes. Users can browse a comprehensive catalog of properties, apply filters to narrow down their search, and view detailed information for each listing. The platform includes a robust state management system to ensure a smooth and responsive user experience as they interact with the search functionality and property listings.This project was developed as a hands-on learning experience to deepen my understanding of client-side state management in React, as well as the integration of a backend to handle data persistence and application logic.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "MongoDb", "Node.js", "Express"],
      github: "https://github.com/nairobi-J/Home_rental_Website",
      live: "#",
      hasVideo: false
    },
    {
      title: "Treasure Hunting 2D game",
      video:"https://www.youtube.com/embed/t86kfsfDuvI",
      description: "A basic 2D adventure game developed in Java as a university course project to demonstrate fundamental programming concepts and graphical user interface (GUI) design. The application uses the Java Swing library to create the game window and manage the game loop. The GamePanel class, which is instantiated in the main method, handles the game logic, rendering, and user input. The project served as an introduction to event-driven programming, object-oriented design principles, and the structure of a simple game engine.A video demonstration is also attached.",
      image: "treasure.png",
      technologies: ["Java", "Java-Swing"],
      github: "https://github.com/nairobi-J/Treasure-Hunting",
      live: "https://jerry2berry.itch.io/mini-treasurehunting",
      hasVideo: true
    },
    {
      title: "Space Impact Game",
      description: "Space Impact is a classic 2D arcade-style shooter game developed in C++. As a university project, it features a spaceship that the player controls with three lives and the goal of achieving a high score. The game includes multiple levels, each with different enemy spaceships. A dedicated menu system allows players to navigate to a Play page to start the game, an Options page to adjust settings like the level, and an About page for project information. This project showcases fundamental C++ programming concepts, including object-oriented design for game components and event handling for user input. A video demonstration is also attached.",
      image: "Spaceimpact.png",
      video:"https://www.youtube.com/embed/bfcc0P085Mw",
      technologies: ["C++", "SFML"],
      github: "https://github.com/nairobi-J/space-Impact-j",
      live: "https://www.youtube.com/embed/bfcc0P085Mw",
      hasVideo: true
    },
    {
      title: "Android Project",
      description: "Used Flutter to make 2 mini android project one is todo , another one is pomodoro",
      image: "",
      video:"https://www.youtube.com/embed/bfcc0P085Mw",
      technologies: ["Flutter", "C++"],
      github: "https://github.com/nairobi-J/Android-App",
      live: "https://www.youtube.com/embed/bfcc0P085Mw",
      hasVideo: false
    }
  ];

  const [selectedProject, setSelectedProject] = React.useState<null | typeof projects[0]>(null);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                {project.hasVideo && (
                  <button onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    title='hi'
                  >
                    <div className="bg-white rounded-full p-4">
                      <Play className="text-blue-600" size={24} />
                    </div>
                  </button>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="aspect-video">
                <iframe
                  src={selectedProject.video}
                  title={selectedProject.title}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;