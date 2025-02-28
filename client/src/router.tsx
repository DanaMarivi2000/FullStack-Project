import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products from './views/Products'
import NewProduct from './views/NewProduct'
import {action as newProductAction} from './views/NewProduct' 
import {loader as loaderProducts} from './views/Products'
import EditProduct from './components/EditProduct'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Products/>,
                loader:loaderProducts
            },
            {
                path:'products/new',
                element:<NewProduct/>,
                action: newProductAction, //Cual va a ser la función que se va a ejecutar cuando el usuario oprima submit
            },
            {
                path: 'products/:id/edit', //ROA pattern
                element: <EditProduct/>
            }
        ]
    },
    {

    }
])

export default router
