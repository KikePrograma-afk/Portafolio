import React, { useState } from 'react';
import { skills } from '../../data/portfolio';
import ProgressBar from '../ui/ProgressBar';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'blockchain', label: 'Blockchain' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary-500 mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-10">
            My technical skills span across frontend, backend, and blockchain development.
            Here's a comprehensive overview of my expertise in various technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="skill-item animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProgressBar
                label={skill.name}
                value={skill.level}
                showValue={true}
                size="md"
                color={
                  skill.category === 'frontend' 
                    ? 'primary' 
                    : skill.category === 'backend' 
                      ? 'secondary' 
                      : 'accent'
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;