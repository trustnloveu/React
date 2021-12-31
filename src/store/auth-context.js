import React from "react";

//! To Create 'Context Object'
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export default AuthContext;
