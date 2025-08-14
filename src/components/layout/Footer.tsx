import ClientText from '@/components/ui/ClientText';
export default function Footer() {
  return (
    <footer className="bg-moosh-black border-t border-moosh-black-lighter">
      <div className="container mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          
          {/* Brand name - Left */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-black text-white tracking-tight font-orbitron">
              Moosh
            </h2>
          </div>
          
          {/* Navigation links - Right */}
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
            <FooterLink labelKey="navigation.discord" />
            <FooterLink labelKey="navigation.twitter" />
            <FooterLink labelKey="navigation.github" />
          </nav>
          
        </div>
        
        {/* Copyright - Bottom center */}
        <div className="text-center pt-8 border-t border-moosh-black-lighter">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ labelKey }: { labelKey: string }) {
  // Keep Footer as server component and move i18n formatting client-side to a subcomponent
  return (
    <a
      href="#"
      className="text-moosh-text-secondary hover:text-white text-base font-semibold tracking-wider transition-all duration-300 ease-out uppercase"
    >
      {/* render client text with hydration suppression to avoid mismatch */}
      <span suppressHydrationWarning>
        <ClientText k={labelKey} />
      </span>
    </a>
  );
}

function FooterCopyright() {
  return (
    <p className="text-moosh-text-muted text-sm font-light tracking-widest">
      <span suppressHydrationWarning>
        <ClientText k="footer.copyright" />
      </span>
    </p>
  );
}