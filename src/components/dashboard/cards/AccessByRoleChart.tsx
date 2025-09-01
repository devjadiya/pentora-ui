'use client';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { accessByRoleData } from '@/lib/mockData';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AccessByRoleChart() {
    return (
        <motion.div
            variants={cardVariants}
            className="rounded-lg p-6 h-full flex flex-col bg-card border"
        >
            <h2 className="text-lg font-bold font-headline text-foreground mb-4">Access by Role (RBAC)</h2>
            <div className="flex-1 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={accessByRoleData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8A2BE2"
                            paddingAngle={5}
                            dataKey="value"
                            nameKey="name"
                        >
                            {accessByRoleData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
                            ))}
                        </Pie>
                        <Legend 
                            iconType="circle"
                            formatter={(value) => <span className="text-muted-foreground">{value}</span>}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
