import React from 'react'
export default class Com1 extends React.Component {
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}