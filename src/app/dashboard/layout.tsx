
'use client';

import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { ReactNode, useState, useEffect } from 'react';
import { Tool, headerStats, allTools } from '@/lib/mockData';
import { AnimatePresence } from 'framer-motion';
import MainContent from '@/components/dashboard/MainContent';
import CodeViewer from '@/components/dashboard/CodeViewer';
import ContactModal from '@/components/dashboard/ContactModal';

export default function Layout() {
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
        <AnimatePresence mode="wait">
          {selectedTool ? (
            <CodeViewer key="code-viewer" tool={selectedTool} onClose={handleCloseViewer} />
          ) : (
            <MainContent key="main-content" />
          )}
        </AnimatePresence>
        <ContactModal
          isOpen={!!modalTool}
          onClose={handleCloseModal}
          tool={modalTool}
        />
    </DashboardLayout>
  );
}
