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
  
    return <span ref={ref}>0</span>;
}

export default function KPI_Card({ title, value, trend, icon }: KPICardProps) {
  const IconComponent = icons[icon];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const trendColor = useMemo(() => {
    if (trend.startsWith('+')) return 'text-green-500';
    if (trend.startsWith('-')) return 'text-red-500';
    return 'text-muted-foreground';
  }, [trend]);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.03,
        borderColor: "hsl(var(--primary))"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="rounded-lg p-6 bg-card border"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground font-medium">{title}</p>
        {IconComponent && <IconComponent className="h-5 w-5 text-muted-foreground" />}
      </div>
      <div className="mt-4">
        <h3 className="text-4xl font-bold text-foreground font-headline"><AnimatedValue value={value} /></h3>
        <p className={`text-sm font-semibold ${trendColor}`}>{trend}</p>
      </div>
    </motion.div>
  );
}
