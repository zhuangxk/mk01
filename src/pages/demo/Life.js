import React from 'react'
import Child from './Child'
import './index.less'
import { Button } from 'antd';
// import Button from 'antd/es/button';
// import 'antd/es/button/style'; 
export default class Life extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            count: 0
        }
    }
    handlerAdd =()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        // const style = {
        //     padding: '50px'
        // }
        return (
            <div className="content">
                <p>状态自增</p>
                <p>{this.state.count}</p>
                <button onClick={this.handlerAdd}>add</button>
                <Child name={this.state.count}></Child>
                <Button type="primary">Button</Button>
            </div>
        )
    }
}