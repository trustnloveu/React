import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <div>
        Movies
        {this.props.showTooltip && <div>Some tooltips</div>}
      </div>
    );
  }
}

export default withTooltip(Movie);
