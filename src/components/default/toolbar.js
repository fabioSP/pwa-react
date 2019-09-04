import React from 'react'
import { Navbar, Form, Nav, FormControl, Button } from 'react-bootstrap'

function Toolbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Contingência Blackout</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/servicos">Serviços</Nav.Link>
                        <Nav.Link href="/usuarios">Usuários</Nav.Link>
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


export default Toolbar