
'use client';

import React from 'react';
import AppSidebar from './Sidebar';
import Header, { type HeaderStats } from './Header';
import {
  Sidebar as AppSidebarContainer,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Tool } from '@/lib/mockData';
import { PentoraLogo } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onSelectTool: (tool: Tool | null) => void;
  stats: HeaderStats;
}

const CollapseButton = () => {
    const { toggleSidebar, open } = useSidebar();
    return (
         <Button
            variant="ghost"
            className="w-full justify-start gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2"
            onClick={toggleSidebar}
        >
            <PanelLeftClose className="group-data-[collapsible=icon]:hidden" />
            <PanelLeftOpen className="hidden group-data-[collapsible=icon]:block" />
            <span className="group-data-[collapsible=icon]:hidden">Collapse</span>
        </Button>
    )
}

export default function DashboardLayout({ children, onSelectTool, stats }: DashboardLayoutProps) {
  return (
      <div className="min-h-screen w-full bg-background text-foreground flex">
        <AppSidebarContainer>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="size-7 group-data-[collapsible=icon]:hidden"
                asChild
              >
                <Link href="#" onClick={() => onSelectTool(null)}>
                  <PentoraLogo className="size-5 text-primary" />
                </Link>
              </Button>
              <h1 className="font-headline text-lg font-bold group-data-[collapsible=icon]:hidden">
                PENTORA
              </h1>
              <SidebarTrigger className="ml-auto group-data-[collapsible=icon]:ml-0" />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <AppSidebar.Body onSelectTool={onSelectTool} />
          </SidebarContent>
          <SidebarFooter>
            <CollapseButton />
          </SidebarFooter>
        </AppSidebarContainer>
        
        <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out md:ml-[var(--sidebar-width-icon)] group-data-[state=expanded]:md:ml-[var(--sidebar-width)]">
          <Header stats={stats} />
          <main className="flex-1 p-6 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
  );
}
