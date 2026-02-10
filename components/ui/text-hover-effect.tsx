"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Dancing_Script } from "next/font/google";

// Create the font instance
const dancingScript = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
});

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="120" // Fixed height for better control
      viewBox="0 0 1000 120" // Wider viewBox for longer text
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        {/* Red fill for the text */}
        <linearGradient
          id="redFill"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ef4444" /> {/* Red-600 */}
          <stop offset="50%" stopColor="#dc2626" /> {/* Red-700 */}
          <stop offset="100%" stopColor="#b91c1c" /> {/* Red-800 */}
        </linearGradient>

        {/* White outline gradient */}
        <linearGradient
          id="whiteOutline"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ffffff" /> {/* Pure white */}
          <stop offset="100%" stopColor="#f8fafc" /> {/* Slate-50 */}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="25%" // Slightly larger reveal area
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0.1, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>

        {/* Filter for white outline effect */}
        <filter id="outlineFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicker" />
          <feFlood floodColor="white" floodOpacity="1" result="whiteColor" />
          <feComposite in="whiteColor" in2="thicker" operator="in" result="whiteOutline" />
          <feMerge>
            <feMergeNode in="whiteOutline" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Base text - always visible filled red */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className={`${dancingScript.className}`}
        style={{
          fontSize: '5.5rem',
          fontWeight: '800',
          letterSpacing: '0.05em',
          fill: 'url(#redFill)',
          filter: 'drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))',
        }}
      >
        {text}
      </text>
      
      {/* White outline that appears on hover */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#whiteOutline)"
        strokeWidth="2"
        strokeLinejoin="round"
        className={`${dancingScript.className}`}
        style={{
          fontSize: '5.5rem',
          fontWeight: '800',
          letterSpacing: '0.05em',
          fill: 'none',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        {text}
      </text>
      
      {/* Optional: Animated glow effect on hover */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="white"
        strokeWidth="0.5"
        className={`${dancingScript.className}`}
        style={{
          fontSize: '5.5rem',
          fontWeight: '800',
          letterSpacing: '0.05em',
          fill: 'none',
        }}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: hovered ? 0 : 1000,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      
      {/* Alternative: Masked effect that follows cursor */}
      {hovered && (
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          mask="url(#textMask)"
          className={`${dancingScript.className}`}
          style={{
            fontSize: '5.5rem',
            fontWeight: '800',
            letterSpacing: '0.05em',
            fill: 'white',
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))',
          }}
        >
          {text}
        </text>
      )}
    </svg>
  );
};