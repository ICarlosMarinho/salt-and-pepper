import ListContainer from "../ListContainer";
import ProductCard from "../ProductCard";
import AppContext from "../../Contexts/AppContext";
import { useContext } from "react";

export default function ProductList({ setFilterText }) {
  const { products, filter } = useContext(AppContext);

  return (
    <ListContainer
      listLength={filter.applied ? filter.list.length : products.length}
      emptyListMessage="Lista de produtos vazia!"
    >
      {filter.list.length
        ? filter.list.map((product) => (
            <ProductCard
              key={product?.id}
              product={product}
              setFilterText={setFilterText}
            />
          ))
        : products.map((product) => (
            <ProductCard
              key={product?.id}
              product={product}
              setFilterText={setFilterText}
            />
          ))}
    </ListContainer>
  );
}
