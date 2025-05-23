import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'bordered';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
}) => {
  const baseStyles = "rounded-lg overflow-hidden";
  
  const variantStyles = {
    default: "bg-white shadow-md dark:bg-gray-800",
    glass: "bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-md",
    bordered: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
  };
  
  const hoverStyles = hover 
    ? "transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg" 
    : "";

  return (
    <div
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;