import React from 'react';

const Avatar = ({ 
  name = "User", 
  image = null, 
  color = "#3b82f6", 
  size = "md",
  showOnlineStatus = false,
  className = ""
}) => {
  // Get first letter of name
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  // Size variants
  const sizeClasses = {
    xs: "w-8 h-8 text-xs",
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-xl",
    xl: "w-20 h-20 text-2xl",
    "2xl": "w-28 h-28 text-3xl"
  };

  // Online status size variants
  const statusSizeClasses : any = {
    xs: "w-2 h-2 border",
    sm: "w-2.5 h-2.5 border",
    md: "w-3 h-3 border-2",
    lg: "w-3.5 h-3.5 border-2",
    xl: "w-4 h-4 border-2",
    "2xl": "w-4 h-4 border-2"
  };

  // Online status position variants
  const statusPositionClasses :any= {
    xs: "bottom-0 right-0",
    sm: "bottom-0 right-0",
    md: "bottom-0.5 right-0.5",
    lg: "bottom-1 right-1",
    xl: "bottom-1 right-1",
    "2xl": "bottom-2 right-2"
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div 
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-semibold overflow-hidden`}
        style={{ 
          backgroundColor: image ? 'transparent' : color,
          color: image ? 'inherit' : '#ffffff'
        }}
      >
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>{getInitial(name)}</span>
        )}
      </div>
      
      {showOnlineStatus && (
        <div 
          className={`absolute ${statusPositionClasses[size]} ${statusSizeClasses[size]} bg-emerald-500 rounded-full border-white`}
        ></div>
      )}
    </div>
  );
};

export default Avatar;