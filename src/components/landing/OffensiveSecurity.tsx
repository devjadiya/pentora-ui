'use client';
import { ScrollFadeIn } from './ScrollFadeIn';
import { Badge } from '../ui/badge';
import { Code, Network, ScanEye, KeyRound, Bot, TestTube2 } from 'lucide-react';

const services = [
    {
        icon: ScanEye,
        title: 'Penetration Testing (Black/White/Gray Box)',
        description: 'Simulating real-world attacks with varying levels of prior knowledge to identify vulnerabilities across your infrastructure, applications, and networks.',
    },
    {
        icon: Code,
        title: 'Application Security Testing (SAST/DAST)',
        description: 'In-depth analysis of your web and mobile applications to find and fix security flaws in your code and running instances.',
    },
    {
        icon: Network,
        title: 'Network & Infrastructure Security',
        description: 'Assessing your internal and external networks, firewalls, and cloud configurations for weaknesses that could be exploited.',
    },
    {
        icon: KeyRound,
        title: 'Exploitation & Post-Exploitation',
        description: "Going beyond discovery to safely demonstrate the real-world business impact of found vulnerabilities, mimicking an attacker's lateral movement.",
    },
    {
        icon: Bot,
        title: 'Red Teaming Operations',
        description: "Goal-oriented adversarial attack simulation designed to test your organization's detection and response capabilities against a persistent threat.",
    },
    {
        icon: TestTube2,
        title: 'Bug Bounty Program Management',
        description: 'Leverage the power of the global ethical hacker community by letting us manage and triage your bug bounty program submissions.',
    },
];

const ServiceCard = ({ service, delay }: { service: typeof services[0], delay: string }) => (
    <ScrollFadeIn delay={delay} className="h-full">
        <div 
          className="group relative flex flex-col h-full rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 border bg-card hover:border-primary"
        >
          <div className="relative">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="font-headline text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
          </div>
        </div>
    </ScrollFadeIn>
);

export default function OffensiveSecurity() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
            <div className="text-center">
                <Badge variant="destructive" className="mb-4 text-sm">Offensive Mindset</Badge>
                <h2 className="text-center font-headline text-4xl font-bold">Offensive Security Services</h2>
                <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
                    We think like attackers to find and fix vulnerabilities before they do. Our offensive services simulate real-world threats to test your defenses.
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
