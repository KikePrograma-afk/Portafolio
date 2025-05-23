import React from 'react';

interface ProgressBarProps {
  value: number;
  className?: string;
  color?: string;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  className = '',
  color = 'primary',
  showValue = true,
  size = 'md',
  label,
}) => {
  const colorClasses = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    accent: 'bg-accent-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    error: 'bg-rose-500',
  };

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  const barColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
          {showValue && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}%</span>
          )}
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full dark:bg-gray-700 ${sizeClasses[size]}`}>
        <div
          className={`${barColor} rounded-full ${sizeClasses[size]} transition-all duration-1000 ease-out`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;