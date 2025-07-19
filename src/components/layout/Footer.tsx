export default function Footer() {

  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Moosh</h2>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-white hover:underline transition-colors duration-300 text-sm">Docs</a>
            <a href="#" className="text-white hover:underline transition-colors duration-300 text-sm">Twitter</a>
            <a href="#" className="text-white hover:underline transition-colors duration-300 text-sm">GitHub</a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>
        
        {/* Copyright and legal */}
        <div className="text-center">
                      <p className="text-xs" style={{color: '#999999'}}>
              © 2025 Moosh Protocol. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}