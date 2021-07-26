import ViewContainer from "../../Components/ViewContainer";
import OptionsBar from "../../Components/OptionsBar";
import ClientList from "../../Components/ClientList";
import { useState } from "react";

export default function ClientsPanel() {
  const [filterText, setFilterText] = useState("");

  return (
    <ViewContainer>
      <OptionsBar
        registerPath="/clients/register"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ClientList setFilterText={setFilterText} />
    </ViewContainer>
  );
}
