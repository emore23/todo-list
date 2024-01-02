export interface CreateTasksProps {
  changeInputValue: (task: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string, 
  createTaskClicked: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}