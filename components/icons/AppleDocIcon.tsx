import * as React from "react";

export default function AppleDocIcon({
  className = "h-8 w-8 text-black",
}: { className?: string }) {

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      role="img"
    >
      {/* Fondo redondeado negro (usa currentColor) */}
      <rect x="2" y="2" width="44" height="44" rx="12" fill="currentColor" />

      {}
      <g transform="translate(10,10)" fill="#fff">
        {/* hoja con pliegue */}
        <path d="M8 0h10l6 6v18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" />
        <path d="M18 0v6h6" />

        {}
        <rect x="7" y="10" width="16" height="2" rx="1" />
        <rect x="7" y="14.5" width="16" height="2" rx="1" />
        <rect x="7" y="19" width="12" height="2" rx="1" />
      </g>
    </svg>
  );
}
