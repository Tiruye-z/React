import React, { Component } from 'react'

export class Counter extends Component {
    
    constructor(props) {
        super(props)
      
        this.state = {
             x:0
        }
    }
    increment(){
        // this.setState({
        //     x: this.state.x +1
        // },() => { console.log(this.state.x)})

        this.setState((prevState) => ({
            x: prevState.x+1} ))
            

    }   
    incrementfive(){
        this.increment()
        this.increment()
        this.increment()
       

    }

    render() {
        return (
            <div>
<h2>count= {this.state.x }</h2>
                <button onClick={() =>this.incrementfive()}>ADD</button>
            </div>
        )
    }
}

export default Counter
