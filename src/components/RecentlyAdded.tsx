"use client";

import { useState, useEffect } from 'react';

// Define the structure for a workflow template card
interface TemplateCardProps {
  title: string;
  author: string;
  authorImage: string;
  icons: string[]; // Using image URLs for icons
  badgeCount?: number;
  delay: number;
  isMounted: boolean;
}

// Reusable component for displaying icons on the card
const CardIcon = ({ src }: { src: string }) => (
    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
        <img src={src} alt="icon" className="w-4 h-4 object-contain" />
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

export default function RecentlyAdded() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    const recentlyAddedTemplates: Omit<TemplateCardProps, 'isMounted'>[] = [
        { 
            title: 'AI Knowledge Base Assistant with OpenAI, Supabase & Google Drive Doc Sync', 
            author: 'Abdul Mir', 
            authorImage: 'https://placehold.co/32x32/4B5563/E2E8F0?text=A', 
            icons: ['https://placehold.co/24x24/10B981/FFFFFF?text=O', 'https://placehold.co/24x24/38BDF8/FFFFFF?text=S', 'https://placehold.co/24x24/4285F4/FFFFFF?text=D'], 
            badgeCount: 16, 
            delay: 200 
        },
        { 
            title: 'Automated Email Management System with GPT, Google Calendar & Supabase', 
            author: 'Abdul Mir', 
            authorImage: 'https://placehold.co/32x32/4B5563/E2E8F0?text=A', 
            icons: ['https://placehold.co/24x24/7C3AED/FFFFFF?text=G', 'https://placehold.co/24x24/34A853/FFFFFF?text=C', 'https://placehold.co/24x24/38BDF8/FFFFFF?text=S'], 
            badgeCount: 14, 
            delay: 300 
        },
        { 
            title: 'Archive trending Tik Tok hashtags using TikTok, Airtable, and Apify', 
            author: 'Fahmi Fahreza', 
            authorImage: 'https://placehold.co/32x32/4B5563/E2E8F0?text=F', 
            icons: ['https://placehold.co/24x24/000000/FFFFFF?text=T', 'https://placehold.co/24x24/FBBF24/FFFFFF?text=A', 'https://placehold.co/24x24/1D4ED8/FFFFFF?text=A'], 
            badgeCount: 7, 
            delay: 400 
        },
         { 
            title: 'Auto-Generate Prospect Research Reports with Linkedin & Perplexity AI', 
            author: 'Abdul Mir', 
            authorImage: 'https://placehold.co/32x32/4B5563/E2E8F0?text=A', 
            icons: ['https://placehold.co/24x24/0A66C2/FFFFFF?text=L', 'https://placehold.co/24x24/6B7280/FFFFFF?text=P'], 
            badgeCount: 4, 
            delay: 500 
        },
    ];

    return (
        <section className="py-24 bg-[#1a0c2e]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl md:text-4xl font-bold text-white mb-12 transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    Recently added
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {recentlyAddedTemplates.map((template) => (
                        <TemplateCard key={template.title} {...template} isMounted={isMounted} />
                    ))}
                </div>
            </div>
        </section>
    );
}
