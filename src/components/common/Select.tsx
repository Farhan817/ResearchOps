import React, { useId } from "react";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "children"
> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  helperText?: string;
  wrapperClassName?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      placeholder = "Select an option",
      error,
      helperText,
      wrapperClassName = "",
      className = "",
      required,
      disabled,

      ...props
    },
    ref,
  ) => {
    const selectId = useId();

    const messageId = `${selectId}-message`;

    return (
      <div className={`flex w-full flex-col gap-1.5 ${wrapperClassName}`}>
        {label && (
          <label
            htmlFor={selectId}
            className='text-sm font-medium text-text-primary'
          >
            {label}

            {required && <span className='ml-1 text-danger'>*</span>}
          </label>
        )}

        <div className='relative'>
          <select
            ref={ref}
            id={selectId}
            required={required}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error || helperText ? messageId : undefined}
            className={[
              "h-10 w-full appearance-none rounded-md border bg-surface px-3 pr-10",
              "text-sm text-text-primary outline-none transition-all",
              "focus:border-primary-500 focus:ring-2 focus:ring-primary-500",
              "disabled:cursor-not-allowed disabled:bg-surface-secondary disabled:opacity-60",
              error ? "border-danger" : "border-border",
              className,
            ].join(" ")}
            {...props}
          >
            <option value='' disabled>
              {placeholder}
            </option>

            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          <svg
            className='pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            aria-hidden='true'
          >
            <path
              d='m6 9 6 6 6-6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
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

Select.displayName = "Select";
