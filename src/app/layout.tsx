import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { AppProviders } from '@/components/app-providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SK Yadav Portfolio | Software Engineer & Web Developer',
  description: 'Personal portfolio of Saurav Kumar Yadav, showcasing projects, skills, and experience in software engineering and web development.',
  keywords: ['Saurav Kumar Yadav', 'Software Engineer', 'Web Developer', 'React Developer', 'Next.js', 'Portfolio', 'IIT Dhanbad'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        <AppProviders>
          {children}
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
