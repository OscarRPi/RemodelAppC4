import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/Logo.png'
import {Link} from 'react-router-dom';

function Navegacion() {
    return (
        <>
        <div className='divisor nav-bar'>
                <Navbar collapseOnSelect className='nav-bar' expand='xxl' bg="light" variant="light">
                    <Container>
                        <Navbar.Brand>
                            <Link to='/'>
                                <img src={logo} height="130" className="d-inline-block align-top" alt="Logotipo" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>INICIO</Nav.Link>
                                <Nav.Link>CATEGORIAS</Nav.Link>
                                <NavDropdown title="PRODUCTOS" id="collasible-nav-dropdown">
                                    <NavDropdown.Item>BAÑO</NavDropdown.Item>
                                    <NavDropdown.Item>CARPINTERIA</NavDropdown.Item>
                                    <NavDropdown.Item>COCINA</NavDropdown.Item>
                                    <NavDropdown.Item>PINTURA</NavDropdown.Item>
                                    <NavDropdown.Item>PISOS</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link>LOGIN<span></span></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
        </>
    )
}

export default Navegacion;