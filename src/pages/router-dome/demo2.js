import React from 'react'
import {HashRouter as Router ,Route} from 'react-router-dom'
import Nav from './nav'
import Com1 from './com1'
import Com2 from './com2'
import Com3 from './com3'
export default class RouteDemo2 extends React.Component{
    render(){
        return (
            <Router>
                <Nav>
                    <Route path="/" component={Com1}></Route>
                    <Route path="/com2" component={Com2}></Route>
                    <Route path="/com3" component={Com3}></Route>
                </Nav>
            </Router>
        )
    }
}