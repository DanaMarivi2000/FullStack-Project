import { safeParse } from "valibot"; //Validar
import { DraftProductSchema, ProductsSchema } from "../types";
import axios from "axios";

type ProductData={
    [k:string]:FormDataEntryValue;
}

export const getProducts=async()=>{
    const url=`${import.meta.env.VITE_API_URL}/api/products`


    try{
        const {data}= await axios(url)
        console.log(data)
        const products=safeParse(ProductsSchema, data.data)
        console.log(products) 
        if(products.success){
            return products.output
        }else{
            throw new Error('Hubo un error')
        }
    }catch(error){
        console.log(error)
    }
}

export  const addProduct=async(data: ProductData)=>{
    const url= `${import.meta.env.VITE_API_URL}/api/products`
    
    try{
        const dataVerified=safeParse(DraftProductSchema, {
            name:data.name,
            price:Number(data.price)
        })
        console.log(dataVerified)
        if(dataVerified.success){
           await axios.post(url,{
                name:dataVerified.output.name,
                price:dataVerified.output.price
            })

        }else{
            throw new Error('Datos no válidos')
        }
        
    }catch(error){
        console.log(error)
    }

}