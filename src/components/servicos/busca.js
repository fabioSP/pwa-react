import React from 'react'
import { Form, Col, Button, Row } from "react-bootstrap";

export function buscarServico() {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Serviço solicitado</Form.Label>
                    <Form.Control as="select" plaintext readOnly disabled>
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Prioridade</Form.Label>
                    <Form.Control as="select" plaintext readOnly disabled>
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Motivo de acatamento</Form.Label>
                    <Form.Control as="select" plaintext readOnly disabled>
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="ATC_">
                <Form.Label>ATC</Form.Label>
                <Row>
                    <Col sm="2">
                        <Form.Control placeholder="1234" plaintext readOnly />
                    </Col>
                    <Col sm="10">
                        <Form.Control placeholder="1234" plaintext readOnly />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group controlId="ATC_">
                <Form.Label>Unidade Executante</Form.Label>
                <Row>
                    <Col sm="2">
                        <Form.Control placeholder="1234" plaintext readOnly />
                    </Col>
                    <Col sm="10">
                        <Form.Control placeholder="1234" plaintext readOnly />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>PDE</Form.Label>
                    <Form.Control plaintext readOnly />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Fornecimento</Form.Label>
                    <Form.Control plaintext readOnly />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} id="formGridCheckbox">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control plaintext readOnly />
                </Form.Group>
                <Form.Group as={Col} id="formGridCheckbox">
                    <Form.Control plaintext readOnly />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control as="select" plaintext readOnly disabled>
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Control as="select" plaintext readOnly disabled>
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

            </Form.Row>

            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>
    )
}