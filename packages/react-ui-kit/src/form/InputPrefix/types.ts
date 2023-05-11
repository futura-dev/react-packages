import { InputHTMLAttributes } from "react";

export interface InputPrefixProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  prefix: string;
  label?: string;
  invalid?: boolean;
  errorMessage?: string;
}
