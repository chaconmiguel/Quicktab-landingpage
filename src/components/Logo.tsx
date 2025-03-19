import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/images/logo.png" 
        alt="QuickTab Logo" 
        className="h-7 md:h-10"
      />
    </div>
  );
};

export default Logo;
