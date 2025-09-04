
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Workshops from './components/Workshops';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-700">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certificates />
        <Workshops />
        <Blog />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-white text-center p-6">
        <p>&copy; {new Date().getFullYear()} Shah Jahan Baloch. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
