import React from 'react';

const WorldMapSvg = () => (
    <svg className="w-full h-full" viewBox="0 0 1000 488" fill="rgba(138, 43, 226, 0.2)">
        {/* You can find many free simplified world map SVGs online. */}
        {/* This is a placeholder path data. For a real project, use a detailed one. */}
        <path d="M500 0 ... Z" /> {/* Placeholder for world map path data */}
        <g opacity="0.6">
            <path d="M499.999 487.331C775.992 487.331 999.331 378.256 999.331 243.666C999.331 109.075 775.992 0 499.999 0C224.007 0 0.667969 109.075 0.667969 243.666C0.667969 378.256 224.007 487.331 499.999 487.331Z" fill="url(#paint0_radial_1_12)"/>
        </g>
        <defs>
            <radialGradient id="paint0_radial_1_12" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(499.999 243.666) rotate(90) scale(243.666 499.332)">
            <stop stopColor="#8A2BE2" stopOpacity="0.3"/>
            <stop offset="1" stopColor="#0D0C22" stopOpacity="0"/>
            </radialGradient>
        </defs>
    </svg>
);

export default WorldMapSvg;
