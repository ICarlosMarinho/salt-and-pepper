import { StyledForm } from "./style";
import Button from "../Button";
import ButtonsSection from "../ButtonsSection";

export default function Form({ children, backTo, ...rest }) {
  return (
    <StyledForm {...rest}>
      {children}
      <ButtonsSection>
        <Button width="30%" type="submit">
          Salvar
        </Button>
        <Button
          linkButton={true}
          to={backTo}
          width="30%"
          type="button"
          alert="true"
        >
          Cancelar
        </Button>
      </ButtonsSection>
    </StyledForm>
  );
}
