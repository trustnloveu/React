import { Component } from "react";

class ErrorBoundary extends Component {
  //* constructor
  constructor() {
    super();
    this.state = { hasError: false };
  }

  //* componentDidCatch
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  //* render
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong.</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
