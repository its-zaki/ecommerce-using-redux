import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Nav'
import Home from '../../screens/home/Home'
import SingleProduct from '../../screens/singleProduct/SingleProduct'

const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='' element={<Home />} />
                    <Route path='singleproduct' element={<SingleProduct/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterConfig