
'use client';

import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { ReactNode, useState, useEffect } from 'react';
import { Tool, headerStats, allTools } from '@/lib/mockData';
import DashboardPage from './page';

export default function Layout({ children }: { children: ReactNode }) {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(() => {
    // Find the 'CyberSec Framework' tool by its ID.
    const folder = allTools.find(f => f.id === 'vuln-assess-folder');
    return folder?.children?.find(t => t.id === 'free-00') || null;
  });
  const [modalTool, setModalTool] = useState<Tool | null>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const handleSelectTool = (tool: Tool) => {
    if (tool.type === 'Premium') {
      setModalTool(tool);
    } else {
      setSelectedTool(tool);
      // Collapse sidebar only when a file is clicked, not a folder
      if (!tool.children) {
        setIsSidebarCollapsed(true);
      }
    }
  };

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleCloseViewer = () => {
    setSelectedTool(null);
  };

  const handleCloseModal = () => {
    setModalTool(null);
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DashboardLayout 
      onSelectTool={handleSelectTool} 
      stats={headerStats}
      isSidebarCollapsed={isSidebarCollapsed}
      onToggleSidebar={handleToggleSidebar}
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
