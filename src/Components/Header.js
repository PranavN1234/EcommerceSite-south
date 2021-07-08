import React, { useState } from "react";
import "../Styles/Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../StateProvider";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase";

function Header({ searchFill }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const message = user ? `Hello ${user.email}` : "Hello Guest";
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      history.replace("/");
    }
  };
  let admin = false;
  if (user?.email === "reminho@gmail.com") {
    admin = true;
  }
  const handleSearch = (e) => {
    e.preventDefault();
    searchFill(searchTerm);
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
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <SearchIcon
          className="header__searchIcon"
          type="submit"
          onClick={handleSearch}
        />
      </div>

      <div className="header__nav">
        {admin && (
          <Link to="/addProduct">
            <div className="header__option">
              <span className="nav__option1">Add Product</span>
              <span className="nav__option2">Admin</span>
            </div>
          </Link>
        )}

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
