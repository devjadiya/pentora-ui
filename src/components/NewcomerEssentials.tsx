"use client";

import { useState, useEffect } from 'react';

// Define the structure for a workflow template card
interface TemplateCardProps {
  title: string;
  author: string;
  authorImage: string;
  icons: string[]; // Placeholder for icon names or types
  badgeCount?: number;
  className?: string;
  delay: number;
  isMounted: boolean;
}

// A generic icon component (you can expand this)
const CardIcon = ({ type }: { type: string }) => {
    // In a real app, you'd have a map of icons
    // For now, a simple placeholder
    const iconMap: { [key: string]: React.ReactNode } = {
        'learn': <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
        'code': <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
        'pull': <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
        'time': <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
    };
    return <div className="text-gray-400">{iconMap[type] || iconMap['learn']}</div>;
};

// Reusable component for the small template cards
const TemplateCard: React.FC<TemplateCardProps> = ({ title, author, authorImage, icons, badgeCount, delay, isMounted }) => (
    <div 
        className={`bg-gray-800/40 border border-gray-700/80 rounded-xl p-5 group hover:border-purple-500/80 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: `${delay}ms` }}
    >
        <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
                {icons.map((icon, i) => <CardIcon key={i} type={icon} />)}
            </div>
            {badgeCount && <span className="bg-purple-600/50 text-purple-200 text-xs font-bold px-2 py-1 rounded-full">+{badgeCount}</span>}
        </div>
        <h3 className="mt-4 font-semibold text-white text-lg leading-snug">{title}</h3>
        <div className="mt-6 flex items-center space-x-2">
            <img src={authorImage} alt={author} className="w-7 h-7 rounded-full" />
            <span className="text-gray-400 text-sm">{author}</span>
        </div>
    </div>
);

export default function NewcomerEssentials() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    const newcomerTemplates: Omit<TemplateCardProps, 'isMounted'>[] = [
        { title: 'Learn JSON Basics with an Interactive Step-by-Step Tutorial for Beginners', author: 'Lucas Peyrin', authorImage: 'https://placehold.co/32x32/334155/E2E8F0?text=L', icons: ['learn'], badgeCount: 1, delay: 300 },
        { title: 'Learn n8n Expressions with an Interactive Step-by-Step Tutorial for Beginners', author: 'Lucas Peyrin', authorImage: 'https://placehold.co/32x32/334155/E2E8F0?text=L', icons: ['learn'], badgeCount: 5, delay: 400 },
        { title: 'Learn API Fundamentals with an Interactive Hands-On Tutorial Workflow', author: 'Lucas Peyrin', authorImage: 'https://placehold.co/32x32/334155/E2E8F0?text=L', icons: ['learn'], delay: 500 },
        { title: 'Learn Code Node (JavaScript) with an Interactive Hands-On Tutorial', author: 'Lucas Peyrin', authorImage: 'https://placehold.co/32x32/334155/E2E8F0?text=L', icons: ['code'], badgeCount: 2, delay: 600 },
        { title: 'Pulling data from services that n8n doesn\'t have a pre-built integration for', author: 'Jonathan', authorImage: 'https://placehold.co/32x32/475569/E2E8F0?text=J', icons: ['pull'], badgeCount: 2, delay: 700 },
        { title: 'Working with dates and times', author: 'Jonathan', authorImage: 'https://placehold.co/32x32/475569/E2E8F0?text=J', icons: ['time'], delay: 800 },
    ];

    return (
        <section className="py-24 bg-[#1a0c2e]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl md:text-4xl font-bold text-white mb-12 transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    Newcomer essentials: learn by doing
                </h2>

                {/* Featured Card */}
                <div 
                    className={`bg-gray-800/40 border border-gray-700/80 rounded-xl p-6 md:p-8 group hover:border-purple-500/80 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col md:flex-row justify-between items-center mb-8 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: '200ms' }}
                >
                    <div>
                        <span className="bg-purple-600/50 text-purple-200 text-xs font-bold px-2 py-1 rounded-full mb-4 inline-block">+2</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">Build Your First AI Agent</h3>
                        <div className="mt-4 flex items-center space-x-3">
                            <img src="https://placehold.co/32x32/334155/E2E8F0?text=L" alt="Lucas Peyrin" className="w-8 h-8 rounded-full" />
                            <span className="text-gray-300">Lucas Peyrin</span>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0">
                        {/* Placeholder for the visual workflow */}
                        <img src="https://placehold.co/300x100/1F2937/4C1D95?text=Your+First+AI+Agent" alt="AI Agent Workflow" className="rounded-lg" />
                    </div>
                </div>

                {/* Grid of other templates */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newcomerTemplates.map((template) => (
                        <TemplateCard key={template.title} {...template} isMounted={isMounted} />
                    ))}
                </div>
            </div>
        </section>
    );
}
