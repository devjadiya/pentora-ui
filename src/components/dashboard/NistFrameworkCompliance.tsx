'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { nistFrameworkData } from '@/lib/mockData';
import { Download } from 'lucide-react';

export default function NistFrameworkCompliance() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const getProgressColor = (score: number) => {
    if (score < 80) return 'bg-yellow-500';
    if (score < 90) return 'bg-blue-500';
    return 'bg-green-500';
  };

  return (
    <motion.div
      variants={containerVariants}
      className="rounded-xl p-6"
      style={{
        background: 'rgba(26, 12, 46, 0.4)',
        backdropFilter: 'blur(12px)',
        border: '1px solid',
        borderImageSource:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
        borderImageSlice: 1,
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-xl font-bold font-headline text-white">NIST Framework Compliance</h2>
          <p className="text-muted-foreground text-sm">
            Our platform aligns with the five core functions of the NIST Cybersecurity Framework.
          </p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4 md:mt-0">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download Compliance Report (PDF)
          </Button>
        </motion.div>
      </div>

      <div className="space-y-6">
        {nistFrameworkData.map((item) => (
          <div key={item.name} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-2">
              <h3 className="font-semibold text-white">{item.name}</h3>
            </div>
            <div className="md:col-span-6">
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
            <div className="md:col-span-4 flex items-center gap-4">
              <Progress
                value={item.score}
                className="h-2 bg-black/30 flex-1"
                indicatorClassName={getProgressColor(item.score)}
              />
              <span className="font-bold font-headline text-lg text-white w-12 text-right">
                {item.score}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
