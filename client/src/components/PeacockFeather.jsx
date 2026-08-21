import React, { useState } from 'react';

/**
 * Realistic Peacock Feather (Mor Pankh - मोर पंख) Component
 * Matches the exact design from user image
 */
export const PeacockFeather = ({
  size = 180,
  className = '',
  style = {},
  interactive = true,
  onClick,
  alt = 'Mor Pankh'
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (interactive) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2400);
    }
  };

  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size * 1.78}px` : 'auto';

  return (
    <div
      className={`peacock-feather-wrap ${isAnimating ? 'feather-flutter' : ''} ${className}`}
      onClick={handleClick}
      style={{
        width: width,
        height: height,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        cursor: interactive ? 'pointer' : 'default',
        ...style
      }}
    >
      <img
        src="/assets/images/peacock-feather.png"
        alt={alt}
        className="peacock-feather-img"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          pointerEvents: 'none',
          filter: 'drop-shadow(0 4px 12px rgba(0, 255, 204, 0.25))'
        }}
        loading="lazy"
      />
    </div>
  );
};

export default PeacockFeather;
