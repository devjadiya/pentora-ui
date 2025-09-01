'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Menu } from 'lucide-react';
import { Tool } from '@/lib/mockData';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onSelectTool: (tool: Tool) => void;
}

export default function DashboardLayout({ children, onSelectTool }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full dashboard-background text-gray-300">
      <div className="flex">
        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden fixed top-4 left-4 z-50">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar */}
        <Sidebar 
          mobileOpen={sidebarOpen} 
          setMobileOpen={setSidebarOpen} 
          onSelectTool={onSelectTool} 
        />

        {/* Main content */}
        <div className="flex flex-col flex-1 lg:ml-[280px]">
          <Header />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
