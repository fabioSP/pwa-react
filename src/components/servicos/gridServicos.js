import React from 'react';
import { MDBDataTable } from 'mdbreact';

export const DatatablePage = () => {
    const data = {
        columns: [
            {
                label: '#',
                field: 'id',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Protocolo',
                field: 'protocolo',
                sort: 'asc',
                width: 150
            },
            {
                label: 'ATC',
                field: 'atc',
                sort: 'asc',
                width: 270
            },
            {
                label: 'PDE',
                field: 'pde',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Cidade',
                field: 'cidade',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Logradouro',
                field: 'logradouro',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Status',
                field: 'status',
                sort: 'asc',
                width: 100
            },
        ],
        rows: [
            {
                id: '1',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '2',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '3',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '4',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '5',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '6',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '7',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '8',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '9',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '10',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '11',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '12',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '13',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '14',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '15',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '16',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '17',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '18',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '19',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '20',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '21',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '22',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '23',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '24',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '25',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '26',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '27',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '28',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '29',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '30',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '31',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '32',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '33',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '34',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '35',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '36',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '37',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '38',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '39',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '40',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '41',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '42',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '43',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '44',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '45',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '46',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '47',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '48',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '49',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '50',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '51',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '52',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '53',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '54',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '55',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '56',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
            {
                id: '57',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Pendente'
            },
        ]
    };

    return (
        <MDBDataTable
            striped
            bordered
            hover
            data={data}
        />
    );
}

//export default DatatablePage;


/*import React from 'react'
import { Table } from 'react-bootstrap'
import './style.css'

const $ = require('jquery');


export function gridServicos() {
    const DataTable = require('datatables.net');
    const tb = (
        <Table id="gridServicos" striped bordered hover size="sm" variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Protocolo</th>
                    <th>ATC</th>
                    <th>PDE</th>
                    <th>Cidade</th>
                    <th>Logradouro</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>123</td>
                    <td>1234</td>
                    <td>12345</td>
                    <td>Morungaba</td>
                    <td>Bueno</td>
                    <td>Pendente</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>123</td>
                    <td>1234</td>
                    <td>12345</td>
                    <td>Morungaba</td>
                    <td>Bueno</td>
                    <td>Cancelado</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>123</td>
                    <td>1234</td>
                    <td>12345</td>
                    <td>Morungaba</td>
                    <td>Bueno</td>
                    <td>Programado</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>123</td>
                    <td>1234</td>
                    <td>12345</td>
                    <td>Morungaba</td>
                    <td>Bueno</td>
                    <td>Em andamento</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>123</td>
                    <td>1234</td>
                    <td>12345</td>
                    <td>Morungaba</td>
                    <td>Bueno</td>
                    <td>Encerrado</td>
                </tr>
            </tbody>
        </Table>
    )

    $().ready(function () {
        $('#gridServicos').DataTable({
            responsive: true,

        });
    });

    return (
        tb
    )
}
*/