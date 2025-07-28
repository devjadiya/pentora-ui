"use client";

import { useState, useEffect } from 'react';

// Define the structure for a testimonial
interface Testimonial {
  text: string;
  author: string;
  handle: string;
  authorImage: string;
}

// Reusable component for a single testimonial card
const TestimonialCard = ({ testimonial, delay, isMounted }: { testimonial: Testimonial, delay: number, isMounted: boolean }) => (
    <div 
        className={`bg-gray-800/40 border border-gray-700/80 rounded-xl p-6 flex flex-col transition-all duration-500 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ transitionDelay: `${delay}ms` }}
    >
        <p className="text-gray-300 flex-grow">"{testimonial.text}"</p>
        <div className="mt-6 flex items-center space-x-3">
            <img src={testimonial.authorImage} alt={testimonial.author} className="w-10 h-10 rounded-full" />
            <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.handle}</p>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    // Data for the testimonials
    const testimonialsData: Testimonial[] = [
        {
            text: "Thank you to the n8n community. I did the beginners course and promptly took an automation WAY beyond my skill level.",
            author: "Robin Tindall",
            handle: "@Barobm",
            authorImage: "https://placehold.co/40x40/334155/E2E8F0?text=R"
        },
        {
            text: "n8n is a beast for automation self-hosting and low-code make it a dev's dream, if you're not automating yet, you're working too hard.",
            author: "Anderoav",
            handle: "@Anderoav",
            authorImage: "https://placehold.co/40x40/475569/E2E8F0?text=A"
        },
        {
            text: "I've said it many times... Anything is possible with n8n. Your own knowledge + imagination are the only limits for any project.",
            author: "Maxim Poul",
            handle: "@maximpouliers",
            authorImage: "https://placehold.co/40x40/52525B/E2E8F0?text=M"
        }
    ];

    return (
        <section className="py-24 bg-[#1a0c2e]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.author} testimonial={testimonial} delay={200 + index * 150} isMounted={isMounted} />
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="text-center mt-24">
                     <h2 className={`text-4xl md:text-5xl font-extrabold text-white transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
                        There's nothing you <br className="hidden sm:block" /> can't automate with n8n
                    </h2>
                    <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '750ms' }}>
                        Our customer's words, not ours. Skeptical? Try it out, and see for yourself.
                    </p>
                    <div className={`mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '900ms' }}>
                        <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                            Start building
                        </a>
                        <a href="#" className="bg-gray-800/60 hover:bg-gray-700/80 border border-gray-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 w-full sm:w-auto">
                            Submit a template →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
