import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Axios } from "./http/axios";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  //* useEffect
  useEffect(() => {
    const setCart = async () => {
      await Axios.put("/cart.json", {
        data: cart,
      });
    };

    setCart();
  }, [cart]);

  //* return
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
