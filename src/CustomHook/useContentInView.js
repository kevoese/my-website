import { useState, useEffect } from 'react';
import { contentInView } from '../utils';

const useContentInView = (content) => {
  const [inView, setInView] = useState(null);

  const checkInView = () => {
    if (!inView && content.current && contentInView(content.current)) setInView(true);
  };

  useEffect(() => {
    document.querySelector('.main-app').addEventListener('scroll', checkInView);
    return () => {
      document.querySelector('.main-app').removeEventListener('scroll', checkInView);
    };
  }, []);

  return inView;
};

export default useContentInView;
