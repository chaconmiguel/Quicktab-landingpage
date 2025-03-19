import React from 'react';
import { AnimatedBeamIntegration } from './AnimatedBeamIntegration';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, RefreshCcw } from 'lucide-react';
import { ShimmerCard } from './ui/ShimmerCard';

interface PosIntegrationProps {
  audience: 'restaurant' | 'individual';
}

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className="bg-white/90 rounded-xl shadow-[0_8px_20px_-12px_rgba(0,0,0,0.2)] relative group overflow-hidden hover:-translate-y-1 hover:scale-[1.01] transition-all duration-200 ease-out transform-gpu"
  >
    {/* Soft white gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/30 rounded-xl" />
    {/* Extra shine effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-50 rounded-xl" />
    {/* Glass effect */}
    <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] rounded-xl" />
    {/* Content */}
    <div className="relative min-h-[160px] p-4 md:p-6 flex items-start gap-3 md:gap-4">
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-quicktab-blue flex-shrink-0 group-hover:rotate-6 transition-transform transform-gpu" />
      <div>
        <h3 className="font-semibold text-gray-900 mb-2 text-lg md:text-xl">{title}</h3>
        <p className="text-sm md:text-base text-quicktab-gray leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const PosIntegration: React.FC<PosIntegrationProps> = ({ audience }) => {
  if (audience !== 'restaurant') return null;

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/50 text-quicktab-blue mb-4 md:mb-6 border border-blue-200/50 backdrop-blur-sm">
            <span className="text-xs font-semibold">Integración POS</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 max-w-2xl mx-auto">
            Integración sin problemas con los sistemas POS existentes
          </h2>
          <p className="text-quicktab-gray max-w-2xl mx-auto text-base md:text-lg">
            Conectamos QuickTab con tu sistema actual de manera segura y eficiente, 
            sin interrumpir tus operaciones diarias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative order-2 md:order-1"
          >
            {/* Atmospheric gradient background */}
            <div className="absolute inset-0 -m-10">
              {/* Main central glow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%]"
                style={{ 
                  background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 30%, transparent 60%)',
                  filter: 'blur(40px)',
                }}
              />
              
              {/* Soft ambient glows */}
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `
                    radial-gradient(circle at 30% 50%, rgba(96, 165, 250, 0.08) -10%, transparent 70%),
                    radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.08) -10%, transparent 70%)
                  `,
                  filter: 'blur(60px)',
                }}
              />
              
              {/* Extra subtle atmosphere */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(241, 245, 249, 0.03) 0%, transparent 60%)',
                  filter: 'blur(40px)',
                }}
              />
            </div>
            <AnimatedBeamIntegration />
          </motion.div>

          <div className="flex flex-col gap-4 justify-center order-1 md:order-2">
            <FeatureCard
              icon={Shield}
              title="Integración Segura"
              description="Implementación segura con encriptación de datos y protocolos de seguridad avanzados."
            />
            <FeatureCard
              icon={Zap}
              title="Sincronización en Tiempo Real"
              description="Mantén tus datos sincronizados entre QuickTab y tu sistema POS existente."
            />
            <FeatureCard
              icon={Check}
              title="Compatibilidad Garantizada"
              description="Compatible con los principales sistemas POS del mercado."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosIntegration; 