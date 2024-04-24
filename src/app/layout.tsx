import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Music School',
  description: 'Website for a music school built using next.js, tailwind CSS and Typescript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>

      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div
          className='relative w-full flex items-center justify-center'
        >
          <Navbar />
        </div>
        <div className='flex-1'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
