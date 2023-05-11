export interface InputProps {
  id: string;
  label?: string;
  name: string;
  type: string;
  invalid: boolean;
  errorMessage?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
