import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// 1. CT Scan Icon - Bold Front View Circular Gantry with Red Aperture & Table
export function CTScanIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="ctGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#1D64D8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft Background Radial Aura */}
      <circle cx="40" cy="40" r="36" fill="url(#ctGlow)" />

      {/* Outer Gantry Housing */}
      <circle
        cx="40"
        cy="36"
        r="28"
        stroke="#0A1938"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Concentric Scan Ring Accents */}
      <path
        d="M 22 36 A 18 18 0 0 1 58 36"
        stroke="#1D64D8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="40"
        cy="36"
        r="12"
        stroke="#0A1938"
        strokeWidth="3"
        fill="#F0F9FF"
      />

      {/* Top Laser Guide / Sensor Dot */}
      <circle cx="40" cy="14" r="2.5" fill="#1D64D8" />

      {/* Side Status Indicators */}
      <circle cx="18" cy="36" r="2" fill="#0A1938" />
      <circle cx="62" cy="36" r="2" fill="#0A1938" />

      {/* Patient Table / Bed Slide (Bold Dual Tone) */}
      <rect
        x="24"
        y="42"
        width="32"
        height="8"
        rx="4"
        fill="#FFFFFF"
        stroke="#0A1938"
        strokeWidth="3"
      />
      <line
        x1="28"
        y1="46"
        x2="52"
        y2="46"
        stroke="#1D64D8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Pedestal Base */}
      <path
        d="M 28 50 L 26 62 H 54 L 52 50"
        stroke="#0A1938"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line
        x1="22"
        y1="62"
        x2="58"
        y2="62"
        stroke="#1D64D8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 2. MRI Icon - Bold Concentric Resonance Tunnel with Patient Couch
export function MRIIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="mriGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#1D64D8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft Background Glow */}
      <circle cx="40" cy="40" r="36" fill="url(#mriGlow)" />

      {/* Outer Magnetic Ring */}
      <circle
        cx="40"
        cy="38"
        r="29"
        stroke="#0A1938"
        strokeWidth="3.5"
      />

      {/* Red Contrast Outer Ring Arc */}
      <path
        d="M 14 38 A 26 26 0 0 1 66 38"
        stroke="#1D64D8"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Middle Magnetic Ring */}
      <circle
        cx="40"
        cy="38"
        r="20"
        stroke="#0A1938"
        strokeWidth="2.5"
        strokeDasharray="4 3"
      />

      {/* Inner Bore Ring */}
      <circle
        cx="40"
        cy="38"
        r="14"
        stroke="#1D64D8"
        strokeWidth="3"
        fill="#EFF6FF"
      />

      {/* Patient Bed Couch Ingress */}
      <rect
        x="26"
        y="42"
        width="28"
        height="8"
        rx="3"
        fill="#FFFFFF"
        stroke="#0A1938"
        strokeWidth="3"
      />
      <rect
        x="32"
        y="44"
        width="16"
        height="4"
        rx="2"
        fill="#1D64D8"
      />

      {/* Heavy Base Platform */}
      <path
        d="M 32 50 L 30 63 H 50 L 48 50"
        stroke="#0A1938"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line
        x1="24"
        y1="63"
        x2="56"
        y2="63"
        stroke="#0A1938"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <line
        x1="28"
        y1="63"
        x2="52"
        y2="63"
        stroke="#1D64D8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 3. X-Ray Icon - Bold Diagnostic Screen with Ribcage & Spine in Coral Red
