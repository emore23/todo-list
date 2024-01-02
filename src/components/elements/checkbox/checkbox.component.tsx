import { Check } from "phosphor-react";
import { Container } from "./styles";
import { CheckboxProps } from "../../../utils/checkbox.model";

export default function Checkbox({ clickedCheckbox, hasCheck }: CheckboxProps) {
  return (
    <Container
      onClick={clickedCheckbox}
      className={`appearence-${hasCheck && "checked"}`}
    >
      {hasCheck && <Check size={32} />}
    </Container>
  );
}
