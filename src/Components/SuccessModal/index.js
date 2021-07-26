import { ModalContainer } from "./style";
import ButtonSection from "../ButtonsSection";
import Button from "../Button";
import Modal from "../Modal";

export default function SuccessModal({ visible, setVisible, backTo }) {
  function handleClick() {
    setVisible(false);
  }

  return (
    <Modal visible={visible}>
      <ModalContainer>
        <strong>Operação realizada com sucesso!</strong>
        <ButtonSection>
          <Button width="40%" onClick={handleClick}>
            Fechar janela
          </Button>
          <Button
            width="40%"
            onClick={handleClick}
            linkButton={true}
            to={backTo}
          >
            Ir para home
          </Button>
        </ButtonSection>
      </ModalContainer>
    </Modal>
  );
}
