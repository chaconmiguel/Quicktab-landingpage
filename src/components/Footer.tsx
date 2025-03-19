import React, { useState } from 'react';
import { footerLinks } from '@/lib/constants';
import Logo from './Logo';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { WaitlistDialog } from './WaitlistDialog';
import { ShimmerButton } from './ui/ShimmerButton';

const Footer: React.FC = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  
  const getSocialIcon = (icon: string) => {
    const iconProps = { className: "w-5 h-5" };
    
    switch (icon) {
      case 'facebook': return <Facebook {...iconProps} />;
      case 'instagram': return <Instagram {...iconProps} />;
      case 'twitter': return <Twitter {...iconProps} />;
      default: return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistOpen(true);
  };

  return (
    <footer id="contact" className="relative pt-16 md:pt-20">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] border-t border-gray-100/30" />
      <div className="relative z-[2] max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-8 md:pb-10">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm md:text-base text-foreground/80 max-w-xs">
              Transformando la experiencia de pago en restaurantes, bares, antros, y eventos.
            </p>
            <div className="flex space-x-3 md:space-x-4 mt-6">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-50/80 flex items-center justify-center text-quicktab-blue hover:bg-blue-100/90 transition-colors"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Compañía</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm md:text-base text-foreground/80 hover:text-quicktab-blue transition-colors link-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contacto</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-quicktab-blue mr-2 md:mr-3 mt-0.5" />
                <a 
                  href={`mailto:${footerLinks.contact.email}`} 
                  className="text-sm md:text-base text-foreground/80 hover:text-quicktab-blue transition-colors link-underline"
                >
                  {footerLinks.contact.email}
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-quicktab-blue mr-2 md:mr-3 mt-0.5" />
                <a 
                  href={`tel:${footerLinks.contact.phone}`} 
                  className="text-sm md:text-base text-foreground/80 hover:text-quicktab-blue transition-colors link-underline"
                >
                  {footerLinks.contact.phone}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-quicktab-blue mr-2 md:mr-3 mt-0.5" />
                <span className="text-sm md:text-base text-foreground/80">Ciudad de México, México</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Unirse a la lista de espera</h3>
            <p className="text-sm md:text-base text-foreground/80 mb-4">
              Sé el primero en probar QuickTab cuando esté disponible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-200/70 bg-white/70 focus:outline-none focus:ring-2 focus:ring-quicktab-blue focus:border-transparent transition-all"
                  required
                />
              </div>
              <ShimmerButton
                type="submit"
                className="w-full py-2.5 md:py-3 text-sm md:text-base font-medium"
                background="linear-gradient(to right, #0055FF, #3B82F6)"
                shimmerColor="rgba(255, 255, 255, 0.4)"
              >
                Unirse ahora
              </ShimmerButton>
            </form>
          </div>
        </div>
        
        <div className="py-4 md:py-6 border-t border-gray-100/30 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-xs md:text-sm text-foreground/80 text-center md:text-left">
            &copy; {new Date().getFullYear()} QuickTab. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a 
              href="#"
              className="text-xs md:text-sm text-foreground/80 hover:text-quicktab-blue transition-colors"
            >
              Términos de Servicio
            </a>
            <a 
              href="#"
              className="text-xs md:text-sm text-foreground/80 hover:text-quicktab-blue transition-colors"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
      
      {/* Waitlist Dialog */}
      <WaitlistDialog 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen} 
        audience="restaurant" // Default to restaurant for footer
      />
    </footer>
  );
};

export default Footer;
