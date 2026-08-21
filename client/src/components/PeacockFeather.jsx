import React, { useState } from 'react';

/**
 * Realistic Peacock Feather (Mor Pankh - मोर पंख) SVG Component
 */
export const PeacockFeather = ({
  size = 180,
  className = '',
  style = {},
  interactive = true,
  idPrefix = 'pf',
  onClick
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (interactive) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2400);
    }
  };

  const p = idPrefix;

  return (
    <div
      className={`peacock-feather-wrap ${isAnimating ? 'feather-flutter' : ''} ${className}`}
      onClick={handleClick}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size * 1.5}px` : 'auto',
        display: 'inline-block',
        position: 'relative',
        cursor: interactive ? 'pointer' : 'default',
        ...style
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 600"
        width="100%"
        height="100%"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Ambient Glow for Realism */}
          <radialGradient id={`${p}-bgGlow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#004b49" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#004b49" stopOpacity="0" />
          </radialGradient>

          {/* Stem / Quill Gradient */}
          <linearGradient id={`${p}-stemGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5ffe8" />
            <stop offset="40%" stopColor="#d4edaa" />
            <stop offset="75%" stopColor="#8bb174" />
            <stop offset="100%" stopColor="#3d572c" />
          </linearGradient>

          {/* Eyelet: Outer Bronze / Gold Ring */}
          <radialGradient id={`${p}-eyeBronze`} cx="50%" cy="65%" r="50%">
            <stop offset="0%" stopColor="#fff280" />
            <stop offset="35%" stopColor="#e5b02b" />
            <stop offset="70%" stopColor="#996300" />
            <stop offset="95%" stopColor="#4a3000" />
            <stop offset="100%" stopColor="#263c16" stopOpacity="0.1" />
          </radialGradient>

          {/* Eyelet: Middle Jade / Emerald Green Shield */}
          <radialGradient id={`${p}-eyeGreen`} cx="50%" cy="62%" r="50%">
            <stop offset="0%" stopColor="#4dffdb" />
            <stop offset="40%" stopColor="#00b386" />
            <stop offset="75%" stopColor="#006644" />
            <stop offset="95%" stopColor="#00331a" />
            <stop offset="100%" stopColor="#001a0d" stopOpacity="0" />
          </radialGradient>

          {/* Eyelet: Inner Royal Sapphire / Indigo Core */}
          <radialGradient id={`${p}-eyeBlue`} cx="50%" cy="58%" r="50%">
            <stop offset="0%" stopColor="#99e6ff" />
            <stop offset="25%" stopColor="#0077ff" />
            <stop offset="60%" stopColor="#0a12a8" />
            <stop offset="90%" stopColor="#06023b" />
            <stop offset="100%" stopColor="#020014" />
          </radialGradient>

          {/* Wispy Background Barbs */}
          <linearGradient id={`${p}-barbGreen`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00b377" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#006644" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1a4023" stopOpacity="0.15" />
          </linearGradient>

          {/* Golden Intermediate Barbs */}
          <linearGradient id={`${p}-barbGold`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd233" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#c29200" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#005c3e" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#001a13" stopOpacity="0.05" />
          </linearGradient>

          {/* Drop Shadow for Depth */}
          <filter id={`${p}-dropShadow`} x="-25%" y="-20%" width="150%" height="145%">
            <feDropShadow dx="2" dy="5" stdDeviation="4.5" floodColor="#00140e" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Ambient Center Glow */}
        <circle cx="200" cy="200" r="170" fill={`url(#${p}-bgGlow)`} />

        <g filter={`url(#${p}-dropShadow)`}>
          {/* LAYER 1: Base Wispy Background Barbs */}
          <g stroke={`url(#${p}-barbGreen)`} strokeWidth="1.1" fill="none" opacity="0.75" strokeLinecap="round">
            {/* Left side soft tracks */}
            <path d="M 200,450 C 130,400 80,300 80,220 C 80,150 130,100 200,80" />
            <path d="M 200,420 C 120,370 70,280 70,210 C 70,140 120,95 200,83" />
            <path d="M 200,380 C 110,340 60,260 60,190 C 60,130 110,90 200,88" />
            <path d="M 200,320 C 100,280 50,220 50,170 C 50,120 100,85 200,95" />
            <path d="M 200,280 C 80,240 40,180 40,130 C 40,80 110,75 200,98" />

            {/* Right side soft tracks */}
            <path d="M 200,450 C 270,400 320,300 320,220 C 320,150 270,100 200,80" />
            <path d="M 200,420 C 280,370 330,280 330,210 C 330,140 280,95 200,83" />
            <path d="M 200,380 C 290,340 340,260 340,190 C 340,130 290,90 200,88" />
            <path d="M 200,320 C 300,280 350,220 350,170 C 350,120 300,85 200,95" />
            <path d="M 200,280 C 320,240 360,180 360,130 C 360,80 290,75 200,98" />
          </g>

          {/* LAYER 2: Dense Golden-Green Intermediate Barbs */}
          <g stroke={`url(#${p}-barbGold)`} strokeWidth="1.3" fill="none" opacity="0.85" strokeLinecap="round">
            {/* Left side dense hairs */}
            <path d="M 200,350 C 140,320 90,250 90,190 C 90,140 140,110 195,100" />
            <path d="M 200,300 C 130,270 85,210 85,160 C 85,120 135,100 195,105" />
            <path d="M 200,250 C 120,220 80,180 80,140 C 80,105 130,95 195,110" />
            <path d="M 200,200 C 110,180 75,140 75,110 C 75,85 130,90 195,115" />

            {/* Right side dense hairs */}
            <path d="M 200,350 C 260,320 310,250 310,190 C 310,140 260,110 205,100" />
            <path d="M 200,300 C 270,270 315,210 315,160 C 315,120 265,100 205,105" />
            <path d="M 200,250 C 280,220 320,180 320,140 C 320,105 270,95 205,110" />
            <path d="M 200,200 C 290,180 325,140 325,110 C 325,85 270,90 205,115" />
          </g>

          {/* LAYER 3: Detailed Fine Feather Fringe (Crown strands) */}
          <g stroke="#0f4528" strokeWidth="0.8" fill="none" strokeLinecap="round">
            <path d="M 200,100 C 180,70 150,50 120,40" />
            <path d="M 200,95 C 185,65 160,45 135,35" />
            <path d="M 200,90 C 190,60 170,40 150,30" />
            <path d="M 200,85 C 200,50 190,35 175,25" />
            <path d="M 200,85 C 200,50 210,35 225,25" />
            <path d="M 200,90 C 210,60 230,40 250,30" />
            <path d="M 200,95 C 215,65 240,45 265,35" />
            <path d="M 200,100 C 220,70 250,50 280,40" />
          </g>

          {/* LAYER 4: The Main Stem / Quill (Spine) */}
          <path
            d="M 200,560 C 203,440 202,280 200,80"
            stroke={`url(#${p}-stemGrad)`}
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Inner translucent highlight of stem for 3D realism */}
          <path
            d="M 200,555 C 202,440 201,280 200,85"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />

          {/* LAYER 5: The Eye of the Peacock Feather (The "Ocellus") */}
          <g>
            {/* Outer Bronze Oval */}
            <path
              d="M 200,105 C 125,105 120,235 200,255 C 280,235 275,105 200,105 Z"
              fill={`url(#${p}-eyeBronze)`}
            />

            {/* Emerald Green Shield */}
            <path
              d="M 200,122 C 140,122 135,220 200,240 C 265,220 260,122 200,122 Z"
              fill={`url(#${p}-eyeGreen)`}
            />

            {/* Deep Indigo/Sapphire Heart Core */}
            <path
              d="M 200,142 C 155,142 150,210 200,222 C 250,210 245,142 200,142 Z"
              fill={`url(#${p}-eyeBlue)`}
            />

            {/* Electric Turquoise Overlay Wings */}
            <path
              d="M 162,165 C 185,148 215,148 238,165 C 222,188 178,188 162,165 Z"
              fill="#00ffcc"
              opacity="0.55"
              style={{ mixBlendMode: 'overlay' }}
            />

            {/* Specular Wet Reflections for Realism */}
            <ellipse
              cx="184"
              cy="164"
              rx="8"
              ry="4.5"
              transform="rotate(-15, 184, 164)"
              fill="#ffffff"
              opacity="0.75"
            />
            <circle cx="218" cy="180" r="3.5" fill="#ffffff" opacity="0.5" />
          </g>

          {/* LAYER 6: Downy Bottom Fluff */}
          <g stroke="#a6c98d" strokeWidth="1.3" fill="none" opacity="0.8" strokeLinecap="round">
            <path d="M 201,440 C 165,460 135,495 120,530" />
            <path d="M 201,465 C 170,485 145,515 135,545" />
            <path d="M 201,420 C 160,435 130,470 110,505" />

            <path d="M 201,440 C 237,460 267,495 282,530" />
            <path d="M 201,465 C 232,485 257,515 267,545" />
            <path d="M 201,420 C 242,435 272,470 292,505" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default PeacockFeather;
