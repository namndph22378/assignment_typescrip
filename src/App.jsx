import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/HomePage'
import DetailPage from './pages/Detail'
import Dashboard from './pages/Admin/Dashboard'
import Product from './pages/Admin/Product'
import AddProduct from './pages/Admin/AddProduct'
import UpdateProduct from './pages/Admin/UpdateProduct'

function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const RemoveProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",

    }).then(() => setProducts(
      products.filter((item) => item.id != id)

    ))
  }

  const addProduct = (product) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
  }

  const onUpdate = (id, product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    // console.log(product.id)
    
      .then((response) => response.json())
      .then((updatedProduct) => {
        // Cập nhật danh sách sản phẩm với sản phẩm vừa cập nhật
        setProducts((prevProducts) =>
          prevProducts.map((item) =>
            item.id === updatedProduct.id ? updatedProduct : item
          )
        );
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật sản phẩm:", error);
        // Xử lý lỗi nếu cần
      });
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage products={products} />} />
        <Route path='/detail/:id' element={<DetailPage products={products} />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/product' element={<Product products={products} RemoveProduct={RemoveProduct} />} />
        <Route path='/admin/product/add' element={<AddProduct addProduct={addProduct} />} />
        <Route path='/admin/product/update/:id' element={<UpdateProduct onUpdate={onUpdate} products={products} />} />

      </Routes>

    </>
  )
}

export default App
