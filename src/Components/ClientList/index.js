import ListContainer from "../ListContainer";
import ClientCard from "../ClientCard";
import AppContext from "../../Contexts/AppContext";
import { useContext } from "react";

export default function CLientList({ setFilterText }) {
  const { clients, filter } = useContext(AppContext);

  return (
    <ListContainer
      listLength={filter.applied ? filter.list : clients.length}
      emptyListMessage="Lista de clientes vazia!"
    >
      {filter.list.length
        ? filter.list.map((client) => (
            <ClientCard
              key={client.cpf}
              client={client}
              setFilterText={setFilterText}
            />
          ))
        : clients.map((client) => (
            <ClientCard
              key={client.cpf}
              client={client}
              setFilterText={setFilterText}
            />
          ))}
    </ListContainer>
  );
}
