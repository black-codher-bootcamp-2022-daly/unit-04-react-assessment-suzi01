import React from 'react'


const Search = (props) => {
  
  return <>
    <form id="searchAPI"  onSubmit={(event) => {
            event.preventDefault()
            props.search(props.term)
            }}>
        {/* <p style={{color:"red"}}><em>{keyword && 'Keywords Typed: ' + keyword}</em></p> */}
        <input id="searchBar" type="text" 
            value={props.term} 
            onChange={(e) => props.setTerm(e.target.value)}
            placeholder='Enter search term...'>
        </input>
        <input className="search-btn" type="submit" value="Search"  />
        {/* <div className='radio-buttons'>
    
         
        </div> */}
    </form>
  </>
}

export default Search