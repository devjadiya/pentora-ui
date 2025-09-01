
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollFadeIn } from './ScrollFadeIn';
import { BrainCircuit, Target, ShieldOff } from "lucide-react";

const features = [
    {
      icon: BrainCircuit,
      title: "AI-Driven Threat Intelligence",
      description: "We leverage cutting-edge AI to predict threat vectors and analyze vulnerabilities with unparalleled speed and accuracy, identifying patterns that human analysts might miss."
    },
    {
      icon: Target,
      title: "Unified Identity & Access Telemetry",
      description: "We consolidate security data from all sources into a single, cohesive view, enabling comprehensive analysis and faster, more accurate threat detection across your entire digital identity landscape."
    },
    {
      icon: ShieldOff,
      title: "Expert-Led Adversary Simulation",
      description: "Our elite red team emulates the TTPs of real-world adversaries, providing a true test of your defensive capabilities against the threats you're most likely to face."
    }
  ];

export default function OurApproach() {
  return (
    <section id="approach" className="py-24 bg-card/20">
        <div className="container mx-auto px-4">
            <ScrollFadeIn>
              <h2 className="text-center font-headline text-4xl font-bold">The Pentora Difference</h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
                We don't just find vulnerabilities; we provide a unified, AI-powered view of your security posture, turning complex data into clear, actionable intelligence.
              </p>
            </ScrollFadeIn>
            
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <ScrollFadeIn delay="200ms" className="relative h-[500px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          className="w-full h-full rounded-2xl bg-secondary border"
                          initial={{ opacity: 0.5, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        >
                          {/* Placeholder for 3D animation */}
                          <div className="w-full h-full flex items-center justify-center">
                             <BrainCircuit className="h-48 w-48 text-primary/10" />
                          </div>
                        </motion.div>
                    </div>
                </ScrollFadeIn>
                <div className="flex flex-col gap-10">
                    {features.map((feature, i) => (
                        <ScrollFadeIn key={feature.title} delay={`${i * 150}ms`}>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                                        <feature.icon className="h-7 w-7" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
                                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
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
