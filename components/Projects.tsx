import React from 'react';
import Section from './Section';
import useFadeIn from '../useFadeIn';
import { PROJECTS } from '../constants';

const ProjectCard: React.FC<{ title: string; description: string; delay?: number }> = ({ title, description, delay = 0 }) => {
  const [ref, isVisible] = useFadeIn<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''} bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl font-bold text-sky-700 mb-4">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects & Initiatives">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} title={project.title} description={project.description} delay={index * 100} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;