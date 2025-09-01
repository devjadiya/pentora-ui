'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  GitBranch,
  Lock,
  Search,
  Shield,
  TestTube2,
  ScanSearch,
  X,
  ShieldOff,
  UserCheck,
  ServerCog,
} from 'lucide-react';
import { allTools, Tool } from '@/lib/mockData';
import { Input } from '../ui/input';
import React from 'react';
import { useSidebar } from '../ui/sidebar';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const categoryIcons: Record<Tool['category'], React.ReactElement> = {
  'Red Team': <TestTube2 className="h-5 w-5" />,
  'Blue Team': <Shield className="h-5 w-5" />,
  'Vulnerability Assessment': <ScanSearch className="h-5 w-5" />,
};

const categoryColors: Record<Tool['category'], string> = {
  'Red Team': 'text-red-400',
  'Blue Team': 'text-blue-400',
  'Vulnerability Assessment': 'text-yellow-400',
};

const categories: Tool['category'][] = [
  'Red Team',
  'Blue Team',
  'Vulnerability Assessment',
];

const quickActions = [
  { name: 'Lock Down', icon: ShieldOff },
  { name: 'Full Scan', icon: ScanSearch },
  { name: 'User Audit', icon: UserCheck },
  { name: 'Backup', icon: ServerCog },
];

interface SidebarBodyProps {
  onSelectTool: (tool: Tool | null) => void;
}

const SidebarBody = ({ onSelectTool }: SidebarBodyProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>(categories);
  const { open } = useSidebar();

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredTools = allTools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!open) {
    // Render icon-only view when sidebar is collapsed
    return (
      <div className="flex flex-col items-center mt-4 space-y-2">
        {quickActions.map((action) => (
          <Tooltip key={action.name}>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <action.icon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{action.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <Separator className="my-2 bg-white/10" />
        {categories.map((category) => (
          <Tooltip key={category}>
            <TooltipTrigger>
              <div
                className={`p-3 rounded-lg cursor-pointer hover:bg-white/5 ${categoryColors[category]}`}
              >
                {React.cloneElement(categoryIcons[category], {
                  className: 'h-5 w-5',
                })}
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{category}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col p-2">
      <div className="relative mb-2 px-2">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="search"
          placeholder="Search tools..."
          className="w-full h-10 pl-10 rounded-md bg-black/30 border-white/20 focus:ring-primary focus:border-primary backdrop-blur-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mb-2 px-2">
        <p className="text-xs font-semibold text-muted-foreground mb-2 px-2">
          Quick Actions
        </p>
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action) => (
            <Button
              key={action.name}
              variant="ghost"
              className="flex-col h-16 bg-black/20 hover:bg-white/5"
            >
              <action.icon className="h-5 w-5 mb-1" />
              <span className="text-xs">{action.name}</span>
            </Button>
          ))}
        </div>
      </div>

      <Separator className="my-2 bg-white/10" />

      <ScrollArea className="flex-1">
        <div className="space-y-1 pr-2">
          <AnimatePresence>
            {categories.map((category) => {
              const toolsForCategory = filteredTools.filter(
                (tool) => tool.category === category
              );
              const isExpanded = openCategories.includes(category);

              if (toolsForCategory.length === 0 && searchTerm) return null;

              return (
                <motion.div key={category} layout="position">
                  <div
                    className="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-white/5"
                    onClick={() => toggleCategory(category)}
                  >
                    <div
                      className={`flex items-center ${categoryColors[category]}`}
                    >
                      {React.cloneElement(categoryIcons[category], {
                        className: 'h-5 w-5 mr-3',
                      })}
                      <span className="font-semibold text-white">
                        {category}
                      </span>
                    </div>
                    <motion.div animate={{ rotate: isExpanded ? 0 : -90 }}>
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1"
                      >
                        {toolsForCategory.map((tool) => {
                          const isFree = tool.type === 'Free';
                          return (
                            <motion.div
                              key={tool.id}
                              layout="position"
                              whileHover={{ scale: 1.02, x: 2 }}
                              className="flex items-center gap-3 p-2 rounded-md cursor-pointer"
                              onClick={() => onSelectTool(tool)}
                            >
                              {isFree ? (
                                <GitBranch className="h-4 w-4 text-green-400 flex-shrink-0" />
                              ) : (
                                <Lock className="h-4 w-4 text-purple-400 flex-shrink-0" />
                              )}
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-200">
                                  {tool.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {tool.description}
                                </p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </ScrollArea>
    </div>
  );
};

const Sidebar = {
  Body: SidebarBody,
};

export default Sidebar;
