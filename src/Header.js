import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const message = user ? `Hello ${user.email}` : "Hello Guest";
  const history = useHistory();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      history.replace("/");
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.pinclipart.com/picdir/middle/90-900444_south-indian-food-icon-clipart.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header__option">
            <span className="nav__option1">
              {user ? "Sign-Out" : "Sign-In"}
            </span>
            <span className="nav__option2">{message}</span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="nav__option1">Returns</span>
            <span className="nav__option2">and Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />

            <span className="header__optionLine2 header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
