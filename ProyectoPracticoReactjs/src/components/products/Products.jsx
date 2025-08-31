import React from "react";
import Boton from "../boton/Boton";

const Products = ({ items, onEliminar }) => {
  return (
    <div>
      <h2>Lista Mayorista de productos </h2>
      <ol>
        {items.map((producto, index) => (
          <li key={index}> {producto} 
          <Boton text="Eliminar " onClick={() => onEliminar(index)} tipo="eliminar" />
           </li>
        ))}
      </ol>
    </div>
  );
};

export default Products;
