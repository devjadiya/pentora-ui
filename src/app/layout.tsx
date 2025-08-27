import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import CursorSpotlight from '@/components/landing/CursorSpotlight';

export const metadata: Metadata = {
  title: 'Pentora | Proactive Cybersecurity',
  description: 'Pentora delivers elite penetration testing and threat monitoring services, securing your digital assets with a proactive approach.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sora:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <CursorSpotlight />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
