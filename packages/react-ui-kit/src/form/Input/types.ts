import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type: string;
  label?: string;
  invalid?: boolean;
  errorMessage?: string;
}
