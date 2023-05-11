export interface DropzoneFileProps {
  id: string;
  name: string;
  label?: string;
  invalid: boolean;
  file: File | null;
  errorMessage?: string;
  dropzoneTitle?: string;
  dropzoneSubTitle?: string;
  reset?: (name: string) => void;
}
