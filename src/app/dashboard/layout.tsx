import { ReactNode } from 'react';

// This is now just a simple pass-through layout file.
// The main layout logic is in DashboardPage.tsx and DashboardLayout.tsx
export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
