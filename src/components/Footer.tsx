"use client";

import React from 'react';

// Define the structure for a footer link
interface FooterLink {
  name: string;
  href: string;
}

// Define the structure for a footer column
interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// Reusable component for a single column of links in the footer
const FooterLinkColumn: React.FC<{ column: FooterColumn }> = ({ column }) => (
  <div>
    <h3 className="font-semibold text-white mb-4">{column.title}</h3>
    <ul className="space-y-3">
      {column.links.map((link) => (
        <li key={link.name}>
          <a href={link.href} className="text-gray-400 hover:text-white hover:underline transition-colors duration-300">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Inline SVG for the X (formerly Twitter) icon
const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);


export default function Footer() {
  // Data for all the footer links, organized by column
  const footerColumns: FooterColumn[] = [
    {
      title: 'n8n',
      links: [
        { name: 'Automate without limits', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Merch', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Security', href: '#' },
      ],
    },
    {
      title: 'Case Studies',
      links: [
        { name: 'Zapier vs n8n', href: '#' },
        { name: 'Make vs n8n', href: '#' },
      ],
    },
    {
      title: 'Tools',
      links: [
        { name: 'AI agent report', href: '#' },
        { name: 'Affiliate program', href: '#' },
        { name: 'Expert partners', href: '#' },
        { name: 'Join user tests, get a gift', href: '#' },
        { name: 'Events', href: '#' },
      ],
    },
    {
      title: 'Trending combinations',
      links: [
        { name: 'HubSpot and Salesforce', href: '#' },
        { name: 'Twilio and WhatsApp', href: '#' },
        { name: 'GitHub and Jira', href: '#' },
        { name: 'Asana and Slack', href: '#' },
        { name: 'Jira and Slack', href: '#' },
        { name: 'Show more', href: '#' },
      ],
    },
    {
        title: 'Top integration categories',
        links: [
            { name: 'Communication', href: '#' },
            { name: 'Development', href: '#' },
            { name: 'Cybersecurity', href: '#' },
            { name: 'Data & Storage', href: '#' },
            { name: 'Marketing', href: '#' },
            { name: 'Show more', href: '#' },
        ]
    },
    {
        title: 'Trending templates',
        links: [
            { name: 'Creating an API endpoint', href: '#' },
            { name: 'AI agent chat', href: '#' },
            { name: 'Scrape and summarize webpa...', href: '#' },
            { name: 'Joining different datasets', href: '#' },
            { name: 'Back Up Your n8n Workflows', href: '#' },
            { name: 'Show more', href: '#' },
        ]
    },
    {
        title: 'Top guides',
        links: [
            { name: 'Telegram bots', href: '#' },
            { name: 'Open source chatbot', href: '#' },
            { name: 'Open source LLM', href: '#' },
            { name: 'Open source low code platfor...', href: '#' },
            { name: 'Zapier alternatives', href: '#' },
            { name: 'Make vs Zapier', href: '#' },
        ]
    }
  ];

  return (
    <footer className="bg-[#110720] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content with link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {footerColumns.map((column) => (
            <FooterLinkColumn key={column.title} column={column} />
          ))}
        </div>

        <hr className="w-full border-t border-white/10 my-10" />

        {/* Bottom section with logo, social links, and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
                 <a href="#" className="flex items-center space-x-2 flex-shrink-0">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="14" fill="#6A3FD5"/>
                        <path d="M16.0002 9.33301L22.6668 15.9997L16.0002 22.6663" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.3335 9.33301L16.0002 15.9997L9.3335 22.6663" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-bold text-2xl text-white">n8n</span>
                </a>
            </div>
            <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} n8n All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><XIcon /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Report a vulnerability</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
