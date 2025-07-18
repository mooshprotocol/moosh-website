export default function Footer() {

  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo and tagline */}
          <div className="text-left mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">Moosh</h2>
            <p className="text-sm" style={{color: '#999999'}}>Lending for the Modular Age.</p>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a href="#" className="text-white hover:underline transition-colors duration-300 text-sm">App</a>
            <a href="#" className="text-white hover:underline transition-colors duration-300 text-sm">Docs</a>
            <a href="#" className="text-white hover:underline transition-colors duration-300 text-sm">Careers</a>
            <a href="#" className="text-white hover:underline transition-colors duration-300 text-sm">Twitter</a>
            <a href="#" className="text-white hover:underline transition-colors duration-300 text-sm">GitHub</a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>
        
        {/* Copyright and legal */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
            <p className="text-xs" style={{color: '#999999'}}>
              © 2024 Moosh Protocol. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="hover:text-white transition-colors duration-300" style={{color: '#999999'}}>Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300" style={{color: '#999999'}}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}