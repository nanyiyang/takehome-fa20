import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ],
      nextId: 4,
      inputValue: ''
    }
  }

  updateInputValue = (evt) => {
    console.log('updated')
    this.setState({
      inputValue: evt.target.value
    });
  }

  createNewRestaurant = () => {
    let newRestaurant = {
      id: this.state.nextId,
      name: this.state.inputValue,
      rating: 0
    }

    this.setState((prevState) => ({
      inputValue: '',
      nextId: this.state.nextId + 1,
      restaurants: [...prevState.restaurants, newRestaurant]
    }))
  }

  render() {
    
    return (
      <div className="App">
      <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
      <button onClick={this.createNewRestaurant}>Submit</button>
      <Counter count={0}/>
        <Instructions complete={true}/>
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
      </div>
    )
  }
}

export default App
