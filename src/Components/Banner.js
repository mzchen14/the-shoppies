import React, { Component } from "react";
import "../styles/Banner.css";

export default class Banner extends Component {
  handleClick = () => {
    console.log("clicked");
    this.props.toggle();
  };

  render() {
    return (
      <div className="banner">
        <div className="modal">
          <div className="modal_content">
            <span className="close" onClick={this.handleClick}>
              &times;
            </span>
            <p>
              You have nominated 5 movies. Thank you for your participation!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
