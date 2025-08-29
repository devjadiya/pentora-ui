'use client';
import React, { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { ScrollFadeIn } from './ScrollFadeIn';
import { BrainCircuit, Target, ShieldOff, Scale } from "lucide-react";

const content = [
    {
      title: "AI-Powered Intelligence",
      description: "We leverage cutting-edge AI to predict threat vectors and analyze vulnerabilities with unparalleled speed and accuracy. Our machine learning models are trained on vast datasets of threats, enabling us to identify patterns and anomalies that human analysts might miss.",
      icon: BrainCircuit,
    },
    {
      title: "Adversarial Emulation",
      description: "Our tests go beyond checklists. We emulate the Tactics, Techniques, and Procedures (TTPs) of real-world adversaries, from opportunistic hackers to state-sponsored groups, providing a true test of your defensive capabilities and response mechanisms.",
      icon: Target
    },
    {
      title: "Offensive Mindset",
      description: "We think like attackers. This offensive-first approach allows us to uncover hidden risks, complex chain vulnerabilities, and business logic flaws that automated scanners and compliance-focused assessments traditionally overlook.",
      icon: ShieldOff,
    },
    {
      title: "Actionable & Prioritized",
      description: "You won't get a 500-page report of low-impact findings. We deliver clear, concise, and actionable guidance. All vulnerabilities are prioritized based on exploitability, impact, and business context, so you can focus your resources where they matter most.",
      icon: Scale
    }
  ];

export default function StickyScrollSection() {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsPerScroll = cardLength;
    const totalScrollableHeight = ref.current.scrollHeight - window.innerHeight;
    const cardIndex = Math.min(
      cardLength - 1,
      Math.floor((latest * totalScrollableHeight / (window.innerHeight / cardsPerScroll)))
    );
    setActiveCard(Math.floor(latest * cardsPerScroll));
  });

  const ActiveCardIcon = content[activeCard]?.icon;

  return (
    <section id="approach" className="py-24">
        <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="text-center font-headline text-4xl font-bold">Our Unique Approach</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            We combine human expertise with machine intelligence to deliver a security posture that's not just compliant, but truly resilient.
          </p>
        </ScrollFadeIn>
            <motion.div
                className="relative mt-12 flex justify-center h-[30rem] overflow-y-auto"
                ref={ref}
            >
                <div className="div relative flex justify-center w-full">
                    <div className="max-w-2xl">
                        {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h3
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className="text-2xl font-bold text-foreground"
                            >
                            {item.title}
                            </motion.h3>
                            <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0.3,
                            }}
                            className="text-kg text-muted-foreground max-w-sm mt-4"
                            >
                            {item.description}
                            </motion.p>
                        </div>
                        ))}
                        <div className="h-40" />
                    </div>
                </div>
                <motion.div
                 style={{
                    backgroundImage: 'linear-gradient(to top, transparent, hsl(var(--background)), transparent)',
                 }}
                 className="hidden lg:block h-full w-1/3 rounded-md bg-transparent absolute top-0 right-0"
                >
                  <div className="sticky top-1/2 -translate-y-1/2 px-4">
                      {ActiveCardIcon && 
                          <div className="relative aspect-square w-full rounded-xl bg-black/50 p-2 border border-white/10 shadow-2xl shadow-primary/10">
                              <ActiveCardIcon className="h-24 w-24 mx-auto my-auto text-primary opacity-20" />
                          </div>
                      }
                  </div>
                </motion.div>
            </motion.div>
      </div>
    </section>
  );
}
