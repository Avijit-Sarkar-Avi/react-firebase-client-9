import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VzqFDlvbmc3hVZuv7g1RGSAkeV8AgR8zIw&usqp=CAU"
                            width="30"
                            height="30"
                            className="d-flex align-self-baseline"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 d-flex align-self-baseline "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Form className="d-flex align-self-baseline">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>

                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Destination</Nav.Link>
                            <Nav.Link href="#actio3">Contact</Nav.Link>
                            <Nav.Link href="#" > <Button variant="warning" >LogIn</Button> </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;