import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = ({products}) => {
    const {id} = useParams()
  const currentProduct =  products.find((item) =>item.id == Number(id))
  console.log(currentProduct );
    return (
        <div>
            <h3>{currentProduct ?.name}</h3>
            <h3>{currentProduct ?.price}</h3>

        </div>
    )
}

export default DetailPage