import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions";

class Item extends Component {
  render() {
    //   const name = this.props.name;

    // Shortcut for the command above
    // ES6 desctructuring
    const { name } = this.props;

    return (
      <div>
        <p>{name}</p>
        <button onClick={() => this.props.removeItem(name)}>Delete</button>
      </div>
    );
  }
}

export default connect(null, { removeItem })(Item);
