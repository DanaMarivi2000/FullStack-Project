import React from 'react'
import {Link} from 'react-router-dom'
const Products = () => {
  return (
    <>
     <div className="flex justify-between align-center">
      <h2 className="text-4xl font-black text-slate-500">Registrar Productos</h2>
       <Link to="products/new" className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-400">Agregar a productos</Link>
     </div>
    </>
  )
}

export default Products
