
'use client';

import React from 'react';
import AppSidebar from './Sidebar';
import Header, { type HeaderStats } from './Header';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tool } from '@/lib/mockData';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onSelectTool: (tool: Tool) => void;
  stats: HeaderStats;
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}

export default function DashboardLayout({ children, onSelectTool, stats, isSidebarCollapsed, onToggleSidebar }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex">
      <div className={cn(
        "hidden md:flex md:flex-col md:fixed md:inset-y-0 z-50 transition-all duration-300 ease-in-out",
        isSidebarCollapsed ? "md:w-20" : "md:w-64"
      )}>
        <AppSidebar onSelectTool={onSelectTool} isCollapsed={isSidebarCollapsed} onToggle={onToggleSidebar} />
      </div>
      <div className={cn(
        "flex flex-col w-full transition-all duration-300 ease-in-out",
        isSidebarCollapsed ? "md:pl-20" : "md:pl-64"
      )}>
        <Header stats={stats}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <AppSidebar onSelectTool={onSelectTool} isCollapsed={false} />
            </SheetContent>
          </Sheet>
        </Header>
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
