import { useSelector } from "react-redux";

import classes from "./Cart.module.css";

import Card from "../UI/Card";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  //* return
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                title: item.name,
                quantity: item.quantity,
                price: item.price,
                total: item.totalPrice,
              }}
            />
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
