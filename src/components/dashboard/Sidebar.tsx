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
  X
} from 'lucide-react';
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

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  onSelectTool: (tool: Tool | null) => void;
}

const categoryIcons = {
  'Red Team': <TestTube2 className="h-5 w-5 mr-3 text-red-400" />,
  'Blue Team': <Shield className="h-5 w-5 mr-3 text-blue-400" />,
  'Vulnerability Assessment': <ScanSearch className="h-5 w-5 mr-3 text-yellow-400" />,
};

const categories: Tool['category'][] = [
  'Red Team',
  'Blue Team',
  'Vulnerability Assessment',
];

export default function Sidebar({ mobileOpen, setMobileOpen, onSelectTool }: SidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>(categories);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredTools = allTools.filter((tool) =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sidebarContent = (
    <div className="flex h-full flex-col">
       <div className="p-6">
            <button onClick={() => onSelectTool(null)} className="mb-6 flex items-center gap-3">
                <PentoraLogo />
                <span className="text-2xl font-bold tracking-wider text-white">
                    PENTORA
                </span>
            </button>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                    type="search"
                    placeholder="Search tools..."
                    className="w-full h-10 pl-10 rounded-md bg-black/30 border-white/20 focus:ring-primary focus:border-primary backdrop-blur-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-2">
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
                    <div className="flex items-center">
                        {categoryIcons[category]}
                        <span className="font-semibold text-white">{category}</span>
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
                            onClick={() => {
                                onSelectTool(tool);
                                setMobileOpen(false);
                            }}
                          >
                            {isFree ? (
                              <GitBranch className="h-4 w-4 text-green-400 flex-shrink-0" />
                            ) : (
                              <Lock className="h-4 w-4 text-purple-400 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-200">{tool.name}</p>
                              <p className="text-xs text-gray-500">{tool.description}</p>
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
