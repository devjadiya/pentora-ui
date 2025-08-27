import { BrainCircuit, Target, ShieldOff, Scale } from "lucide-react";
import { ScrollFadeIn } from "./ScrollFadeIn";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Intelligence",
    description: "We leverage cutting-edge AI to predict threat vectors and analyze vulnerabilities with unparalleled speed and accuracy."
  },
  {
    icon: Target,
    title: "Adversarial Emulation",
    description: "Our tests go beyond checklists. We emulate the TTPs of real-world adversaries to provide a true test of your defenses."
  },
  {
    icon: ShieldOff,
    title: "Offensive Mindset",
    description: "We think like attackers. This offensive-first approach allows us to uncover hidden risks others might miss."
  },
  {
    icon: Scale,
    title: "Actionable & Prioritized",
    description: "You won't get a 500-page report. We deliver clear, prioritized, and actionable guidance for immediate remediation."
  }
]

export default function FeaturesList() {
  return (
    <section id="approach" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollFadeIn>
            <h2 className="font-headline text-4xl font-bold">Our Unique Approach</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We combine human expertise with machine intelligence to deliver a security posture that's not just compliant, but truly resilient.
            </p>
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5"/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay="200ms">
            <div className="relative aspect-[4/3] rounded-xl bg-black/50 p-2 border border-white/10 shadow-2xl shadow-primary/10">
                <img
                    src="https://picsum.photos/600/450"
                    alt="Cybersecurity expert at work"
                    data-ai-hint="cybersecurity expert"
                    width={600}
                    height={450}
                    className="rounded-lg object-cover w-full h-full"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg"></div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  )
}
