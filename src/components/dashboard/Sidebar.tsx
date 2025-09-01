
'use client';
import React from 'react';
import {
  FileCode,
  ShieldCheck,
  Lock,
  GitBranch,
  Settings,
  LogOut,
  ShieldAlert,
  ChevronLeft,
} from 'lucide-react';
import { allTools, Tool } from '@/lib/mockData';
import { PentoraLogo } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

interface SidebarProps {
  onSelectTool: (tool: Tool) => void;
  isCollapsed: boolean;
  onToggle?: () => void;
}

const redTeamTools = allTools.filter(tool => tool.category === 'Red Team');
const blueTeamTools = allTools.filter(tool => tool.category === 'Blue Team');
const vulnAssessTools = allTools.filter(tool => tool.category === 'Vulnerability Assessment');

const NavLink = ({ tool, onSelectTool, isCollapsed }: { tool: Tool, onSelectTool: (tool: Tool) => void, isCollapsed: boolean }) => {
  const linkContent = (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        {tool.type === 'Premium' ? <Lock className="h-4 w-4" /> : <GitBranch className="h-4 w-4" />}
        {!isCollapsed && <span>{tool.name}</span>}
      </div>
      {!isCollapsed && tool.type === 'Premium' && <Badge variant="secondary" className="bg-primary/10 text-primary">PRO</Badge>}
    </div>
  );

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={() => onSelectTool(tool)} className={cn(
            "w-full text-left flex items-center px-3 py-2 text-sm text-muted-foreground rounded-md hover:bg-secondary hover:text-foreground transition-colors",
            isCollapsed && "justify-center"
          )}>
            {linkContent}
          </button>
        </TooltipTrigger>
        {isCollapsed && (
          <TooltipContent side="right" sideOffset={5}>
            {tool.name}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

const SidebarSection = ({ title, icon, tools, onSelectTool, isCollapsed }: { title: string, icon: React.ElementType, tools: Tool[], onSelectTool: (tool: Tool) => void, isCollapsed: boolean }) => {
    const Icon = icon;
    return (
        <div className="px-3 py-2">
            {!isCollapsed ? (
                <h2 className="mb-2 px-3 text-lg font-semibold tracking-tight font-headline flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {title}
                </h2>
            ) : (
                <div className="my-2 border-t border-border" />
            )}
            <div className="space-y-1">
                {tools.map(tool => (
                    <NavLink key={tool.id} tool={tool} onSelectTool={onSelectTool} isCollapsed={isCollapsed}/>
                ))}
            </div>
        </div>
    );
};

const NavIconLink = ({ icon, label, isCollapsed }: { icon: React.ElementType, label: string, isCollapsed: boolean }) => {
  const Icon = icon;
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
            <Button variant="ghost" className={cn("w-full justify-start gap-2", isCollapsed && "justify-center")}>
                <Icon className="h-4 w-4" />
                {!isCollapsed && label}
            </Button>
        </TooltipTrigger>
        {isCollapsed && (
          <TooltipContent side="right" sideOffset={5}>
            {label}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};


export default function AppSidebar({ onSelectTool, isCollapsed, onToggle }: SidebarProps) {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2 bg-card border-r">
        <div className={cn("flex h-16 items-center border-b px-6", isCollapsed && "justify-center px-2")}>
            <Link href="/" className="flex items-center gap-2 font-semibold font-headline text-xl">
                <PentoraLogo className="h-6 w-6 text-primary" />
                {!isCollapsed && <span>PENTORA</span>}
            </Link>
        </div>
        <div className="flex-1 overflow-y-auto">
            <nav className="grid items-start text-sm font-medium">
                <SidebarSection title="Red Team Ops" icon={ShieldAlert} tools={redTeamTools} onSelectTool={onSelectTool} isCollapsed={isCollapsed} />
                <SidebarSection title="Blue Team Ops" icon={ShieldCheck} tools={blueTeamTools} onSelectTool={onSelectTool} isCollapsed={isCollapsed} />
                <SidebarSection title="Vuln Assessment" icon={FileCode} tools={vulnAssessTools} onSelectTool={onSelectTool} isCollapsed={isCollapsed} />
            </nav>
        </div>
         <div className="mt-auto p-4 space-y-2 border-t">
            <NavIconLink icon={Settings} label="Settings" isCollapsed={isCollapsed} />
            <NavIconLink icon={LogOut} label="Logout" isCollapsed={isCollapsed} />
            {onToggle && (
              <Button onClick={onToggle} variant="outline" size="icon" className={cn("w-full h-10", isCollapsed ? "justify-center" : "")}>
                <ChevronLeft className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
              </Button>
            )}
        </div>
    </div>
  );
}
