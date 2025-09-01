'use client';

import React from 'react';
import AppSidebar from './Sidebar';
import Header, { type HeaderStats } from './Header';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
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

export default function DashboardLayout({ children, onSelectTool, stats }: DashboardLayoutProps) {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen w-full dashboard-background text-gray-300">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="size-7 group-data-[collapsible=icon]:hidden"
                asChild
              >
                <Link href="#" onClick={() => onSelectTool(null)}>
                  <PentoraLogo className="size-5" />
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
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2"
              asChild
            >
              <Link href="#">
                <PanelLeftClose className="group-data-[collapsible=icon]:hidden" />
                <PanelLeftOpen className="hidden group-data-[collapsible=icon]:block" />
                <span className="group-data-[collapsible=icon]:hidden">Collapse</span>
              </Link>
            </Button>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <Header stats={stats} />
          <main className="flex-1 p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
