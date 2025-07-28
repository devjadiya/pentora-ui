"use client";

import { useState, useEffect } from 'react';

// Define the structure for a workflow template card
interface TemplateCardProps {
  title: string;
  author: string;
  authorImage: string;
  icons: string[]; // Placeholder for icon names or image URLs
  badgeCount?: number;
  delay: number;
  isMounted: boolean;
}

// Reusable component for displaying icons on the card
const CardIcon = ({ src }: { src: string }) => (
    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
        <img src={src} alt="icon" className="w-4 h-4" />
    </div>
);

// Reusable component for the template cards
const TemplateCard: React.FC<TemplateCardProps> = ({ title, author, authorImage, icons, badgeCount, delay, isMounted }) => (
    <div 
        className={`bg-gray-800/40 border border-gray-700/80 rounded-xl p-5 group hover:border-purple-500/80 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: `${delay}ms` }}
    >
        <div className="flex justify-between items-start">
            <div className="flex items-center space-x-1">
                {icons.map((icon, i) => <CardIcon key={i} src={icon} />)}
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

export default function TrendingTemplates() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    const trendingTemplates: Omit<TemplateCardProps, 'isMounted'>[] = [
        { 
            title: 'Track SEO Keyword Rankings with Bright Data MCP and GPT-4o AI Analysis', 
            author: 'Yaron Been', 
            authorImage: 'https://placehold.co/32x32/4B5563/E2E8F0?text=Y', 
            icons: ['https://placehold.co/24x24/16A34A/FFFFFF?text=B', 'https://placehold.co/24x24/7C3AED/FFFFFF?text=G'], 
            badgeCount: 6, 
            delay: 200 
        },
        { 
            title: 'Generate AI Viral Videos with Seedance and Upload to Tik Tok, YouTube & Instagram', 
            author: 'Dr. Firas', 
            authorImage: 'https://placehold.co/32x32/4B5563/E2E8F0?text=F', 
            icons: ['https://placehold.co/24x24/F43F5E/FFFFFF?text=S', 'https://placehold.co/24x24/000000/FFFFFF?text=T', 'https://placehold.co/24x24/FF0000/FFFFFF?text=Y'], 
            badgeCount: 8, 
            delay: 300 
        },
        { 
            title: 'Build a Weekly AI Trend Alerter with arXiv and Weaviate', 
            author: 'Mary Newhauser', 
            authorImage: 'https://placehold.co/32x32/4B5563/E2E8F0?text=M', 
            icons: ['https://placehold.co/24x24/B91C1C/FFFFFF?text=A', 'https://placehold.co/24x24/10B981/FFFFFF?text=W'], 
            badgeCount: 18, 
            delay: 400 
        },
        { 
            title: 'Generate & Auto-post AI Videos to Social Media with Veo3 and Blotato', 
            author: 'Dr. Firas', 
            authorImage: 'https://placehold.co/32x32/4B5563/E2E8F0?text=F', 
            icons: ['https://placehold.co/24x24/4F46E5/FFFFFF?text=V', 'https://placehold.co/24x24/F59E0B/FFFFFF?text=B'], 
            badgeCount: 7, 
            delay: 500 
        },
    ];

    return (
        <section className="py-24 bg-[#1a0c2e]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl md:text-4xl font-bold text-white mb-12 transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    Trending AI templates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {trendingTemplates.map((template) => (
                        <TemplateCard key={template.title} {...template} isMounted={isMounted} />
                    ))}
                </div>
            </div>
        </section>
    );
}