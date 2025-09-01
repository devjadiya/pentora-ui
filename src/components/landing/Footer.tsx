import { PentoraLogo } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
]

const footerLinks = [
    { title: "Services", links: ["Penetration Testing", "Threat Monitoring", "Cloud Security", "Application Security"] },
    { title: "Company", links: ["About Us", "Careers", "Press", "Contact"] },
    { title: "Resources", links: ["Blog", "Whitepapers", "Case Studies", "API Documentation"] },
]

export default function Footer() {
    return (
        <footer className="bg-card border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4 items-start lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2" aria-label="Pentora Home">
                            <PentoraLogo className="h-8 w-8 text-primary" />
                            <span className="font-headline text-xl font-bold text-foreground">
                                Pentora
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm">Proactive security for the modern enterprise.</p>
                        <div className="flex gap-2">
                           {socialLinks.map(link => (
                             <Button key={link.name} variant="ghost" size="icon" asChild>
                                <Link href={link.href} aria-label={link.name}>
                                    <link.icon className="h-5 w-5 text-muted-foreground" />
                                </Link>
                             </Button>
                           ))}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8">
                        {footerLinks.map(section => (
                            <div key={section.title}>
                                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                                <ul className="space-y-2">
                                    {section.links.map(link => (
                                        <li key={link}>
                                            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                         <div className="col-span-2 md:col-span-1">
                            <h4 className="font-semibold text-foreground mb-4">Subscribe to our newsletter</h4>
                            <p className="text-sm text-muted-foreground mb-4">Get the latest on threats and security insights.</p>
                            <div className="flex w-full max-w-sm items-center space-x-2">
                                <Input type="email" placeholder="Email" className="bg-background" />
                                <Button type="submit" variant="secondary">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Pentora, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
