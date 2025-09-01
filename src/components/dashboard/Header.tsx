'use client';
import { Github, Terminal, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { SidebarTrigger } from '../ui/sidebar';

export type HeaderStats = {
  title: string;
  value: string;
  trend: string;
}[];

interface HeaderProps {
  stats: HeaderStats;
}

const StatBlock = ({ title, value, trend }: { title: string, value: string, trend: string }) => (
    <div className="border-l border-white/10 pl-4">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-baseline gap-2">
            <h4 className="text-2xl font-bold text-white">{value}</h4>
            <div className="flex items-center text-xs text-green-400">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>{trend}</span>
            </div>
        </div>
    </div>
);

export default function Header({ stats }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-transparent px-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
            <SidebarTrigger className="md:hidden" />
            <h1 className="hidden md:block text-xl font-bold text-white">Global Security Overview</h1>
        </div>
        <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center divide-x divide-white/10">
                <div className="pr-6">
                    <p className="text-lg font-semibold text-red-400">Threat Level: CRITICAL</p>
                </div>
                <div className="flex items-center gap-6 pl-6">
                    {stats.map(stat => (
                        <StatBlock key={stat.title} {...stat} />
                    ))}
                </div>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="ghost" size="icon">
                <Terminal className="h-5 w-5" />
            </Button>
      </div>
    </header>
  );
}
