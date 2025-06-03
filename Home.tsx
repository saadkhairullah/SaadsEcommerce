import React, { useEffect, useState } from 'react'
import Header from "./components/Header"
import Hero from './components/Hero';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate  } from "react-router-dom";



function Home() {
const navigate = useNavigate()

// this is just a test function that retreives all users ever created and prints them to the screen,
// to test if my backend is operating
  const [users, setUsers] = useState(null)
  useEffect(() =>{
    const fetchUsers = async ()=>{
  

    const response = await fetch('http://localhost:8080/api/home/')
      const json = await response.json()
      

      if (response.ok){
        setUsers(json)
      }
      
    }
    fetchUsers()
  }, [])
  return (
    <div>

    {/* {user && user.map} checks if there is users fetched, then prints them all */}
    
        <Header></Header>
         <Navbar expand="lg" className="bg-body-tertiary subHeader">
          <Navbar.Brand onClick={()=> navigate('')} className='mx-3  fs-4 justify-content-center homeLink'>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='collapse'>
         <Nav className="me-auto">
            <Nav.Link className='mx-3 fs-5 justify-content-center aboutLink'onClick={()=> navigate('about')}>About</Nav.Link>
            <Nav.Link className='mx-3 fs-5 justify-content-center contactLink'>Contact</Nav.Link>
            <NavDropdown className='mx-3 fs-5 justify-content-center servicesLink'title="Services" id="basic-nav-dropdown subHeaderDropdown">
              <NavDropdown.Item href="#action/3.1">Pre-Cut Tint</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item>Tinting Tools</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Terms of Service
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Hero></Hero>

        <div className='subHero'>
        <div className='whySection'> <img src="photos/logo.webp" alt="logo" /> So Why Choose Glimmer Guard?</div>

        </div>

        <div className='Users'>
          {users && users.map((users) =>(
          <p key = {users._id}>{users._id}</p>)
        )}
        </div>
        <Link to ="/about">about</Link>
    </div>
  )
}

export default Home