import { Form, Link, useActionData, ActionFunctionArgs } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage"
import { addProduct } from "../services/ProductService"

export async function action({request}:ActionFunctionArgs){
    console.log('desde action')

    const data= Object.fromEntries(await request.formData()) //Obtener los datos de formData que se obtienen de lo que el usuario ingreso
    console.log(data)

    let error=''
    if(Object.values(data).includes('')){
        error="Todos los campos son obligatorios"
    }
    if(error.length){
        return error
    }
    addProduct(data)
}



export const NewProduct = () => {
  
    const error=useActionData()//Trea los datos de lo que retorna actions
    console.log(error)
  
    return (
 
  <>
    <div className="flex justify-between align-center">
        <h1 className="text-4xl font-black text-slate-500">Productos</h1>
     <Link to="/" className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-400">Volver a productos</Link> 
    </div>

    {error&&<ErrorMessage>{error}</ErrorMessage>}

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

export default NewProduct
