// Dependencies
import { useState } from "react";

// Components
import Header from "../compositions/header/header.component";
import ListTasks from "../sections/list-tasks/list-tasks.component";

// Styles
import { Container } from "./styles";
import { TaskProps } from "../../../utils/task.model";

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask: TaskProps = {
        taskDescription: inputValue,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const updateTask = (updatedTasks: TaskProps[]) => {
    setTasks(updatedTasks);
  };

  const createTaskClicked = () => {
    addTask();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <Container>
      <Header
        handleKeyDown={handleKeyDown}
        changeInputValue={changeInputValue}
        inputValue={inputValue}
        createTaskClicked={createTaskClicked}
      />

      <ListTasks tasks={tasks} updateTask={updateTask} />
    </Container>
  );
}
