import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import HeaderLogo from "../../images/zamzam-logo.png";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-block">
                <div className="brand-logo">
                  <img
                    src={HeaderLogo}
                    alt={"HeaderLogo"}
                    width="130px"
                    height="55px"
                  />
                </div>
                <ul className="header-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/product-list">Sweets</Link>
                  </li>
                  <li>
                    <Link to="/">Savories</Link>
                  </li>
                  <li>
                    <Link to="/">About us</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
                <ul className="header-menu">
                  <li>
                    <Link>
                      <FaUserAlt />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <FaShoppingCart />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
