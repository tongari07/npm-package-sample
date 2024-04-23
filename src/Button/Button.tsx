import { forwardRef, ComponentPropsWithoutRef } from "react";

export type ButtonProps = ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }) => {
    return <button {...props}>{children}</button>;
  }
);
