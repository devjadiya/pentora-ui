
'use client';

import {
  Bell,
  Home,
  Package2,
  Settings,
  ShieldCheck,
  Users,
  AlertTriangle,
  GitBranch,
  Briefcase,
  FileText,
  GanttChartSquare,
  Wrench,
  Globe,
  Github,
  Lock,
  ArrowRight,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarMenuBadge,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import Link from 'next/link';

const projects = [
  {
    title: 'Project Chimera - Web App Pentest',
    id: 'PENT-2024-001',
    status: 'Completed',
    statusColor: 'bg-green-500/20 text-green-300 border-green-500/30',
    type: 'Red Team',
    typeColor: 'bg-red-500/10 text-red-300 border-red-500/20',
    source: 'github',
    team: ['AV', 'LP', 'MC'],
    description: 'Comprehensive penetration test of the client\'s primary e-commerce platform.'
  },
  {
    title: 'Project Leviathan - Cloud Security Audit',
    id: 'PENT-2024-002',
    status: 'In Progress',
    statusColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    type: 'Blue Team',
    typeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    source: 'private',
    team: ['SR', 'AV'],
    description: 'Ongoing audit and hardening of AWS infrastructure and configurations.'
  },
  {
    title: 'Project Hydra - API Vulnerability Scan',
    id: 'PENT-2024-003',
    status: 'Pending',
    statusColor: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    type: 'Red Team',
    typeColor: 'bg-red-500/10 text-red-300 border-red-500/20',
    source: 'private',
    team: ['MC'],
    description: 'Scheduled automated and manual testing of all public-facing REST APIs.'
  }
];

const tools = [
    { name: 'ThreatMapper AI', description: 'Predictive threat modeling', icon: GitBranch },
    { name: 'VulnScanner 2.0', description: 'Automated vulnerability analysis', icon: Wrench },
    { name: 'AuthShield SDK', description: 'Secure authentication library', icon: Lock },
]

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Sidebar>
          <SidebarContent>
            <SidebarHeader>
              <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
                <Package2 className="h-6 w-6" />
                <h2 className="font-headline text-lg font-semibold">Pentora</h2>
              </div>
               <h2 className="font-headline text-lg font-semibold group-data-[collapsible=icon]:block hidden">P</h2>
            </SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton href="#" isActive>
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="#">
                  <Briefcase className="h-5 w-5" />
                  <span>Projects</span>
                   <SidebarMenuBadge>3</SidebarMenuBadge>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="#">
                  <Wrench className="h-5 w-5" />
                  <span>Tools</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="#">
                  <FileText className="h-5 w-5" />
                  <span>Reports</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
               <SidebarMenuItem>
                <SidebarMenuButton href="#">
                  <Globe className="h-5 w-5" />
                  <span>Threat Intel</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton href="#">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <SidebarTrigger className="sm:hidden" />
            <div className="flex-1">
                <h1 className="font-headline text-xl">Security Command Center</h1>
            </div>
            <div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
            </div>
          </header>
          <main className="flex-1 p-4 sm:px-6 space-y-6">
             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
                    <CardHeader>
                        <CardTitle>Active Projects</CardTitle>
                        <CardDescription>Engagements currently in progress.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">1</div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Completed This Quarter</CardTitle>
                        <CardDescription>Projects successfully delivered.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">12</div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Tooling Arsenal</CardTitle>
                        <CardDescription>Proprietary tools available.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">3</div>
                    </CardContent>
                </Card>
            </div>
            
            <div>
                <h2 className="font-headline text-2xl font-semibold mb-4">Project Pipeline</h2>
                <div className="grid gap-6 lg:grid-cols-3">
                    {projects.map(project => (
                        <Card key={project.id} className="flex flex-col bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge variant="secondary" className={project.typeColor}>{project.type}</Badge>
                                            <Badge variant="outline" className={project.statusColor}>{project.status}</Badge>
                                        </div>
                                        <CardTitle className="text-lg">{project.title}</CardTitle>
                                    </div>
                                    {project.source === 'github' ? <Github className="h-5 w-5 text-muted-foreground"/> : <Lock className="h-5 w-5 text-muted-foreground"/>}
                                </div>
                                <CardDescription>{project.id}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <div className="flex -space-x-2">
                                    {project.team.map(member => (
                                        <Avatar key={member} className="h-8 w-8 border-2 border-background">
                                            <AvatarFallback>{member}</AvatarFallback>
                                        </Avatar>
                                    ))}
                                </div>
                                <Button variant="ghost" size="sm">
                                    View Report <ArrowRight className="ml-2 h-4 w-4"/>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
