import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Axios } from "./http/axios";
import { uiActions } from "./store/ui-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  //* useEffect
  useEffect(() => {
    const setCart = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending Cart Data.",
        })
      );

      const response = await Axios.put("/cart.json", {
        data: cart,
      });

      if (response.status !== 200) {
        throw new Error("Sent Cart Data Failed.");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent Cart Data Successfully.",
        })
      );
    };

    if (isInitial) return (isInitial = false);

    setCart().catch((err) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sent Cart Data Failed.",
        })
      );
    });
  }, [cart, dispatch]);

  //* return
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
