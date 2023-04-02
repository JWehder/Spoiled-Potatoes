import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import SearchBar from "./SearchBar";
import { UserContext } from "../context/User";

function Navigation() {
    const { setUser } = useContext(UserContext)

    function handleLogout() {
        fetch('/logout', {method:"DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }


    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="/">Spoiled Potatoes</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/movies">Movies</Nav.Link>
                </Nav>
                    <SearchBar />
                <Nav>
                    <Nav.Link onClick= {() => handleLogout()} href="/login">Logout</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;
