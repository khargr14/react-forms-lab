import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars
    };
  }

  calculateRemaining = (event) => {
    return (
      this.props.maxChars - event.target.value.length
    )
  }

  handleChange = event => {
    this.setState({ 
      maxChars: this.calculateRemaining(event),
      input: event.target.value
    })
  }

 

export default TwitterMessage;
