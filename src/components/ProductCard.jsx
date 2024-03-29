import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';

import React from 'react'

const ProductCard = ({title ,description, image , id}) => {
    // useNavigate 
    const navigate = useNavigate()

    // function
    const GotoThatProduct =()=>{
      // console.log();
      navigate(`/singleproduct/${id}`)
    }
  return (
  
    <Card style={{ width: '18rem' }} className='mt-5'>
      <Card.Img style={{width:'100%' , height:'300px', padding:'10px'}} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title.slice(0, 20)}...</Card.Title>
        <Card.Text>
          {description.slice(0,70)}.....
        </Card.Text>
        <Button variant="primary" onClick={GotoThatProduct}>See Product</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard