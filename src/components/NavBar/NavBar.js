import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar= (props) =>{
    

    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">A music me</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/Albums">Albums</Nav.Link>
                            <Nav.Link href="/Playlists">Playlists</Nav.Link>
                            <NavDropdown title="Post" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/AddAlbum">Review</NavDropdown.Item>
                                <NavDropdown.Item href="/AddPlaylist">
                                    Playlist
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar;