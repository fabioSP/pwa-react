import React from 'react'
import MaterialTable from 'material-table'
import { Icons } from '../../icons/main'

export default class Editable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Obs.', field: 'obs' },
                { title: 'Data', field: 'data' },
                { title: 'Funcionário', field: 'functionario' },
                { title: 'Status', field: 'status' },
                { title: 'Tipo Funcionário', field: 'tipoFunc' }
            ],
            data: [
                {
                    obs: 'Cliente informa vazamento', data: '19/09/2019 15:51:03',
                    funcionario: 'Cleiton Bezerra', status: 'Pendente',
                    tipoFunc: '123'
                },
                { obs: 'Mehmet', data: 'Baran', funcionario: 1987, status: 63, tipoFunc: '' },
                { obs: 'Mehmet', data: 'Baran', funcionario: 1987, status: 63, tipoFunc: '' },
            ]
        }
    }

    render() {
        return (
            <div>
                <MaterialTable
                    title="Histórico do serviço"
                    columns={this.state.columns}
                    data={this.state.data}
                    options={{

                    }}
                />
            </div>
        )
    }
}


// export default class HistoricoServ extends Component {
//     render() {
//         return (
//             <Container>
//                 <h1>Histórico de serviço</h1>
//             </Container>
//         )
//     }
// }
