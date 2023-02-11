import { useSelector } from "react-redux";

import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/CounterSlice";
import UserProfile from "./components/UserProfile";
// import Counter from "./components/Counter";
// import Counter from "./components/CounterClass";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  //* return
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
