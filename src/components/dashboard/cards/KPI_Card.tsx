'use client';

import { motion, useInView, useSpring } from 'framer-motion';
import { ShieldCheck, Server, Bug, DatabaseZap, LucideProps } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';

const icons: { [key: string]: React.ComponentType<LucideProps> } = {
  ShieldCheck,
  Server,
  Bug,
  DatabaseZap
};

interface KPICardProps {
  title: string;
  value: string;
  trend: string;
  icon: string;
}

function AnimatedValue({ value: finalValue }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    
    // Extracts the number and the suffix (e.g., 'M', 'K')
    const numericValue = parseFloat(finalValue);
    const suffix = finalValue.replace(String(numericValue), '');

    const spring = useSpring(0, {
      mass: 0.8,
      stiffness: 100,
      damping: 20,
    });
  
    useEffect(() => {
      if (inView) {
        spring.set(numericValue);
      }
    }, [spring, numericValue, inView]);
  
    useEffect(() => {
      const unsubscribe = spring.on("change", (latest) => {
        if (ref.current) {
            let displayValue: string;
            // Use fixed notation based on whether the original number was an integer
            if (Number.isInteger(numericValue)) {
                displayValue = Math.round(latest).toLocaleString();
            } else {
                displayValue = latest.toLocaleString('en-US', {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                });
            }
            ref.current.textContent = displayValue + suffix;
        }
      });
      return unsubscribe;
    }, [spring, suffix, numericValue]);
  
    return <span ref={ref} />;
}

export default function KPI_Card({ title, value, trend, icon }: KPICardProps) {
  const IconComponent = icons[icon];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const trendColor = useMemo(() => {
    if (trend.startsWith('+')) return 'text-green-400';
    if (trend.startsWith('-')) return 'text-orange-400';
    return 'text-gray-400';
  }, [trend]);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0px 0px 20px rgba(138, 43, 226, 0.4)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="rounded-xl p-6"
      style={{
        background: 'rgba(26, 12, 46, 0.4)',
        backdropFilter: 'blur(12px)',
        border: '1px solid',
        borderImageSource: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
        borderImageSlice: 1
      }}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">{title}</p>
        {IconComponent && <IconComponent className="h-6 w-6 text-purple-400" />}
      </div>
      <div className="mt-4">
        <h3 className="text-4xl font-bold text-white"><AnimatedValue value={value} /></h3>
        <p className={`text-sm font-semibold ${trendColor}`}>{trend}</p>
      </div>
    </motion.div>
  );
}
