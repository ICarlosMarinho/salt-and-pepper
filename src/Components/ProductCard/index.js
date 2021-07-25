import Button from "../Button";
import ButtonsSection from "../ButtonsSection";
import { CardContainer, Image, Price, Title, ExpiryDate } from "./style";
import { deleteItem } from "../../Services/localStorageService";
import AppContext from "../../Contexts/AppContext";
import { useEffect, useState, useContext } from "react";

export default function ProductCard({ product }) {
  const [expired, setExpired] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const { setProducts, setProductToEdit } = useContext(AppContext);

  useEffect(() => {
    setExpired(isExpired());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleEditProduct() {
    setProductToEdit(product);
  }

  function handleDeleteClicked() {
    setDeleteClicked(true);
  }

  function handleCancelDelete() {
    setDeleteClicked(false);
  }

  function handleConfirmDelete() {
    setProducts(deleteItem("products", "id", product?.id));
  }

  function isExpired() {
    const currentDate = new Date();
    const productDate = new Date(product.expiryDate);

    return productDate.getTime() <= currentDate.getTime();
  }

  return (
    <CardContainer>
      <i>
        <strong>ID </strong>
        {product?.id}
      </i>
      <Image src={product?.imgUrl} alt={`Foto do produto ${product?.name}`} />
      <Title>{product?.name}</Title>
      <ExpiryDate expired={expired}>
        <strong>Data de validade </strong>
        {Intl.DateTimeFormat("pt-br").format(new Date(product?.expiryDate))}
      </ExpiryDate>
      <span>
        <strong>Quantidade </strong>
        {product?.quantity}
      </span>
      <span>
        <strong>Preço </strong>
        <Price>
          {Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(product?.price)}
        </Price>
      </span>
      <span>
        <strong>Desconto </strong>
        {Intl.NumberFormat("pt-br", {
          style: "percent",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(product?.discount)}
      </span>
      <ButtonsSection>
        <Button
          linkButton={deleteClicked ? false : true}
          to={deleteClicked ? null : "/products/edit"}
          width="40%"
          onClick={deleteClicked ? handleCancelDelete : handleEditProduct}
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
