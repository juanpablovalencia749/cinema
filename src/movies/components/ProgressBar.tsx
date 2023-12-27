import React, { useEffect, useRef } from 'react';

interface ProgressBarProps {
  vote_average: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ vote_average }) => {
  const number = vote_average * 10;
  const targetPercent = Math.round(number);

  const getColorClass = () => {
    if (targetPercent >= 80) return 'text-green-500';
    if (targetPercent >= 60) return 'text-orange-500';
    if (targetPercent >= 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  const animatedCircleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    if (animatedCircleRef.current) {
      animatedCircleRef.current.style.transition = 'stroke-dasharray 1s ease-in-out';
      animatedCircleRef.current.style.strokeDasharray = `${targetPercent}, 100`;
    }
  }, [targetPercent]);

  return (
    <div className="relative w-14 h-14">
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
          ref={animatedCircleRef}
          className={`stroke-current ${getColorClass()}`}
          strokeWidth="4"
          strokeLinecap="round"
          fill="#5f60a3"
          r="14"
          cx="16"
          cy="16"
          style={{ strokeDasharray: '0, 100' }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
        {targetPercent}%
      </span>
    </div>
  );
};
