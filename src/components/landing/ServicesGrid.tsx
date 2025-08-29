import {
  ShieldCheck,
  Server,
  Code2,
  Database,
  Network,
  CloudCog,
} from 'lucide-react';
import { ScrollFadeIn } from './ScrollFadeIn';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const offensiveServices = [
  {
    icon: Network,
    title: 'Black Box & White Box Testing',
    description: 'Simulating both uninformed and fully-informed attacks to uncover a wide spectrum of vulnerabilities.',
  },
  {
    icon: Code2,
    title: 'Exploitation Exploration',
    description: 'Going beyond discovery to safely demonstrate the real-world impact of found vulnerabilities.',
  },
  {
    icon: Database,
    title: 'Vulnerability Assessments',
    description: 'Comprehensive scanning and analysis to identify and prioritize security weaknesses in your systems.',
  },
];

const defensiveServices = [
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Automation',
    description: 'Implementing automated workflows for threat detection, response, and compliance monitoring.',
  },
  {
    icon: Server,
    title: 'Threat Monitoring & Response',
    description: '24/7 surveillance of your digital assets to detect and neutralize threats in real-time.',
  },
  {
    icon: CloudCog,
    title: 'Cloud Security Posture',
    description: 'Securing your cloud environments (AWS, Azure, GCP) against misconfigurations and threats.',
  },
]

const ServiceCard = ({ service, delay }: { service: typeof offensiveServices[0], delay: string }) => (
    <ScrollFadeIn delay={delay} className="h-full">
        <div 
          className="group relative flex flex-col justify-between h-full rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 border border-white/10 bg-card/50 backdrop-blur-md hover:border-primary/50"
        >
          <div className="absolute inset-0 transition-all duration-300 rounded-xl group-hover:bg-primary/5"></div>
          <div className="relative">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-primary">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="font-headline text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
          </div>
        </div>
    </ScrollFadeIn>
);

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
            <div className="text-center">
                <Badge variant="secondary" className="mb-4 text-sm">Our Services</Badge>
                <h2 className="text-center font-headline text-4xl font-bold">A 360° Security Partnership</h2>
                <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
                    We provide a comprehensive suite of offensive and defensive security services, tailored to your unique environment and designed to protect your organization from every angle.
                </p>
            </div>
        </ScrollFadeIn>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <ScrollFadeIn delay="100ms">
                    <h3 className="font-headline text-3xl font-bold mb-8 text-center md:text-left">Offensive Security</h3>
                </ScrollFadeIn>
                <div className="grid grid-cols-1 gap-8">
                    {offensiveServices.map((service, index) => (
                        <ServiceCard key={service.title} service={service} delay={`${(index + 1) * 150}ms`} />
                    ))}
                </div>
            </div>
            <div>
                <ScrollFadeIn delay="200ms">
                    <h3 className="font-headline text-3xl font-bold mb-8 text-center md:text-left">Defensive Security</h3>
                </ScrollFadeIn>
                <div className="grid grid-cols-1 gap-8">
                    {defensiveServices.map((service, index) => (
                        <ServiceCard key={service.title} service={service} delay={`${(index + 1) * 250}ms`} />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
