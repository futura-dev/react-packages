import { ReactElement } from "react";

export type Size = "s" | "m" | "l" | "xl";
export type Variant = "purple" | "white" | "black" | "custom";

export interface ButtonProps {
  text: string | ReactElement;
  onClick?: () => void;
  size?: Size;
  variant?: Variant;
  className?: string;
}
