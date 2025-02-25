import React from 'react'
<<<<<<< HEAD
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,SignupPage,Home,CreateProduct,MyProducts} from "./Routes";
import "./App.css";
import ProductDetails from './pages/productDetails';
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage, Home, CreateProduct, MyProducts, Cart,ProductDetails,Profile,CreateAddress} from "./Routes";
import "./App.css";
>>>>>>> 532cadd (milestone 22)

const App = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/my-products" element={<MyProducts/>} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>
    
  )
}

=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/create-product/:id" element={<CreateProduct />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/create-address' element={<CreateAddress />} />
      </Routes>
    </BrowserRouter>
  );
};
>>>>>>> 532cadd (milestone 22)
export default App