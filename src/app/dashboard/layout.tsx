
'use client';

import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { ReactNode, useState, useEffect } from 'react';
import { Tool, headerStats } from '@/lib/mockData';
import DashboardPage from './page';
import { useSidebar } from '@/components/ui/sidebar';

function LayoutController({ children }: { children: ReactNode }) {
  const { setOpen } = useSidebar();
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
      // Collapse sidebar on file selection
      if (tool.children === undefined) {
         setOpen(false);
      }
    }
  };

  const handleCloseViewer = () => {
    setSelectedTool(null);
  };

  const handleCloseModal = () => {
    setModalTool(null);
  };

   // Collapse sidebar by default on load for desktop
   useEffect(() => {
    setOpen(false);
  }, [setOpen]);

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


export default function Layout({ children }: { children: ReactNode }) {
  return <LayoutController>{children}</LayoutController>
}
