import React from 'react'
import Header from '../components/Header'

const About = () => {
    return <>
    <h1>About</h1>
    <Header />
    <div className='header'>
        <h2>Welcome to the Bookcase Application</h2>
        <p>
            The following application was created by Suzannah. This media app displays a list 
            of books, videos etc that a user can save to a local basket.
        </p>
        <br />
        <p>
            Click on the "Add +" button to add to your basket. Use the search bar to find the latest 
            media item by name or description
        </p>
    </div>
    
</>
}

export default About