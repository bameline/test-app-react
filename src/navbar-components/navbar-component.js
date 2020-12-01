import React from 'react';
import { Nav, Navbar, Form, FormControl, Button, NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class NavigationBar extends React.Component{
    constructor(props){
        super(props);
    }

    /*isActive(): Boolean{
        reuturn true;
    }*/
    render(){
        return(    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">React demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavLink  as={Link} to="/welcome">welcome</NavLink >
            <Nav.Link as={Link} to="/calculator">calculator</Nav.Link>
            <Nav.Link as={Link} to="/testNotification">testNotification</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        );
    }
}