export function XRayIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="xrayGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#1D64D8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft Background Glow */}
      <circle cx="40" cy="40" r="36" fill="url(#xrayGlow)" />

      {/* Monitor Display Housing */}
      <rect
        x="13"
        y="12"
        width="54"
        height="48"
        rx="8"
        fill="#0A1938"
        stroke="#0A1938"
        strokeWidth="3"
      />

      {/* Screen Frame Border in Red */}
      <rect
        x="16"
        y="15"
        width="48"
        height="42"
        rx="6"
        stroke="#1D64D8"
        strokeWidth="2"
      />

      {/* Spine Column (Bold Red Blocks) */}
      <line x1="40" y1="20" x2="40" y2="48" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="40" cy="24" r="2" fill="#1D64D8" />
      <circle cx="40" cy="30" r="2" fill="#1D64D8" />
      <circle cx="40" cy="36" r="2" fill="#1D64D8" />
      <circle cx="40" cy="42" r="2" fill="#1D64D8" />

      {/* Clavicles (Collar bones) */}
      <path
        d="M 28 22 Q 40 25 52 22"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Rib Pair 1 */}
      <path
        d="M 27 27 C 32 29 36 28 40 27 C 44 28 48 29 53 27"
        stroke="#1D64D8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Rib Pair 2 */}
      <path
        d="M 25 33 C 31 36 36 34 40 33 C 44 34 49 36 55 33"
        stroke="#1D64D8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Rib Pair 3 */}
      <path
        d="M 26 39 C 32 42 36 40 40 39 C 44 40 48 42 54 39"
        stroke="#1D64D8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Monitor Stand */}
      <path
        d="M 34 60 L 32 68 H 48 L 46 60"
        stroke="#0A1938"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line
        x1="26"
        y1="68"
        x2="54"
        y2="68"
        stroke="#1D64D8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 4. Ultrasound Icon - Bold Sonography Console with Sector Scan Fan & Waves
export function UltrasoundIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="usGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#1D64D8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft Background Glow */}
      <circle cx="40" cy="40" r="36" fill="url(#usGlow)" />

      {/* Ultrasound Monitor Box */}
      <rect
        x="15"
        y="12"
        width="50"
        height="36"
        rx="6"
        fill="#FFFFFF"
        stroke="#0A1938"
        strokeWidth="3"
      />

      {/* Red Screen Frame Highlight */}
      <rect
        x="18"
        y="15"
        width="44"
        height="30"
        rx="4"
        fill="#F8FAFC"
        stroke="#1D64D8"
        strokeWidth="2"
      />

      {/* Fan / Pie Wedge Sector Scan Shape */}
      <path
        d="M 40 18 L 26 38 A 18 18 0 0 0 54 38 Z"
        fill="#EFF6FF"
        stroke="#0A1938"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Ultrasound Sound Wave Arcs in Coral Red */}
      <path
        d="M 31 30 A 10 10 0 0 1 49 30"
        stroke="#1D64D8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 28 35 A 14 14 0 0 1 52 35"
        stroke="#1D64D8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="40" cy="24" r="2.5" fill="#1D64D8" />

      {/* Monitor Stand Base */}
      <rect
        x="36"
        y="48"
        width="8"
        height="6"
        fill="#0A1938"
      />

      {/* Console Keyboard / Panel Base */}
      <path
        d="M 20 54 L 16 64 H 64 L 60 54 Z"
        fill="#FFFFFF"
        stroke="#0A1938"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Trackball / Controls */}
      <circle cx="40" cy="59" r="2.5" fill="#1D64D8" />
      <line x1="24" y1="59" x2="32" y2="59" stroke="#0A1938" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="59" x2="56" y2="59" stroke="#0A1938" strokeWidth="2.5" strokeLinecap="round" />

      {/* Transducer Probe with Cable */}
      <path
        d="M 64 58 C 70 58 72 50 68 44 L 66 38"
        stroke="#0A1938"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="63"
        y="32"
        width="6"
        height="10"
        rx="2"
        fill="#1D64D8"
        stroke="#0A1938"
        strokeWidth="2"
      />
    </svg>
  );
}

