// Styles
import { Container } from "./styles";

// Utils
import { ButtonProps } from "../../../utils/button.model";

export default function Button(props: ButtonProps) {
  return (
    <Container title={props.title} onClick={props.clickedButton}>
      <button
        className={`appeareance-${props.type}-${props.hover && "default"}`}
      >
        {props.children}
      </button>
    </Container>
  );
}
