import { NotFoundContainer, StyledImg } from "./style";
import rocket from "../../assets/rocket.svg";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <StyledImg src={rocket} alt="Foguete caído" />
      <h2>Oops, página não encontrada!</h2>
    </NotFoundContainer>
  );
}
