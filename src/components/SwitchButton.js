import { Component } from 'react'
class SwitchButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      switch: false
    }
  }
  switcher = () => {
    this.setState((prevState, nextState)=>({
      switch: !prevState.switch
    }));
  }
  render() {
    let classes = ['switch-controller', 'active'];
    return (
      <div className='p-center'>
        <div className='switch' onClick={this.switcher}>
          <div 
          className={this.state.switch ? classes.join(' ') : classes[0]}></div>
        </div>
        <h2 className='display-2'>{this.state.switch ? 'On' : 'Off'}</h2>
      </div>
    );
  }
}

export default SwitchButton
