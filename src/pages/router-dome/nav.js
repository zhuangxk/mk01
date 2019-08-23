import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
export default class Nav extends React.Component{
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
                    {this.props.children}
                </div>
            </HashRouter>
        )

    }
}