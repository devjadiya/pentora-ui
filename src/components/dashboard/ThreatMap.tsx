'use client';

import { motion } from 'framer-motion';
import WorldMapSvg from './WorldMapSvg';
import { Share2 } from 'lucide-react';

const arcs = [
  { from: { x: 130, y: 120 }, to: { x: 380, y: 130 }, delay: 0 },
  { from: { x: 200, y: 250 }, to: { x: 450, y: 135 }, delay: 0.5 },
  { from: { x: 750, y: 280 }, to: { x: 480, y: 140 }, delay: 1 },
  { from: { x: 780, y: 110 }, to: { x: 460, y: 130 }, delay: 1.5 },
  { from: { x: 180, y: 290 }, to: { x: 420, y: 230 }, delay: 2 },
  { from: { x: 820, y: 240 }, to: { x: 480, y: 220 }, delay: 2.5 },
];

const Arc = ({ from, to, delay }: { from: {x:number, y:number}, to: {x:number, y:number}, delay: number }) => {
  const path = `M ${from.x},${from.y} Q ${(from.x + to.x) / 2} ${(from.y + to.y) / 2 - 100}, ${to.x} ${to.y}`;
  
  return (
    <motion.path
      d={path}
      fill="none"
      stroke="url(#arc-gradient)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 3,
        ease: "easeInOut",
        delay: delay
      }}
    />
  );
};


export default function ThreatMap() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      className="lg:col-span-4 rounded-xl p-6"
      style={{
        background: 'rgba(26, 12, 46, 0.4)',
        backdropFilter: 'blur(12px)',
        border: '1px solid',
        borderImageSource: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
        borderImageSlice: 1
      }}
    >
      <h2 className="text-xl font-bold text-white mb-4">Real-Time Global Threat Intelligence</h2>
      <div className="relative w-full aspect-[2/1]">
        <WorldMapSvg />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 450">
            <defs>
                <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: 'rgba(0,245,212,0)'}} />
                    <stop offset="50%" style={{stopColor: 'rgba(0,245,212,1)'}} />
                    <stop offset="100%" style={{stopColor: 'rgba(0,245,212,0)'}} />
                </linearGradient>
            </defs>
          {arcs.map((arc, index) => (
            <Arc key={index} from={arc.from} to={arc.to} delay={arc.delay} />
          ))}
        </svg>
      </div>
      <div className="flex items-center justify-end mt-4 text-sm text-gray-400">
        <Share2 className="w-4 h-4 mr-2 text-teal-400" />
        <span>Neutralized Attack Vectors</span>
      </div>
    </motion.div>
  );
}
