import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Axios } from "./http/axios";

import { cartActions } from "./store/cart-slice";
import { productActions } from "./store/product-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  // const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  //* useEffect
  useEffect(() => {
    //* getProducts
    const getProducts = async () => {
      const { data: products } = await Axios.get("/product.json");

      if (products) {
        const productList = [];

        for (const key in products) {
          productList.push({
            id: key,
            price: products[key].price,
            title: products[key].title,
            description: products[key].description,
          });
        }

        dispatch(productActions.setProducts(productList));
      }
    };

    //* getCart
    const getCart = async () => {
      const { data: cart } = await Axios.get("/cart.json");

      if (cart) {
        dispatch(
          cartActions.replaceCart({
            totalQuantity: cart.totalQuantity,
            items: cart.items,
          })
        );
      }
    };

    //* Execute
    getProducts();
    getCart();
  }, [dispatch]);

  //* return
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
