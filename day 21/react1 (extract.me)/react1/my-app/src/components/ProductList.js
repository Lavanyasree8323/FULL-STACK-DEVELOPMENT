// ProductList.js

import React, { useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  // State for the list of products
  const [products, setProducts] = useState([
    { id: 1, name: 'car', price: 19.99 },
    { id: 2, name: 'tshirt', price: 29.99 },
    { id: 3, name: 'shoe', price: 39.99 },
    // Add more products as needed
  ]);

  // Function to handle adding a product to the cart
  const addToCart = (productId) => {
    console.log(`Product ${productId} added to cart!`);
    // Implement your cart logic here
  };

  return (
    <div className="product-list-container">
      <h1>Product List</h1>

      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <strong>{product.name}</strong>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
