import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";

import React from "react";

const CartItemBox = ({ title, description, image, id, price }) => {
  // useNavigate

  // function

  return (
    <Card style={{ width: "100%" }}>
      <div className="d-flex w-100 p-5">
        <div style={{width: '200px'}}>
          <Card.Img className="h-100 " style={{width: '200px'}} variant="top" src={image} />
        </div>
        <div>
          <Card.Body>
            <h3 className="text-primary ">Title</h3>
            <h5>{title}</h5>
            <h3 className="text-primary mt-3">Description</h3>
            <h5>{description}</h5>
            <h3 className="text-primary mt-3">Price</h3>
            <h5>{price}</h5>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default CartItemBox;
