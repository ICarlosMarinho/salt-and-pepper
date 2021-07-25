import { Switch, Route, Redirect } from "react-router-dom";
import ProductsPanel from "../Views/ProductsPanel";
import RegisterProduct from "../Views/RegisterProduct";
import EditProduct from "../Views/EditProduct";
import EditClient from "../Views/EditClient";
import ClientsPanel from "../Views/ClientsPanel";
import NotFound from "../Views/NotFound";
import RegisterClient from "../Views/RegisterClient";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/products" />
      </Route>
      <Route exact path="/products" component={ProductsPanel} />
      <Route path="/products/register" component={RegisterProduct} />
      <Route path="/products/edit" component={EditProduct} />
      <Route exact path="/clients" component={ClientsPanel} />
      <Route path="/clients/register" component={RegisterClient} />
      <Route path="/clients/edit" component={EditClient} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
