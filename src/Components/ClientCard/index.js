import Button from "../Button";
import ButtonsSection from "../ButtonsSection";
import { CardContainer, InfoSection } from "./style";
import { deleteItem } from "../../Services/localStorageService";
import AppContext from "../../Contexts/AppContext";
import { useState, useContext } from "react";

export default function ClientCard({ client, setFilterText }) {
  const [deleteClicked, setDeleteClicked] = useState(false);
  const { setClients, setClientToEdit } = useContext(AppContext);

  function handleEditClient() {
    setClientToEdit(client);
  }

  function handleDeleteClicked() {
    setDeleteClicked(true);
  }

  function handleCancelDelete() {
    setDeleteClicked(false);
  }

  function handleConfirmDelete() {
    setClients(deleteItem("clients", "cpf", client?.cpf));
    setFilterText("");
  }

  return (
    <CardContainer>
      <InfoSection>
        <span>
          <strong>CPF </strong>
          {client?.cpf}
        </span>
        <span>
          <strong>Nome </strong>
          {client?.fullName}
        </span>
        <span>
          <strong>Email </strong>
          {client?.email}
        </span>
        <span>
          <strong>Endereço </strong>
          {client?.address}
        </span>
      </InfoSection>
      <ButtonsSection>
        <Button
          linkButton={deleteClicked ? false : true}
          to={deleteClicked ? null : "/clients/edit"}
          width="40%"
          onClick={deleteClicked ? handleCancelDelete : handleEditClient}
        >
          {deleteClicked ? "Cancelar" : "Editar"}
        </Button>
        <Button
          type="button"
          width="40%"
          alert="true"
          onClick={deleteClicked ? handleConfirmDelete : handleDeleteClicked}
        >
          {deleteClicked ? "Confirmar!" : "Excluir"}
        </Button>
      </ButtonsSection>
    </CardContainer>
  );
}
