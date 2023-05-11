export interface TextAreaProps {
  id: string;
  name: string;
  label?: string;
  invalid: boolean;
  errorMessage?: string;
  className?: string;
  rows: number;
}
