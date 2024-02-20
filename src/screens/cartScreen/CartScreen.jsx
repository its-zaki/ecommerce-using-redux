import React from 'react'
import { useSelector } from 'react-redux'
import CartItemBox from '../../components/CartItemBox'

const CartScreen = () => {
    const selector  = useSelector(state => state.cartsItems)
    console.log(selector);

  return (
    <>
    <div>cartScreen</div>
    <div className='d-flex justify-content-center flex-column flex-wrap m-2'>
    {selector.length >= 0 ?  selector.map((item, index)=>{
      return <CartItemBox key={index} title={item.title} description={item.description} image={item.image} price={item.price}/>
    }):<h1>Nothing In Cart</h1>}
    </div>
    </>

  )
}

export default CartScreen