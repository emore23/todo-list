// Components
import CreateTasks from "../create-tasks/create-tasks.component";

// Styles
import { Container } from "./styles";

// Assets
import logo from "../../../../assets/logo.svg";

// Utils
import { HeaderProps } from "../../../../utils/header.model";

export default function Header({
  changeInputValue,
  createTaskClicked,
  inputValue,
  handleKeyDown 
}: HeaderProps) {
  return (
    <Container>
      <img src={logo} alt="" />
      <CreateTasks
        changeInputValue={changeInputValue}
        inputValue={inputValue}
        createTaskClicked={createTaskClicked}
        handleKeyDown={handleKeyDown}
      />
    </Container>
  );
}
