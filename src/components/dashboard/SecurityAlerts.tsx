'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Info, ShieldAlert, ShieldCheck } from 'lucide-react';
import { securityAlerts as initialAlerts } from '@/lib/mockData';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

type Severity = "Critical" | "High" | "Medium" | "Low";

const severityConfig: Record<Severity, { icon: React.ElementType, color: string, badge: string }> = {
    "Critical": { icon: ShieldAlert, color: "text-red-500", badge: "border-red-500/50 bg-red-500/10 text-red-400" },
    "High": { icon: AlertTriangle, color: "text-orange-400", badge: "border-orange-500/50 bg-orange-500/10 text-orange-300" },
    "Medium": { icon: Info, color: "text-yellow-400", badge: "border-yellow-500/50 bg-yellow-500/10 text-yellow-300" },
    "Low": { icon: ShieldCheck, color: "text-blue-400", badge: "border-blue-500/50 bg-blue-500/10 text-blue-300" },
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
            className="rounded-lg p-6 h-full flex flex-col bg-card border"
        >
            <h2 className="text-xl font-bold font-headline text-foreground mb-4">Security Alerts</h2>
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
                                    className="flex items-start gap-4 p-3 rounded-md bg-secondary"
                                >
                                    <Icon className={cn("h-5 w-5 mt-1 flex-shrink-0", config.color)} />
                                    <div className="flex-1">
                                        <p className="text-sm text-foreground">{alert.description}</p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                            <span>{alert.time}</span>
                                            <Badge variant="outline" className={cn("text-xs", config.badge)}>{alert.severity}</Badge>
                                            <Badge variant="outline">{alert.source}</Badge>
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
