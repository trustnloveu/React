import React from "react";

//* Css
import classes from "./UserList.module.css";

//* Components
import Card from "../UI/Card";

//* Main
const UserList = (props) => {
  return (
    <Card className={classes.user}>
      <ul>
        {props.users &&
          props.users.map((user) => {
            return (
              <li>
                {user.name} ({user.age} years old.)
              </li>
            );
          })}
      </ul>
    </Card>
  );
};

export default UserList;
