import { useContext, useState } from "react";
import Form from "../Form";
import Input from "../Input";
import AppContext from "../../Contexts/AppContext";
import { addItem, updateItem } from "../../Services/localStorageService";

export default function ClientForm({ client, register, setModalVisible }) {
  const [cpf, setCpf] = useState(client?.cpf ?? "");
  const [fullName, setFullName] = useState(client?.fullName ?? "");
  const [email, setEmail] = useState(client?.email ?? "");
  const [address, setAddress] = useState(client?.address ?? "");
  const { setClients } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();

    const newClient = {
      cpf,
      fullName,
      email,
      address,
    };

    register
      ? setClients(addItem(newClient, "clients"))
      : setClients(updateItem(newClient, "clients", "cpf"));

    setModalVisible(true);
  }

  return (
    <Form spellcheck="false" backTo="/clients" onSubmit={handleSubmit}>
      <Input
        labelText="CPF"
        id="client-cpf"
        type="text"
        placeholder="Ex. 00000000000"
        pattern="[0-9]{11}"
        minLength="11"
        maxLength="11"
        required
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

      <Input
        labelText="Nome completo"
        id="client-name"
        type="text"
        placeholder="Ex. Carlos Marinho"
        minLength="5"
        maxLength="80"
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <Input
        labelText="Email"
        id="client-email"
        type="email"
        placeholder="Ex. carlos@marinho.com"
        minLength="5"
        maxLength="80"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        labelText="Endereço"
        id="client-address"
        type="address"
        placeholder="Ex. Rua do Sol, 01"
        minLength="5"
        maxLength="80"
        required
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </Form>
  );
}
