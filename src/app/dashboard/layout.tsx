'use client';

import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { ReactNode, useState } from 'react';
import { Tool, headerStats } from '@/lib/mockData';
import DashboardPage from './page';

export default function Layout({ children }: { children: ReactNode }) {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [modalTool, setModalTool] = useState<Tool | null>(null);

  const handleSelectTool = (tool: Tool | null) => {
    if (tool === null) {
      setSelectedTool(null);
      setModalTool(null);
      return;
    }

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

  return (
    <DashboardLayout onSelectTool={handleSelectTool} stats={headerStats}>
      <DashboardPage
        selectedTool={selectedTool}
        modalTool={modalTool}
        onCloseViewer={handleCloseViewer}
        onCloseModal={handleCloseModal}
      />
    </DashboardLayout>
  );
}
