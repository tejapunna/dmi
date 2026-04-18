'use client';

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: string | number;
  duration?: number;
}

export default function Counter({ end, duration = 2 }: CounterProps) {
  const [count, setCount] = useState<string | number>(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;

          // Extract numeric value from end (e.g., "01" from "01", "100" from "100")
          const numericValue = parseInt(String(end).replace(/\D/g, '')) || 0;
          
          if (typeof numericValue === 'number' && numericValue > 0) {
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = (currentTime - startTime) / 1000;
              const progress = Math.min(elapsed / duration, 1);
              
              const currentValue = Math.floor(numericValue * progress);
              
              // Format number with leading zeros if needed
              const formattedValue = String(currentValue).padStart(String(numericValue).length, '0');
              setCount(formattedValue);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end);
              }
            };

            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={elementRef}>{count}</span>;
}
