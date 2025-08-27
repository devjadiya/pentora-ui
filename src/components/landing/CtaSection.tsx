import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollFadeIn } from "./ScrollFadeIn";

export default function CtaSection() {
    return (
        <section id="contact" className="py-24">
            <ScrollFadeIn>
                <div className="container mx-auto px-4">
                    <div className="relative rounded-xl bg-gradient-to-r from-primary/80 to-primary p-12 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] opacity-20"></div>
                        <div className="relative z-10">
                            <h2 className="font-headline text-4xl font-bold text-primary-foreground">Ready to Fortify Your Defenses?</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
                                Don't wait for a breach to happen. Take the first step towards a more secure future today. Schedule a free, no-obligation consultation with one of our security experts.
                            </p>
                            <div className="mt-8 flex justify-center">
                                <Button size="lg" className="bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] group">
                                    Request a Free Consultation
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
