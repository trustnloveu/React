import { Fragment, Component } from "react";

import classes from "./UserFinder.module.css";

import UsersContext from "../store/users-context";

import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  //* Context
  static contextType = UsersContext;

  //* constructor
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  //* methods
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  //* componentDidMount
  componentDidMount() {
    // Send HTTP request
    this.setState({ filteredUsers: this.context.users });
  }

  //* componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  //* render
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
