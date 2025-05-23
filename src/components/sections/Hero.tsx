import React, { useEffect, useRef } from 'react';
import { ChevronDown, Code, Database, Globe } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateParticles = () => {
      if (!particlesRef.current) return;
      
      particlesRef.current.innerHTML = '';
      const particlesContainer = particlesRef.current;
      const numberOfParticles = 30;
      
      for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 1;
        
        particle.className = `absolute rounded-full bg-primary-400/30 dark:bg-primary-500/20`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animation = `floatingParticle ${Math.random() * 10 + 15}s linear infinite`;
        particle.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        
        particlesContainer.appendChild(particle);
      }
    };

    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        ref={particlesRef} 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-300">
                {personalInfo.title}
              </h2>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl">
                {personalInfo.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get in Touch
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md perspective">
              <div className="hexagon-container animate-float flex items-center justify-center">
                <div className="hexagon bg-gradient-to-br from-primary-500/20 to-accent-500/20 dark:from-primary-600/30 dark:to-accent-600/30 backdrop-blur-sm p-16 rounded-xl shadow-lg border border-white/20 dark:border-white/10">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col items-center space-y-1 fade-up-1">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500/20 text-primary-600 dark:text-primary-400">
                        <Code size={24} />
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Frontend</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1 fade-up-2">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-500/20 text-accent-600 dark:text-accent-400">
                        <Database size={24} />
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Backend</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1 fade-up-3">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary-500/20 text-secondary-600 dark:text-secondary-400">
                        <Globe size={24} />
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Web3</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1 fade-up-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Blockchain</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNextSection}
            className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;