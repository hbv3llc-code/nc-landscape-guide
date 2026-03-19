import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DisclaimerBanner from '@/components/DisclaimerBanner';

export const metadata: Metadata = {
  title: {
    default: 'North Carolina Landscape Contractor Licensing Guide | NCLCRG',
    template: '%s | NCLCRG',
  },
  description:
    'Independent guide to North Carolina landscape contractor licensing. Requirements, exams, renewal, laws, and resources for contractors and homeowners statewide.',
  metadataBase: new URL('https://nclcrb.org'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-text antialiased min-h-screen flex flex-col">
        <DisclaimerBanner />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
