import React from 'react';
import { AudienceType, content } from '@/lib/constants';
import { 
  Timer, Users, TrendingUp, BarChart,
  ScanLine, Split, CreditCard, Receipt
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ShimmerCard } from './ui/ShimmerCard';

interface BenefitsProps {
  audience: AudienceType;
}

const Benefits: React.FC<BenefitsProps> = ({ audience }) => {
  const benefitsContent = content[audience].benefits;
  
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-10 h-10 text-quicktab-blue" };
    
    switch (iconName) {
      case 'timer': return <Timer {...iconProps} />;
      case 'users': return <Users {...iconProps} />;
      case 'trending-up': return <TrendingUp {...iconProps} />;
      case 'bar-chart': return <BarChart {...iconProps} />;
      case 'scan': return <ScanLine {...iconProps} />;
      case 'split': return <Split {...iconProps} />;
      case 'credit-card': return <CreditCard {...iconProps} />;
      case 'receipt': return <Receipt {...iconProps} />;
      default: return <div className="w-10 h-10 bg-blue-100 rounded-full"></div>;
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="features" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-0 left-0 h-[50vh] bg-gradient-to-t from-blue-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-quicktab-blue mb-4"
          >
            <span className="text-xs font-semibold uppercase tracking-wider">Características</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 transform-gpu"
          >
            {benefitsContent.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-lg text-foreground/70 transform-gpu"
          >
            {benefitsContent.subtitle}
          </motion.p>
        </div>

        <motion.div
          key={audience}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {benefitsContent.items.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
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
                {getIcon(benefit.icon)}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg md:text-xl">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-quicktab-gray leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
