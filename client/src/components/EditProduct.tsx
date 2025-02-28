import {Form, Link} from 'react-router-dom'

const EditProduct=()=>{

    return(
            <>
 <div className="flex justify-between align-center">
      <h2 className="text-4xl font-black text-slate-500">Editar Producto</h2>
       
       <Link to="products/new" className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-400">Agregar a productos</Link>
     </div>
<Form className="mt-10" method="POST">
        <div className="mb-4">
            <label htmlFor="name" className="text-gray-800">Nombre del Producto</label>
            <input type="text" id="name" className="mt-2 w-full p-3 bg-gray-50" placeholder="Nombre del Producto" name="name"/>
        </div>
        <div className="mb-4">
            <label htmlFor="price">Precio</label>
            <input type="text" id="price" name="price" className="w-full bg-gray-50 p-3 mt-2" placeholder="Precio del Producto"/>
        </div>
        <input type="submit" value="Registrar Producto" className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded" />
    </Form>

            </>
    )
}

export default EditProduct