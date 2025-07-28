"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Reusable component for the arrow icon in the button
const ArrowRightIcon = () => (
    <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        variants={{
            rest: { x: 0 },
            hover: { x: 5 }
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </motion.svg>
);

export default function HeroSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    // Parallax effect for the background grid
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    // Staggered animation for the headline
    const headline = "Unbreachable Security for the Digital Frontier";
    const headlineVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };
    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <section ref={targetRef} className="relative text-white bg-gradient-to-b from-[#110720] to-[#1a0c2e] h-[100vh] py-24 md:py-40 overflow-hidden flex items-center">
            {/* Background decorative elements with Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                {/* Grid pattern */}
                <div 
                    className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem]">
                </div>
                {/* Radial Gradient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,rgba(17,7,32,0)_70%)"></div>
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400"
                        variants={headlineVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {headline.split(" ").map((word, index) => (
                            <motion.span key={index} className="inline-block" variants={wordVariants}>
                                {word}&nbsp;
                            </motion.span>
                        ))}
                    </motion.h1>
                    
                    <motion.p 
                        className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
                    >
                        Pentora delivers military-grade cybersecurity solutions, empowering global enterprises to innovate fearlessly. We are your shield in the digital age.
                    </motion.p>

                    <motion.div 
                        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
                    >
                        <motion.a
                            href="#"
                            className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-purple-500/30 w-full sm:w-auto"
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.6)" }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                            Request a Consultation
                        </motion.a>
                        <motion.a
                            href="#"
                            className="inline-flex items-center justify-center gap-2 text-gray-300 font-semibold py-3 px-8 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-300 w-full sm:w-auto"
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                            Explore Services <ArrowRightIcon />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
