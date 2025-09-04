import React, { useState } from 'react';
import Section from './Section';
import Modal from './Modal';
import { CERTIFICATES } from '../constants';
import useFadeIn from '../useFadeIn';

const Certificates: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [ref, isVisible] = useFadeIn<HTMLDivElement>();

  return (
    <Section id="certificates" title="Certificates & Awards">
      <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
        {CERTIFICATES.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transform transition-transform duration-300 hover:scale-105"
            onClick={() => setSelectedImage(cert.image)}
          >
            <img src={cert.image} alt={cert.title} loading="lazy" className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity" />
            <div className="p-4">
              <h3 className="font-semibold text-slate-800 truncate">{cert.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <Modal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </Section>
  );
};

export default Certificates;