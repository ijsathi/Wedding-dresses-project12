import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const {contexts} = useAuth();
    return (
        <>
            <Navbar className='header' variant="dark" sticky='top' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img className=' logo' src="https://bridey.leotheme.com/img/bridey-logo-1590373739.jpg" alt="" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse  className='justify-text-end fw-normal'>
                <Nav className="ms-auto ">
                <Nav.Link>
                <Link style={{color:'#213e36', fontWeight:'bold', textDecoration:'none'}} to='/home'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'#213e36', fontWeight:'bold',textDecoration:'none'}} to='/dresses'>Dresses</Link> 
                </Nav.Link>
                <NavDropdown style={{color:'#213e36',fontWeight:'bold'}} title=" More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="">
                      <Nav.Link>
                    <Link style={{color:'#213e36',fontWeight:'bold', textDecoration:'none'}} to='/aboutus'>About Us</Link> 
                      </Nav.Link>
                </NavDropdown.Item>
                    <NavDropdown.Item href="">
                    <Nav.Link>
                    <Link style={{color:'#213e36',fontWeight:'bold', textDecoration:'none'}} to='/contactus'>Contact Us</Link> 
                </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="">
                    <Nav.Link>
                    <Link style={{color:'#213e36',fontWeight:'bold', textDecoration:'none'}} to='/opinion'>Share Your Opinion</Link> 
                </Nav.Link>
                    </NavDropdown.Item>
                    
                </NavDropdown>
                </Nav>
                {!contexts.user.email ? (
                <>
                  <Nav.Link as={NavLink} to="/reg" className="text-black">
                    Sign Up
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    as={HashLink}
                    to="/bridaldashboard"
                    style={{color:'#213e36'}}
                    className=" fw-bold"
                  >
                    Dashboard
                  </Nav.Link>

                  <NavDropdown
                    title={
                      <img
                        style={{
                          width: "45px",
                          borderRadius: "50%",
                        }}
                        src={contexts.user.photoURL}
                        alt=""
                      />
                    }
                  >
                    <div className="text-center">
                      <h6>{contexts.user.displayName}</h6>
                      <p className="m-0 mb-2">{contexts.user.email}</p>
                      <button onClick={contexts.logOut} className="btn btn-primary fw-bold">
                        Sign Out
                      </button>
                    </div>
                  </NavDropdown>
                </>
              )}
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Header;