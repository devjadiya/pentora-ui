'use client';
import { motion } from 'framer-motion';
import { recentPrivilegedAccessData } from '@/lib/mockData';
import { UserCheck, Shield, GanttChartSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const roleConfig: Record<string, { icon: React.ElementType, color: string }> = {
    "Admin": { icon: Shield, color: "text-red-500" },
    "Developer": { icon: GanttChartSquare, color: "text-blue-500" },
    "System": { icon: UserCheck, color: "text-purple-400" },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function RecentPrivilegedAccess() {
    return (
        <motion.div
            variants={cardVariants}
            className="rounded-lg p-6 h-full flex flex-col bg-card border"
        >
            <h2 className="text-lg font-bold font-headline text-foreground mb-4">Recent High-Privilege Access</h2>
            <div className="space-y-4 overflow-y-auto pr-2 [mask-image:linear-gradient(to_bottom,white_90%,transparent_100%)]">
                {recentPrivilegedAccessData.map((item) => {
                    const config = roleConfig[item.role];
                    const Icon = config.icon;
                    return (
                        <div key={item.id} className="flex items-start gap-4">
                            <Icon className={cn("h-5 w-5 mt-1 flex-shrink-0", config.color)} />
                            <div className="flex-1">
                                <p className="text-sm text-foreground">
                                    <span className="font-semibold text-foreground/80">{item.user}</span> {item.action}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                    <span>{item.time}</span>
                                    <Badge variant="outline" className={cn(config.color.replace('text-', 'border-') + "/50", config.color.replace('text-', 'bg-') + "/10", config.color)}>
                                        {item.role}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
