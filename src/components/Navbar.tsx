import React, { useState, useEffect } from 'react';
import { navLinks, AudienceType } from '@/lib/constants';
import Toggle from './Toggle';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  audience: AudienceType;
  setAudience: (audience: AudienceType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ audience, setAudience }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-10 pt-6"
    >
      <div className="max-w-7xl mx-auto relative">
        <div 
          className={cn(
            "flex items-center justify-between px-6 py-3 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-gray-200/20 transition-transform duration-300 relative",
            isScrolled && "transform-gpu translate-y-[-8px]"
          )}
        >
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-quicktab-blue transition-colors rounded-full hover:bg-blue-50/50"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side - Toggle */}
          <div className="flex items-center gap-4">
            <Toggle audience={audience} setAudience={setAudience} />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground/80 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[73px] p-4 md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <nav className={cn(
          "w-full rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-gray-200/20 p-4"
        )}>
          <ul className="space-y-2">
            {navLinks.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-quicktab-blue transition-colors rounded-xl hover:bg-blue-50/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
