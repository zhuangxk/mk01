import React from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/home'
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class Admin extends React.Component{
    render(){
        return (
            <Router>
                <Row className="container">
                    <Col span={3} className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col span={21} className="main">
                        <Header>
                            
                        </Header>
                        <Row className="content">
                            {/* <Home></Home> */}
                            <Route path="/admin/home" exact component={Home} />
                        </Row>
                        <Footer>
                            Footer
                        </Footer>
                    </Col>
                </Row>  
            </Router>   
        )
    }
}