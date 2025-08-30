'use client';
import { ScrollFadeIn } from './ScrollFadeIn';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ShieldCheck, Server, CloudCog, Siren, Workflow, Users } from 'lucide-react';

const services = [
    {
        icon: Server,
        title: '24/7 Threat Monitoring (MDR)',
        description: 'Continuous surveillance of your digital assets with our Managed Detection and Response team to detect and neutralize threats in real-time.',
    },
    {
        icon: Siren,
        title: 'Incident Response & Digital Forensics',
        description: 'Rapid response to security breaches to contain the impact, eradicate threats, and recover operations, followed by deep forensic analysis.',
    },
    {
        icon: CloudCog,
        title: 'Cloud Security Posture Management (CSPM)',
        description: 'Securing your cloud environments (AWS, Azure, GCP) against misconfigurations, vulnerabilities, and identity-based threats.',
    },
    {
        icon: ShieldCheck,
        title: 'Vulnerability Management',
        description: "A continuous process of identifying, assessing, reporting, and remediating vulnerabilities across your organization's IT landscape.",
    },
    {
        icon: Workflow,
        title: 'Cybersecurity Automation (SOAR)',
        description: 'Implementing Security Orchestration, Automation, and Response workflows to accelerate and standardize your security operations.',
    },
    {
        icon: Users,
        title: 'Employee Security Training',
        description: 'Transform your workforce into a strong line of defense with engaging, practical training on phishing, social engineering, and security best practices.',
    },
];

const ServiceCard = ({ service, delay }: { service: typeof services[0], delay: string }) => (
    <ScrollFadeIn delay={delay} className="h-full">
        <div 
          className="group relative flex flex-col h-full rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 border border-white/10 bg-card/50 backdrop-blur-md hover:border-accent/50"
        >
          <div className="absolute inset-0 transition-all duration-300 rounded-xl group-hover:bg-accent/5"></div>
          <div className="relative">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-accent">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="font-headline text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
          </div>
        </div>
    </ScrollFadeIn>
);

export default function DefensiveSecurity() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
            <div className="text-center">
                <Badge variant="secondary" className="mb-4 text-sm bg-teal-500/10 text-teal-300 border-teal-500/20">Defensive Shield</Badge>
                <h2 className="text-center font-headline text-4xl font-bold">Defensive Security & Operations</h2>
                <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
                    A strong defense is built on vigilance and resilience. We reinforce your security posture and build robust operational capabilities to protect your assets.
                </p>
            </div>
        </ScrollFadeIn>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} delay={`${(index) * 100}ms`} />
            ))}
        </div>
      </div>
    </section>
  );
}
