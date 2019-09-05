import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from '../scenes/Home'
import Login from '../scenes/Login'
import Servicos from '../scenes/Servicos'
import Usuarios from '../scenes/Usuarios'
import Dashboard from '../scenes/Dashboard'

// const routes = [
//     {
//         path: "/",
//         component: Home
//     },
//     {
//         path: "/login",
//         component: Login
//     },
//     {
//         path: "/servicos",
//         component: Servicos
//     },
//     {
//         path: "/usuarios",
//         component: Usuarios
//     },
//     {
//         path: "/dashboard",
//         component: Dashboard
//     }
// ]

// function RouteWithSubRoutes(route) {
//     return (
//         <Route exact path={route.path} render={props => (
//             <route.component {...props} routes={route.routes} />
//         )} />
//     )
// }

// function createRoutes() {
//     return (
//         <Router>
//             {routes.map((route, i) => (
//                 <RouteWithSubRoutes key={i} {...route} />
//             ))}
//         </Router>)
// }

function createRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/servicos" component={Servicos} />
                <Route exact path="/usuarios" component={Usuarios} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>)
}

export default createRoutes;