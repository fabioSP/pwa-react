import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DataTablePage } from '../components/servicos/gridServicos'

const servRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/servicos/" component={DataTablePage} />
            </Switch>
        </Router>
    )
}

export default servRoutes