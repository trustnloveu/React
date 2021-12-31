import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

// Context
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //* useEffect
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (isLogin === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLogin", "1");

    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLogin");

    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
