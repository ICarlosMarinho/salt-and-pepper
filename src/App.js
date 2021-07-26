import Routes from "./Routes";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import { getList } from "./Services/localStorageService";
import AppContext from "./Contexts/AppContext";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [products, setProducts] = useState(getList("products"));
  const [filter, setFilter] = useState({
    list: [],
    applied: false,
  });
  const [clients, setClients] = useState(getList("clients"));
  const [productToEdit, setProductToEdit] = useState({});
  const [clientToEdit, setClientToEdit] = useState({});

  return (
    <AppContext.Provider
      value={{
        products,
        filter,
        setFilter,
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
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
