import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlus, faSearch, faPen, faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

export class NavbarMenue extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">Resturant-Website</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home"> <Link to="/"> <FontAwesomeIcon icon={faHome} color="orange" />  Home  </Link>  </Nav.Link>
                                <Nav.Link href="#link"> <Link to="/list"> <FontAwesomeIcon icon={faList} color="orange" />  List </Link>  </Nav.Link>
                                <Nav.Link href="#home"> <Link to="/create"> <FontAwesomeIcon icon={faPlus} color="orange" />  Create</Link>  </Nav.Link>
                                <Nav.Link href="#link"> <Link to="/search"> <FontAwesomeIcon icon={faSearch} color="orange" />  Search</Link>  </Nav.Link>
                                <Nav.Link href="#home"> <Link to="/details"> <FontAwesomeIcon icon={faCircle} color="orange" />  Details</Link>  </Nav.Link>
                                <Nav.Link href="#link"> <Link to="/update"> <FontAwesomeIcon icon={faPen} color="orange" />  Updates</Link> </Nav.Link>
                                {
                                    localStorage.getItem('login') ?
                                        <Nav.Link href="#link"> <Link to="/login"> <FontAwesomeIcon icon={faUser} color="orange" />  Login</Link> </Nav.Link>
                                        :
                                        <Nav.Link href="#link"> <Link to="/login"> <FontAwesomeIcon icon={faUser} color="orange" />  LogOut</Link> </Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavbarMenue
