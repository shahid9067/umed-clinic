import { useState, useEffect, useRef } from 'react';

interface CountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
}: CountUpOptions) {
  const [value, setValue] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const currentCount = start + (end - start) * easedProgress;
      setValue(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, start, end, duration]);

  const formattedValue = `${prefix}${value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;

  return { ref: elementRef, value: formattedValue, rawValue: value, hasStarted };
}
