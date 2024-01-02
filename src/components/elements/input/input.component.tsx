import { InputProps } from "../../../utils/input.model";
import { Container } from "./styles";

export default function Input(props: InputProps) {
  return (
    <Container
      type="text"
      placeholder={props.placeholder}
      onChange={props.OnChange}
      value={props.value}
      onKeyDown={props.handleKeyDown}
    ></Container>
  );
}
