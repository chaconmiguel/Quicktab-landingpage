import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';
import PosIntegration from '@/components/PosIntegration';
import { AudienceType } from '@/lib/constants';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [audience, setAudience] = useState<AudienceType>('restaurant');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle form submission for waitlist
    const form = document.getElementById('waitlist') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success toast notification
        toast({
          title: "¡Te has unido a la lista de espera!",
          description: "Te notificaremos cuando QuickTab esté disponible.",
          duration: 5000,
        });
        
        // Reset form
        form.reset();
      });
    }
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-2 border-t-quicktab-blue border-r-quicktab-blue border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-lg font-medium text-quicktab-blue animate-pulse">Cargando QuickTab</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background/50">
      <Navbar audience={audience} setAudience={setAudience} />
      
      <main className="relative z-[10]">
        <Hero audience={audience} />
        <PosIntegration audience={audience} />
        <Benefits audience={audience} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
