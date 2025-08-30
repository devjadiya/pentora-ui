'use client';
import {
    GanttChartSquare,
    Blocks,
    Gem,
    Scale,
    ShieldHalf,
    BookCopy
} from 'lucide-react';
import { ScrollFadeIn } from './ScrollFadeIn';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const features = [
    {
        icon: GanttChartSquare,
        name: 'Cyber Framework Definition',
        description: 'We help you establish a robust security framework (e.g., NIST, ISO 27001, CIS) tailored to your business objectives and regulatory requirements.',
    },
    {
        icon: Scale,
        name: 'Regulatory Compliance',
        description: 'Navigate complex compliance landscapes (PCI-DSS, HIPAA, GDPR) with our expert guidance, ensuring you meet all necessary legal and industry standards.',
    },
    {
        icon: Blocks,
        name: 'Data Protection Policies',
        description: 'Our experts assist in crafting and implementing clear data protection and privacy policies to ensure compliance and build customer trust.',
    },
    {
        icon: Gem,
        name: 'Risk Management & Mitigation',
        description: 'We provide strategic guidance on identifying, assessing, and mitigating cybersecurity risks across your organization for enhanced resilience.',
    },
    {
        icon: ShieldHalf,
        name: 'Security Program Development',
        description: "From strategy to execution, we help you build a mature, proactive security program that aligns with your business's growth and risk appetite.",
    },
    {
        icon: BookCopy,
        name: 'Security Awareness Training',
        description: 'Equip your employees to be your first line of defense with customized training programs that address the latest social engineering and phishing threats.',
    }
];

export default function AdvisoryServices() {
    return (
        <section id="advisory" className="py-24 bg-card/20">
            <div className="container mx-auto px-4">
                <ScrollFadeIn>
                    <div className="text-center">
                        <h2 className="font-headline text-4xl font-bold">Strategic Security Advisory & Compliance</h2>
                        <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
                            Beyond hands-on testing, we provide the strategic guidance and compliance expertise you need to build a mature and resilient security program.
                        </p>
                    </div>
                </ScrollFadeIn>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, i) => (
                        <ScrollFadeIn key={feature.name} delay={`${i * 100}ms`}>
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 shadow-lg hover:border-primary/50 transition-colors hover:-translate-y-1">
                                <CardHeader>
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle>{feature.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{feature.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
