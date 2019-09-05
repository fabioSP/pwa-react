import React from 'react'
import { Container, Card } from 'react-bootstrap';
import { buscarServico } from '../components/servicos/frmServico';
import { DatatablePage } from '../components/servicos/gridServicos'
import TestTable from '../components/servicos/testTable'

const buscar = buscarServico();

const grid = DatatablePage();

export default class Servicos extends React.Component {
    render() {
        return (
            <Container>
                <Card>
                    <Card.Header as="h5">
                        Serviços
                    </Card.Header>
                    <Card.Body>
                        {/* <TestTable></TestTable> */ buscar}
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}