import ClientForm from "../../Components/ClientForm";
import RegisterContainer from "../../Components/RegisterContainer";
import AppContext from "../../Contexts/AppContext";
import { useContext, useState } from "react";

export default function EditClient() {
  const [modalVisible, setModalVisible] = useState(false);
  const { clientToEdit } = useContext(AppContext);

  return (
    <RegisterContainer
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="Editar Cliente"
      backTo="/clients"
    >
      <ClientForm
        register={false}
        client={clientToEdit}
        setModalVisible={setModalVisible}
      />
    </RegisterContainer>
  );
}
