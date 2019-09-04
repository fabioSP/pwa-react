import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../scenes/Home'
import Login from '../scenes/Login'
import Servicos from '../scenes/Servicos'
import Usuarios from '../scenes/Usuarios'
import Dashboard from '../scenes/Dashboard'
import HistoricoServicos from '../scenes/HistoricoServicos'

const createRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/servicos" component={Servicos} />
            <Route exact path="/usuarios" component={Usuarios} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/historicoServicos" component={HistoricoServicos} />
        </Switch>
    </Router>
)

export default createRoutes;