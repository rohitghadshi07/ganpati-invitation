import React, { useMemo } from 'react';
import { PeacockFeather } from './PeacockFeather';

/**
 * Realistic Falling & Floating Peacock Feathers (Mor Pankh) Background
 */
export const PeacockFeathersBackground = ({ count = 12 }) => {
  // Generate random properties once per mount
  const feathers = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 96; // 0% to 96%
      const size = 32 + Math.random() * 32; // 32px to 64px width
      const duration = 12 + Math.random() * 14; // 12s to 26s
      const delay = Math.random() * 15; // 0s to 15s
      const swayDuration = 3 + Math.random() * 3; // 3s to 6s
      const initialRotation = -25 + Math.random() * 50; // -25deg to +25deg
      const opacity = 0.55 + Math.random() * 0.4; // 0.55 to 0.95
      const swayType = i % 3 === 0 ? 'sway-wide' : (i % 3 === 1 ? 'sway-gentle' : 'sway-spiral');

      return {
        id: i,
        left,
        size,
        duration,
        delay,
        swayDuration,
        initialRotation,
        opacity,
        swayType,
      };
    });
  }, [count]);

  return (
    <div className="peacock-feathers-layer" aria-hidden="true">
      {feathers.map((item) => (
        <div
          key={item.id}
          className={`falling-feather-item ${item.swayType}`}
          style={{
            left: `${item.left}%`,
            width: `${item.size}px`,
            height: `${item.size * 1.5}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `-${item.delay}s`,
            opacity: item.opacity,
            '--sway-time': `${item.swayDuration}s`,
            '--base-rot': `${item.initialRotation}deg`,
          }}
        >
          <PeacockFeather
            size={item.size}
            interactive={false}
            idPrefix={`bg-pf-${item.id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default PeacockFeathersBackground;
