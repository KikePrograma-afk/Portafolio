import React from 'react';
import * as LucideIcons from 'lucide-react';

interface SocialIconProps {
  name: string;
  size?: number;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, size = 20, className = "" }) => {
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons];

  if (!IconComponent) {
    console.warn(`Icon ${name} not found`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default SocialIcon;