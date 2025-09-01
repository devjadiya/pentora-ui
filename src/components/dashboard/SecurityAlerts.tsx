'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Info, ShieldAlert, ShieldCheck } from 'lucide-react';
import { securityAlerts as initialAlerts } from '@/lib/mockData';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

type Severity = "Critical" | "High" | "Medium" | "Low";

const severityConfig: Record<Severity, { icon: React.ElementType, color: string, badge: string }> = {
    "Critical": { icon: ShieldAlert, color: "text-red-400", badge: "bg-red-500/20 border-red-500/30" },
    "High": { icon: AlertTriangle, color: "text-orange-400", badge: "bg-orange-500/20 border-orange-500/30" },
    "Medium": { icon: Info, color: "text-yellow-400", badge: "bg-yellow-500/20 border-yellow-500/30" },
    "Low": { icon: ShieldCheck, color: "text-blue-400", badge: "bg-blue-500/20 border-blue-500/30" },
};

const possibleNewAlerts = [
    { severity: "Medium", description: "New device registration from 'corp-guest-05'.", source: "MDM-SYS" },
    { severity: "Low", description: "Policy update pushed to all endpoints.", source: "POLICY-ENG" },
    { severity: "High", description: "Unusual data egress from 'db-backup-server'.", source: "DLP-01" },
];

export default function SecurityAlerts() {
    const [alerts, setAlerts] = useState(initialAlerts);

    useEffect(() => {
        const interval = setInterval(() => {
            const newAlert = possibleNewAlerts[Math.floor(Math.random() * possibleNewAlerts.length)];
            setAlerts(prevAlerts => [
                {
                    id: Math.random(),
                    time: 'Just now',
                    ...newAlert
                },
                ...prevAlerts
            ].slice(0, 10)); // Keep the list from growing indefinitely
        }, 5000); // Add a new alert every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };
    
    return (
        <motion.div
            variants={containerVariants}
            className="rounded-xl p-6 h-full flex flex-col"
            style={{
                background: 'rgba(26, 12, 46, 0.4)',
                backdropFilter: 'blur(12px)',
                border: '1px solid',
                borderImageSource: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                borderImageSlice: 1
            }}
        >
            <h2 className="text-xl font-bold text-white mb-4">Security Alerts</h2>
            <div className="relative flex-1 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-full overflow-y-auto pr-4 space-y-3 [mask-image:linear-gradient(to_bottom,white_85%,transparent_100%)]">
                    <AnimatePresence initial={false}>
                        {alerts.map((alert) => {
                            const config = severityConfig[alert.severity as Severity];
                            const Icon = config.icon;
                            return (
                                <motion.div
                                    key={alert.id}
                                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
                                    layout
                                    className="flex items-start gap-4 p-3 rounded-lg bg-black/20"
                                >
                                    <Icon className={cn("h-5 w-5 mt-1 flex-shrink-0", config.color)} />
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-200">{alert.description}</p>
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                            <span>{alert.time}</span>
                                            <Badge variant="outline" className={cn("text-xs", config.badge)}>{alert.severity}</Badge>
                                            <Badge variant="outline" className="border-gray-700">{alert.source}</Badge>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}
