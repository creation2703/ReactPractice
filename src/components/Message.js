import React from 'react';

class Message extends React.Component {
    constructor(){
        super()
        this.state = {
            message: "Welcome visitor"
        }
    }
    changeMessage(){
        this.setState({
            message: "Thanks for subscribing"
        })
    }
    render() {
        return (
            <div>
        <h1> {this.state.message} </h1>
        <button onClick ={() => this.changeMessage()}>Subscribe</button>
        </div>
        )
        
    }
}

export { Message }; 
