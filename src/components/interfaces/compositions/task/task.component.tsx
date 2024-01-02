// Components
import Button from "../../../elements/button/button.component";
import Checkbox from "../../../elements/checkbox/checkbox.component";

// Styles
import { Container } from "./styles";

// Utils
import { TaskProps } from "../../../../utils/task.model";

// Assets
import { Trash } from "phosphor-react";

export default function Task({
  buttonProps,
  clickedTask,
  hasChecked,
  taskDescription,
}: TaskProps) {
  return (
    <Container>
      <div onClick={clickedTask}>
        <Checkbox hasCheck={hasChecked} clickedCheckbox={clickedTask} />

        <p className={`appearence-${hasChecked ? "decoration-line" : "default"}`}>
          {taskDescription}
        </p>
      </div>
      <Button
        hover
        type={buttonProps?.type}
        clickedButton={buttonProps?.clickedButton}
      >
        <Trash size={24} />
      </Button>
    </Container>
  );
}
