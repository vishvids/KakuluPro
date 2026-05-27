import React from 'react';

interface ProductImageProps {
  type: string;
  className?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ type, className = "w-full h-full" }) => {
  switch (type) {
    case 'mushroom-fresh':
      return (
        <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="freshMushroomGrad" cx="45%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#f4eedf" />
              <stop offset="100%" stopColor="#d3c7ad" />
            </radialGradient>
            <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(20, 50, 36, 0.25)" />
              <stop offset="100%" stopColor="rgba(20, 50, 36, 0)" />
            </radialGradient>
            <linearGradient id="groundGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2c5c3e" />
              <stop offset="100%" stopColor="#143224" />
            </linearGradient>
          </defs>
          {/* Background circle of pure organic style */}
          <circle cx="200" cy="200" r="180" fill="url(#groundGrad)" />
          
          {/* Ambient Glow */}
          <circle cx="200" cy="240" r="130" fill="url(#shadowGrad)" />
          
          {/* Stems */}
          <path d="M 225,210 C 225,290 205,320 185,320 C 165,320 170,290 170,210 Z" fill="#eee0ca" />
          <path d="M 183,212 C 183,280 170,300 155,300 C 140,300 145,280 145,212 Z" fill="#e0d1b9" opacity="0.9" />
          
          {/* Main Large Cap */}
          <path d="M 120,210 C 120,105 280,105 280,210 C 250,225 150,225 120,210 Z" fill="url(#freshMushroomGrad)" />
          
          {/* Small Secondary Cap */}
          <path d="M 100,215 C 100,130 210,130 210,215 C 190,225 120,225 100,215 Z" fill="url(#freshMushroomGrad)" transform="scale(0.8) translate(50, 80)" />

          {/* Dirt / Organic Spores decoration */}
          <circle cx="170" cy="140" r="4" fill="#a48d61" opacity="0.4" />
          <circle cx="230" cy="155" r="5" fill="#a48d61" opacity="0.3" />
          <circle cx="210" cy="130" r="6" fill="#a48d61" opacity="0.25" />
          
          {/* Sparkles of Premium Freshness */}
          <path d="M 130,120 L 133,126 L 140,127 L 134,131 L 136,138 L 130,134 L 124,138 L 126,131 L 120,127 L 127,126 Z" fill="#f2a93b" opacity="0.9" />
          <path d="M 270,180 L 271,183 L 275,184 L 271,186 L 272,190 L 269,188 L 266,190 L 267,186 L 263,184 L 267,183 Z" fill="#ffffff" opacity="0.8" transform="scale(0.8) translate(50, 10)" />
        </svg>
      );

    case 'mushroom-dehydrated':
      return (
        <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dehySleeve" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ebd7b8" />
              <stop offset="100%" stopColor="#cca972" />
            </linearGradient>
            <linearGradient id="dryShrinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8c643f" />
              <stop offset="50%" stopColor="#5c3f24" />
              <stop offset="100%" stopColor="#301e0d" />
            </linearGradient>
          </defs>
          {/* Kraft Bag Background */}
          <rect width="360" height="360" x="20" y="20" rx="24" fill="url(#dehySleeve)" opacity="0.15" />
          <rect width="320" height="320" x="40" y="40" rx="16" fill="none" stroke="#cca972" strokeWidth="2" strokeDasharray="8,6" />
          
          {/* Main Dehydrated Ring Backings */}
          <circle cx="200" cy="200" r="140" fill="#fcf9f2" stroke="#ebd7b8" strokeWidth="1" />
          
          {/* Wrinkled Dehydrated Mushroom 1 */}
          <g transform="translate(140, 130) rotate(-15)">
            <path d="M 20,60 C 20,10 100,10 100,60 C 80,75 40,75 20,60 Z" fill="url(#dryShrinkGrad)" />
            {/* Shriveled gills */}
            <path d="M 30,55 A 12,12 0 0,1 40,50 A 12,12 0 0,1 50,55" stroke="#301e0d" strokeWidth="3" fill="none" />
            <path d="M 60,55 A 12,12 0 0,1 70,50 A 12,12 0 0,1 80,55" stroke="#301e0d" strokeWidth="3" fill="none" />
            <path d="M 45,58 L 45,85" stroke="#a48259" strokeWidth="8" strokeLinecap="round" />
            <circle cx="50" cy="30" r="3" fill="#a48259" />
            <circle cx="70" cy="25" r="4" fill="#cca972" opacity="0.6" />
          </g>

          {/* Wrinkled Dehydrated Mushroom 2 */}
          <g transform="translate(230, 230) rotate(45) scale(0.8)">
            <path d="M 20,60 C 20,10 100,10 100,60 C 80,75 40,75 20,60 Z" fill="url(#dryShrinkGrad)" />
            <path d="M 45,58 L 45,85" stroke="#a48259" strokeWidth="8" strokeLinecap="round" />
          </g>
          
          {/* Scattered slices */}
          <g transform="translate(130, 240) scale(0.65) @rotate(110)">
            <path d="M 10,50 C 10,20 70,20 70,50 Z" fill="#8c643f" />
            <path d="M 35,50 L 35,70" stroke="#cca972" strokeWidth="6" />
          </g>
          
          {/* Eco Kraft Seal Stamp */}
          <circle cx="280" cy="110" r="35" fill="none" stroke="#2c5c3e" strokeWidth="3" />
          <circle cx="280" cy="110" r="30" fill="none" stroke="#2c5c3e" strokeWidth="1" strokeDasharray="3,2" />
          <text x="280" y="107" fontSize="10" fontWeight="bold" fontFamily="monospace" fill="#2c5c3e" textAnchor="middle">100%</text>
          <text x="280" y="119" fontSize="8" fontWeight="bold" fontFamily="monospace" fill="#2c5c3e" textAnchor="middle">PURE</text>
        </svg>
      );

    case 'mango-dehydrated':
      return (
        <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mangoBack" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff3d1" />
              <stop offset="100%" stopColor="#ffd88a" />
            </linearGradient>
            <linearGradient id="mangoSplat1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff9a00" />
              <stop offset="70%" stopColor="#e06c00" />
              <stop offset="100%" stopColor="#b24b00" />
            </linearGradient>
            <linearGradient id="mangoGlase" x1="30%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="#ffda66" />
              <stop offset="100%" stopColor="#fca000" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="180" fill="url(#mangoBack)" />
          
          {/* Beautiful dehydrated wavy mango strip 1 */}
          <path d="M 90,165 Q 150,110 210,175 T 320,180 L 310,210 Q 220,185 170,230 T 80,200 Z" fill="url(#mangoSplat1)" filter="drop-shadow(0px 8px 12px rgba(178, 75, 0, 0.25))" />
          {/* Beautiful mango leather details */}
          <path d="M 100,170 Q 150,125 195,180 T 300,190" stroke="#ffd88a" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
          
          {/* Small overlap strip 2 */}
          <path d="M 120,240 Q 190,210 240,285 L 270,270 Q 210,195 140,220 Z" fill="url(#mangoGlase)" opacity="0.9" filter="drop-shadow(0px 6px 10px rgba(178, 75, 0, 0.2))" />
          <path d="M 135,238 Q 190,215 235,270" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
          
          {/* Ribbons / Dehydrated texture markings */}
          <path d="M 160,150 L 165,165" stroke="#903000" strokeWidth="1.5" opacity="0.3" />
          <path d="M 190,145 L 192,160" stroke="#903000" strokeWidth="1.5" opacity="0.3" />
          <path d="M 230,165 L 227,185" stroke="#903000" strokeWidth="1.5" opacity="0.3" />
          <path d="M 260,170 L 264,182" stroke="#903000" strokeWidth="1.5" opacity="0.3" />
          
          <path d="M 180,240 L 188,252" stroke="#903000" strokeWidth="1.5" opacity="0.3" />
          <path d="M 210,230 L 213,248" stroke="#903000" strokeWidth="1.5" opacity="0.3" />

          {/* Dried Sweets Sunburst Logo */}
          <circle cx="200" cy="200" r="145" fill="none" stroke="#f2a93b" strokeWidth="1" strokeDasharray="6,8" opacity="0.5" />
        </svg>
      );

    case 'del-dehydrated':
      return (
        <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="delBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eef4ec" />
              <stop offset="100%" stopColor="#cadac5" />
            </linearGradient>
            <linearGradient id="delPlateGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#eedcb7" />
              <stop offset="100%" stopColor="#d2bc8d" />
            </linearGradient>
          </defs>
          
          <rect width="360" height="360" x="20" y="20" rx="180" fill="url(#delBgGrad)" />
          
          {/* Main Breadfruit Dehydrated Slice */}
          <g transform="translate(185, 185) scale(1.15)">
            {/* Outer crust */}
            <circle cx="0" cy="0" r="100" fill="url(#delPlateGrad)" stroke="#aa8c4c" strokeWidth="4" />
            
            {/* Soft inner starch segments (honeycomb pattern of breadfruit) */}
            <circle cx="0" cy="0" r="92" fill="#faf5e7" />
            
            {/* Central fibrous core */}
            <path d="M -22,-10 C -40,-25 -20,-50 0,-40 C 20,-50 40,-25 22,-10 C 35,15 15,35 0,22 C -15,35 -35,15 -22,-10 Z" fill="#ddcca4" opacity="0.85" />
            
            {/* Segment Radiating Lines representing DEL cuts */}
            <g stroke="#e2d6b3" strokeWidth="2.5" strokeDasharray="1,4">
              <line x1="0" y1="0" x2="0" y2="-90" />
              <line x1="0" y1="0" x2="0" y2="90" />
              <line x1="0" y1="0" x2="-90" y2="0" />
              <line x1="0" y1="0" x2="90" y2="0" />
              <line x1="0" y1="0" x2="-64" y2="-64" />
              <line x1="0" y1="0" x2="64" y2="64" />
              <line x1="0" y1="0" x2="64" y2="-64" />
              <line x1="0" y1="0" x2="-64" y2="64" />
            </g>
            
            {/* Smaller inner ring */}
            <circle cx="0" cy="0" r="45" fill="none" stroke="#d2bc8d" strokeWidth="1.5" strokeDasharray="3,5" />
            
            {/* Scattered natural dried pits */}
            <circle cx="-12" cy="-25" r="3.5" fill="#aa8c4c" />
            <circle cx="15" cy="-20" r="3" fill="#aa8c4c" />
            <circle cx="5" cy="12" r="4" fill="#8c6d32" />
            <circle cx="-18" cy="8" r="3" fill="#aa8c4c" />
          </g>

          {/* Mini slice detail beside */}
          <g transform="translate(110, 290) scale(0.45) rotate(25)">
            <circle cx="0" cy="0" r="100" fill="url(#delPlateGrad)" stroke="#aa8c4c" strokeWidth="4" />
            <circle cx="0" cy="0" r="92" fill="#faf5e7" />
            <circle cx="0" cy="0" r="45" fill="none" stroke="#d2bc8d" strokeWidth="3" />
          </g>
        </svg>
      );

    case 'jack-dehydrated':
      return (
        <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="jackFruitBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff8e3" />
              <stop offset="100%" stopColor="#ffe6a3" />
            </linearGradient>
            <linearGradient id="jackPetal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffbf00" />
              <stop offset="60%" stopColor="#e39500" />
              <stop offset="100%" stopColor="#b06b00" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="180" fill="url(#jackFruitBg)" />
          
          {/* Dehydrated Jack bulbs - 3 prominent golden pods */}
          {/* Pod 1 (Main Center) */}
          <g transform="translate(195,190) rotate(10) scale(1.1)">
            {/* Golden pulp body */}
            <path d="M -50,0 C -60,-60 -20,-90 0,-90 C 20,-90 60,-60 50,0 C 45,45 20,60 0,60 C -20,60 -45,45 -50,0 Z" fill="url(#jackPetal)" filter="drop-shadow(0px 8px 12px rgba(176, 107, 0, 0.35))" />
            {/* Inside seed core impression - dehydrated shrunk slit */}
            <path d="M -10,-40 C -15,-20 -15,10 0,10 C 15,10 15,-20 10,-40 C 8,-50 -8,-50 -10,-40 Z" fill="#753d00" opacity="0.3" />
            <path d="M -6,-40 L 6,10" stroke="#f4dfb5" strokeWidth="2" opacity="0.4" strokeLinecap="round" fill="none" />
            {/* Fibre networks */}
            <path d="M -35,-45 Q -20,-60 -5,-75" stroke="#fceab8" strokeWidth="1.5" fill="none" opacity="0.7" />
            <path d="M 35,-45 Q 20,-60 5,-75" stroke="#fceab8" strokeWidth="1.5" fill="none" opacity="0.7" />
            <path d="M -40,-10 Q -20,10 -5,25" stroke="#fceab8" strokeWidth="1.5" fill="none" opacity="0.7" />
            <path d="M 40,-10 Q 20,10 5,25" stroke="#fceab8" strokeWidth="1.5" fill="none" opacity="0.7" />
          </g>

          {/* Pod 2 (Left Bottom) */}
          <g transform="translate(120, 270) rotate(-45) scale(0.75)">
            <path d="M -50,0 C -60,-60 -20,-90 0,-90 C 20,-90 60,-60 50,0 C 45,45 20,60 0,60 C -20,60 -45,45 -50,0 Z" fill="url(#jackPetal)" />
          </g>

          {/* Pod 3 (Right Top) */}
          <g transform="translate(280, 120) rotate(50) scale(0.65)">
            <path d="M -50,0 C -60,-60 -20,-90 0,-90 C 20,-90 60,-60 50,0 C 45,45 20,60 0,60 C -20,60 -45,45 -50,0 Z" fill="url(#jackPetal)" />
          </g>
        </svg>
      );

    case 'banana-chips':
      return (
        <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bananaBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fffbf0" />
              <stop offset="100%" stopColor="#f7e1b5" />
            </linearGradient>
            <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fadb66" />
              <stop offset="60%" stopColor="#dfaf17" />
              <stop offset="100%" stopColor="#ab7b00" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="180" fill="url(#bananaBg)" />
          
          {/* Cascade of Crispy banana chips */}
          {/* Main central chip */}
          <g transform="translate(200, 180) rotate(15)">
            {/* Crispy ruffled margin */}
            <path d="M -50,0 C -52,-45 -45,-52 0,-50 C 45,-52 52,-45 50,0 C 52,45 45,52 0,50 C -45,52 -52,45 -50,0 Z" fill="url(#chipGrad)" stroke="#c29104" strokeWidth="2" filter="drop-shadow(0px 8px 12px rgba(142, 102, 0, 0.35))" />
            {/* Intersecting soft seed lines */}
            <circle cx="0" cy="0" r="42" fill="#fff5cc" opacity="0.2" />
            <circle cx="0" cy="0" r="15" fill="#ab7b00" opacity="0.15" />
            {/* Small center seeds */}
            <circle cx="-5" cy="-5" r="2" fill="#523200" />
            <circle cx="5" cy="-2" r="1.5" fill="#523200" />
            <circle cx="-2" cy="6" r="2" fill="#523200" />
            <circle cx="4" cy="5" r="2.5" fill="#523200" />
            <circle cx="0" cy="-7" r="1.5" fill="#503000" />
            
            {/* Shiny butter glaze highlights */}
            <path d="M -35,-25 A 35,35 0 0,1 -20,-35" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* Secondary chip overlapping left */}
          <g transform="translate(130, 240) rotate(-35) scale(0.85)">
            <path d="M -50,0 C -52,-45 -45,-52 0,-50 C 45,-52 52,-45 50,0 C 52,45 45,52 0,50 C -45,52 -52,45 -50,0 Z" fill="url(#chipGrad)" stroke="#c29104" strokeWidth="1.5" filter="drop-shadow(0px 6px 10px rgba(142, 102, 0, 0.3))" />
            <circle cx="-3" cy="-3" r="2" fill="#523200" />
            <circle cx="3" cy="3" r="2" fill="#523200" />
            <path d="M -30,-20 A 30,30 0 0,1 -15,-30" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.5" />
          </g>

          {/* Tertiary chip overlapping right */}
          <g transform="translate(270, 220) rotate(60) scale(0.75)">
            <path d="M -50,0 C -52,-45 -45,-52 0,-50 C 45,-52 52,-45 50,0 C 52,45 45,52 0,50 C -45,52 -52,45 -50,0 Z" fill="url(#chipGrad)" stroke="#c29104" strokeWidth="1.5" filter="drop-shadow(0px 6px 10px rgba(142, 102, 0, 0.25))" />
            <circle cx="0" cy="4" r="2" fill="#523200" />
            <circle cx="-5" cy="-2" r="1.5" fill="#523200" />
          </g>
          
          {/* A small green banana leaf decorative slice */}
          <path d="M 60,320 Q 150,280 280,310 L 260,330 Q 150,300 70,335 Z" fill="#1e4620" opacity="0.2" />
        </svg>
      );
    
    default:
      return (
        <div class="w-full h-full bg-emerald-950/20 rounded-full flex items-center justify-center text-emerald-950">
          <span class="font-bold">Kakulu Malli</span>
        </div>
      );
  }
};
