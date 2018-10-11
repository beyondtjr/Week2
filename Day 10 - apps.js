import React, { Component } from 'react';
import Colorbox from './Colorbox.js';
import './Colorbox.css';
// import ForLoopComponent from '.ForLoopComponent.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      colorIndex: 0,
      colors :["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"]
    }

  }

  render(){
    return (
      <div >
        <Colorbox color={this.state.colors[this.state.colorIndex]} changeColor = {this.incrementColorIndex}/>
      </div>
    );

  }
  incrementColorIndex = () => {
    let {colorIndex} = this.state
    colorIndex =+ 1
    this.setState({colorIndex: this.state.colorIndex+1})
  }
}


export default App;
