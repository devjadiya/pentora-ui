
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Folder,
  Lock,
  GitBranch,
  ShieldAlert,
  ShieldCheck,
  FileCode,
} from 'lucide-react';
import { fileSystem, Tool } from '@/lib/mockData';
import { useSidebar } from '../ui/sidebar';
import { ScrollArea } from '../ui/scroll-area';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';

interface SidebarBodyProps {
  onSelectTool: (tool: Tool | null) => void;
}

const TreeView = ({ data, onSelectTool, level = 0 }: { data: Tool[], onSelectTool: (tool: Tool) => void, level?: number }) => {
    const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});

    const toggleFolder = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        setOpenFolders(prev => ({...prev, [id]: !prev[id]}));
    }
    
    return (
        <div className="space-y-1">
            {data.map(item => {
                const isFolder = !!item.children;
                const isOpen = openFolders[item.id] ?? false;

                if (isFolder) {
                    return (
                        <div key={item.id}>
                            <div 
                                className="flex items-center gap-2 p-1.5 rounded-md cursor-pointer hover:bg-secondary text-sm"
                                style={{ paddingLeft: `${level * 16 + 6}px` }}
                                onClick={(e) => toggleFolder(e, item.id)}
                            >
                                <ChevronRight className={cn('h-4 w-4 transition-transform flex-shrink-0', isOpen && 'rotate-90')} />
                                <Folder className="h-4 w-4 mr-1 text-primary/70" />
                                <span className="font-medium text-foreground/80 truncate">{item.name}</span>
                            </div>
                            {isOpen && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                >
                                    <div className="mt-1">
                                        <TreeView data={item.children!} onSelectTool={onSelectTool} level={level + 1} />
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    );
                }

                // It's a file
                const isPremium = item.type === 'Premium';
                return (
                    <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center p-1.5 rounded-md cursor-pointer hover:bg-secondary text-sm"
                        style={{ paddingLeft: `${level * 16 + 22}px` }}
                        onClick={() => onSelectTool(item)}
                    >
                        {isPremium ? 
                            <Lock className="h-4 w-4 mr-2 text-primary flex-shrink-0" /> : 
                            <GitBranch className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                        }
                        <span className="text-muted-foreground truncate">{item.name}</span>
                    </motion.div>
                )
            })}
        </div>
    )
}

const CollapsedSidebar = ({ onSelectTool }: SidebarBodyProps) => {
  const { toggleSidebar } = useSidebar();
  const categoryIcons = {
    'Red Team Operations': ShieldAlert,
    'Blue Team Defense': ShieldCheck,
    'Vulnerability Assessment': FileCode,
  };

  return (
    <div className="flex flex-col items-center mt-4 space-y-2">
      {fileSystem.map((category) => {
        const Icon = categoryIcons[category.name as keyof typeof categoryIcons] || Folder;
        return (
          <Tooltip key={category.id}>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9"
                onClick={toggleSidebar}
              >
                <Icon className="h-5 w-5 text-primary/80" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{category.name}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
};

const SidebarBody = ({ onSelectTool }: SidebarBodyProps) => {
  const { state, isMobile } = useSidebar();
  const isCollapsed = state === 'collapsed' && !isMobile;

  if (isCollapsed) {
    return <CollapsedSidebar onSelectTool={onSelectTool} />
  }

  return (
    <div className="flex h-full flex-col p-2">
      <div className="mb-2 px-1">
        <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
          Tool Explorer
        </p>
      </div>
      <ScrollArea className="flex-1 pr-1">
        <TreeView data={fileSystem} onSelectTool={onSelectTool} />
      </ScrollArea>
    </div>
  );
};

const Sidebar = {
  Body: SidebarBody,
};

export default Sidebar;
