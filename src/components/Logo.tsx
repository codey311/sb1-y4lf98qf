import React from 'react';
import { Trees, CircleDot, Scissors } from 'lucide-react';

interface LogoProps {
  className?: string;
}

function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <div className="relative">
        <Trees className="h-8 w-8 text-green-500" />
        <Scissors className="h-5 w-5 absolute -bottom-1 -right-1 text-green-600 transform rotate-45" />
      </div>
      <CircleDot className="h-2 w-2 text-green-400 mx-2" />
      <span className="font-bold text-xl">Boss Lawn Group</span>
    </div>
  );
}

export default Logo;