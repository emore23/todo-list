import { ButtonProps } from "./button.model";

export interface TaskProps {
  clickedTask?: () => void;
  hasChecked?: boolean;
  taskDescription?: string;
  buttonProps?: ButtonProps;
}
