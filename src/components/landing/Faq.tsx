import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollFadeIn } from "./ScrollFadeIn";

const faqs = [
    {
        question: "What makes Pentora different from other cybersecurity firms?",
        answer: "Our key differentiator is our offensive-first, AI-enhanced approach. We don't just run automated scans; we emulate real-world attackers using cutting-edge AI to predict and identify threats before they materialize. This results in deeper insights and more effective, prioritized remediation plans."
    },
    {
        question: "How long does a typical penetration test take?",
        answer: "The duration of a penetration test varies depending on the scope and complexity of the target environment. A typical engagement can range from one to four weeks. We provide a detailed timeline and scope of work before any project begins."
    },
    {
        question: "Do you offer services for small businesses and startups?",
        answer: "Absolutely. We believe world-class security should be accessible to everyone. We offer scalable and customizable service packages designed to meet the specific needs and budgets of small businesses and startups, ensuring you get the protection you need to grow securely."
    },
    {
        question: "What kind of reporting can I expect?",
        answer: "We pride ourselves on providing clear, concise, and actionable reports. You will receive an executive summary for leadership and a detailed technical report for your IT team. All findings are prioritized by risk level and include clear recommendations for remediation."
    }
]

export default function Faq() {
  return (
    <section id="faq" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
            <ScrollFadeIn>
                <h2 className="text-center font-headline text-4xl font-bold">Frequently Asked Questions</h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
                    Have questions? We have answers. If you don't see your question here, feel free to contact us.
                </p>
            </ScrollFadeIn>
            <ScrollFadeIn delay="200ms" className="mt-12">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-border">
                            <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </ScrollFadeIn>
        </div>
    </section>
  )
}
