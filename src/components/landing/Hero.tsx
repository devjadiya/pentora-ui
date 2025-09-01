'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search } from 'lucide-react';
import { ScrollFadeIn } from './ScrollFadeIn';
import { useState } from 'react';
import VulnerabilityCheckModal from './VulnerabilityCheckModal';

export default function Hero() {
  const filterTags = ['Penetration Testing', 'Threat Intelligence', 'Compliance', 'Cloud Security'];
  const [domain, setDomain] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && domain) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center pt-20 pb-10 bg-background">
        <div className="absolute inset-0 z-0 opacity-50">
          {/* Particle effects can be added here later */}
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <ScrollFadeIn>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
              Defending the Digital <br /> on the Dot.
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
                placeholder="Enter your domain to check vulnerability..."
                className="w-full h-12 pl-12 pr-4 text-base rounded-full bg-card border"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {filterTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="cursor-pointer"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay="200ms" className="mt-10 flex justify-center">
              <Button size="lg" className="group">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
          </ScrollFadeIn>
        </div>
      </section>
      <VulnerabilityCheckModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        domain={domain}
      />
    </>
  );
}
