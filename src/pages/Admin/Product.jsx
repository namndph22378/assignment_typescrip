import React from 'react'
import { Link } from 'react-router-dom'
const Product = ({ products ,RemoveProduct}) => {
        const handleRemove = (id)=>{
            RemoveProduct(id)
        }    

    return (
        // console.log(products),
        <div>
            <Link to={`/admin/product/add`}>ADD</Link>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Product Name</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                           
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={()=>handleRemove(item.id)}>Xóa</button>
                                   <Link to={`/admin/product/update/${item.id}`}><button>Sửa</button></Link> 

                                </td>
                                
                            </tr >
                        )
                        console.log(item.id);

                    })}
                </tbody>
            </table>
        </div>

    )
}

export default Product