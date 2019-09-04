import React from 'react'
import Toolbar from './components/default/toolbar'
import Login from './scenes/Login'
import createRoutes from './routes/index'

const routes = createRoutes();

export default class Default extends React.Component {
    render() {
        if (window.location.href.indexOf("login") === -1) {
            return (
                <div>
                    <Toolbar></Toolbar>
                    {routes}
                </div>
            )
        }
        else {
            return (
                <Login></Login>
            )
        }
    }
}