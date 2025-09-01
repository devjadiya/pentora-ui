'use client';

import { AnimatePresence } from 'framer-motion';
import MainContent from '@/components/dashboard/MainContent';
import CodeViewer from '@/components/dashboard/CodeViewer';
import ContactModal from '@/components/dashboard/ContactModal';
import { allTools, Tool, kpiData } from '@/lib/mockData';

interface DashboardPageProps {
  selectedTool: Tool | null;
  modalTool: Tool | null;
  onCloseViewer: () => void;
  onCloseModal: () => void;
}

export default function DashboardPage({ selectedTool, modalTool, onCloseViewer, onCloseModal }: DashboardPageProps) {
  const tool = selectedTool ? allTools.find(t => t.id === selectedTool.id) : null;

  return (
    <>
      <AnimatePresence mode="wait">
        {tool ? (
          <CodeViewer key="code-viewer" tool={tool} onClose={onCloseViewer} />
        ) : (
          <MainContent key="main-content" kpiData={kpiData} />
        )}
      </AnimatePresence>
      <ContactModal
        isOpen={!!modalTool}
        onClose={onCloseModal}
        tool={modalTool}
      />
    </>
  );
}
