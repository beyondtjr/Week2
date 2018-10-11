
import React, { Component } from 'react'

class Colorbox extends Component{
//   constructor(props){
//   super(props);
// }
  render() {
    let styles = {
      backgroundColor: this.props.color
    }

    return(
      <div style={styles} onClick={this.handleClick}>

          <h1>
            {this.props.color}
          </h1>

      </div>
    );

  }
  handleClick = () => {
    console.log("I was clicked")
    this.props.changeColor()
  }
}
export default Colorbox;
