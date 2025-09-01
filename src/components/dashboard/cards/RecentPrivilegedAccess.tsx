'use client';
import { motion } from 'framer-motion';
import { recentPrivilegedAccessData } from '@/lib/mockData';
import { UserCheck, Shield, GanttChartSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const roleConfig: Record<string, { icon: React.ElementType, color: string }> = {
    "Admin": { icon: Shield, color: "text-red-400" },
    "Developer": { icon: GanttChartSquare, color: "text-blue-400" },
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
            className="rounded-xl p-6 h-full flex flex-col"
            style={{
                background: 'rgba(26, 12, 46, 0.4)',
                backdropFilter: 'blur(12px)',
                border: '1px solid',
                borderImageSource: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                borderImageSlice: 1
            }}
        >
            <h2 className="text-lg font-bold text-white mb-4">Recent High-Privilege Access</h2>
            <div className="space-y-4 overflow-y-auto pr-2 [mask-image:linear-gradient(to_bottom,white_90%,transparent_100%)]">
                {recentPrivilegedAccessData.map((item) => {
                    const config = roleConfig[item.role];
                    const Icon = config.icon;
                    return (
                        <div key={item.id} className="flex items-start gap-4">
                            <Icon className={cn("h-5 w-5 mt-1 flex-shrink-0", config.color)} />
                            <div className="flex-1">
                                <p className="text-sm text-gray-200">
                                    <span className="font-semibold">{item.user}</span> {item.action}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                    <span>{item.time}</span>
                                    <Badge variant="outline" className={cn("border-opacity-30", config.color.replace('text-', 'border-'), config.color.replace('text-','bg-') + "/10")}>
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
