import { useState } from "react";
import ClientForm from "../../Components/ClientForm";
import RegisterContainer from "../../Components/RegisterContainer";

export default function RegisterClient() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <RegisterContainer
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="Cadastrar Cliente"
      backTo="/clients"
    >
      <ClientForm setModalVisible={setModalVisible} register={true} />
    </RegisterContainer>
  );
}
