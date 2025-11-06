import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'page';
// type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  text?: string;
}

export function Button({
  loading = false,
  text,
  children,
  disabled,
  // className,
  // variant = 'primary',
  ...props
}: ButtonProps) {
  // const variantClasses: Record<ButtonVariant, string> = {
  //   primary:
  //     'flex border-[#262626] bg-[#f2f2f2] text-xs text-[var(--color-font-4)] w-2xs h-10',
  //   secondary:
  //     'flex border-[#000] bg-[#FFF] text-xs text-[var(--color-font-0)] w-3xs h-15',
  //   page: 'flex text-[var(--color-font-0)] text-[22px] px-30 py-20',
  // };

  return (
    <button
      // className={variantClasses[variant]}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span>Carregando...</span>}
      {children ?? text}
    </button>
  );
}
