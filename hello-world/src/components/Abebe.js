import React, { Component } from 'react'

class Abebe extends Component {
    constructor(){
super()
this.state= {
    message: 'wellcome to my page'
}
    }  
    changeMessage(){
        this.setState({
            message: ' Thank you for coming back'
        })
    }  
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick= {()=> this.changeMessage()}> Subscribe</button>
            </div>
        )
    }
}

export default Abebe