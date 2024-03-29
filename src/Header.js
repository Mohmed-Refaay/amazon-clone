import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Searchicon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase'
function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    auth.signOut()
  }

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://chicagocrusader.com/wp-content/uploads/sites/2/2020/04/Amazon-Logo_Dark-Background-Feature.jpg"
          alt="amazon"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Searchicon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={ !user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email},</span>
            <span className="header__optionLineTwo">{ user ? "Sign Out" : "Sign In" }</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
