import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products from './views/Products'
const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Products/>,
            }
        ]
    },
    {

    }
])

export default router
