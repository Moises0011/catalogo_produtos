import React, { useState } from "react";
import axios from "axios";

const ProductForm = ({ fetchProducts }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/products", {
        name,
        category,
        price,
      });
      fetchProducts();
      setName("");
      setCategory("");
      setPrice("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Adicionar produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Categoria:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <label>
          Preço:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default ProductForm;
