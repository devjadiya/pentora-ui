
'use client';

import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { ReactNode, useState } from 'react';
import { Tool, headerStats } from '@/lib/mockData';
import DashboardPage from './page';

export default function Layout({ children }: { children: ReactNode }) {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [modalTool, setModalTool] = useState<Tool | null>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSelectTool = (tool: Tool) => {
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
    <DashboardLayout 
      onSelectTool={handleSelectTool} 
      stats={headerStats}
      isSidebarCollapsed={isSidebarCollapsed}
      onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
    >
      <DashboardPage
        selectedTool={selectedTool}
        modalTool={modalTool}
        onCloseViewer={handleCloseViewer}
        onCloseModal={handleCloseModal}
      />
    </DashboardLayout>
  );
}
