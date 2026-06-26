import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ProblemSolving from './components/ProblemSolving';
import HCIResearch from './components/HCIResearch';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <ProblemSolving />
        <HCIResearch />
        <About />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
