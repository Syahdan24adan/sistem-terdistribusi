import { Navbar, Container, Nav, Button, Row, Col, Form } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar variant='dark' className="Navbar2" bg='yellow' >
                <Container>
                    <Navbar.Brand className='tiket'>FREE MOVIES</Navbar.Brand>
                    <Nav className="toolbar text-primar">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Daftar Film</Nav.Link>
                        <Nav.Link>Trending</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                    </Nav>
                    <Row>
                        <Col>
                            <div class="d-inline-flex p-2 text-white">
                                <Form>
                                    <input class="form-control" type="search"placeholder="Search..."aria-label="Search..." />
                                    <Button variant="dark" type="submit">Search</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    );
}
export default NavBar;