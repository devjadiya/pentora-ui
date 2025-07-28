"use client";

import { useState, useEffect } from 'react';

// Define the structure for a category item
interface Category {
  name: string;
  icon: React.ReactNode;
}

// Reusable component for category cards
const CategoryCard = ({ category, delay, isMounted }: { category: Category, delay: number, isMounted: boolean }) => (
    <div 
        className={`bg-gray-800/40 border border-gray-700/80 rounded-xl p-6 group hover:border-purple-500/80 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: `${delay}ms` }}
    >
        <div className="flex items-center space-x-4">
            <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                {category.icon}
            </div>
            <span className="text-white font-semibold text-lg">{category.name}</span>
        </div>
    </div>
);

export default function BrowseByCategory() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        // A simple way to trigger animation on scroll would be more complex,
        // for this template we'll just trigger on mount.
        const timeout = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    // Data for the categories with inline SVG icons
    const categories: Category[] = [
        { name: 'Marketing', icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 15 11 22 21 10 12 9 13 2"></polygon></svg> },
        { name: 'Sales', icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg> },
        { name: 'Support', icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path><circle cx="12" cy="12" r="4"></circle></svg> },
        { name: 'IT Ops', icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><line x1="2" y1="8" x2="22" y2="8"></line><line x1="8" y1="2" x2="8" y2="22"></line></svg> },
        { name: 'Document Ops', icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
        { name: 'Other', icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg> },
    ];

    return (
        <section className="py-24 bg-[#1a0c2e]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl md:text-4xl font-bold text-white mb-12 transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    Browse by category
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <CategoryCard key={category.name} category={category} delay={200 + index * 100} isMounted={isMounted} />
                    ))}
                </div>
            </div>
        </section>
    );
}
