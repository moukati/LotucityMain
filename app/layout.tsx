import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Business Name - Professional Services',
  description: 'We provide top-notch professional services to help your business grow and succeed.',
  metadataBase: new URL('https://yourbusiness.com'),
  openGraph: {
    title: 'Your Business Name - Professional Services',
    description: 'We provide top-notch professional services to help your business grow and succeed.',
    url: 'https://yourbusiness.com',
    siteName: 'Your Business Name',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}