'use client';
import { X } from 'lucide-react';
import React from 'react';

const PentoraLogo = () => (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="#8A2BE2"/>
        <path d="M16 6L26 16L16 26L6 16L16 6Z" stroke="#0D0C22" strokeWidth="2"/>
    </svg>
);


interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export default function Sidebar({ mobileOpen, setMobileOpen }: SidebarProps) {
    const sidebarContent = (
        <div className="flex h-full flex-col p-6">
            <div className="mb-8 flex items-center gap-3">
              <PentoraLogo />
              <span className="text-2xl font-bold tracking-wider text-white">
                PENTORA
              </span>
            </div>
            <p className="text-sm text-purple-300/70">
              Cybersecurity Tools & Solutions
            </p>
            {/* Navigation items will go here */}
        </div>
    );


  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 transform bg-black/50 transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div 
          className="relative h-full w-[280px] bg-[rgba(26,12,46,0.6)] backdrop-blur-xl border-r border-white/10"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02))'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          {sidebarContent}
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div 
        className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-[280px] lg:flex-col z-30"
        style={{
          background: 'rgba(26, 12, 46, 0.4)',
          backdropFilter: 'blur(12px)',
          borderRight: '1px solid',
          borderImageSource: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
          borderImageSlice: 1
        }}
      >
        {sidebarContent}
      </div>
    </>
  );
}
