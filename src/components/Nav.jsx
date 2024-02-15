import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import svg from '../assets/react.svg'

const Nav = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand >React</Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <img src={svg} alt="logo" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Nav