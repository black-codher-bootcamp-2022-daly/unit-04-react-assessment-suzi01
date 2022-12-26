import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return<>
      <Link to="/" id="homelink">Home</Link>|<Link to="/about"  id="aboutlink">About </Link>|<Link to="/basket" id="basketlink">Basket: {props.itemCount}</Link>
  </>
}

export default Header