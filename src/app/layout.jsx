import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import { Toaster } from '@/components/ui/sonner';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Basanta Raj Shrestha',
  description: 'A detailed portfolio of Basanta Raj Shrestha',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={jetbrainsMono.variable}>
      <body className='antialiased'>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
