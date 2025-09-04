
import React, { useState, useEffect } from 'react';

const TAGLINES = [
  "Public Health Student",
  "Community Builder",
  "Digital Educator",
  "Health Advocate"
];

const Hero: React.FC = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayedTagline, setDisplayedTagline] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullTagline = TAGLINES[taglineIndex];
      if (isDeleting) {
        setDisplayedTagline(fullTagline.substring(0, displayedTagline.length - 1));
      } else {
        setDisplayedTagline(fullTagline.substring(0, displayedTagline.length + 1));
      }

      if (!isDeleting && displayedTagline === fullTagline) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedTagline === '') {
        setIsDeleting(false);
        setTaglineIndex((prevIndex) => (prevIndex + 1) % TAGLINES.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedTagline, isDeleting, taglineIndex]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-gradient-to-br from-sky-600 to-orange-400 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 p-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight animate-fade-in-down" style={{animation: 'fade-in-down 1s ease-out forwards'}}>
                SHAH JAHAN BALOCH
            </h1>
            <p className="text-xl md:text-2xl font-light">
                <span className="border-r-2 border-orange-300 animate-pulse pr-1">{displayedTagline}</span>
            </p>
        </div>
         {/* FIX: Removed invalid 'jsx' prop from style tag. This syntax is not standard in React. */}
         <style>{`
            @keyframes fade-in-down {
                0% {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .animate-fade-in-down {
                animation: fade-in-down 1s ease-out forwards;
            }
        `}</style>
    </section>
  );
};

export default Hero;
