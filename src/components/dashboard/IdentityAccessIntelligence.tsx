'use client';
import { motion } from 'framer-motion';
import AccessByRoleChart from './cards/AccessByRoleChart';
import MfaAdoptionRate from './cards/MfaAdoptionRate';
import RecentPrivilegedAccess from './cards/RecentPrivilegedAccess';

export default function IdentityAccessIntelligence() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } },
  };
  return (
    <motion.div variants={containerVariants}>
      <h2 className="text-xl font-bold text-white mb-4 mt-2">Identity & Access Intelligence</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AccessByRoleChart />
        <RecentPrivilegedAccess />
        <MfaAdoptionRate />
      </div>
    </motion.div>
  );
}
