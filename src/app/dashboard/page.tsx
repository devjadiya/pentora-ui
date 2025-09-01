
'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import MainContent from '@/components/dashboard/MainContent';
import CodeViewer from '@/components/dashboard/CodeViewer';
import ContactModal from '@/components/dashboard/ContactModal';
import { Tool } from '@/lib/mockData';

interface DashboardPageProps {
  selectedTool: Tool | null;
  modalTool: Tool | null;
  onCloseViewer: () => void;
  onCloseModal: () => void;
}

export default function DashboardPage({
  selectedTool,
  modalTool,
  onCloseViewer,
  onCloseModal,
}: DashboardPageProps) {
  return (
    <>
      <AnimatePresence mode="wait">
        {selectedTool ? (
          <CodeViewer key="code-viewer" tool={selectedTool} onClose={onCloseViewer} />
        ) : (
          <MainContent key="main-content" />
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
