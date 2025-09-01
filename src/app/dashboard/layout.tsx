'use client'

import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { ReactNode, useState } from 'react';
import { Tool } from '@/lib/mockData';

export default function Layout({ children }: { children: ReactNode }) {
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

  return (
    <DashboardLayout onSelectTool={handleSelectTool}>{children}</DashboardLayout>
  );
}
