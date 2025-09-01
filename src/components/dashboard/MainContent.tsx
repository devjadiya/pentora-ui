'use client';
import React from 'react';
import ThreatMap from './ThreatMap';
import { motion } from 'framer-motion';
import { kpiData } from '@/lib/mockData';
import KPI_Card from './cards/KPI_Card';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((data, index) => (
                <KPI_Card key={index} {...data} />
            ))}
        </div>
        <ThreatMap />
    </motion.div>
  );
}
