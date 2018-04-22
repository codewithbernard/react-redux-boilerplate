import React, { Component } from "react";
// connect function will connect component to global state
import { connect } from "react-redux";
import { fetchData } from "./actions";

class App extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    const data = this.props.data.map(item => {
      return <p>{item.name}</p>;
    });
    return <div>{data}</div>;
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(mapStateToProps, { fetchData })(App);
