import React from "react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = "md",
  className = "",
  label,
}) => {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-7 w-7 border-[3px]",
    lg: "h-10 w-10 border-4",
  };

  return (
    <div
      role='status'
      aria-label={label || "Loading"}
      className={`flex items-center justify-center gap-3 ${className}`}
    >
      <span
        className={`animate-spin rounded-full border-muted border-t-primary ${sizes[size]}`}
      />
      {label && <span className='text-sm text-muted-foreground'>{label}</span>}
    </div>
  );
};

export default Loader;
