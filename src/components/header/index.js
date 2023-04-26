import React from 'react';
import {Navbar, Container, Image} from 'react-bootstrap';
import '../../styles/header.css';
import logo from '../../assests/images/logo.jpg'


export default function Header() {
    return (
      <Navbar variant="dark" className='navbar-custom'>
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} height={30} className="mr-3"/>
            NeuralClocks
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
    }


