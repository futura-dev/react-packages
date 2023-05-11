export interface InputPrefixProps {
  id: string;
  label?: string;
  name: string;
  prefix: string;
  invalid: boolean;
  errorMessage?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
