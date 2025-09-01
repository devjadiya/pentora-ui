'use client';

import { useState, useMemo } from 'react';
import KPI_Card from "@/components/dashboard/cards/KPI_Card";
import { kpiData, allTools, Tool } from "@/lib/mockData";
import { motion, AnimatePresence } from 'framer-motion';
import ThreatMap from "@/components/dashboard/ThreatMap";
import CodeViewer from '@/components/dashboard/CodeViewer';
import ContactModal from '@/components/dashboard/ContactModal';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function DashboardPage() {
    const [selectedToolId, setSelectedToolId] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPremiumTool, setSelectedPremiumTool] = useState<Tool | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const selectedTool = useMemo(() => {
        if (!selectedToolId) return null;
        return allTools.find(tool => tool.id === selectedToolId);
    }, [selectedToolId]);

    const handleSelectTool = (tool: Tool) => {
        if (tool.type === 'Free') {
            setSelectedToolId(tool.id);
        } else {
            setSelectedPremiumTool(tool);
            setIsModalOpen(true);
        }
    };
    
    const handleCloseViewer = () => {
        setSelectedToolId(null);
    }

    return (
      <DashboardLayout onSelectTool={handleSelectTool}>
        <ContactModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            tool={selectedPremiumTool}
        />
        <AnimatePresence mode="wait">
            {selectedTool ? (
                <motion.div
                    key="code-viewer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <CodeViewer tool={selectedTool} onClose={handleCloseViewer} />
                </motion.div>
            ) : (
                <motion.div 
                    key="main-dashboard"
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0 }}
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
            )}
        </AnimatePresence>
      </DashboardLayout>
    )
}
