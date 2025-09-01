import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  // The onSelectTool prop will be connected in a later step
  // @ts-ignore
  return <DashboardLayout>{children}</DashboardLayout>;
}
