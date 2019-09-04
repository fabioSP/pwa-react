import React from 'react'
import { Form, Col, Button, Row } from "react-bootstrap";
import "./style.css"

export function buscarServico() {
    return (
        <Form id="buscaServico">
            <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Serviço solicitado</Form.Label>
                    <Form.Control size="sm" as="select" readOnly disabled>
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Prioridade</Form.Label>
                    <Form.Control as="select" readOnly disabled>
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Motivo de acatamento</Form.Label>
                    <Form.Control as="select" readOnly disabled>
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="ATC_">
                <Form.Label>ATC</Form.Label>
                <Row>
                    <Col sm="2">
                        <Form.Control placeholder="1234" readOnly />
                    </Col>
                    <Col sm="10">
                        <Form.Control placeholder="1234" readOnly />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group controlId="ATC_">
                <Form.Label>Unidade Executante</Form.Label>
                <Row>
                    <Col sm="2">
                        <Form.Control placeholder="1234" readOnly />
                    </Col>
                    <Col sm="10">
                        <Form.Control placeholder="1234" readOnly />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>PDE</Form.Label>
                    <Form.Control readOnly />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Fornecimento</Form.Label>
                    <Form.Control readOnly />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="Endereco_">
                <Form.Label>Endereço</Form.Label>
                <Row>
                    <Col sm="6">
                        <Form.Control placeholder="1234" readOnly />
                    </Col>
                    <Col sm="6">
                        <Form.Control placeholder="1234" readOnly />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Número</Form.Label>
                    <Form.Control readOnly />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control readOnly />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control readOnly />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Município</Form.Label>
                    <Form.Control readOnly />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="Endereco_">
                <Row>
                    <Col sm="8">
                        <Form.Label>Cliente</Form.Label>
                        <Form.Control placeholder="1234" readOnly />
                    </Col>
                    <Col sm="4">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control placeholder="1234" readOnly />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Observações</Form.Label>
                <Form.Control as="textarea" rows="3" readOnly />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} sm={3} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Data</Form.Label>
                    <input class="form-control" type="date" readOnly />
                </Form.Group>

                <Form.Group as={Col} sm={3} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Hora</Form.Label>
                    <input class="form-control" type="time" readOnly />
                </Form.Group>

                <Form.Group as={Col} sm={6} class="float-sm-right" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Protocolo</Form.Label>
                    <input class="form-control" type="number" readOnly />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm={8}>
                    <Form.Label>Atendente</Form.Label>
                    <Form.Control placeholder="1234" readOnly />
                </Form.Group>
                <Form.Group as={Col} sm={4}>
                    <Form.Label>Ramal</Form.Label>
                    <Form.Control placeholder="1234" readOnly />
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>
    )
}