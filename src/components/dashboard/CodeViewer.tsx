
'use client';

import { useState } from 'react';
import { Tool } from '@/lib/mockData';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@/components/ui/button';
import { Clipboard, ClipboardCheck, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Terminal from './Terminal';
import { cn } from '@/lib/utils';

interface CodeViewerProps {
  tool: Tool;
  onClose: () => void;
}

const getLanguageFromFileName = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
        case 'js': return 'javascript';
        case 'py': return 'python';
        case 'sh': return 'bash';
        case 'go': return 'go';
        case 'json': return 'json';
        case 'rs': return 'rust';
        default: return 'markdown';
    }
}

export default function CodeViewer({ tool, onClose }: CodeViewerProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const language = getLanguageFromFileName(tool.name);

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
      className="h-[80vh] flex flex-col"
    >
        <Tabs defaultValue="code" className="flex-1 flex flex-col bg-card border rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b">
                 <TabsList className="bg-transparent p-0 gap-4">
                    <TabsTrigger value="code" className="text-sm px-0 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none relative after:absolute after:bottom-[-9px] after:left-0 after:right-0 after:h-[2px] after:bg-primary data-[state=inactive]:after:hidden">{tool.name}</TabsTrigger>
                    <TabsTrigger value="terminal" className="text-sm px-0 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none relative after:absolute after:bottom-[-9px] after:left-0 after:right-0 after:h-[2px] after:bg-primary data-[state=inactive]:after:hidden">Terminal</TabsTrigger>
                </TabsList>
                 <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={handleCopy}>
                        {hasCopied ? <ClipboardCheck className="h-4 w-4 mr-2 text-primary" /> : <Clipboard className="h-4 w-4 mr-2" />}
                        {hasCopied ? 'Copied!' : 'Copy Code'}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            <TabsContent value="code" className="flex-1 overflow-auto mt-0">
                <SyntaxHighlighter
                    language={language}
                    style={okaidia}
                    customStyle={{
                        background: 'hsl(var(--card))',
                        height: '100%',
                        margin: 0,
                        padding: '1.5rem',
                    }}
                    showLineNumbers
                    wrapLines
                >
                    {tool.code || '// No code available for this tool.'}
                </SyntaxHighlighter>
            </TabsContent>
            <TabsContent value="terminal" className="flex-1 overflow-auto mt-0">
                <Terminal tool={tool} />
            </TabsContent>
        </Tabs>
    </motion.div>
  );
}
