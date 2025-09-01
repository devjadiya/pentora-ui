'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollFadeIn } from "./ScrollFadeIn";

export default function RiskSection() {
    return (
        <section id="risk" className="py-24 bg-background">
            <ScrollFadeIn>
                <div className="container mx-auto px-4">
                    <div className="relative rounded-lg bg-card p-12 text-center overflow-hidden border border-destructive">
                        <div className="relative z-10">
                            <h2 className="font-headline text-4xl font-bold">Your Organization Might Be at Risk</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                                In today's digital landscape, the question is not if you'll be targeted, but when. Proactive defense is the only effective strategy against motivated adversaries.
                            </p>
                            <div className="mt-8 flex justify-center">
                                <Button size="lg" variant="destructive" className="group">
                                    Get a Free Risk Assessment
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollFadeIn>
        </section>
    );
}
