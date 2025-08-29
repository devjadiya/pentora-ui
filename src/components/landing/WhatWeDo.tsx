'use client';
import { motion } from 'framer-motion';
import { ScrollFadeIn } from './ScrollFadeIn';
import { HardDriv, ShieldQuestion, BrainCircuit, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-card/50 border border-transparent justify-between flex flex-col space-y-4 border-white/10',
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-headline font-bold text-foreground mt-2 mb-2">
          {title}
        </div>
        <div className="font-sans font-normal text-muted-foreground text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);

const items = [
    {
      title: 'Identify Vulnerabilities',
      description: 'We proactively discover and analyze weaknesses in your systems before malicious actors can exploit them.',
      header: <Skeleton />,
      className: 'md:col-span-2',
      icon: <ShieldQuestion className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: 'Emulate Adversaries',
      description: 'Our team mimics real-world attack techniques to test the true resilience of your defenses.',
      header: <Skeleton />,
      className: 'md:col-span-1',
      icon: <Users className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: 'Automate Defenses',
      description: 'We help you build and implement automated systems for continuous security monitoring and response.',
      header: <Skeleton />,
      className: 'md:col-span-1',
      icon: <HardDriv className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: 'Leverage AI & Open Source',
      description: 'Combining proprietary AI with the best open-source tools for unparalleled threat intelligence.',
      header: <Skeleton />,
      className: 'md:col-span-2',
      icon: <BrainCircuit className="h-4 w-4 text-neutral-500" />,
    },
  ];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="text-center font-headline text-4xl font-bold">
            How We Secure Your Digital Frontier
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
            Our methodology combines deep expertise, an attacker's mindset, and cutting-edge technology to provide comprehensive protection.
          </p>
        </ScrollFadeIn>
        <ScrollFadeIn delay="200ms" className="mt-12">
            <BentoGrid>
                {items.map((item, i) => (
                    <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={item.className}
                    />
                ))}
            </BentoGrid>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
