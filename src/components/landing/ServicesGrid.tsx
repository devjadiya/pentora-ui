import {
  ShieldCheck,
  Zap,
  Network,
  CloudCog,
  Code2,
  AlertTriangle,
} from 'lucide-react';
import { ScrollFadeIn } from './ScrollFadeIn';

const services = [
  {
    icon: ShieldCheck,
    title: 'Penetration Testing',
    description: 'Simulating real-world attacks to identify and fortify your weakest links.',
    className: 'md:col-span-2',
    glowColor: 'hsl(var(--primary)/0.2)',
  },
  {
    icon: Zap,
    title: 'Threat Monitoring',
    description: '24/7 surveillance of your digital assets to detect and neutralize threats in real-time.',
    className: '',
    glowColor: 'hsl(var(--accent)/0.2)',
  },
  {
    icon: Network,
    title: 'Network Security',
    description: 'Hardening your network infrastructure against unauthorized access and breaches.',
    className: '',
    glowColor: 'hsl(210, 80%, 60%)',
  },
  {
    icon: CloudCog,
    title: 'Cloud Security',
    description: 'Securing your cloud environments (AWS, Azure, GCP) with best-in-class practices.',
    className: '',
    glowColor: 'hsl(30, 80%, 60%)',
  },
  {
    icon: Code2,
    title: 'Application Security',
    description: 'Integrating security into your SDLC to build resilient applications from the ground up.',
    className: 'md:col-span-2',
    glowColor: 'hsl(140, 80%, 60%)',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="text-center font-headline text-4xl font-bold">Our Core Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            A comprehensive suite of security services designed to protect your organization from every angle.
          </p>
        </ScrollFadeIn>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ScrollFadeIn key={service.title} delay={`${index * 100}ms`} className={service.className}>
                <div 
                  className="group relative h-full rounded-xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{'--glow-color': service.glowColor} as React.CSSProperties}
                >
                  <div className="absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{boxShadow: `0 0 20px 0 var(--glow-color)`}} aria-hidden="true"></div>
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-headline text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                  </div>
                </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
