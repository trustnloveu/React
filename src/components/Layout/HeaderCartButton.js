import { useContext } from "react";

// CSS
import classes from "./HeaderCartButton.module.css";

// Context
import CartContext from "../store/cart-context";

// Component
import CartIcon from "../Cart/CartIcon";

// Main
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const itemCounts = cartCtx.items.reduce((prevNum, item) => {
    return prevNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemCounts}</span>
    </button>
  );
};

export default HeaderCartButton;
