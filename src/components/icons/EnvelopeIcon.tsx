import React from 'react';

export const EnvelopeIcon = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <g
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 8l-10 5L2 8" />
    </g>
  </svg>
);
