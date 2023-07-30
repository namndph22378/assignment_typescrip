import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
const UpdateProduct = ({ products, onUpdate }) => {
    const { id } = useParams();
    // const currentProduct = products.find((product) => product.id == id);
    const currentProduct = products.find((product) =>product.id == id)
    const [inputValues, setInputValues] = useState(currentProduct || {})
    const onHandleChange = (event) => {
        const { name, value } = event.target; // lấy name và value của input
        const newData = { ...inputValues, [name]: value }; // lấy tất cả các giá trị cũ và thêm giá trị mới
        setInputValues(newData); // cập nhật lại state
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        const dataUpdate = { ...inputValues, "id": id } // lấy tất cả các giá trị của inputValues và thêm giá trị id
        onUpdate(dataUpdate); // gọi hàm onUpdate được truyền từ component cha
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input
                    type="text"
                    placeholder=" Product Name"
                    defaultValue={currentProduct?.name || ''}
                    onChange={onHandleChange}
                    name="name"
                />
                <input
                    type="text"
                    placeholder="Product Price"
                    defaultValue={currentProduct?.price || ''}
                    onChange={onHandleChange}
                    name="price"
                />
                <button type='submit'>Up New</button>
            </form>
        </div>
    )
}

export default UpdateProduct