// 5. Pathology Lab Icon - Bold Conical Flask & Test Tube with Coral-Red Fluid
export function PathologyIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="pathGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#1D64D8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft Background Glow */}
      <circle cx="40" cy="40" r="36" fill="url(#pathGlow)" />

      {/* Left Beaker (Partial behind) */}
      <path
        d="M 17 34 H 33 V 58 C 33 60 31 62 29 62 H 21 C 19 62 17 60 17 58 Z"
        fill="#EFF6FF"
        stroke="#0A1938"
        strokeWidth="3"
      />
      {/* Liquid in Beaker */}
      <path
        d="M 18 46 Q 25 43 32 46 V 58 C 32 60 30 61 29 61 H 21 C 20 61 18 60 18 58 Z"
        fill="#1D64D8"
        fillOpacity="0.8"
      />
      <line x1="20" y1="38" x2="24" y2="38" stroke="#0A1938" strokeWidth="2" />
      <line x1="20" y1="44" x2="26" y2="44" stroke="#0A1938" strokeWidth="2" />

      {/* Center Main Conical Erlenmeyer Flask */}
      <path
        d="M 37 16 H 49 V 28 L 62 58 C 63.5 61.5 61 65 57 65 H 29 C 25 65 22.5 61.5 24 58 L 37 28 Z"
        fill="#FFFFFF"
        stroke="#0A1938"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Rim Lip */}
      <line
        x1="35"
        y1="16"
        x2="51"
        y2="16"
        stroke="#0A1938"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Vibrant Red Liquid Fill with Waves */}
      <path
        d="M 28.5 48 Q 38 42 45 46 Q 52 50 57.5 48 L 60.5 58 C 61.5 60.5 59.5 63 56.5 63 H 29.5 C 26.5 63 24.5 60.5 25.5 58 Z"
        fill="#1D64D8"
      />

      {/* Measurement Hatch Marks on Flask */}
      <line x1="39" y1="34" x2="44" y2="34" stroke="#0A1938" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="36" y1="40" x2="42" y2="40" stroke="#0A1938" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="33" y1="46" x2="39" y2="46" stroke="#0A1938" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right Graduated Test Tube */}
      <rect
        x="55"
        y="22"
        width="11"
        height="38"
        rx="5.5"
        fill="#FFFFFF"
        stroke="#0A1938"
        strokeWidth="3"
      />
      {/* Liquid in Test Tube */}
      <path
        d="M 56 36 H 65 V 54 C 65 57 63 59 60.5 59 C 58 59 56 57 56 54 Z"
        fill="#1D64D8"
      />
      {/* Test tube marks */}
      <line x1="57" y1="28" x2="61" y2="28" stroke="#0A1938" strokeWidth="2" />
      <line x1="57" y1="32" x2="61" y2="32" stroke="#0A1938" strokeWidth="2" />
      <line x1="57" y1="36" x2="61" y2="36" stroke="#0A1938" strokeWidth="2" />

      {/* Chemical Reaction Bubble */}
      <circle cx="43" cy="24" r="2" fill="#1D64D8" />
      <circle cx="46" cy="20" r="1.5" fill="#1D64D8" />
    </svg>
  );
}

// 6. Dental Care Icon - Bold Tooth with Medical Cross & Coral Red Sparkles
export function DentalCareIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="dentalGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#1D64D8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft Background Glow */}
      <circle cx="40" cy="40" r="36" fill="url(#dentalGlow)" />

      {/* Anatomical Molar Tooth Outline */}
      <path
        d="M 23 28 C 21 38 23 48 26 56 C 28 61 32 64 36 60 C 39 56 40 46 40 46 C 40 46 41 56 44 60 C 48 64 52 61 54 56 C 57 48 59 38 57 28 C 55 18 48 18 40 22 C 32 18 25 18 23 28 Z"
        fill="#FFFFFF"
        stroke="#0A1938"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Medical Cross Badge in Center */}
      <rect x="36" y="27" width="8" height="18" rx="2" fill="#1D64D8" />
      <rect x="31" y="32" width="18" height="8" rx="2" fill="#1D64D8" />

      {/* Enamel Highlight Curve */}
      <path
        d="M 27 26 C 28 22 34 22 37 23"
        stroke="#0A1938"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Sparkle 1 (Large 4-point star) */}
      <path
        d="M 64 12 Q 64 19 71 19 Q 64 19 64 26 Q 64 19 57 19 Q 64 19 64 12 Z"
        fill="#1D64D8"
      />

      {/* Sparkle 2 (Medium 4-point star) */}
      <path
        d="M 56 26 Q 56 30 60 30 Q 56 30 56 34 Q 56 30 52 30 Q 56 30 56 26 Z"
        fill="#1D64D8"
      />

      {/* Sparkle Dot */}
      <circle cx="68" cy="27" r="2" fill="#1D64D8" />
    </svg>
  );
}
