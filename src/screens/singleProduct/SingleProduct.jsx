import React, { useEffect, useState } from 'react'
import SingleCard from '../../components/SingleCard'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const [dataSingleProduct, setDataSingleProduct] = useState([])
  const param = useParams()

  useEffect(() => {

    axios.get(`https://fakestoreapi.com/products/${param.id}`).then((res) => {
      const data = res.data
      setDataSingleProduct(data)
      console.log(res.data);
      // console.log(dataSingleProduct);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <>
      {
        dataSingleProduct !=null ? <SingleCard title={dataSingleProduct.title} desc={dataSingleProduct.description} category={dataSingleProduct.category}  price={dataSingleProduct.price} image={dataSingleProduct.image}/> : <h1>No Item Found</h1>
      }
    </>
  )
}

export default SingleProduct