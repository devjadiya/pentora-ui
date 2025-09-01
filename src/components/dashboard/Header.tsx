'use client';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between bg-transparent px-6 backdrop-blur-sm">
      <div>
        <h1 className="text-2xl font-bold text-white">Global Security Overview</h1>
      </div>
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#4B0082] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(138,43,226,0.5)] transition-shadow hover:shadow-[0_0_30px_rgba(138,43,226,0.8)]"
        >
          Contact Sales
        </motion.button>
        <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
