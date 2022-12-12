import React from 'react';
import { Routes , Route , Navigate  } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import Signup from '../pages/Signup';
import ProtectedRoute from './ProtectedRoute';
import Addproducts from '../admin/Addproducts';
import Allproducts from '../admin/Allproducts';
import Dashboard from '../admin/Dashboard';
const Router = () => {
    return (
      <Routes>
        <Route path='/' element={<Navigate to='/Home'/>}/>
        <Route path='home' element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='shop/:id' element={<ProductDetails />}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup />}/>

        <Route path="/*" element={ProtectedRoute}>
          <Route path="checkout"></Route>
          <Route path="dashboard" element={Dashboard}></Route>
          <Route path="dashboard/add-products" element={Addproducts}></Route>
          <Route path="dashboard/all-products" element={Allproducts}></Route>
        </Route>
      </Routes>
    );
}

export default Router;
