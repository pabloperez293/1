import React from 'react'
import './App.css'
import Products from './components/products/Products';

const productos = ["manzana", "banana", "pera", "naranja", "kiwi"];

function App() {
  return (
    <>
      <h1>Listado de productos</h1>
      <Products items={productos}/>
      
    </>
  )
}

export default App
