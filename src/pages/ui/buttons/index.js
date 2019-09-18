import React from 'react'
import {Button, Card} from 'antd'
import './index.less'
export default class Buttons extends React.Component{
    render(){
        return (
            <div>
                <Card title="按钮演示">
                    <Button type="primary">Primary</Button>
                    <Button type="danger">danger</Button>
                    <Button type="diaabled">diaabled</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon="search" onClick={alert} type="link">Search</Button>
                    <Button icon="alipay">支付宝</Button>
                </Card>
            </div>
        )
    }
}