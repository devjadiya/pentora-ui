'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MainContent from '@/components/dashboard/MainContent';
import CodeViewer from '@/components/dashboard/CodeViewer';
import ContactModal from '@/components/dashboard/ContactModal';
import { allTools, Tool, kpiData } from '@/lib/mockData';

export default function DashboardPage() {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [modalTool, setModalTool] = useState<Tool | null>(null);

  const handleSelectTool = (tool: Tool | null) => {
    if (tool?.type === 'Premium') {
      setModalTool(tool);
      setSelectedTool(null);
    } else {
      setSelectedTool(tool);
      setModalTool(null);
    }
  };

  const handleCloseViewer = () => {
    setSelectedTool(null);
  };

  const handleCloseModal = () => {
    setModalTool(null);
  };
  
  const tool = selectedTool ? allTools.find(t => t.id === selectedTool.id) : null;

  return (
    <>
      <AnimatePresence mode="wait">
        {tool ? (
          <CodeViewer key="code-viewer" tool={tool} onClose={handleCloseViewer} />
        ) : (
          <MainContent key="main-content" kpiData={kpiData} />
        )}
      </AnimatePresence>
      <ContactModal
        isOpen={!!modalTool}
        onClose={handleCloseModal}
        tool={modalTool}
      />
    </>
  );
}
