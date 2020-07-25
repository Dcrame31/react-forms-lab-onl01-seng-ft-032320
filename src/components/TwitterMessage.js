import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      messageInput: "",
      count: props.maxChars
    };
  }

  handleInputChange = event => {
    this.setState({
      messageInput: event.target.value,
      count: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
          onChange={event => this.handleInputChange(event)} value={this.state.messageInput} />
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default TwitterMessage;
