import Link from 'next/link';

export default function Header() {

  return (
    <header className="border-b border-gray-800 bg-black">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl moosh-logo text-white">
            MOOSH
          </Link>
          
          <button className="border border-white text-white px-4 py-2 rounded text-sm font-medium relative overflow-hidden group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Try Moosh</span>
            <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}