import React from 'react'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import Home from './pages/home'
import Buttons from './pages/ui/buttons'
import NotFound from './pages/notfound'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
export default class IRouter extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <App>
                    <Route path="/admin" render = {
                        () =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}/>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </Admin>
                    } 
                    />
                    <Route path="/login" component={Login}/>
                </App>
            </BrowserRouter>
        )
    }
}