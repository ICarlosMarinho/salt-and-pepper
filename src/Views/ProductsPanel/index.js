import ViewContainer from "../../Components/ViewContainer";
import OptionsBar from "../../Components/OptionsBar";
import ProductList from "../../Components/ProductList";
import { useState } from "react";

export default function ProductsPanel() {
  const [filterText, setFilterText] = useState("");

  return (
    <ViewContainer>
      <OptionsBar
        registerPath="/products/register"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ProductList setFilterText={setFilterText} />
    </ViewContainer>
  );
}
