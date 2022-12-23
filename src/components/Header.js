import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return<>
  <ul>
      <li><Link to="/" id="homelink">Home</Link></li>
      <li><Link to="/about"  id="aboutlink">About </Link></li>
      <li><Link to="/basket" id="basketlink">Basket ({props.itemCount})</Link></li>
  </ul>
  </>
}

export default Header