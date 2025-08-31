import React from "react";

const Products = ({ items, onEliminar }) => {
  return (
    <div>
      <h2>Lista Mayorista de productos </h2>
      <ol>
        {items.map((producto, index) => (
          <li key={index}> {producto} 
          <button onClick={() => onEliminar(index)}> Eliminar </button>
           </li>
        ))}
      </ol>
    </div>
  );
};

export default Products;
