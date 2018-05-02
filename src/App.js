import React, { Component } from "react";
// connect function will connect component to global state
import { connect } from "react-redux";
import { fetchData } from "./actions";
import Item from "./components/Item";
import AddForm from "./components/AddForm";

class App extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    const data = this.props.data.map(item => {
      return <Item key={item.name} name={item.name} />;
    });
    return (
      <div>
        <AddForm />
        {data}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

// conect takes 2 arguments.
// 1 mapStateToProps - function which takes data from redux store and connect it to the component
// Object of actions I want to triger from the component
export default connect(mapStateToProps, { fetchData })(App);
