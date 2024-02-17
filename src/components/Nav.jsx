import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import svg from '../assets/react.svg'

const Nav = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand >Fake Shop</Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <span class="fs-2 material-symbols-outlined">
              shopping_cart
            </span>
            <div className="number w-1 h-1 text-white bg-primary  rounded-circle px-2 mb-4" >0</div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Nav