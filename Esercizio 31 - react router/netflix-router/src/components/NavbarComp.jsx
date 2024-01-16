import React from 'react'
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function NavbarComp() {
  return (
    <>
     <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark mt-2" style={{ backgroundColor: "#221f1f"}}>
      
      <Navbar.Brand href="#home">
           <Image 
            alt="netflixlogo"
            src="/netflix_logo.png"
            style= {{ width: "100px"}}
            className="d-inline-block align-top logo"
            /> 
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold text-white">
            <Link to="/" className='text-white'>Home</Link>
            <Link to="/tv-shows" className='active text-white mx-2'>Tv Show</Link>
            <Link to="/movies" className='text-white'>Movies</Link>
            <Link to="/recently-added" className='text-white  mx-2'>Recently Added</Link>
            <Link to="/my-list" className='text-white'>My List</Link>
          </Nav>
        </Navbar.Collapse>

        {/* <div className='d-flex align-items-center mx-2'>
          <Search className='text-white fw-bolder fs-4' />
          <p className='text-uppercase text-white mx-3 mb-0'>kids</p>
          <BellFill className="text-white fs-4" />
          <PersonFill className='text-white ms-4 fs-3' />
        </div> */}

    </Navbar>


    </>
  )
}