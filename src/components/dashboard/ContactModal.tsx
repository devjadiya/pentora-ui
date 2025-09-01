'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Tool } from '@/lib/mockData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  tool: Tool | null;
}

export default function ContactModal({ isOpen, onClose, tool }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative w-full max-w-lg rounded-xl p-8"
            style={{
              background: 'rgba(26, 12, 46, 0.8)',
              backdropFilter: 'blur(16px)',
              border: '1px solid',
              borderImageSource: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
              borderImageSlice: 1,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">
              Inquiry for {tool?.name}
            </h2>
            <p className="text-gray-400 mb-6">
              Our team will contact you shortly to discuss this premium solution.
            </p>

            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Full Name"
                className="bg-black/30 border-white/20 h-12"
              />
              <Input
                type="email"
                placeholder="Company Email"
                className="bg-black/30 border-white/20 h-12"
              />
               <Input
                type="text"
                placeholder="Company Name"
                className="bg-black/30 border-white/20 h-12"
              />
              <Textarea
                placeholder="Your message (optional)"
                className="bg-black/30 border-white/20"
                rows={4}
              />
              <Button
                type="submit"
                className="w-full h-12 text-base rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#4B0082] px-5 py-2.5 font-semibold text-white shadow-[0_0_20px_rgba(138,43,226,0.5)] transition-shadow hover:shadow-[0_0_30px_rgba(138,43,226,0.8)]"
              >
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
