import React, { useState, useEffect } from 'react';
import { testimonials } from '@/lib/constants';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-blue-50/50 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-[25rem] h-[25rem] rounded-full bg-blue-50/50 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-quicktab-blue mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider">Testimonios</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-lg text-foreground/70">Descubra cómo QuickTab está transformando la experiencia de pago en restaurantes, bares, antros, y eventos.</p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-white to-blue-50 glass-morph">
              {/* Testimonial content */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <Quote className="w-12 h-12 text-quicktab-blue opacity-20 mb-6" />
                
                <div className="relative h-[220px] md:h-[180px]">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.name}
                      className={cn(
                        "absolute inset-0 transition-all duration-500 ease-in-out",
                        index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                      )}
                      style={{ 
                        zIndex: index === activeIndex ? 1 : 0 
                      }}
                    >
                      <blockquote className="text-lg md:text-xl text-balance mb-8 text-foreground/80 italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={`author-${testimonial.name}`}
                      className={cn(
                        "transition-all duration-500 ease-in-out absolute",
                        index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                      )}
                      style={{ 
                        zIndex: index === activeIndex ? 1 : 0 
                      }}
                    >
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-foreground/60">{testimonial.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial image */}
              <div className="hidden lg:block relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`image-${testimonial.name}`}
                    className={cn(
                      "absolute inset-0 transition-all duration-500 ease-in-out",
                      index === activeIndex ? "opacity-100" : "opacity-0"
                    )}
                    style={{ 
                      zIndex: index === activeIndex ? 1 : 0,
                      background: `linear-gradient(to right, rgba(255,255,255,0.8), transparent), url('https://source.unsplash.com/random/600x800?portrait') center/cover no-repeat` 
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Navigation controls */}
            <div className="absolute bottom-8 right-8 flex space-x-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/80 backdrop-blur-sm text-quicktab-blue hover:bg-white transition-colors shadow-sm"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/80 backdrop-blur-sm text-quicktab-blue hover:bg-white transition-colors shadow-sm"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (animating) return;
                  setAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setAnimating(false), 500);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-quicktab-blue w-8" 
                    : "bg-blue-200 hover:bg-blue-300"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
