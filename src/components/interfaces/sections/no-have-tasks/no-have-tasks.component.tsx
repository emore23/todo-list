import clipboard from "../../../../assets/clipboard.svg";
import { Container } from "./styles";

export default function NoHaveTasks() {
  return (
    <Container>
      <img src={clipboard} alt="" />

      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </Container>
  );
}
