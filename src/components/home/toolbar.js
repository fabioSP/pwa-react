import React from 'react'
import {Navbar, Form, Nav, NavDropdown, FormControl, Button} from 'react-bootstrap'

class Toolbar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Contingência Blackout</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Programação de serviços</Nav.Link>
                            <NavDropdown title="Ações" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Visualizar serviços</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Alterar data</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Cadastrar acatamento</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Procurar" className="mr-sm-2" />
                            <Button variant="outline-success">Procurar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Toolbar