import { useRef, useCallback, CSSProperties } from 'react';

export interface TiltOptions {
  maxTilt?: number;
  scale?: number;
  speed?: number;
  disabled?: boolean;
}

export function useTilt3D<T extends HTMLElement = HTMLDivElement>(options: TiltOptions | number = {}) {
  const opts: TiltOptions = typeof options === 'number' ? { maxTilt: options } : options;
  const { maxTilt = 8, scale = 1.02, disabled = false } = opts;
  const ref = useRef<T>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      if (disabled || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      ref.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
    },
    [maxTilt, scale, disabled]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }, []);

  const style: CSSProperties = {
    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  };

  return {
    ref,
    cardRef: ref,
    onMouseMove: handleMouseMove,
    handleMouseMove,
    onMouseLeave: handleMouseLeave,
    handleMouseLeave,
    style,
    props: {
      ref,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style,
    },
  };
}
