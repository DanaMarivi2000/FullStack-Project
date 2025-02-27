import { safeParse } from "valibot"; //Validar
import { DraftProductSchema } from "../types";
import axios from "axios";

type ProductData={
    [k:string]:FormDataEntryValue;
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
            const {data}= await axios.post(url,{
                name:dataVerified.output.name,
                price:dataVerified.output.price
            })
            console.log(data)
        }else{
            throw new Error('Datos no válidos')
        }
        
    }catch(error){
        console.log(error)
    }

}