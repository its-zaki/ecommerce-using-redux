import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Nav'
import CartScreen from '../../screens/cartScreen/CartScreen'
import Home from '../../screens/home/Home'
import SingleProduct from '../../screens/singleProduct/SingleProduct'

const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='' element={<Home />} />
                    <Route path='singleproduct/:id' element={<SingleProduct/>} />
                    <Route path='cartscreen' element={<CartScreen/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterConfig