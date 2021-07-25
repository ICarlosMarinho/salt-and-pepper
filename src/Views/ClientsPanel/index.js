import ViewContainer from "../../Components/ViewContainer";
import OptionsBar from "../../Components/OptionsBar";
import ClientList from "../../Components/ClientList";

export default function ClientsPanel() {
  return (
    <ViewContainer>
      <OptionsBar registerPath="/clients/register" />
      <ClientList />
    </ViewContainer>
  );
}
