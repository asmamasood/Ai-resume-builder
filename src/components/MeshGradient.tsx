export function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
      {/* SVG Mesh Gradient */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient 1 */}
          <radialGradient id="mesh-gradient-1" cx="20%" cy="30%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </radialGradient>

          {/* Gradient 2 */}
          <radialGradient id="mesh-gradient-2" cx="80%" cy="20%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>

          {/* Gradient 3 */}
          <radialGradient id="mesh-gradient-3" cx="50%" cy="80%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
          </radialGradient>

          {/* Gradient 4 */}
          <radialGradient id="mesh-gradient-4" cx="10%" cy="70%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>

          {/* Gradient 5 */}
          <radialGradient id="mesh-gradient-5" cx="90%" cy="85%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
          </radialGradient>

          {/* Filter for blur */}
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
          </filter>
        </defs>

        {/* Apply gradients */}
        <rect width="100%" height="100%" fill="url(#mesh-gradient-1)" filter="url(#blur)">
          <animate
            attributeName="x"
            values="0%;10%;0%"
            dur="20s"
            repeatCount="indefinite"
          />
        </rect>
        <rect width="100%" height="100%" fill="url(#mesh-gradient-2)" filter="url(#blur)">
          <animate
            attributeName="x"
            values="0%;-5%;0%"
            dur="25s"
            repeatCount="indefinite"
          />
        </rect>
        <rect width="100%" height="100%" fill="url(#mesh-gradient-3)" filter="url(#blur)">
          <animate
            attributeName="y"
            values="0%;8%;0%"
            dur="22s"
            repeatCount="indefinite"
          />
        </rect>
        <rect width="100%" height="100%" fill="url(#mesh-gradient-4)" filter="url(#blur)">
          <animate
            attributeName="y"
            values="0%;-10%;0%"
            dur="18s"
            repeatCount="indefinite"
          />
        </rect>
        <rect width="100%" height="100%" fill="url(#mesh-gradient-5)" filter="url(#blur)">
          <animate
            attributeName="x"
            values="0%;-8%;0%"
            dur="24s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="0%;5%;0%"
            dur="26s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
}
