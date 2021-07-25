import ListContainer from "../ListContainer";
import ClientCard from "../ClientCard";
import AppContext from "../../Contexts/AppContext";
import { useContext } from "react";

export default function ProductList() {
  const { clients } = useContext(AppContext);

  return (
    <ListContainer
      listLength={clients.length}
      emptyListMessage="Lista de clientes vazia!"
    >
      {clients.length
        ? clients.map((client) => (
            <ClientCard key={client.cpf} client={client} />
          ))
        : null}
    </ListContainer>
  );
}
