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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative w-full max-w-lg rounded-lg p-8 bg-card border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="text-2xl font-bold text-foreground mb-2">
              Inquiry for {tool?.name}
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team will contact you shortly to discuss this premium solution.
            </p>

            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Full Name"
                className="bg-background h-12"
              />
              <Input
                type="email"
                placeholder="Company Email"
                className="bg-background h-12"
              />
               <Input
                type="text"
                placeholder="Company Name"
                className="bg-background h-12"
              />
              <Textarea
                placeholder="Your message (optional)"
                className="bg-background"
                rows={4}
              />
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  className="w-full h-12 text-base"
                >
                  Submit Inquiry
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
