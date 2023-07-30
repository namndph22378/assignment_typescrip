import React, { useState } from 'react'

const AddProduct = ({addProduct}) => {
  const [data, setData]= useState({});
    const onHandleChange = (event) =>{
        setData({
          ...data,
          // "name": event.target.value,
          [event.target.name] : event.target.value
      });
    }
    const onHandleSubmit = () =>{
      addProduct(data)
      
    }

  return (
    <div>
      <h1>Thêm mới</h1>
      <form onSubmit={onHandleSubmit}>
      Name <input type="text" name='name' onChange={onHandleChange}/> <br /><br />
     Price <input type="number" name='price' onChange={onHandleChange}/><br /><br />

     <button type="submit" >Submit</button>
      </form>
  

    </div>
  )
}

export default AddProduct