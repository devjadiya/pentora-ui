'use client';
import { motion } from 'framer-motion';
import { systemStatus } from '@/lib/mockData';
import { Progress } from '../ui/progress';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import React from 'react';

type Status = "active" | "warning" | "maintenance";

const statusConfig: Record<Status, { color: string, indicator: string }> = {
    "active": { color: "bg-green-500", indicator: "bg-green-500" },
    "warning": { color: "bg-yellow-500", indicator: "bg-yellow-500" },
    "maintenance": { color: "bg-red-500", indicator: "bg-red-500" },
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
            className="rounded-lg p-6 h-full bg-card border"
        >
            <h2 className="text-xl font-bold font-headline text-foreground mb-4">System Status</h2>
            <div className="space-y-5">
                {statuses.map((system) => {
                    const config = statusConfig[system.status as Status];
                    return (
                        <div key={system.name}>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm text-foreground font-medium">{system.name}</span>
                                <div className="flex items-center gap-2">
                                     <span className={cn("text-sm font-semibold font-headline", config.color.replace('bg-', 'text-'))}>
                                        {system.status === 'maintenance' ? 'Maintenance' : `${system.value.toFixed(1)}%`}
                                     </span>
                                     <div className={cn("h-2.5 w-2.5 rounded-full", config.indicator)}></div>
                                </div>
                            </div>
                            <Progress 
                                value={system.value} 
                                className="h-2 bg-secondary"
                                indicatorClassName={config.color} 
                            />
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
