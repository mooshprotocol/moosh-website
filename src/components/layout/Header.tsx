import Link from 'next/link';

export default function Header() {

  return (
    <header className="border-b border-gray-800 bg-black">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl moosh-logo text-white">
            MOOSH
          </Link>
          
          {/* 使用品牌色版本的按钮 */}
          <button className="btn-header-brand">
            <span className="btn-text">Try Moosh</span>
            <span className="btn-bg"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}