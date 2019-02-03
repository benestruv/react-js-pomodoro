import React, { Component } from 'react'

class Toggle extends React.Component {
    constructor(props) {
      super(props);
    }

  // Retourne le bouton
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.isToggleOn ? 'Start' : 'Reset'}
      </button>
      
    );
  }
}
  export default Toggle