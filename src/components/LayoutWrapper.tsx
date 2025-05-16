// components/LayoutWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <main className={`${isHome ? 'p-0' : 'mx-auto'}`}>
      {children}
    </main>
  );
}
