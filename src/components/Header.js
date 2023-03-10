import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <Link to="/" id="homelink">Home </Link>|<Link to="/about" id="aboutlink"> About </Link>|<Link to="/basket" id="basketlink"> Basket: {props.itemCount}</Link>
      </div>
    </div>
  );
};

export default Header;
