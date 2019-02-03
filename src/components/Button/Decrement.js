import React from 'react'

class Decrement extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          time : 0,
      };
    }
  
    render() {
        return (
            <button id="test" onClick={this.props.onClick}> - </button>
        );
    }
}
// console.log(this.state.count);
export default Decrement;