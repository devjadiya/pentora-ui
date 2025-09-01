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
            className="rounded-xl p-6 h-full flex flex-col"
            style={{
                background: 'rgba(26, 12, 46, 0.4)',
                backdropFilter: 'blur(12px)',
                border: '1px solid',
                borderImageSource: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                borderImageSlice: 1
            }}
        >
            <h2 className="text-lg font-bold text-white mb-4">Access by Role (RBAC)</h2>
            <div className="flex-1 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={accessByRoleData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
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
                            formatter={(value) => <span className="text-gray-300">{value}</span>}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
