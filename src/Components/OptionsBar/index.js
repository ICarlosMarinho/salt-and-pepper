import { OptionsBarContainer, ExtendedButton, InputContainer } from "./style";
import Input from "../Input";

export default function OptionsBar({ registerPath }) {
  return (
    <OptionsBarContainer>
      <ExtendedButton linkButton={true} to={registerPath} width="10%">
        Cadastrar
      </ExtendedButton>
      <InputContainer>
        <Input
          labelText="Filtrar"
          height="30px"
          placeholder="Insira o nome do item"
        />
      </InputContainer>
    </OptionsBarContainer>
  );
}
