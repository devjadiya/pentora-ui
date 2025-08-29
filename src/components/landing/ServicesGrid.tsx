import {
  ShieldCheck,
  Zap,
  Network,
  CloudCog,
  Code2,
} from 'lucide-react';
import { ScrollFadeIn } from './ScrollFadeIn';
import { cn } from '@/lib/utils';


const services = [
  {
    icon: ShieldCheck,
    title: 'Offensive Security',
    description: 'Simulating real-world attacks to identify and fortify your weakest links.',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
  },
  {
    icon: Zap,
    title: 'Prevention and Analysis',
    description: '24/7 surveillance of your digital assets to detect and neutralize threats in real-time.',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    icon: Network,
    title: 'Governance and Response',
    description: 'Establishing robust security frameworks and rapid incident response protocols.',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    icon: CloudCog,
    title: 'Advisory Services',
    description: 'Expert guidance to build a resilient and compliant security posture.',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
  },
];

const BentoCard = ({ service, delay }: { service: typeof services[0], delay: string }) => (
    <ScrollFadeIn delay={delay} className={cn("h-full", service.colSpan, service.rowSpan)}>
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
          <h2 className="text-center font-headline text-4xl font-bold">Tailored Digital Security Solutions</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            A comprehensive suite of security services designed to protect your organization from every angle.
          </p>
        </ScrollFadeIn>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <BentoCard key={service.title} service={service} delay={`${index * 100}ms`} />
            ))}
        </div>
      </div>
    </section>
  );
}
