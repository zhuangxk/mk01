import React from 'react'
import {Row,Col} from 'antd'
import './index.less'
import Axios from '../../axios'
import { formateDate } from '../../utils/utils'
export default class Header extends React.Component{
    UNSAFE_componentWillMount(){
        this.setState({
            userName: 'tokyo'
        })

        setInterval(()=>{
            let sysTime = formateDate(new Date())
            this.setState({
                sysTime
            })
        })
        this.getWeatherData()
    }

    getWeatherData =()=>{
        const city = '青岛'
        const ak = '3p49MVra6urFRGOT9s8UBWr2'
        const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=${ak}`
        Axios.jsonp({
            url
        }).then(data=>{
            const weather = data[0]['weather_data'][0]
            this.setState({
                dayPicture: weather.dayPictureUrl,
                weather: weather.weather  
            })
        })
        
    }
    render(){
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}> 
                    <span>欢迎, {this.state.userName}</span>
                    <a href="/"> 退出 </a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="breadcrumb-right">
                        <span>{this.state.sysTime}</span>
                        <img src={this.state.dayPicture} alt="天气"></img>
                            <span> { this.state.weather}</span> 
                        {/* <span className="weater-detail">
                        
                        </span> */}
              
                    </Col>
                </Row>
            </div>
        )
    }
}