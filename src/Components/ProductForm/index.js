import Form from "../Form";
import Input from "../Input";
import { addItem, updateItem } from "../../Services/localStorageService";
import AppContext from "../../Contexts/AppContext";
import { useContext, useState } from "react";

export default function ProductForm({ product, register, setModalVisible }) {
  const [id, setId] = useState(product?.id ?? "");
  const [name, setName] = useState(product?.name ?? "");
  const [imgUrl, setImgUrl] = useState(product?.imgUrl ?? "");
  const [expiryDate, setExpiryDate] = useState(
    product?.expiryDate ?? new Date().toISOString().split("T")[0]
  );
  const [quantity, setQuantity] = useState(product?.quantity ?? 1);
  const [price, setPrice] = useState(product?.price ?? 10);
  const [discount, setDiscount] = useState(product?.discount ?? 0);
  const { setProducts } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      id,
      name,
      imgUrl,
      expiryDate,
      quantity,
      price,
      discount,
    };

    register
      ? setProducts(addItem(newProduct, "products"))
      : setProducts(updateItem(newProduct, "products", "id"));

    setModalVisible(true);
  }

  return (
    <Form spellCheck="false" onSubmit={handleSubmit} backTo="/products">
      {register ? (
        <Input
          labelText="Id"
          id="product-id"
          type="text"
          placeholder="Ex. 0000000000"
          pattern="[0-9]{10}"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      ) : null}

      <Input
        labelText="Nome"
        id="product-name"
        type="text"
        minLenght="1"
        maxLenght="100"
        placeholder="Ex. Lemon Pepper"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        labelText="Url da Imagem"
        id="product-img"
        type="text"
        minLenght="1"
        maxLenght="100"
        placeholder="Ex. http://img.com/example"
        required
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />

      <Input
        labelText="Validade"
        id="expiry-date"
        type="date"
        min={new Date()}
        required
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      />

      <Input
        labelText="Quantidade"
        id="product-quantity"
        type="number"
        min="1"
        max="1000"
        placeholder="Ex. 20"
        required
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <Input
        labelText="Preço"
        id="product-price"
        type="number"
        min="0"
        max="1000"
        step="0.01"
        placeholder="Ex. 10.60"
        required
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Input
        labelText={`Desconto (${(discount * 100).toFixed(0)}%)`}
        id="product-discount"
        type="range"
        min="0"
        max="1"
        step="0.05"
        placeholder="Ex. 0.1"
        required
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />
    </Form>
  );
}
