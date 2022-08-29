import React from "react";
import './dashboard.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {AiOutlineSetting} from "react-icons/ai";
import {GrPowerCycle} from "react-icons/gr";
import {ImExit} from "react-icons/im"

const Navigationbar = () =>{
    return(
        <Navbar bg="white" expand="lg">
      <Container>
        <div className="navimg">
        <Navbar.Brand href="#home">Logo position</Navbar.Brand>
        <form>
            <input type="text"  placeholder="search.." className="searchinput"/>
            <button type="submit" className="searchbut">Search</button>
        </form>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><div className="topcust_listName">
                        <div className="topcust_rounded1">DJ</div>
                        <div className="topcust_custDetails">
                            <span className="topcust_common topcust_name">David Janes </span>
                            <span className='topcust_common topcust_email'>David@xyz.com</span>
                        </div>                        
                    </div></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
              <AiOutlineSetting style={{fontSize:"20px"}}/><span className="manage_acc">Manage Account</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><GrPowerCycle style={{fontSize:"20px"}}/><span className="manage_acc">Switch Account</span></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <ImExit style={{fontSize:"20px"}}/><span className="manage_acc">Logout</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navigationbar;