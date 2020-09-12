import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      name:this.props.name,
      rating: this.props.rating
    }
  }
  
  render() {
    return (
      <div>
      {this.state.name} 
      <Counter count={this.state.rating}/>
      <br/>
      </div> 
    )
  }
}

export default App
