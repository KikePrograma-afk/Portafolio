import React from 'react';
import { personalInfo } from '../../data/portfolio';
import { Award, BookOpen, Briefcase, Code } from 'lucide-react';
import Button from '../ui/Button';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-primary-500" />,
      title: 'Full Stack Development',
      description: 'Building complete web applications from frontend to backend using modern technologies.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary-500">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>,
      title: 'Blockchain Development',
      description: 'Creating smart contracts, dApps, and decentralized solutions on multiple blockchain networks.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary-500" />,
      title: 'Technical Consulting',
      description: 'Providing expert guidance on blockchain implementation and web application architecture.'
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary-500" />,
      title: 'Project Management',
      description: 'Leading development teams and ensuring successful project delivery with agile methodologies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-500 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Passionate Blockchain Developer & Full Stack Engineer
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With over 5 years of experience in the blockchain and web development space, 
              I specialize in building decentralized applications that combine cutting-edge 
              blockchain technology with intuitive user interfaces.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My journey began as a frontend developer, but I quickly became fascinated with 
              blockchain technology and its potential to revolutionize various industries. Since then, 
              I've dedicated myself to mastering smart contract development, decentralized finance protocols, 
              and web3 integration.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm passionate about creating secure, scalable, and user-friendly applications 
              that bridge the gap between traditional web platforms and the decentralized web.
            </p>
            
            <div className="flex gap-4">
              <Button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                My Experience
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;