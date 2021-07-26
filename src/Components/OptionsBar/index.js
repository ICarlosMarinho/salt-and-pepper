import { OptionsBarContainer, ExtendedButton, InputContainer } from "./style";
import Input from "../Input";
import { useLocation } from "react-router-dom";
import AppContext from "../../Contexts/AppContext";
import { useContext, useEffect } from "react";

export default function OptionsBar({
  registerPath,
  filterText,
  setFilterText,
}) {
  const { setFilter, clients, products } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    if (filterText?.length) {
      if (location.pathname === "/products")
        setFilter({ list: filterList(products, "name"), applied: true });
      else if (location.pathname === "/clients")
        setFilter({ list: filterList(clients, "fullName"), applied: true });
    } else {
      setFilter({ list: [], applied: false });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText]);

  function filterList(list, itemKeyName) {
    return list.filter((item) =>
      item[itemKeyName].toLowerCase().includes(filterText)
    );
  }

  return (
    <OptionsBarContainer>
      <ExtendedButton linkButton={true} to={registerPath} width="10%">
        Cadastrar
      </ExtendedButton>
      <InputContainer>
        <Input
          labelText="Filtrar"
          height="30px"
          placeholder="Insira o nome do item"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </InputContainer>
    </OptionsBarContainer>
  );
}
