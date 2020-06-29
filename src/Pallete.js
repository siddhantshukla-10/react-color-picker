import React, { Component } from 'react'
import ColorBox from "./ColorBox";
import './Pallete.css';

class Pallete extends Component {
  render() {
    const colorBox = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ))
    return (
      <div className="Pallete">
        {/* Navbar goes here */}
        <div className="Pallete-colors">
          {colorBox}
        </div>
        {/* Footer goes here */}
      </div>
    )
  }
}

export default Pallete;
