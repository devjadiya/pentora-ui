'use client';
import React from 'react';
import KPI_Card from './cards/KPI_Card';
import ThreatMap from './ThreatMap';
import { motion } from 'framer-motion';

interface MainContentProps {
  kpiData: {
    title: string;
    value: string;
    trend: string;
    icon: string;
  }[];
}

export default function MainContent({ kpiData }: MainContentProps) {
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
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      {kpiData.map((item, index) => (
        <KPI_Card
          key={index}
          title={item.title}
          value={item.value}
          trend={item.trend}
          icon={item.icon}
        />
      ))}
      <ThreatMap />
    </motion.div>
  );
}
