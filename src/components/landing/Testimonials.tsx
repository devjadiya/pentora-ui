import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollFadeIn } from "./ScrollFadeIn";

const testimonials = [
  {
    name: "Sarah L.",
    title: "CTO, Innovate Inc.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    text: "Pentora's team is exceptional. Their penetration test was thorough, and the report was the clearest I've ever seen. They didn't just find vulnerabilities; they helped us understand the business impact."
  },
  {
    name: "Michael B.",
    title: "Head of Security, DataSecure",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    text: "The 24/7 threat monitoring service is a game-changer. We sleep better at night knowing Pentora's experts are watching over our infrastructure. Their response time is incredible."
  },
  {
    name: "Jessica P.",
    title: "Founder, CloudPioneer",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    text: "As a startup, we needed top-tier security on a budget. Pentora provided a solution that was both affordable and incredibly robust. They're a true partner in our success."
  },
    {
    name: "David C.",
    title: "IT Director, Quantum Solutions",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
    text: "The AI-powered analysis is mightily impressive. It helped us prioritize remediation efforts and focus on what truly matters. We patched critical issues faster than ever before."
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <Card className="w-[350px] flex-shrink-0 mx-4 bg-card/50 backdrop-blur-sm border border-white/10">
        <CardContent className="p-6">
            <p className="text-muted-foreground italic">"{testimonial.text}"</p>
            <div className="flex items-center gap-4 mt-6">
                <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
            </div>
        </CardContent>
    </Card>
)

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <ScrollFadeIn>
          <h2 className="font-headline text-4xl font-bold">What Our Clients Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Real stories from partners we've helped secure.
          </p>
        </ScrollFadeIn>
        
        <div className="relative mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
            <div className="flex w-max animate-marquee items-stretch">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </div>
        <div className="relative mt-8 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
            <div className="flex w-max animate-marquee-reverse items-stretch">
                {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
