'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { name: 'What We Do', href: '#what-we-do' },
  { name: 'Services', href: '#services' },
  { name: 'Approach', href: '#approach' },
  { name: 'Advisory', href: '#advisory' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        hasScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Pentora Home">
          <Image src="/logo.png" alt="Pentora Logo" width={32} height={32} />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm">
             <Link href="/dashboard">View Dashboard</Link>
          </Button>
          <Button asChild size="sm" className="bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow">
             <Link href="#contact">Request a Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
