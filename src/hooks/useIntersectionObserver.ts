import { useState, useEffect, RefObject } from 'react';

interface UseIntersectionObserverProps {
  elementRef: RefObject<Element>;
  threshold?: number;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = ({
  elementRef,
  threshold = 0.1,
  rootMargin = '0px',
  freezeOnceVisible = true,
}: UseIntersectionObserverProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef?.current;
    
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state based on intersection
        const isIntersecting = entry.isIntersecting;
        
        // If freezeOnceVisible is true and the element is already visible, don't update
        if (freezeOnceVisible && isVisible) return;
        
        setIsVisible(isIntersecting);
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, threshold, rootMargin, freezeOnceVisible, isVisible]);

  return isVisible;
};