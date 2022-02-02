import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  //* constructor
  //! To initailize state. Also, the state always should be in Object.
  //! The name of state object should be named "state". (Not optional in Class-based Component)
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }

  //* methods
  toggleUsersHandler() {
    //! Don't.
    // this.state.showUsers = !this.state.showUsers;

    //! This will 'overwrite' data, unless you simply.
    // this.setState({ showUsers: !this.state.showUsers });

    //! Right way to update the state by avoiding being overwrited, which will merge updated data
    this.setState((currentState) => {
      return { showUsers: !currentState.showUsers };
    });
  }

  //* render
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    //* return
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
