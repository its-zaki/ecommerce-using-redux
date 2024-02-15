import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'


const Home = () => {
  // use State 
  const [productData, setProductData] = useState([])
  
  // use Effect 
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
    //   const data = res.data
    //   console.log(data);
    console.log(res.data);
    setProductData(res.data)
      
    }).catch((err) => {
        console.log(err);
    })
    // console.log(productData);
  }, [])
  return (
    <>
      <div className='text-center text-xl'>All Products</div>
      <div className='d-flex justify-content-between flex-wrap m-2'>{productData.length > 0 ? productData.map((item, index) => {
        return <ProductCard key={item.id} title={item.title} description={item.description} image={item.image} id={item.id}/>
      }): <h1>Data Not Found</h1>}
      </div>

    </>
  )
}

export default Home