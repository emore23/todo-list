// Components
import Task from "../../compositions/task/task.component";
import NoHaveTasks from "../no-have-tasks/no-have-tasks.component";

// Styles
import { Container, Header, ListTasksContainer } from "./styles";

// Utils
import { ListTasksProps } from "../../../../utils/list-tasks.model";

export default function ListTasks({ tasks, updateTask }: ListTasksProps) {
  const completedTasksCount = tasks.filter((task) => task.hasChecked).length;

  const clickedTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      hasChecked: !updatedTasks[index].hasChecked,
    };
    updateTask(updatedTasks);
  };

  const clickedButton = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    updateTask(updatedTasks);
  };

  return (
    <Container>
      <Header>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>
            {tasks.length > 0
              ? completedTasksCount + " de " + tasks.length
              : "0"}
          </span>
        </div>
      </Header>

      <ListTasksContainer>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              key={index}
              buttonProps={{
                type: "delete",
                hover: true,
                clickedButton: () => clickedButton(index),
              }}
              clickedTask={() => clickedTask(index)}
              hasChecked={task.hasChecked}
              taskDescription={task.taskDescription}
            />
          ))
        ) : (
          <NoHaveTasks />
        )}
      </ListTasksContainer>
    </Container>
  );
}
