import React from "react";

function withTooltip(Component) {
  return class WithTooltip extends React.Component {
    state = { showTooltip: false };

    mouserOver = () => this.setState({ showTooltip: true });

    mouserOut = () => this.setState({ showTooltip: false });

    render() {
      return (
        <div onMouseOver={this.mouserOver} onMouseOut={this.mouserOut}>
          <Component {...this.props} showTooltip={this.state.showTooltip} />
        </div>
      );
    }
  };
}

export default withTooltip;
