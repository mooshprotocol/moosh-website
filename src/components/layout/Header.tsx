"use client";

import Link from 'next/link';
import TryMooshButton from '@/components/ui/TryMooshButton';
import ClientText from '@/components/ui/ClientText';

export default function Header() {
  return (
    <header className="border-b border-moosh-black-lighter bg-moosh-black">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl moosh-logo text-white">
            MOOSH
          </Link>
          
          <TryMooshButton size="sm">
            <span suppressHydrationWarning>
              <ClientText k="homepage.getStarted" defaultValue="Try Moosh" />
            </span>
          </TryMooshButton>
        </nav>
      </div>
    </header>
  );
}