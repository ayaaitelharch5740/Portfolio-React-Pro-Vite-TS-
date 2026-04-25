import * as React from "react";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../../lib/button-variants";
import type { VariantProps } from "class-variance-authority";

type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}