import React from 'react'
import { Link } from 'react-router-dom'
// import Header from '../components/Header'

const About = (props) => {
    return <>
    <h1 className='title'>About</h1>
    <div className='about-links'>
    <Link to="/" id="homelink">Home </Link>|<Link to="/about" id="aboutlink"> About </Link>|<Link to="/basket" id="basketlink"> Basket: {props.itemCount}</Link>
    </div>
    <div className='about-body'>
        <h2 className='title'>Welcome to the Media Store </h2>
        <div className='about-text'>
        <p>
            The following application was created by Suzannah. This media app displays a list 
            of books, videos etc that a user can save to a local basket.
        </p>
        <br />
        <p>
            Click on the "Add +" button to add to your basket. Use the search bar to find the latest 
            media item by name or description.
            <br/>
            <br/>
            Browse the iTunes store for media you are interested in. Add to your basket and keep track of costs.
        </p>
        </div>
    </div>
    
</>
}

export default About