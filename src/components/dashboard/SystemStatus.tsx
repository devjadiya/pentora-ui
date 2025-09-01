'use client';
import { motion } from 'framer-motion';
import { systemStatus } from '@/lib/mockData';
import { Progress } from '../ui/progress';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import React from 'react';

type Status = "active" | "warning" | "maintenance";

const statusConfig: Record<Status, { color: string, indicator: string }> = {
    "active": { color: "bg-green-500", indicator: "bg-green-400" },
    "warning": { color: "bg-yellow-500", indicator: "bg-yellow-400" },
    "maintenance": { color: "bg-red-500", indicator: "bg-red-400" },
};


export default function SystemStatus() {
    const [statuses, setStatuses] = useState(systemStatus);

    useEffect(() => {
        const interval = setInterval(() => {
            setStatuses(prevStatuses => prevStatuses.map(s => {
                if (s.status === 'maintenance') return s;
                const newValue = Math.min(100, Math.max(80, s.value + (Math.random() - 0.5) * 2));
                return { ...s, value: newValue };
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <motion.div
            variants={containerVariants}
            className="rounded-xl p-6 h-full"
            style={{
                background: 'rgba(26, 12, 46, 0.4)',
                backdropFilter: 'blur(12px)',
                border: '1px solid',
                borderImageSource: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                borderImageSlice: 1
            }}
        >
            <h2 className="text-xl font-bold font-headline text-white mb-4">System Status</h2>
            <div className="space-y-5">
                {statuses.map((system) => {
                    const config = statusConfig[system.status as Status];
                    return (
                        <div key={system.name}>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm text-gray-300 font-medium">{system.name}</span>
                                <div className="flex items-center gap-2">
                                     <span className={cn("text-sm font-semibold font-headline", config.color.replace('bg-', 'text-'))}>
                                        {system.status === 'maintenance' ? 'Maintenance' : `${system.value.toFixed(1)}%`}
                                     </span>
                                     <div className={cn("h-2.5 w-2.5 rounded-full", config.indicator)}></div>
                                </div>
                            </div>
                            <Progress 
                                value={system.value} 
                                className="h-2 bg-black/30"
                                indicatorClassName={config.color} 
                            />
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}

// Update Progress component to accept indicatorClassName
const OriginalProgress = Progress;
const CustomProgress = React.forwardRef<
    React.ElementRef<typeof OriginalProgress>,
    React.ComponentPropsWithoutRef<typeof OriginalProgress> & { indicatorClassName?: string }
>(({ indicatorClassName, ...props }, ref) => {
    return (
        <OriginalProgress
            ref={ref}
            {...props}
            // This is a bit of a trick to customize the indicator color since the original doesn't expose it
            // We pass the class name via style which the component will use
            style={{ '--progress-indicator-color': 'var(--primary)' } as React.CSSProperties}
            // And then override the style with a new class if provided
            indicatorClassName={cn('bg-primary', indicatorClassName)}
        />
    )
})
CustomProgress.displayName = "CustomProgress";

export { CustomProgress as Progress };
