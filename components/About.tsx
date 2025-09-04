import React from 'react';
import Section from './Section';
import useFadeIn from '../useFadeIn';

const About: React.FC = () => {
  const [containerRef, isVisible] = useFadeIn<HTMLDivElement>();

  return (
    <Section id="about" title="About Me">
      <div ref={containerRef} className={`fade-in ${isVisible ? 'visible' : ''} grid md:grid-cols-3 gap-12 items-center`}>
        <div className="md:col-span-1 flex justify-center">
          <img
            src="https://picsum.photos/400/400"
            alt="Shah Jahan Baloch"
            loading="lazy"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl border-8 border-white transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="md:col-span-2 text-lg text-slate-600 space-y-6">
          <p>
            Hello! I'm Shah Jahan Baloch, a passionate advocate for public health and community empowerment, originally from the beautiful region of Awaran, Balochistan, Pakistan. My journey is driven by a profound belief in the power of knowledge and well-being.
          </p>
          <p>
            As a student, educator, and builder, I am dedicated to creating sustainable solutions that improve health outcomes and provide educational opportunities for all. I thrive on connecting with people, understanding their challenges, and working together to build a healthier, more informed future.
          </p>
          <blockquote className="border-l-4 border-orange-400 pl-6 py-2 italic text-xl font-semibold text-slate-800 bg-orange-50 rounded-r-lg">
            “Education frees the individual, and health improves life.”
          </blockquote>
        </div>
      </div>
    </Section>
  );
};

export default About;