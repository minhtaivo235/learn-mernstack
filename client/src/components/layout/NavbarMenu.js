import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import learnItLogo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <>
      <Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
        <Navbar.Brand className='font-weight-bolder text-while'>
          <img
            src={learnItLogo}
            alt='leartItLogo'
            width='32'
            height='32'
            className='ms-2'
          />
          LearnIt
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              className='font-weight-bolder text-white'
              to='/dashboard'
              as={Link}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              className='font-weight-bolder text-white'
              to='/about'
              as={Link}
            >
              About
            </Nav.Link>
          </Nav>

          <Nav className='me-3'>
            <Nav.Link className='font-weight-bolder text-white' disabled>
              Welcome Tai
            </Nav.Link>
            <Button variant='secondary' className='font-weight-bolder text-white'>
              <img src={logoutIcon} alt="logoutIcon" width='32' height='32' className='me-2' />
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
