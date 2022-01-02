import React, { Fragment, useState } from "react";

// Comonents
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart"; //* Modal

function App() {
  const [cartModalIsShown, setCartModalIsShown] = useState(false);

  const showCartModalHandler = () => {
    setCartModalIsShown(true);
  };

  const hideCartModalHandler = () => {
    setCartModalIsShown(false);
  };

  return (
    <Fragment>
      {cartModalIsShown && <Cart onClose={hideCartModalHandler} />}
      <main>
        <Header onShowCart={showCartModalHandler} />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
