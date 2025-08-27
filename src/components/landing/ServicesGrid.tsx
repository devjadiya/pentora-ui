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
    isFeatured: true,
  },
  {
    icon: Zap,
    title: 'Prevention and Analysis',
    description: '24/7 surveillance of your digital assets to detect and neutralize threats in real-time.',
    isFeatured: false,
  },
  {
    icon: Network,
    title: 'Governance and Response',
    description: 'Establishing robust security frameworks and rapid incident response protocols.',
    isFeatured: false,
  },
  {
    icon: CloudCog,
    title: 'Advisory Services',
    description: 'Expert guidance to build a resilient and compliant security posture.',
    isFeatured: false,
  },
  {
    icon: Code2,
    title: 'MSSP',
    description: 'Managed Security Service Provider for comprehensive, ongoing protection.',
    isFeatured: false,
  },
];

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
        <div className="mt-12">
            {/* Top row with 3 items, center featured */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.slice(0,3).map((service, index) => {
                    const isCenter = index === 1;
                    return (
                        <ScrollFadeIn key={service.title} delay={`${index * 100}ms`}>
                            <div 
                              className={cn(
                                'group relative h-full rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 border',
                                isCenter ? 'bg-card border-primary shadow-[0_0_20px_0_hsl(var(--primary)/0.3)]' : 'bg-card/50 border-white/10'
                              )}
                            >
                              <div className="relative">
                                <div className={cn(
                                    "mb-4 flex h-10 w-10 items-center justify-center rounded-lg",
                                    isCenter ? "bg-primary/10 text-primary" : "bg-white/10 text-white"
                                )}>
                                  <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-headline text-xl font-semibold">{service.title}</h3>
                                <p className="mt-2 text-muted-foreground">{service.description}</p>
                              </div>
                            </div>
                        </ScrollFadeIn>
                    )
                })}
            </div>
            {/* Bottom row with 2 items */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 md:mx-auto">
                {services.slice(3,5).map((service, index) => (
                    <ScrollFadeIn key={service.title} delay={`${(index + 3) * 100}ms`}>
                        <div className="group relative h-full rounded-xl border border-white/10 bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1">
                          <div className="relative">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
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
      </div>
    </section>
  );
}
