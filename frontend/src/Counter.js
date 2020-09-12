import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props)
    this.state = {
      count:this.props.count
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({count: prevState.count + 1}));
  }

  handleDecrement = () => {
    this.setState((prevState) => ({count: prevState.count - 1}));
  }

  render() {
    return (
      <div>
          {this.state.count}
          <button onClick={this.handleIncrement} style={{ marginLeft: '5px' }}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div> 
      

      
    )
  }
}

export default Counter
