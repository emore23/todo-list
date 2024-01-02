import { TaskProps } from "./task.model";

export interface ListTasksProps {
  tasks: TaskProps[];
  updateTask: (updatedTasks: TaskProps[]) => void;
}
