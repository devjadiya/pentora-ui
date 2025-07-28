"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the structure for a navigation link
interface NavLink {
  name: string;
  href: string;
}

// Reusable component for the Pentora logo (a shield icon)
const PentoraLogo = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
            d="M12 2L2 5L12 22L22 5L12 2Z" 
            stroke="url(#logo-gradient)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="url(#logo-gradient)" 
            fillOpacity="0.2"
        />
        <motion.path 
            d="M12 22V12" 
            stroke="url(#logo-gradient)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
        <defs>
            <linearGradient id="logo-gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A78BFA"/>
                <stop offset="1" stopColor="#8B5CF6"/>
            </linearGradient>
        </defs>
    </svg>
);

// Reusable component for the hamburger menu icon
const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
);

// Reusable component for the close (X) icon
const XIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'About', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'CVE', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  // Animation variants for the navigation container
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual navigation items
  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } },
  };
  
  // Animation variants for the mobile menu
  const mobileMenuVariants = {
      open: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 300, damping: 30 }
      },
      closed: {
          opacity: 0,
          y: "-10%",
          transition: { duration: 0.2 }
      }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-gradient-to-b from-[#110720] to-[#1a0c2e]/80 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-purple-900/10"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center space-x-8"
        >
          <a href="#" className="flex items-center space-x-3 flex-shrink-0">
            <PentoraLogo />
            <span className="font-bold text-2xl text-white tracking-wider">PENTORA</span>
          </a>
          <motion.nav 
            className="hidden lg:flex items-center space-x-7"
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a key={link.name} href={link.href} className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-base" variants={navItemVariants}>
                <span>{link.name}</span>
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center space-x-4"
        >
            <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-semibold">Dashboard</a>
                <motion.a 
                    href="#" 
                    className="bg-purple-600 text-white font-bold py-2 px-5 rounded-md shadow-lg shadow-purple-500/20"
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.5)" }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    Secure My Company
                </motion.a>
            </div>
            <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                    {isMenuOpen ? <XIcon /> : <MenuIcon />}
                </button>
            </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-[#110720] absolute w-full left-0 shadow-2xl"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <nav className="flex flex-col items-center space-y-5 px-4 pt-4 pb-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-lg">
                  {link.name}
                </a>
              ))}
              <hr className="w-full border-t border-white/10 my-4" />
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors font-semibold text-lg">Dashboard</a>
              <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 w-full text-center mt-2">
                  Secure My Company
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
