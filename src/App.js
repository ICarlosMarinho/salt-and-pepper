import Routes from "./Routes";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import { getList } from "./Services/localStorageService";
import AppContext from "./Contexts/AppContext";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(getList("products"));
  const [clients, setClients] = useState(getList("clients"));
  const [productToEdit, setProductToEdit] = useState({});
  const [clientToEdit, setClientToEdit] = useState({});

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        productToEdit,
        setProductToEdit,
        clients,
        setClients,
        clientToEdit,
        setClientToEdit,
      }}
    >
      <GlobalStyle />
      <Header />
      <Routes />
    </AppContext.Provider>
  );
}

export default App;
