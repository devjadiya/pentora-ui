
'use client';
import React, { useState } from 'react';
import {
  FileCode,
  Folder,
  ChevronDown,
  ChevronRight,
  ShieldAlert,
  ChevronLeft,
  Briefcase,
} from 'lucide-react';
import { allTools, Tool } from '@/lib/mockData';
import { PentoraLogo } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface SidebarProps {
  onSelectTool: (tool: Tool) => void;
  isCollapsed: boolean;
  onToggle?: () => void;
}

const TreeView = ({
  tools,
  onSelectTool,
  level = 0,
}: {
  tools: Tool[];
  onSelectTool: (tool: Tool) => void;
  level?: number;
}) => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});

  const toggleFolder = (id: string) => {
    setOpenFolders(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-1">
      {tools.map(tool => {
        const isFolder = !!tool.children;
        const isOpen = openFolders[tool.id] || false;
        const Icon = isFolder ? Folder : FileCode;
        const ChevronIcon = isOpen ? ChevronDown : ChevronRight;

        return (
          <div key={tool.id} style={{ paddingLeft: `${level * 16}px` }}>
            <div
              className="flex items-center gap-2 text-sm text-muted-foreground rounded-md hover:bg-secondary hover:text-foreground transition-colors cursor-pointer w-full text-left px-2 py-1.5"
              onClick={() => (isFolder ? toggleFolder(tool.id) : onSelectTool(tool))}
            >
              {isFolder ? <ChevronIcon className="h-4 w-4 flex-shrink-0" /> : <div className="w-4"></div>}
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span className="flex-1 truncate">{tool.name}</span>
            </div>
            {isFolder && isOpen && (
              <div className="mt-1">
                <TreeView tools={tool.children!} onSelectTool={onSelectTool} level={level + 1} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const CollapsedSidebar = ({ onToggle }: { onToggle?: () => void }) => {
  const navItems = [
    { label: "Browse Tools", icon: Briefcase },
    { label: "Red Team Ops", icon: ShieldAlert },
  ];

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      {navItems.map(item => (
        <TooltipProvider key={item.label} delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10" onClick={onToggle}>
                <item.icon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              {item.label}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default function AppSidebar({ onSelectTool, isCollapsed, onToggle }: SidebarProps) {
  return (
    <div className="flex h-full max-h-screen flex-col bg-card border-r">
      <div className={cn("flex h-16 items-center border-b px-6", isCollapsed && "justify-center px-2")}>
        <Link href="/" className="flex items-center gap-2 font-semibold font-headline text-xl">
            <PentoraLogo className="h-8 w-auto" />
            {!isCollapsed && <span className="truncate">PENTORA</span>}
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {isCollapsed ? (
          <CollapsedSidebar onToggle={onToggle} />
        ) : (
          <div className="p-2">
            <h2 className="px-2 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Explorer</h2>
            <TreeView tools={allTools} onSelectTool={onSelectTool} />
          </div>
        )}
      </div>

      {onToggle && !isCollapsed && (
        <div className="mt-auto p-2 border-t">
          <Button onClick={onToggle} variant="ghost" className="w-full justify-center">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Collapse Sidebar
          </Button>
        </div>
      )}
    </div>
  );
}
