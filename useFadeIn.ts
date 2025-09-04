// FIX: Import React to use React types like React.RefObject
import React, { useState, useEffect, useRef } from 'react';

function useFadeIn<T extends HTMLElement>(): [React.RefObject<T>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing after it becomes visible
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    }, { threshold: 0.1 });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return [domRef, isVisible];
}

export default useFadeIn;
