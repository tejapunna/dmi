'use client';

import { ReactNode, useEffect, useRef } from 'react';

type ParallaxLayerProps = {
  children?: ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
  maxOffset?: number;
};

export default function ParallaxLayer({
  children,
  className = '',
  speed = 0.12,
  reverse = false,
  maxOffset = 90,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const currentOffsetRef = useRef(0);
  const targetOffsetRef = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    let rafId = 0;

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));

    const animate = () => {
      const current = ref.current;
      if (!current) {
        return;
      }

      const currentOffset = currentOffsetRef.current;
      const targetOffset = targetOffsetRef.current;
      const next = currentOffset + (targetOffset - currentOffset) * 0.13;

      currentOffsetRef.current = next;
      current.style.transform = `translate3d(0, ${next.toFixed(2)}px, 0)`;

      if (Math.abs(targetOffset - next) > 0.15) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    const update = () => {
      const current = ref.current;
      if (!current) {
        return;
      }

      const rect = current.getBoundingClientRect();
      const viewportCenterY = window.innerHeight / 2;
      const elementCenterY = rect.top + rect.height / 2;
      const delta = elementCenterY - viewportCenterY;
      const direction = reverse ? 1 : -1;
      const rawOffset = delta * speed * direction;
      const offset = clamp(rawOffset, -maxOffset, maxOffset);

      targetOffsetRef.current = offset;
      if (!rafId) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    const onScroll = () => {
      update();
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [speed, reverse, maxOffset]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
}
