import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize('G-SLXK5SFXJF');
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path,
    title: title || document.title
  });
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  ReactGA.event({
    action,
    category,
    label,
    value
  });
};

// Track specific business events
export const trackBusinessEvents = {
  // Contact form submissions
  contactFormSubmit: (division?: string) => {
    trackEvent('submit', 'contact_form', division);
  },
  
  // Program interest
  programClick: (programType: string) => {
    trackEvent('click', 'program_interest', programType);
  },
  
  // Navigation
  sectionView: (section: string) => {
    trackEvent('view', 'section', section);
  },
  
  // Phone/email clicks
  contactClick: (type: 'phone' | 'email') => {
    trackEvent('click', 'contact', type);
  },
  
  // Image gallery interactions
  imageView: (imageIndex: number) => {
    trackEvent('view', 'image_gallery', `image_${imageIndex}`);
  }
};