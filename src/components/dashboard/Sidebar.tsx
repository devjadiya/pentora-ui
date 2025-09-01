'use client';
import {
  X,
  Search,
  ChevronDown,
  GitBranch,
  Lock,
} from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allTools, Tool } from '@/lib/mockData';
import { Input } from '../ui/input';

const PentoraLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="#8A2BE2" />
    <path
      d="M16 6L26 16L16 26L6 16L16 6Z"
      stroke="#0D0C22"
      strokeWidth="2"
    />
  </svg>
);

const Accordion = ({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ElementType;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <motion.button
        className="flex w-full items-center justify-between p-2 text-left text-sm font-semibold text-gray-300 hover:bg-white/5 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          <span>{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 0 : -90 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="overflow-hidden"
          >
            <div className="pt-2 pl-4 space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ToolItem = ({ tool, onSelectTool }: { tool: Tool, onSelectTool: (tool: Tool) => void }) => {
    const isFree = tool.type === 'Free';
    return (
        <motion.div
            layout="position"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            whileHover={{ 
                scale: 1.02, 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                originX: 0 
            }}
            className="flex items-center gap-3 p-2 rounded-md cursor-pointer"
            onClick={() => onSelectTool(tool)}
        >
            {isFree ? (
                <GitBranch className="h-4 w-4 text-green-400 flex-shrink-0" />
            ) : (
                <Lock className="h-4 w-4 text-purple-400 flex-shrink-0" />
            )}
            <div>
                <p className="text-sm font-medium text-white">{tool.name}</p>
                <p className="text-xs text-gray-400 truncate">{tool.description}</p>
            </div>
        </motion.div>
    );
};

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  onSelectTool: (tool: Tool) => void;
}

export default function Sidebar({ mobileOpen, setMobileOpen, onSelectTool }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return allTools.filter(tool => 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const groupedTools = useMemo(() => {
    return filteredTools.reduce((acc, tool) => {
        const category = tool.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(tool);
        return acc;
    }, {} as Record<string, Tool[]>);
  }, [filteredTools]);

  const sidebarContent = (
    <div className="flex h-full flex-col">
      <div className="p-6">
        <div className="mb-6 flex items-center gap-3">
          <PentoraLogo />
          <span className="text-2xl font-bold tracking-wider text-white">
            PENTORA
          </span>
        </div>
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 text-sm rounded-md bg-black/30 border-white/20 focus:ring-primary focus:border-primary backdrop-blur-sm"
            />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4 space-y-4">
        <AnimatePresence>
            {Object.entries(groupedTools).map(([category, tools]) => (
                <Accordion key={category} title={category} icon={GitBranch}>
                    {tools.map(tool => (
                        <ToolItem key={tool.id} tool={tool} onSelectTool={onSelectTool}/>
                    ))}
                </Accordion>
            ))}
        </AnimatePresence>
      </div>

       <div className="p-4 mt-auto border-t border-white/10">
          <p className="text-xs text-purple-300/70">
            Cybersecurity Tools & Solutions
          </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 transform bg-black/50 transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className="relative h-full w-[280px] bg-[rgba(26,12,46,0.9)] backdrop-blur-xl border-r border-white/10"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
          }}
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          {sidebarContent}
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-[280px] lg:flex-col z-30"
        style={{
          background: 'rgba(26, 12, 46, 0.4)',
          backdropFilter: 'blur(12px)',
          borderRight: '1px solid',
          borderImageSource:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
          borderImageSlice: 1,
        }}
      >
        {sidebarContent}
      </div>
    </>
  );
}
