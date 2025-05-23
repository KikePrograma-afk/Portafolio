import React, { useRef, useEffect } from 'react';
import { experiences } from '../../data/portfolio';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-right');
        }
      });
    }, observerOptions);

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary-500 mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-10">
            My professional journey in blockchain and full stack development across various roles and companies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Timeline Items */}
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                ref={el => (timelineRefs.current[index] = el)}
                className={`mb-12 md:mb-0 relative ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex-row opacity-0`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center z-10">
                  <Briefcase size={18} className="text-white" />
                </div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-600">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{exp.role}</h3>
                    <div className="flex items-center mb-4">
                      <span className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-500 dark:text-gray-400">{exp.duration}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-md text-xs text-gray-600 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Spacer to create timeline effect on mobile */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;