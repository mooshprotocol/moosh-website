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

          <div className="flex items-center gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord"
              className="text-moosh-text-secondary hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-moosh-green focus-visible:ring-offset-2 focus-visible:ring-offset-moosh-black rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M20.317 4.369A17.227 17.227 0 0016.558 3c-.2.356-.433.83-.594 1.204a15.09 15.09 0 00-7.928 0C7.874 3.83 7.64 3.356 7.441 3a17.232 17.232 0 00-3.761 1.369C1.354 8.048.66 11.61.96 15.13A17.3 17.3 0 006.07 17.7c.4-.55.756-1.137 1.064-1.752-.587-.222-1.146-.5-1.676-.83.141-.103.28-.21.414-.32a10.93 10.93 0 009.245 0c.136.112.275.22.416.322-.532.329-1.092.607-1.678.83.307.615.663 1.202 1.063 1.752a17.3 17.3 0 005.11-2.57c.36-3.97-.61-7.496-2.757-10.162zM9.552 13.348c-.905 0-1.64-.83-1.64-1.85 0-1.02.733-1.85 1.64-1.85.906 0 1.64.83 1.64 1.85 0 1.02-.734 1.85-1.64 1.85zm4.896 0c-.905 0-1.64-.83-1.64-1.85 0-1.02.733-1.85 1.64-1.85s1.64.83 1.64 1.85c0 1.02-.734 1.85-1.64 1.85z"/>
              </svg>
            </a>

            <TryMooshButton size="sm">
              <span suppressHydrationWarning>
                <ClientText k="homepage.getStarted" defaultValue="Try Moosh" />
              </span>
            </TryMooshButton>
          </div>
        </nav>
      </div>
    </header>
  );
}