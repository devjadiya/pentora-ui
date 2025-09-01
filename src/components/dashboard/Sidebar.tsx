
'use client';
import React from 'react';
import {
  Activity,
  AlertTriangle,
  FileCode,
  ShieldCheck,
  Lock,
  GitBranch,
  Settings,
  LogOut,
  ShieldAlert
} from 'lucide-react';
import { allTools, Tool } from '@/lib/mockData';
import { PentoraLogo } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface SidebarProps {
  onSelectTool: (tool: Tool) => void;
}

const redTeamTools = allTools.filter(tool => tool.category === 'Red Team');
const blueTeamTools = allTools.filter(tool => tool.category === 'Blue Team');
const vulnAssessTools = allTools.filter(tool => tool.category === 'Vulnerability Assessment');

const ToolLink = ({ tool, onSelectTool }: { tool: Tool, onSelectTool: (tool: Tool) => void }) => (
    <button onClick={() => onSelectTool(tool)} className="w-full text-left flex items-center justify-between px-3 py-1.5 text-sm text-muted-foreground rounded-md hover:bg-secondary hover:text-foreground transition-colors">
        <div className="flex items-center gap-2">
            {tool.type === 'Premium' ? <Lock className="h-4 w-4" /> : <GitBranch className="h-4 w-4" />}
            <span>{tool.name}</span>
        </div>
        {tool.type === 'Premium' && <Badge variant="secondary" className="bg-primary/10 text-primary">PRO</Badge>}
    </button>
)

const SidebarSection = ({ title, icon, tools, onSelectTool }: { title: string, icon: React.ElementType, tools: Tool[], onSelectTool: (tool: Tool) => void }) => {
    const Icon = icon;
    return (
        <div className="px-3 py-2">
            <h2 className="mb-2 px-3 text-lg font-semibold tracking-tight font-headline flex items-center gap-2">
                <Icon className="h-5 w-5" />
                {title}
            </h2>
            <div className="space-y-1">
                {tools.map(tool => (
                    <ToolLink key={tool.id} tool={tool} onSelectTool={onSelectTool} />
                ))}
            </div>
        </div>
    );
};

export default function AppSidebar({ onSelectTool }: SidebarProps) {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2 bg-card border-r">
        <div className="flex h-16 items-center border-b px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold font-headline text-xl">
                <PentoraLogo className="h-6 w-6 text-primary" />
                <span>PENTORA</span>
            </Link>
        </div>
        <div className="flex-1 overflow-y-auto">
            <nav className="grid items-start text-sm font-medium">
                <SidebarSection title="Red Team Ops" icon={ShieldAlert} tools={redTeamTools} onSelectTool={onSelectTool} />
                <SidebarSection title="Blue Team Ops" icon={ShieldCheck} tools={blueTeamTools} onSelectTool={onSelectTool} />
                <SidebarSection title="Vuln Assessment" icon={FileCode} tools={vulnAssessTools} onSelectTool={onSelectTool} />
            </nav>
        </div>
         <div className="mt-auto p-4 space-y-2 border-t">
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" /> Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <LogOut className="h-4 w-4" /> Logout
            </Button>
        </div>
    </div>
  );
}
