import React from 'react'
import { useSelector } from 'react-redux'
import CartItemBox from '../../components/CartItemBox'

const CartScreen = () => {
    const selector  = useSelector(state => state.cartsItems)
    console.log(selector);

  return (
    <>
    <div>cartScreen</div>
    {selector.length >= 0 ?  selector.map((item, index)=>{
        return <CartItemBox key={index} title={item.title} desc={item.description} image={item.image} />
    }):<h1>Nothing In Cart</h1>}
    </>

  )
}

export default CartScreen