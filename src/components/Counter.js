import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
  //   async increment() {
  //     this.setState({
  //         count: this.state.count + 1
  //     })
  //     await console.log(this.state.count)
  // }
  async increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  
    console.log(this.state.count);
  }
  
  render() {
    return (<div>
      <div>Count - {this.state.count}</div>
      <button onClick = {() => this.increment()}>Increment</button>
    </div>
      
    )
  }
}

export default Counter