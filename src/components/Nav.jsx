import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import svg from "../assets/react.svg";
import Dropdown from "react-bootstrap/Dropdown";
import {useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useState } from "react";

const Nav = () => {
  const navigate = useNavigate()

  const GotoHome = ()=>{
    navigate('/')
  }
  const GoToCart = ()=>{
    navigate('cartscreen')
  }

  // get data from redux 
  const selector = useSelector(state => state.cartsItems)
  // console.log(selector.length);
  
  return (
    <>
      <Navbar className="bg-body-tertiary mt-0 pt-0 ">
        <Container>
          <Navbar.Brand>Fake Shop</Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            
          <Navbar.Brand className="mt-0 " style={{cursor: 'pointer'}} onClick={GotoHome}>Home</Navbar.Brand>
            {/* <span class="fs-2 material-symbols-outlined">
              shopping_cart
            </span>
            <div className="number w-1 h-1 text-white bg-primary  rounded-circle px-2 mb-4" >0</div> */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="d-flex align-items-center rounded w-100 mt-3">
                <div className="d-flex " >
                  <div>
                  <span className="fs-2 material-symbols-outlined">
                      shopping_cart
                    </span>
                  </div>
                  <div className="number w-1 h-1 text-white bg-primary  rounded-circle px-2 mb-4">
                    {selector.length}
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><h4 className="text-primary">0 Items </h4></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><button className="bg-primary rounded text-white border-0 px-2 py-1" onClick={GoToCart}>View Cart</button></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
