import React from 'react'
import menuConfig from '../../config/menuConfig'
import { Menu } from 'antd'
import {  NavLink } from "react-router-dom";
const SubMenu = Menu.SubMenu

export default class NavLeft extends React.Component{
    UNSAFE_componentWillMount(){
        const menuTreeNode = this.renderMenu(menuConfig)
        this.setState({
            menuTreeNode
        })
    }
    renderMenu = data => {
        return data.map( item => {
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
                
            }

            return (
                <Menu.Item key={item.key} > 
                    <NavLink to={item.key}>{item.title}</NavLink> 
                </Menu.Item>
            )
        })
    }
    render(){
        return (
            <div>
                <div className="logo">
                    <img src="/logo512.png" alt="logo"></img>
                    <h1>react app</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}