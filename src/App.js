import React, { useState } from "react";

import "./App.css";

//* Components
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

//* App
function App() {
  //* States
  const [userList, setUserList] = useState([]);

  //* addUserHandler
  const addUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: userName, age: userAge }];
    });
  };

  //* return
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
