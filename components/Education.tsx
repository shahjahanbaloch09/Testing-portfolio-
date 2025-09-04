import React from 'react';
import Section from './Section';
import useFadeIn from '../useFadeIn';

const TimelineItem: React.FC<{
  degree: string;
  university: string;
  year: string;
  isLast?: boolean;
}> = ({ degree, university, year, isLast = false }) => {
  const [ref, isVisible] = useFadeIn<HTMLDivElement>();
  return (
    <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} relative pl-12 pb-12`}>
      {!isLast && <div className="absolute top-0 left-[22px] w-0.5 h-full bg-sky-200"></div>}
      <div className="absolute top-0 left-0 w-11 h-11 bg-white border-4 border-sky-500 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
      </div>
      <div className="ml-4">
        <p className="absolute -left-6 top-2 bg-sky-500 text-white text-sm font-semibold py-1 px-3 rounded-full">{year}</p>
        <h3 className="text-xl font-bold text-sky-700 mt-10">{degree}</h3>
        <p className="text-md text-slate-600">{university}</p>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const [ref, isVisible] = useFadeIn<HTMLDivElement>();
  return (
    <Section id="education" title="Education">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} max-w-2xl mx-auto`}>
            <TimelineItem
              degree="Bachelor's in Public Health"
              university="Islamia University of Bahawalpur"
              year="Ongoing"
            />
            <TimelineItem
              degree="Future Academic Milestones"
              university="Your next great achievement awaits!"
              year="Future"
              isLast={true}
            />
        </div>
    </Section>
  );
};

export default Education;