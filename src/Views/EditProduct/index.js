import ProductForm from "../../Components/ProductForm";
import RegisterContainer from "../../Components/RegisterContainer";
import AppContext from "../../Contexts/AppContext";
import { useContext, useState } from "react";

export default function EditProduct() {
  const [modalVisible, setModalVisible] = useState(false);
  const { productToEdit } = useContext(AppContext);

  return (
    <RegisterContainer
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="Editar Produto"
      backTo="/products"
    >
      <ProductForm
        register={false}
        product={productToEdit}
        setModalVisible={setModalVisible}
      />
    </RegisterContainer>
  );
}
