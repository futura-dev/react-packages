import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  rows?: number;
  label?: string;
  invalid?: boolean;
  errorMessage?: string;
}
