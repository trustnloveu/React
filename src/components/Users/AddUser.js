import React from "react";

//* Main
const AddUser = () => {
  //* addUserHandler
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  //* return
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">User Name</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age(Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
