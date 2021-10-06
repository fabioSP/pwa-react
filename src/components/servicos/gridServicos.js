import React, { Component } from 'react';
import MaterialTable from '@material-table/core';
import HistoricoServ from './histServicos'

const Table = () => {
    const [state] = React.useState({
        columns: [
            { title: '#', field: 'id' },
            { title: 'Protocolo', field: 'protocolo' },
            { title: 'ATC', field: 'atc' },
            { title: 'PDE', field: 'pde' },
            { title: 'Cidade', field: 'cidade' },
            { title: 'Logradouro', field: 'logradouro' },
            { title: 'Status', field: 'status' }
        ],
        data: [
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
                status: 'Programado'
            },
            {
                id: '3',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Em andamento'
            },
            {
                id: '4',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Encerrado'
            },
            {
                id: '5',
                protocolo: '123',
                atc: '1234',
                pde: '12345',
                cidade: 'Morungaba',
                logradouro: 'Bueno',
                status: 'Cancelado'
            },
            {
                id: '6',
                protocolo: '123',
                atc: '1234',
                pde: '0000840858',
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
                protocolo: '1921681100',
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
            }
        ]
    });



    return (
        <MaterialTable
            title=""
            columns={state.columns}
            data={state.data}
            localization={{
                body: {
                    addTooltip: 'Adicionar',
                    editTooltip: 'Editar',
                    deleteTooltip: 'Deletar',
                    emptyDataSourceMessage: 'Nenhum registro encontrado',
                    editRow: {
                        saveTooltip: 'Salvar',
                        cancelTooltip: 'Cancelar',
                        deleteText: 'Deseja realmente deletar este registro?'
                    }
                },
                toolbar: {
                    searchPlaceholder: 'Localizar',
                    searchTooltip: 'Procurar',
                    exportTitle: 'Baixar',
                    exportName: 'Exportar para CSV'
                },
                pagination: {
                    labelRowsSelect: 'Linhas por página',
                    labelDisplayedRows: ' {from}-{to} de {count}',
                    firstTooltip: 'Primeira página',
                    previousTooltip: 'Página anterior',
                    nextTooltip: 'Próxima página',
                    lastTooltip: 'Última página'
                },
                header: {
                    actions: 'Ações'
                }
            }}
            actions={[
                {
                    icon: 'edit',
                    tooltip: 'Editar',
                    onClick: (event) => alert("Test")
                }
            ]}
            detailPanel={ [
                {
                    tooltip: 'Mostrar',
                    render: rowData => {
                        return (
                            <HistoricoServ/>
                        )
                    }
                }
            ]}
            options={{
                exportButton: true,
                exportFileName: 'Serviços',
                exportAllData: true
            }}
            // editable={{
            //     onRowAdd: newData =>
            //         new Promise(resolve => {
            //             setTimeout(() => {
            //                 resolve();
            //                 const data = [...state.data];
            //                 data.push(newData);
            //                 setState({ ...state, data });
            //             }, 600);
            //         }),
            //     onRowUpdate: (newData, oldData) =>
            //         new Promise(resolve => {
            //             setTimeout(() => {
            //                 resolve();
            //                 const data = [...state.data];
            //                 data[data.indexOf(oldData)] = newData;
            //                 setState({ ...state, data });
            //             }, 600);
            //         }),
            //     onRowDelete: oldData =>
            //         new Promise(resolve => {
            //             setTimeout(() => {
            //                 resolve();
            //                 const data = [...state.data];
            //                 data.splice(data.indexOf(oldData), 1);
            //                 setState({ ...state, data });
            //             }, 600);
            //         }),
            // }}
        />
    );
}

export default class DataTablePage extends Component {
    render() {
        return (
            <div>
                <Table />
            </div>
        )
    }
}
