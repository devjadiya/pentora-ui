import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import CursorSpotlight from '@/components/landing/CursorSpotlight';
import { Inter, Sora } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Pentora | Proactive Cybersecurity',
  description: 'Pentora delivers elite penetration testing and threat monitoring services, securing your digital assets with a proactive approach.',
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['600', '700'] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${sora.variable} font-body antialiased`}>
        <CursorSpotlight />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
