import React from "react";

// css
import classes from "./Header.module.css";

// Header Image
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="header img" />
      </div>
    </React.Fragment>
  );
};

export default Header;
