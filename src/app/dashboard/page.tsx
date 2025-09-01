'use client';

import KPI_Card from "@/components/dashboard/cards/KPI_Card";
import { kpiData } from "@/lib/mockData";
import { motion } from 'framer-motion';
import ThreatMap from "@/components/dashboard/ThreatMap";


export default function DashboardPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col gap-6"
        >
            <motion.div
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
            >
                {kpiData.map((data, index) => (
                    <KPI_Card 
                        key={index}
                        title={data.title}
                        value={data.value}
                        trend={data.trend}
                        icon={data.icon}
                    />
                ))}
            </motion.div>
            
            <ThreatMap />
        </motion.div>
    )
}
