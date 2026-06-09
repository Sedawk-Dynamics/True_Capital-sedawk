"use client";
import { useState } from "react";

// Uses /public/logo.png if present; otherwise falls back to the built-in SVG mark
// so the header/footer never break. Drop a transparent, cropped logo at
// public/logo.png and it is picked up automatically.
export default function Logo({ id = "lg", className = "logo" }) {
  const [imgOk, setImgOk] = useState(true);

  if (imgOk) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo.png"
        alt="True Capital & Advisory"
        className={className}
        onError={() => setImgOk(false)}
        style={{ height: 40, width: "auto", objectFit: "contain" }}
      />
    );
  }

  const g = `tc-${id}`;
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="True Capital logo">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#1E5BFF" />
          <stop offset="1" stopColor="#4F8BFF" />
        </linearGradient>
      </defs>
      <rect x="13" y="13" width="27" height="7.5" rx="2" fill={`url(#${g})`} />
      <rect x="22.75" y="13" width="7.5" height="32" rx="2" fill={`url(#${g})`} />
      <rect x="35" y="29" width="6" height="16" rx="1.5" fill="#1E5BFF" opacity="0.85" />
      <path d="M30 42 L40 32 L46 36 L53 20" stroke="#4F8BFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45.5 18.5 L54.5 17 L53 26" stroke="#4F8BFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 46 C 18 58 46 58 54 43" stroke="#4F8BFF" strokeWidth="3.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}
