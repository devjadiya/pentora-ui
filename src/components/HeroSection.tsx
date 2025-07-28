"use client"; // This directive is needed for components using hooks

import { useState, useEffect } from 'react';

// Reusable component for the Search icon
const SearchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

export default function HeroSection() {
    // State to trigger animations on mount
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        // Set isMounted to true after a short delay to allow the component to render first
        const timeout = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timeout); // Cleanup the timeout
    }, []);

    // Filter tags data
    const filterTags = ['AI', 'Sales', 'IT Ops', 'Marketing', 'Document Ops', 'Other', 'Support'];

    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[#1a0c2e]"></div>
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-purple-900/40 rounded-full blur-3xl transition-opacity duration-1000"
                    style={{
                        opacity: isMounted ? 1 : 0,
                        background: 'radial-gradient(circle, rgba(107, 33, 168, 0.4) 0%, rgba(26, 12, 46, 0) 70%)'
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 {/* Hero Title */}
                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <span className="text-purple-400">3921</span> Workflow Automation Templates
                </h1>

                {/* Search Bar */}
                <div className={`mt-10 max-w-2xl mx-auto transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search apps, roles, usecases..."
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3.5 pl-6 pr-14 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/80 transition-all duration-300"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                            <SearchIcon />
                        </div>
                    </div>
                </div>

                {/* Filter Tags */}
                <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
                    {filterTags.map((tag, index) => (
                        <button
                            key={tag}
                            className={`bg-gray-800/40 hover:bg-gray-700/60 border border-gray-700/80 text-gray-300 text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            style={{ transitionDelay: `${400 + index * 50}ms` }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
