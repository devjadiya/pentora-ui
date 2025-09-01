
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
import { PentoraLogo } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onSelectTool: (tool: Tool) => void;
  stats: HeaderStats;
}

export default function DashboardLayout({ children, onSelectTool, stats }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex">
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <AppSidebar onSelectTool={onSelectTool} />
      </div>
      <div className="md:pl-64 flex flex-col w-full">
        <Header stats={stats}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <AppSidebar onSelectTool={onSelectTool} />
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
