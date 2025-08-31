import React from "react";

const Products = ({ items }) => {
  return (
    <div>
      <h2>Productos</h2>
      <ol>
        {items.map((producto, index) => (
          <li key={index}> {producto} </li>
        ))}
      </ol>
    </div>
  );
};

export default Products;
