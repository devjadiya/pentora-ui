'use client';

import { useState } from 'react';
import { Tool } from '@/lib/mockData';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@/components/ui/button';
import { Clipboard, ClipboardCheck, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface CodeViewerProps {
  tool: Tool;
  onClose: () => void;
}

export default function CodeViewer({ tool, onClose }: CodeViewerProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    if (tool.code) {
      navigator.clipboard.writeText(tool.code);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg p-6 h-[80vh] flex flex-col bg-card border"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-foreground">{tool.name}</h2>
          <p className="text-sm text-muted-foreground">{tool.description}</p>
        </div>
        <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" onClick={handleCopy}>
                  {hasCopied ? <ClipboardCheck className="h-4 w-4 mr-2 text-green-500" /> : <Clipboard className="h-4 w-4 mr-2" />}
                  {hasCopied ? 'Copied!' : 'Copy Code'}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-5 w-5" />
              </Button>
            </motion.div>
        </div>
      </div>
      <div className="flex-1 overflow-auto rounded-md bg-background">
        <SyntaxHighlighter
          language="markdown"
          style={vscDarkPlus}
          customStyle={{
            background: 'transparent',
            height: '100%',
            margin: 0,
          }}
          showLineNumbers
          wrapLines
        >
          {tool.code || '// No code available for this tool.'}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
}
