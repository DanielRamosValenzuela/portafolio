import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from './ui/navigation/Navbar';
import Header from './ui/navigation/Header';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daniel Ramos Portfolio',
  description: 'Trayectoria como desarrollador full-stack',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
