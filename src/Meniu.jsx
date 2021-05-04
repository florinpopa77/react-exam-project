import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Meniu(){
    return(
        <Navbar bg="light" expand="lg">
            <Nav className="mr-auto">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/people">
                    <Nav.Link>People</Nav.Link>
                </LinkContainer>
            </Nav>          
        </Navbar>
    );
}

export default Meniu;