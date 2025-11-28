import '../globals.css';
import { Outfit } from 'next/font/google';
import { Metadata } from 'next';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
//import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: {
    default: 'Sendexa for Developers',
    template: '%s | Sendexa Docs',
  },
  description:
    'Documentation for Sendexa, the all-in-one platform for Africas communications needs.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

// Configure the font properly
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <Header />
        {children}
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
