import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import SearchBar from "./SearchBar";

function Navigation() {
    // const { setResults } = useContext(UserContext)



    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">Spoiled Potatoes</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/movies">Movies</Nav.Link>
                </Nav>
                    <SearchBar />
                <Nav>
                    <Nav.Link href="/login">Logout</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;
