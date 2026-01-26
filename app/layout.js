import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/Analytics';
import StructuredData from '@/components/StructuredData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title:
    'Honest Tech Support for Kentville & Annapolis Valley | Evan Marshall Tech',
  description:
    'Local IT tech support, computer service repair, custom PC computer builds, and home media centers in Kentville, NS. No up sells, just honest solutions. Serving Annapolis Valley.',
  keywords:
    'computer service repair Kentville, IT tech support Nova Scotia, PC computer service repair Annapolis Valley, home media server, custom PC computer build, tech support Kentville, laptop service repair Kentville, tech support Annapolis Valley, retro gaming emulation, home theater setup, computer troubleshooting, iPhone setup help, Android setup help',
  openGraph: {
    title: 'Honest Tech Support | Kentville & Annapolis Valley',
    description:
      'Local IT tech support, computer service repair, and custom PC computer builds. No corporate up sells.',
    url: 'https://www.evanmarshall.tech',
    siteName: 'Evan Marshall Tech Services',
    images: [
      {
        url: 'https://www.evanmarshall.tech/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Honest Tech Support | Kentville & Annapolis Valley',
    description:
      'Local IT tech support, computer service repair, and custom PC computer builds.',
    images: ['https://www.evanmarshall.tech/og-image.jpg'],
  },
  other: {
    'geo.region': 'CA-NS',
    'geo.placename': 'Kentville',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
