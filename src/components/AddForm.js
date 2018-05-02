import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

class AddForm extends Component {
  state = {
    inputValue: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addItem(this.state.inputValue);

    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={event => this.setState({ inputValue: event.target.value })}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default connect(null, { addItem })(AddForm);
