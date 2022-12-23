import React from 'react'

const Search = (props) => {
  const {keyword, setKeyword, findproducts} = props
  return <>
    <form id="searchAPI" style={{alignContent:'center', textAlign:"center", padding:"5px"}} onSubmit={(event) => {
            event.preventDefault()
            props.findProducts(props.keyword)
            }}>
        {/* <p style={{color:"red"}}><em>{keyword && 'Keywords Typed: ' + keyword}</em></p> */}
        <input id="term" style={{borderRadius:"15px", width:"60%"}} type="text" 
            value={props.keyword} 
            onChange={(e) => props.setKeyword(e.target.value)}>
        </input>
        <input style={{borderRadius:"5px", border:"solid 1px", marginLeft:"5px"}} type="submit" value="Search"  />
    </form>
  </>
}

export default Search