import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props) // initializing the props
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  decrementCount = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    )
  }
}

export default Counter;
