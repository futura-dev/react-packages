import { InputHTMLAttributes } from "react";

export interface DropzoneFileProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label?: string;
  invalid?: boolean;
  file: File | null;
  errorMessage?: string;
  title?: string;
  subTitle?: string;
  reset?: (name: string) => void;
}
