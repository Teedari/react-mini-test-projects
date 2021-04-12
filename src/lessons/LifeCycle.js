import React, { Component } from 'react'

class LifeCycle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       date: new Date().toLocaleString()
    }
  }
  componentDidMount() {
    console.log('Did mount')
    this.timerID = setInterval(this.tick,1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
    console.log('Did unmount')
  }
  
  
   tick = () => {
    this.setState({
      date: new Date().toLocaleString()
    })
  }
  
  render() {
    return (
      <div className='p-center'>
        <h2 className='display-2'>Hello World</h2>
        <br /><br />
        <h4 className='display-1'>{this.state.date}</h4>
      </div>
    )
  }
}



export default LifeCycle;