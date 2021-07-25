import ListContainer from "../ListContainer";
import ProductCard from "../ProductCard";
import AppContext from "../../Contexts/AppContext";
import { useContext } from "react";

export default function ProductList() {
  const { products } = useContext(AppContext);

  return (
    <ListContainer
      listLength={products.length}
      emptyListMessage="Lista de produtos vazia!"
    >
      {products.length
        ? products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))
        : null}
    </ListContainer>
  );
}
