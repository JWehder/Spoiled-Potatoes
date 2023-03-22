import React, { useContext, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import StyledForm from "../styles/StyledForm";
import styled from "styled-components";
import { UserContext } from "../context/User";

function Navigation() {
    const [search, setSearch] = useState("")
    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/movies">Movies</Nav.Link>
                </Nav>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                <SearchBar
                    type="text" 
                    name="Search"
                    placeholder="Search for a movie..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                </div>
                <Nav >
                    <Nav.Link href="/login">Logout</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;

const SearchBar = styled(StyledForm.Control)`
    border-radius: 20px;
    font-size: 12px;
    overflow-x: scroll;
`