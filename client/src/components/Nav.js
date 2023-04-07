import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import SearchBar from "./SearchBar";
import { UserContext } from "../context/User";
import { Link } from "react-router-dom"
import styled from "styled-components";

function Navigation() {
    const { setUser } = useContext(UserContext)

    function handleLogout() {
        fetch('/logout', {method:"DELETE"}).then(() => setUser(null))
    }

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand><NavLink to="/">Spoiled Potatoes</NavLink></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><NavLink to="/movies">Movies</NavLink></Nav.Link>
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

const NavLink = styled(Link)`
    color: #808080;
    text-decoration: none;
    &:hover {
        color: #36454F;
    }
`

export default Navigation;
