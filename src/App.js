import React, { useState } from "react";

// Context Provider
import CartProvider from "./components/store/CartProvider";

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
    <CartProvider>
      {cartModalIsShown && <Cart onClose={hideCartModalHandler} />}
      <main>
        <Header onShowCart={showCartModalHandler} />
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
