import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Small delay to ensure page has loaded
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location.hash]);

  return null;
};

export default ScrollToSection;