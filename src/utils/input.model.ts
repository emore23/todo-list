export interface InputProps {
  placeholder: string;
  value: string;
  OnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}