import React from 'react'
import { Navbar, Nav, Image } from "react-bootstrap";
import { Search, BellFill, PersonFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export default function MioNavbar() {
  return (
    <>
     <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark mt-2" style={{ backgroundColor: "#221f1f"}}>
      
      <Navbar.Brand href="#home">
           <Image 
            alt=""
            src="/netflix_logo.png"
            style= {{ width: "100px"}}
            className="d-inline-block align-top logo"
            /> 
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Link to="/">Home</Link>
            <Link to="/tv-shows" className='active'>Tv Show</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recently-added">Recently Added</Link>
            <Link to="/my-list">My List</Link>
          </Nav>
        </Navbar.Collapse>

        <div className='d-flex align-items-center mx-2'>
          <Search className='text-white fw-bolder fs-4' />
          <p className='text-uppercase text-white mx-3 mb-0'>kids</p>
          <BellFill className="text-white fs-4" />
          <PersonFill className='text-white ms-4 fs-3' />
        </div>

    </Navbar>


    </>
  )
}