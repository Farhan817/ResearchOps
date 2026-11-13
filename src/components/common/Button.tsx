import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",

  secondary: "bg-accent-500 text-white hover:bg-accent-600",

  outline:
    "border border-border bg-surface text-text-primary hover:bg-surface-secondary",

  ghost:
    "text-text-secondary hover:bg-surface-secondary hover:text-text-primary",

  danger: "bg-danger text-white hover:bg-red-700",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      disabled,
      className = "",
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={[
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth ? "w-full" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {loading && (
          <span
            className='h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent'
            aria-hidden='true'
          />
        )}

        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
