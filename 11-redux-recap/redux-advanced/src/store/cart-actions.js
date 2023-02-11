import { Axios } from "../http/axios";
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

//* getCardData
export const getCartData = () => {
  return async (dispatch) => {
    // getData
    const getData = async () => {
      const response = await Axios.get("cart.json");

      if (response.status !== 200) {
        throw new Error("Failed to fetch cart data.");
      }

      return response.data;
    };

    // Execute
    try {
      const { data: cartData } = await getData();

      if (cartData)
        dispatch(
          cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity,
          })
        );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sent Cart Data Failed.",
        })
      );
    }
  };
};

//* sendCartData
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data.",
      })
    );

    // sendRequest
    const sendRequest = async () => {
      const response = await Axios.put("/cart.json", {
        data: {
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        },
      });

      if (response.status !== 200) {
        throw new Error("Sent Cart Data Failed.");
      }
    };

    // Execute
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent Cart Data Successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sent Cart Data Failed.",
        })
      );
    }
  };
};
