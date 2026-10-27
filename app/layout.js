import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' });

export const metadata = {
  title: 'ABOUT TIME STUDIOS — Websites with a little more personality',
  description: 'Thoughtful, affordable websites for small businesses. Independent web design studio based in Berlin, Germany.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body></html>;
}
