import ViewContainer from "../../Components/ViewContainer";
import OptionsBar from "../../Components/OptionsBar";
import ProductList from "../../Components/ProductList";

export default function ProductsPanel() {
  return (
    <ViewContainer>
      <OptionsBar registerPath="/products/register" />
      <ProductList />
    </ViewContainer>
  );
}
