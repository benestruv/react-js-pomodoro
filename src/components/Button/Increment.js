import React from 'react'

class Increment extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          time : 0,
      };
    }
  
    render() {
        return (
            <button id="test" onClick={this.props.onClick}> + </button>
        );
    }
}
// console.log(this.state.count);
export default Increment;