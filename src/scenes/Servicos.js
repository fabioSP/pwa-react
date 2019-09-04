import React from 'react'
import { Container } from 'react-bootstrap';
import { buscarServico } from '../components/servicos/busca';

const buscar = buscarServico();

export default class Servicos extends React.Component {
    render() {
        return (
            <Container>
                <div><h1>Serviços</h1></div>
                {buscar}
            </Container>
        )
    }
}