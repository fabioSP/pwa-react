import React from 'react'
import { Container, Card } from 'react-bootstrap';
import DataTablePage from '../components/servicos/gridServicos'
import Servico from '../components/servicos/frmServico'
import HistoricoServ from '../components/servicos/histServicos'

export default class Servicos extends React.Component {
    render() {
        return (
            <Container>
                <Card>
                    <Card.Header as="h5">
                        Serviços
                    </Card.Header>
                    <Card.Body>
                        {/* <Servico></Servico> */}
                        {/* <HistoricoServ></HistoricoServ> */}
                        <DataTablePage ></DataTablePage>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}