import { ProductOk } from "../types"
import { formatCurrency } from "../utils"
import {PencilSquareIcon, TrashIcon} from '@heroicons/react/24/outline'
import {useNavigate} from 'react-router-dom'
type Products={
    product: ProductOk
}

const ProductDetails = ({product}:Products) => {
  
  const isAvailable=product.availability
  const navigate=useNavigate()

  return (
    <>
      <tr className="border-b">
        <td className="p-3 text-lg text-gray-800">
          {product.name}
        </td>
        <td className="p-3 text-lg text-gray-800">
          {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800">
          {isAvailable?'Disponible':'No disponible'}
        </td>
        <td className="p-3 text-lg text-gray-800">
          <div className="flex gap-2 items-center">
          <PencilSquareIcon className="text-blue-300 hover:text-blue-500" onClick={()=>navigate(`/products/${product.id}/edit`)}/> {/* Función toma hacia donde va */}
            <TrashIcon className="text-red-300 hover:text-red-500"/>
          </div>
        </td>
        
      </tr>
    </>
  )
}

export default ProductDetails
