import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LayoutWrapper from '@/components/LayoutWrapper';
import { DashboardProvider } from '@/context/DashboardContext'; // ✅ make sure the path is correct

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Affiliate Courses',
  description: 'Promote and discover quality online courses through affiliate links.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardProvider> {/* ✅ wrap everything here */}
          <Navbar />
          <LayoutWrapper>{children}</LayoutWrapper>
          <Footer />
        </DashboardProvider>
      </body>
    </html>
  );
}
