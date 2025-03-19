import React from 'react';
import { cn } from '@/lib/utils';
import { AudienceType } from '@/lib/constants';
import { Users, User } from 'lucide-react';
import { ShimmerButton } from './ui/ShimmerButton';

interface ToggleProps {
  audience: AudienceType;
  setAudience: (audience: AudienceType) => void;
  className?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  audience,
  setAudience,
  className
}) => {
  // Function to toggle the audience type
  const toggleAudience = () => {
    setAudience(audience === 'restaurant' ? 'individual' : 'restaurant');
  };

  // Determine which icon and text to show based on current audience
  const Icon = audience === 'restaurant' ? User : Users;
  const buttonText = audience === 'restaurant' ? 'Usuarios' : 'Negocios';

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <ShimmerButton
        onClick={toggleAudience}
        background="linear-gradient(to right, #0055FF, #3B82F6)"
        shimmerColor="rgba(255, 255, 255, 0.4)"
        className="group font-medium py-2"
      >
        <span className="flex items-center gap-2">
          <Icon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          <span className="text-sm font-medium">{buttonText}</span>
        </span>
      </ShimmerButton>
    </div>
  );
};

export default Toggle;
