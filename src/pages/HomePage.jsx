import React from 'react'
import { Link } from 'react-router-dom';
const Homepage = ({ products }) => {
    console.log("Homepage data: ", products);
    return (
        <div>
            {products.map((item, index) => {
                return (
                    <div key={index + 1}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <h3><Link to={`detail/${item.id}`}>{item.name}</Link></h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Homepage