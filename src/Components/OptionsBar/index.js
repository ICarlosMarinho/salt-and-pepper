import { OptionsBarContainer } from "./style";
import Button from "../Button";
import Input from "../../Components/Input";

export default function OptionsBar({ registerPath }) {
  return (
    <OptionsBarContainer>
      <Button linkButton={true} to={registerPath} width="10%">
        Cadastrar
      </Button>
      <Input labelText="Filtrar" width="30%" height="30px" />
    </OptionsBarContainer>
  );
}
