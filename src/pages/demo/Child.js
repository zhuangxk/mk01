import React from 'react'
export default class Child extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hh: 13123
        }
    }
    componentWillMount(){
        console.log('will mount')
    }
    UNSAFE_componentWillReceiveProps(newProps){
        console.log(newProps)
    }
    UNSAFE_shouldComponentUpdate(){
        console.log('should update')
        return true
    }
    UNSAFE_componentWillUpdate(){
        console.log('wiil update')
    }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapshotBeforeUpdate')
    //     console.log(prevProps, prevState)
    //     return false
    // }
    componentDidMount(){
        console.log('did mount')
    }
    componentDidUpdate(){
        console.log('did update')
    }
    render(){
        return (
        <div>{this.props.name}</div>
        )
    }
}