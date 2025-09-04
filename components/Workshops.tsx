import React, { useState } from 'react';
import Section from './Section';
import Modal from './Modal';
import { WORKSHOPS } from '../constants';
import useFadeIn from '../useFadeIn';

const Workshops: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <Section id="workshops" title="Workshops & Activities">
      {WORKSHOPS.map((workshop, index) => {
        const [ref, isVisible] = useFadeIn<HTMLDivElement>();
        return (
          <div ref={ref} key={index} className={`fade-in ${isVisible ? 'visible' : ''} mb-12`}>
            <h3 className="text-2xl font-bold text-center mb-6 text-sky-800">{workshop.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {workshop.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="rounded-lg shadow-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image} alt={`${workshop.title} - ${imgIndex + 1}`} loading="lazy" className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        )
      })}
       {selectedImage && (
        <Modal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </Section>
  );
};

export default Workshops;