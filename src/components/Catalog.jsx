import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const Catalogo = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Catálogo de produtos</h1>
      <ProductForm fetchProducts={fetchProducts} />
      <ProductList products={products} handleDelete={handleDelete} />
    </div>
  );
};

export default Catalogo;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ProductForm from "./ProductForm";
// import ProductList from "./ProductList";

// const Catalog = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:8000/products/${productId}`);
//       fetchProducts();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleAddProduct = async (productData) => {
//     try {
//       await axios.post("http://localhost:8000/products", productData);
//       fetchProducts();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Product Catalog</h1>
//       <ProductForm handleAddProduct={handleAddProduct} />
//       <ProductList products={products} handleDelete={handleDelete} />
//     </div>
//   );
// };

// export default Catalog;
