import React, { useState } from 'react'
import './App.css'
import Products from './components/products/Products';
import Boton from './components/boton/Boton';


function App() {
  // Inicio de productos
  const [productos, setProductos] = useState(["Cajon Manzana", "Cajon Banana", "Cajon Pera", "Cajon Naranja", "Cajon Kiwi"]);
  const [nuevosProductos, setNuevoProducto] = useState("");

  // Agregar products
  const agregarProducto = () => {
    if (nuevosProductos.trim() === "") return; // No agrega productos vacíos
    setProductos([...productos, nuevosProductos]); //agrega nuevo producto
    setNuevoProducto(""); // Limpia el input
  }
  
  //Eliminar products
  const eliminarProducto = (index) => {
    const nuevosProductos = productos.filter((_, i) => i !== index);
    setProductos(nuevosProductos);
  }
    return (
    <>
      <h1>Bienvenidos a la lista de mis productos</h1>
      <input type='text' value={nuevosProductos} onChange={(evt) => setNuevoProducto(evt.target.value)}
      placeholder='Ingrese un nuevo producto'/>
      <Boton text="Agregar +" onClick={agregarProducto} tipo='agregar'> Agregar </Boton>
      
      <Products items={productos} onEliminar={eliminarProducto} />
      
    </>
  )
}

export default App
