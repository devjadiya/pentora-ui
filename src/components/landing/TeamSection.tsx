'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollFadeIn } from "./ScrollFadeIn";

const teamMembers = [
  {
    name: "Alex 'Glitch' Volkov",
    title: "Principal Security Researcher",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    specialty: "Red Teaming & Exploit Development",
    bio: "Former intelligence operator with a knack for finding the 'unfindable'. Alex leads our offensive security operations."
  },
  {
    name: "Dr. Lena Petrova",
    title: "Head of Threat Intelligence",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    specialty: "AI/ML & Malware Analysis",
    bio: "PhD in Machine Learning, Lena builds the AI brains behind our threat detection platform."
  },
  {
    name: "Marcus 'Forge' Chen",
    title: "Lead Cloud Security Architect",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    specialty: "AWS, Azure & GCP Security",
    bio: "Architect of impenetrable cloud fortresses. Marcus ensures our clients' cloud infrastructure is locked down tight."
  },
  {
    name: "Sofia 'Proxy' Rossi",
    title: "Director of Digital Forensics",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
    specialty: "Incident Response & Forensics",
    bio: "When a breach occurs, Sofia is the first on the scene, tracing attacker steps and restoring order from chaos."
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <ScrollFadeIn>
          <h2 className="font-headline text-4xl font-bold">Meet Our Elite Cybersecurity Experts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Our team is composed of industry veterans, ethical hackers, and security researchers from the front lines of cyber warfare.
          </p>
        </ScrollFadeIn>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
                <ScrollFadeIn key={member.name} delay={`${index * 100}ms`}>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 shadow-lg text-left hover:border-accent/50 transition-colors">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Avatar className="h-16 w-16">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                             <div>
                                <CardTitle className="text-xl">{member.name}</CardTitle>
                                <CardDescription className="text-accent">{member.title}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground italic">"{member.bio}"</p>
                             <p className="text-xs font-semibold uppercase text-primary mt-4">Specialty: {member.specialty}</p>
                        </CardContent>
                    </Card>
                </ScrollFadeIn>
            ))}
        </div>
      </div>
    </section>
  );
}
