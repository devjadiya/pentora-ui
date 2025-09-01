
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { kpiData } from '@/lib/mockData';
import KPI_Card from './cards/KPI_Card';
import WorkforceAuthenticationEvents from './WorkforceAuthenticationEvents';
import SecurityAlerts from './SecurityAlerts';
import SystemStatus from './SystemStatus';
import IdentityAccessIntelligence from './IdentityAccessIntelligence';
import NistFrameworkCompliance from './NistFrameworkCompliance';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function MainContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
      <Tabs defaultValue="soc">
        <TabsList>
            <TabsTrigger value="soc">Security Overview (SOC)</TabsTrigger>
            <TabsTrigger value="iam">Identity & Access</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="soc" className="mt-6">
            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {kpiData.map((data, index) => (
                        <KPI_Card key={index} {...data} />
                    ))}
                </div>
                <WorkforceAuthenticationEvents />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <SecurityAlerts />
                    <SystemStatus />
                </div>
            </div>
        </TabsContent>

        <TabsContent value="iam" className="mt-6">
            <IdentityAccessIntelligence />
        </TabsContent>

        <TabsContent value="compliance" className="mt-6">
            <NistFrameworkCompliance />
        </Tabs.Content>
      </Tabs>
    </motion.div>
  );
}
