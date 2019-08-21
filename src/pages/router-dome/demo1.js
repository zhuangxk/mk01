import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Com1 from './com1'
import Com2 from './com2'
import Com3 from './com3'
export default class RouteDemo1 extends React.Component{
    render(){
        return (

            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">Com1</Link></li>
                        <li><Link to="/com2">Com2</Link></li>
                        <li><Link to="/com3">Com3</Link></li>
                    </ul>
                    <hr />
                    <Switch> 
                        {/* 匹配第一个适合的路由 */}

                        <Route path="/" exact component={Com1}></Route>
                        <Route path="/com2" component={Com2}></Route>
                        <Route path="/com3" component={Com3}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )

    }
}