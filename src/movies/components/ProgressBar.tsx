import React from 'react';

interface ProgressBarProps {
  percent: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  const getColorClass = () => {
    if (percent >= 80) return 'text-green-500';
    if (percent >= 60) return 'text-orange-500';
    if (percent >= 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="relative w-20 h-20 ">
      <svg className="absolute w-full h-full" viewBox="0 0 32 32">
        <circle
          strokeWidth="4"
          fill="transparent"
          stroke="#978e8e" 
          r="14"
          cx="16"
          cy="16"
        />
        <circle
          className={`stroke-current ${getColorClass()}`}
          strokeWidth="4"
          strokeLinecap="round"
          fill="transparent"
          r="14"
          cx="16"
          cy="16"
          style={{ strokeDasharray: `${percent}, 100` }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-700">
        {percent}%
      </span>
    </div>
  );
};
