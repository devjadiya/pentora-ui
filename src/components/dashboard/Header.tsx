
'use client';
import { Github, Bell, Terminal, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';

export type HeaderStats = {
  title: string;
  value: string;
  trend: string;
}[];

interface HeaderProps {
  stats: HeaderStats;
  children?: React.ReactNode;
}

const StatBlock = ({ title, value, trend }: { title: string, value: string, trend: string }) => (
    <div className="border-l border-border pl-4">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-baseline gap-2">
            <h4 className="font-headline text-2xl font-bold text-foreground">{value}</h4>
            {trend &&
              <div className="flex items-center text-xs text-green-400">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>{trend}</span>
              </div>
            }
        </div>
    </div>
);

export default function Header({ stats, children }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-card/80 px-4 backdrop-blur-sm md:px-6">
        <div className="flex items-center gap-4">
            {children}
            <h1 className="hidden md:block font-headline text-xl font-bold text-foreground">Global Security Overview</h1>
        </div>
        <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center divide-x divide-border">
                <div className="pr-6">
                    <p className="font-headline text-lg font-semibold text-destructive">Threat Level: CRITICAL</p>
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
                <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
                <Terminal className="h-5 w-5" />
            </Button>
      </div>
    </header>
  );
}
