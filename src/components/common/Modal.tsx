import React, { useEffect, useId, useRef } from "react";

export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ModalProps {
  open: boolean;
  onClose: () => void;

  title?: string;
  description?: string;

  size?: ModalSize;

  children: React.ReactNode;
  footer?: React.ReactNode;

  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  blurBackdrop?: boolean;

  className?: string;
}

const sizes: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-[95vw] h-[90vh]",
};

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,

  title,
  description,

  size = "md",

  children,
  footer,

  showCloseButton = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
  blurBackdrop = true,

  className = "",
}) => {
  const titleId = useId();
  const descriptionId = useId();

  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && closeOnEscape) {
        onClose();
      }

      // Basic focus containment.
      if (event.key === "Tab" && dialogRef.current) {
        const focusableElements =
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
          );

        if (!focusableElements.length) {
          event.preventDefault();
          dialogRef.current.focus();
          return;
        }

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Focus the dialog after opening.
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeOnEscape, onClose]);

  if (!open) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdrop && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={[
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        "bg-black/40",
        blurBackdrop ? "backdrop-blur-sm" : "",
      ].join(" ")}
      onMouseDown={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
        className={[
          "flex w-full flex-col overflow-hidden",
          "rounded-xl border border-border",
          "bg-surface shadow-2xl",
          "max-h-[90vh]",
          sizes[size],
          "outline-none",
          className,
        ].join(" ")}
      >
        {/* Header */}
        {(title || description || showCloseButton) && (
          <div className='flex shrink-0 items-start justify-between gap-4 border-b border-border px-6 py-4'>
            <div className='min-w-0'>
              {title && (
                <h2
                  id={titleId}
                  className='text-lg font-semibold text-text-primary'
                >
                  {title}
                </h2>
              )}

              {description && (
                <p
                  id={descriptionId}
                  className='mt-1 text-sm text-text-secondary'
                >
                  {description}
                </p>
              )}
            </div>

            {showCloseButton && (
              <button
                type='button'
                onClick={onClose}
                aria-label='Close modal'
                className='
                  shrink-0 rounded-md p-1.5
                  text-text-muted
                  hover:bg-surface-secondary
                  hover:text-text-primary
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary-500
                '
              >
                <svg
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  aria-hidden='true'
                >
                  <path d='M18 6 6 18M6 6l12 12' strokeLinecap='round' />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className='min-h-0 flex-1 overflow-y-auto px-6 py-5'>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className='flex shrink-0 items-center justify-end gap-3 border-t border-border bg-surface px-6 py-4'>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
