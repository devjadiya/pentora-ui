'use client';

import { enhanceSecurityPhrasing, type EnhanceSecurityPhrasingInput } from "@/ai/flows/enhance-security-phrasing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Check, X, Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { ScrollFadeIn } from "./ScrollFadeIn";

export default function AiContentEnhancer() {
    const [originalText, setOriginalText] = useState("Our product uses top-tier encryption to keep your data safe. We run daily checks to make sure everything is secure.");
    const [enhancedText, setEnhancedText] =useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasCopied, setHasCopied] = useState(false);
    const { toast } = useToast();

    const handleEnhance = async () => {
        setIsLoading(true);
        setEnhancedText(null);
        try {
            const input: EnhanceSecurityPhrasingInput = { text: originalText };
            const result = await enhanceSecurityPhrasing(input);
            setEnhancedText(result.enhancedText);
        } catch (error) {
            console.error("Error enhancing text:", error);
            toast({
                title: "Error",
                description: "Failed to enhance text. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleAccept = () => {
        if(enhancedText) {
            setOriginalText(enhancedText);
            setEnhancedText(null);
        }
    }
    
    const handleReject = () => {
        setEnhancedText(null);
    }

    const handleCopy = () => {
        if (enhancedText) {
            navigator.clipboard.writeText(enhancedText);
            setHasCopied(true);
            setTimeout(() => setHasCopied(false), 2000);
        }
    };


    return (
        <section id="ai-tool" className="py-24 bg-secondary/20">
            <div className="container mx-auto px-4">
                <ScrollFadeIn>
                    <h2 className="text-center font-headline text-4xl font-bold">AI-Powered Security Copywriter</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
                        Instantly rewrite your website copy to enhance its security focus, clarity, and trustworthiness.
                    </p>
                </ScrollFadeIn>
                <ScrollFadeIn delay="200ms">
                    <Card className="mt-12 max-w-4xl mx-auto bg-card border">
                        <CardHeader>
                            <CardTitle>Content Enhancement Tool</CardTitle>
                            <CardDescription>Enter your text below and let our AI suggest improvements.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <Textarea 
                                value={originalText}
                                onChange={(e) => setOriginalText(e.target.value)}
                                placeholder="Enter your website copy here..."
                                rows={4}
                                className="bg-background"
                            />
                            <div className="flex justify-center">
                                <Button onClick={handleEnhance} disabled={isLoading} size="lg" className="group">
                                    <Wand2 className={`mr-2 h-5 w-5 ${isLoading ? 'animate-spin' : 'transition-transform group-hover:rotate-12'}`} />
                                    {isLoading ? 'Enhancing...' : 'Enhance with AI'}
                                </Button>
                            </div>
                            
                            {enhancedText && (
                                <Card className="bg-background border-primary">
                                    <CardHeader>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <CardTitle className="text-lg text-primary">AI Suggestion</CardTitle>
                                                <CardDescription>Here is the enhanced version of your text.</CardDescription>
                                            </div>
                                             <Button variant="ghost" size="icon" onClick={handleCopy}>
                                                {hasCopied ? <ClipboardCheck className="h-4 w-4 text-green-400" /> : <Clipboard className="h-4 w-4" />}
                                                <span className="sr-only">Copy</span>
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-foreground">{enhancedText}</p>
                                        <div className="mt-4 flex justify-end gap-2">
                                            <Button variant="outline" size="sm" onClick={handleReject}>
                                                <X className="mr-2 h-4 w-4"/> Reject
                                            </Button>
                                            <Button variant="secondary" size="sm" onClick={handleAccept} className="bg-green-500/20 text-green-300 hover:bg-green-500/30">
                                                <Check className="mr-2 h-4 w-4"/> Accept
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </CardContent>
                    </Card>
                </ScrollFadeIn>
            </div>
        </section>
    );
}
