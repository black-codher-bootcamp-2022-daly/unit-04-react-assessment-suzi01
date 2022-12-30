import React from 'react'
import Header from '../components/Header'

const About = () => {
    return <>
    <h1 className='title'>About</h1>
    <Header />
    <div className='about-body'>
        <h2 className='title'>Welcome to the Media Store </h2>
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
    
</>
}

export default About