import { useState } from "react";
import ProductForm from "../../Components/ProductForm";
import RegisterContainer from "../../Components/RegisterContainer";

export default function RegisterProduct() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <RegisterContainer
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="Cadastrar Produto"
      backTo="/products"
    >
      <ProductForm setModalVisible={setModalVisible} register={true} />
    </RegisterContainer>
  );
}
