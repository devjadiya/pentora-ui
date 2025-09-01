'use client';
import React from 'react';
import ThreatMap from './ThreatMap';
import { motion } from 'framer-motion';

export default function MainContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-1 gap-6"
    >
      <ThreatMap />
    </motion.div>
  );
}
