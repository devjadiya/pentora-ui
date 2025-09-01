
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Folder,
  File as FileIcon,
  Lock,
  GitBranch
} from 'lucide-react';
import { fileSystem, Tool } from '@/lib/mockData';
import { useSidebar } from '../ui/sidebar';
import { ScrollArea } from '../ui/scroll-area';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface SidebarBodyProps {
  onSelectTool: (tool: Tool | null) => void;
}

const TreeView = ({ data, onSelectTool, level = 0 }: { data: Tool[], onSelectTool: (tool: Tool) => void, level?: number }) => {
    const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});

    const toggleFolder = (id: string) => {
        setOpenFolders(prev => ({...prev, [id]: !prev[id]}));
    }
    
    return (
        <div className="space-y-1">
            {data.map(item => {
                const isFolder = !!item.children;
                const isOpen = openFolders[item.id] ?? true;

                if (isFolder) {
                    return (
                        <div key={item.id}>
                            <div 
                                className="flex items-center gap-2 p-1.5 rounded-md cursor-pointer hover:bg-secondary text-sm"
                                style={{ paddingLeft: `${level * 16 + 6}px` }}
                                onClick={() => toggleFolder(item.id)}
                            >
                                <ChevronRight className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-90')} />
                                <Folder className="h-4 w-4 mr-1 text-primary/70" />
                                <span className="font-medium text-foreground/80">{item.name}</span>
                            </div>
                            {isOpen && (
                                <div className="mt-1">
                                    <TreeView data={item.children!} onSelectTool={onSelectTool} level={level + 1} />
                                </div>
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
                        style={{ paddingLeft: `${level * 16 + 6}px` }}
                        onClick={() => onSelectTool(item)}
                    >
                        <div className="w-4 h-4 mr-2" />
                        {isPremium ? 
                            <Lock className="h-4 w-4 mr-1 text-primary flex-shrink-0" /> : 
                            <GitBranch className="h-4 w-4 mr-1 text-green-500 flex-shrink-0" />
                        }
                        <span className="text-muted-foreground">{item.name}</span>
                    </motion.div>
                )
            })}
        </div>
    )
}

const CollapsedSidebar = ({ onSelectTool }: SidebarBodyProps) => (
    <div className="flex flex-col items-center mt-4 space-y-2">
        <Tooltip>
            <TooltipTrigger asChild>
                <div 
                    className="p-3 rounded-md cursor-pointer hover:bg-secondary"
                    onClick={() => onSelectTool(null)}
                >
                    <Folder className="h-6 w-6 text-primary/70" />
                </div>
            </TooltipTrigger>
            <TooltipContent side="right">
                <p>Browse Tools</p>
            </TooltipContent>
        </Tooltip>
    </div>
);


const SidebarBody = ({ onSelectTool }: SidebarBodyProps) => {
  const { open } = useSidebar();

  if (!open) {
    return <CollapsedSidebar onSelectTool={onSelectTool} />
  }

  return (
    <div className="flex h-full flex-col p-2">
      <div className="mb-2 px-3">
        <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
          Tool Explorer
        </p>
      </div>
      <ScrollArea className="flex-1 pr-2">
        <TreeView data={fileSystem} onSelectTool={onSelectTool} />
      </ScrollArea>
    </div>
  );
};

const Sidebar = {
  Body: SidebarBody,
};

export default Sidebar;
