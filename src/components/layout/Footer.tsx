import React from 'react';
import { socialLinks, personalInfo } from '../../data/portfolio';
import { ArrowUpCircle, Mail, MapPin } from 'lucide-react';
import SocialIcon from '../ui/SocialIcon';

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Alex.dev</h3>
            <p className="mb-4 text-gray-400 max-w-sm">
              Blockchain developer and full stack engineer specializing in decentralized applications
              and modern web development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  aria-label={link.platform}
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mt-1 mr-3 text-primary-400" />
                <p>{personalInfo.email}</p>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-primary-400" />
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.
          </p>
          <button
            onClick={handleScrollToTop}
            className="mt-4 md:mt-0 group flex items-center text-gray-400 hover:text-primary-400 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUpCircle className="w-5 h-5 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;