import React from "react";

const ProductList = ({ products, handleDelete }) => {
  return (
    <div>
      <h2>Lista de produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price}
            <button onClick={() => handleDelete(product.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
