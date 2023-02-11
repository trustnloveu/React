import React, { Component, Fragment } from "react";

class CounterClass extends Component {
  state = { count: 0 };

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <Fragment>
        <div>Count: {this.state.count}</div>
        <button onClick={this.increaseCount}>+</button>
      </Fragment>
    );
  }
}

export default CounterClass;
