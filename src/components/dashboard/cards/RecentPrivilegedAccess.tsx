
'use client';
import { motion } from 'framer-motion';
import { recentPrivilegedAccessData } from '@/lib/mockData';
import { UserCheck, Shield, GanttChartSquare, ArrowUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const roleConfig: Record<string, { icon: React.ElementType, color: string }> = {
    "Admin": { icon: Shield, color: "text-red-500" },
    "Developer": { icon: GanttChartSquare, color: "text-primary" },
    "System": { icon: UserCheck, color: "text-purple-400" },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function RecentPrivilegedAccess() {
    return (
        <motion.div
            variants={cardVariants}
            className="lg:col-span-2"
        >
             <Card className="h-full bg-card border">
                <CardHeader>
                    <CardTitle>Recent High-Privilege Access</CardTitle>
                    <CardDescription>A log of recent actions performed by high-privilege accounts.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    <Button variant="ghost" size="sm">
                                        User <ArrowUpDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </TableHead>
                                <TableHead>Action</TableHead>
                                <TableHead>
                                     <Button variant="ghost" size="sm">
                                        Role <ArrowUpDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </TableHead>
                                <TableHead className="text-right">
                                     <Button variant="ghost" size="sm">
                                        Timestamp <ArrowUpDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentPrivilegedAccessData.map((item) => {
                                const config = roleConfig[item.role];
                                const Icon = config.icon;
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">{item.user}</TableCell>
                                        <TableCell className="text-muted-foreground">{item.action}</TableCell>
                                        <TableCell>
                                             <Badge variant="outline" className={cn("whitespace-nowrap", config.color.replace('text-', 'border-') + "/50", config.color.replace('text-', 'bg-') + "/10", config.color)}>
                                                <Icon className={cn("h-3.5 w-3.5 mr-1 -ml-0.5", config.color)} />
                                                {item.role}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right text-muted-foreground">{item.time}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </motion.div>
    );
}
