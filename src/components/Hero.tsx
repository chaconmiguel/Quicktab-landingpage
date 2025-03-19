import React, { useState } from 'react';
import { AudienceType, content } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ArrowRight, QrCode, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { WaitlistDialog } from './WaitlistDialog';
import { MorphingText } from './ui/MorphingText';
import { ShimmerButton } from './ui/ShimmerButton';

interface HeroProps {
  audience: AudienceType;
}

const Hero: React.FC<HeroProps> = ({ audience }) => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const heroContent = content[audience].hero;
  
  const venueTypes = ['Restaurante', 'Bar', 'Antro', 'Evento'];

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden"
    >
      {/* Background with prominent gradient */}
      <div className="absolute inset-0 -top-24 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-blue-50/80 to-white/80" />
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(0, 85, 255, 0.15), transparent 70%)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-3xl mb-12 z-10">
            <div key={audience} className="animate-fade-in">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-quicktab-blue mb-6 border border-blue-200/50 shadow-md transform-gpu"
              >
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {audience === 'restaurant' ? 'Para Establecimientos' : 'Para Usuarios'}
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 leading-[1.15] md:leading-[1.15] lg:leading-[1.15] pb-1 transform-gpu"
              >
                {audience === 'restaurant' ? (
                  <>
                    <div className="mb-4 transform-gpu">Transforma la experiencia</div>
                    <div className="mb-4 transform-gpu">de pago en tu</div>
                    <div className="mx-auto w-[300px] md:w-[400px] transform-gpu">
                      <MorphingText 
                        texts={venueTypes}
                        className="!h-16 md:!h-16 lg:!h-20 !text-[2.5rem] md:!text-[3.5rem] lg:!text-[4.5rem] text-quicktab-blue !max-w-none"
                      />
                    </div>
                  </>
                ) : heroContent.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="text-lg text-foreground/80 mb-8 mx-auto max-w-xl text-balance transform-gpu"
              >
                {heroContent.subtitle}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 transform-gpu"
              >
                <ShimmerButton
                  onClick={() => setWaitlistOpen(true)}
                  background="linear-gradient(to right, #0055FF, #3B82F6, #60A5FA)"
                  shimmerColor="rgba(255, 255, 255, 0.4)"
                  className="group font-medium"
                >
                  <span className="flex items-center">
                    {audience === 'restaurant' ? (
                      <CalendarCheck className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    ) : (
                      <QrCode className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    )}
                    Unirse a la Lista de Espera
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </ShimmerButton>
                
                <ShimmerButton
                  background="rgba(255, 255, 255, 0.9)"
                  shimmerColor="rgba(0, 85, 255, 0.1)"
                  className="group font-medium text-quicktab-blue hover:text-blue-700 transition-colors"
                >
                  <a 
                    href="#features"
                    className="flex items-center"
                  >
                    Conocer más
                    <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </ShimmerButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Dialog */}
      <WaitlistDialog 
        open={waitlistOpen} 
        onOpenChange={setWaitlistOpen} 
        audience={audience} 
      />
    </section>
  );
};

export default Hero;
