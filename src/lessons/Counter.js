import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter: 0,
    }
  }

  incrementCounter = () => {
    
    this.setState((prevState, nextState) => ({
      counter: prevState.counter + 1,
    }))
  }
  
  render() {
    return (
      <div className='mobile'>
        <nav>
          <h4>Counter App</h4>
        </nav>
        <main className='counter'>
          <h3 className='counter-number'>{this.state.counter}</h3>
          <button onClick={this.incrementCounter} className='mobile-button__floatButton'>+</button>
        </main>
      </div>
    )
  }
}

export default Counter
