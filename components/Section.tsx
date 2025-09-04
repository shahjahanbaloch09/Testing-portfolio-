import React from 'react';
import useFadeIn from '../useFadeIn';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const [ref, isVisible] = useFadeIn<HTMLHeadingElement>();
  return (
    <section id={id} className="py-20 md:py-28 px-6 bg-slate-50 even:bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} text-4xl font-bold text-center mb-12 text-slate-800 relative pb-4`}>
          {title}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-sky-500 to-orange-400 rounded-full"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;