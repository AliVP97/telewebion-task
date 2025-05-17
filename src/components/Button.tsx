import type { ButtonHTMLAttributes, FC } from "react";

import cn from "classnames";

type TButtonProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<TButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "color-white flex items-center justify-center rounded-xs",
        variant === "primary" && "bg-[#FD4141]",
        variant === "secondary" && "border border-[#7B8794] bg-transparent",
        size === "md" && "h-12 min-w-12",
        size === "sm" && "h-10 min-w-10",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
