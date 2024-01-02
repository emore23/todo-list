// Dependencies
// import { useState } from "react";

// Components
import Button from "../../../elements/button/button.component";
import Input from "../../../elements/input/input.component";

// Styles
import { Container } from "./styles";

// Assets
import { PlusCircle } from "phosphor-react";

// Utils
import { CreateTasksProps } from "../../../../utils/create-task.model";

export default function CreateTasks({
  changeInputValue,
  inputValue,
  createTaskClicked,
  handleKeyDown
}: CreateTasksProps) {
  
  
  return (
    <Container>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={inputValue}
        handleKeyDown={handleKeyDown}
        OnChange={(event) => changeInputValue(event)}
      />

      <Button
        hover
        type="create"
        title="Criar"
        clickedButton={createTaskClicked}
      >
        <p>Criar</p>
        <PlusCircle size={24} />
      </Button>
    </Container>
  );
}
