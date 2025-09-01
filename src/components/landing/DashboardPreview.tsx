import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollFadeIn } from "./ScrollFadeIn";
import { AlertCircle, CheckCircle, Folder, File, Target } from "lucide-react";

const metrics = [
  { title: "Vulnerabilities Found", value: "1,204", icon: AlertCircle, color: "text-destructive" },
  { title: "Threats Neutralized", value: "891", icon: CheckCircle, color: "text-green-500" },
  { title: "Assets Monitored", value: "34,567", icon: Target, color: "text-primary" },
];

const fileStructure = [
    { name: 'production-api', type: 'folder' },
    { name: 'web-app-v2', type: 'folder', children: [
        { name: 'src', type: 'folder', children: [
            { name: 'components', type: 'folder' },
            { name: 'hooks', type: 'folder' },
            { name: 'auth.service.ts', type: 'file' },
        ]},
        { name: 'package.json', type: 'file' },
    ]},
    { name: 'cloud-config', type: 'folder' },
    { name: 'README.md', type: 'file' },
];

const renderFiles = (files: any[], level = 0) => (
    <ul className="space-y-1">
        {files.map(file => (
            <li key={file.name} style={{paddingLeft: `${level * 16}px`}}>
                <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                    {file.type === 'folder' ? <Folder className="h-4 w-4 text-primary" /> : <File className="h-4 w-4" />}
                    <span>{file.name}</span>
                </div>
                {file.children && renderFiles(file.children, level + 1)}
            </li>
        ))}
    </ul>
);

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="text-center font-headline text-4xl font-bold">Live Threat Dashboard</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Get a real-time, transparent view of your security posture. Our dashboard provides actionable insights at a glance.
          </p>
        </ScrollFadeIn>
        
        <ScrollFadeIn delay="200ms" className="mt-12">
            <Card className="w-full max-w-5xl mx-auto bg-card border">
                <div className="flex flex-col h-[600px]">
                    <div className="flex items-center justify-between p-3 border-b">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-sm text-muted-foreground">Pentora - Security Dashboard</div>
                        <div></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 flex-1">
                        <div className="hidden md:block col-span-1 p-4 border-r overflow-y-auto">
                           <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-4">Repository Explorer</h4>
                           {renderFiles(fileStructure)}
                        </div>
                        <div className="col-span-1 md:col-span-3 flex flex-col">
                            <Tabs defaultValue="overview" className="flex-1 flex flex-col">
                                <TabsList className="m-2 bg-transparent border-b rounded-none justify-start">
                                    <TabsTrigger value="overview">Overview.js</TabsTrigger>
                                    <TabsTrigger value="vulnerabilities">Vulnerabilities.json</TabsTrigger>
                                </TabsList>
                                <TabsContent value="overview" className="flex-1 p-4 overflow-y-auto">
                                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                       {metrics.map(metric => (
                                            <Card key={metric.title} className="bg-secondary border">
                                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                    <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
                                                    <metric.icon className={`h-4 w-4 ${metric.color}`} />
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="text-2xl font-bold">{metric.value}</div>
                                                </CardContent>
                                            </Card>
                                       ))}
                                   </div>
                                   <img src="https://picsum.photos/800/400" data-ai-hint="graph chart" alt="Dashboard Chart" className="w-full h-auto rounded-md opacity-75" />
                                </TabsContent>
                                <TabsContent value="vulnerabilities" className="flex-1 p-4 overflow-y-auto">
                                    <pre className="text-xs text-muted-foreground bg-secondary p-4 rounded-md"><code>{`
[
  {
    "id": "CVE-2024-XXXX",
    "severity": "CRITICAL",
    "component": "auth.service.ts",
    "description": "Remote Code Execution vulnerability in authentication token handling.",
    "status": "Patched"
  },
  {
    "id": "PENT-002",
    "severity": "HIGH",
    "component": "production-api/database.js",
    "description": "SQL Injection possibility via unsanitized user input.",
    "status": "Pending Review"
  }
]
                                    `}</code></pre>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </Card>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
