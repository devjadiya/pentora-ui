import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search } from 'lucide-react';
import { ScrollFadeIn } from './ScrollFadeIn';

export default function Hero() {
  const filterTags = ['Penetration Testing', 'Threat Intelligence', 'Compliance', 'Cloud Security'];

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center pt-20 pb-10">
      <div className="absolute inset-0 z-0">
        <div className="absolute h-64 w-64 bg-primary/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute h-64 w-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 bottom-1/4 right-1/4 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <ScrollFadeIn>
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary bg-primary/10 shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
            Next-Generation Cybersecurity
          </Badge>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            Secure Your Digital Frontier
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Pentora delivers elite offensive security and threat monitoring, transforming your vulnerabilities into formidable defenses.
          </p>
        </ScrollFadeIn>
        
        <ScrollFadeIn delay="100ms" className="mt-10 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search services, threats, or solutions..."
              className="w-full h-12 pl-12 pr-4 text-base rounded-full bg-black/30 border-white/20 focus:ring-primary focus:border-primary backdrop-blur-sm"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {filterTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer border-transparent bg-white/10 hover:bg-white/20 text-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay="200ms" className="mt-10 flex justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_20px_hsl(var(--accent)/0.5)] transition-shadow hover:shadow-[0_0_30px_hsl(var(--accent)/0.7)] group">
              View Interactive Dashboard
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
