import React from "react";

function Boton({ text, onClick, tipo = "default" }) {
  // Estilos segun tipo
  const estilos = {
    default: {
      backgroundColor: "#e0e0e0",
      color: "#000",
      padding: "8px 12px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "5px",
    },
    agregar: {
      backgroundColor: "green",
      color: "white",
      padding: "8px 12px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "5px",
    },
    eliminar: {
      backgroundColor: "red",
      color: "white",
      padding: "8px 12px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "5px",
    },
  };
  return (
    <button style={estilos[tipo]} onClick={onClick}>
      {text}
    </button>
  );
}

export default Boton;
