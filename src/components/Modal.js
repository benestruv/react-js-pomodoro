import React from "react";
import ReactModal from "react-modal";
import LogoBreak from './LogoBreak';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.displayed}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="overlay"
        >
          <h2>It's time to take a break !</h2>
          <LogoBreak/>
          <button onClick={this.props.onClickClose}>Close</button>
          <button onClick={this.props.onClickRestart}>Restart</button>
        </ReactModal>
      </div>
    );
  }
}

export default Modal