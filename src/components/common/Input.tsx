import React, { useId } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  wrapperClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftElement,
      rightElement,
      wrapperClassName = "",
      className = "",
      required,
      disabled,
      ...props
    },
    ref,
  ) => {
    const inputId = useId();

    const messageId = `${inputId}-message`;

    return (
      <div className={`flex w-full flex-col gap-1.5 ${wrapperClassName}`}>
        {label && (
          <label
            htmlFor={inputId}
            className='text-sm font-medium text-text-primary'
          >
            {label}

            {required && <span className='ml-1 text-danger'>*</span>}
          </label>
        )}

        <div
          className={[
            "flex h-10 w-full items-center gap-2 rounded-md border bg-surface px-3 transition-all",
            "focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500",
            error ? "border-danger" : "border-border",
            disabled
              ? "cursor-not-allowed bg-surface-secondary opacity-60"
              : "",
          ].join(" ")}
        >
          {leftElement && (
            <span className='shrink-0 text-text-muted'>{leftElement}</span>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={error || helperText ? messageId : undefined}
            className={[
              "h-full w-full min-w-0 bg-transparent text-sm text-text-primary",
              "placeholder:text-text-muted outline-none",
              "disabled:cursor-not-allowed",
              className,
            ].join(" ")}
            {...props}
          />

          {rightElement && (
            <span className='shrink-0 text-text-muted'>{rightElement}</span>
          )}
        </div>

        {(error || helperText) && (
          <p
            id={messageId}
            role={error ? "alert" : undefined}
            className={`text-xs ${error ? "text-danger" : "text-text-muted"}`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
