export type Variant = "info" | "danger" | "success" | "warning" | "custom";

export interface AlertProps {
  active: boolean;
  text: string;
  timing?: number;
  className?: string;
  description?: string;
  variant: Variant;
}
