import React, {Fragment, useEffect, useState} from 'react';
import './styles/App.css';
import data from './models/data.json'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Basket from './components/Basket'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Search from './components/Search'
import BasketCount from './components/BasketCount';



function App() {
  const [products, setProducts] = useState(data)
  const [basket, setBasket] = useState([])
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [term, setTerm] = useState("")


  // const basket1 = [{
  //   "wrapperType": "track",
  //   "kind": "song",
  //   "artistId": 442122051,
  //   "collectionId": 1440760117,
  //   "trackId": 1440760502,
  //   "artistName": "Frank Ocean",
  //   "collectionName": "Channel ORANGE",
  //   "trackName": "Thinkin Bout You",
  //   "collectionCensoredName": "Channel ORANGE",
  //   "trackCensoredName": "Thinkin Bout You",
  //   "artistViewUrl": "https://music.apple.com/us/artist/frank-ocean/442122051?uo=4",
  //   "collectionViewUrl": "https://music.apple.com/us/album/thinkin-bout-you/1440760117?i=1440760502&uo=4",
  //   "trackViewUrl": "https://music.apple.com/us/album/thinkin-bout-you/1440760117?i=1440760502&uo=4",
  //   "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/1c/83/b0/1c83b074-d4eb-77ad-520a-eebe6b335c2e/mzaf_4402051226093465605.plus.aac.p.m4a",
  //   "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/21/07/f1/2107f122-4b98-8431-823f-431c56457428/source/30x30bb.jpg",
  //   "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/21/07/f1/2107f122-4b98-8431-823f-431c56457428/source/60x60bb.jpg",
  //   "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/21/07/f1/2107f122-4b98-8431-823f-431c56457428/source/100x100bb.jpg",
  //   "collectionPrice": 8.99,
  //   "trackPrice": 1.29,
  //   "releaseDate": "2012-04-17T12:00:00Z",
  //   "collectionExplicitness": "explicit",
  //   "trackExplicitness": "notExplicit",
  //   "discCount": 1,
  //   "discNumber": 1,
  //   "trackCount": 17,
  //   "trackNumber": 2,
  //   "trackTimeMillis": 200747,
  //   "country": "USA",
  //   "currency": "USD",
  //   "primaryGenreName": "Pop",
  //   "isStreamable": true
  // }]
  // // console.log(basket1)
  // const [basket, setBasket] = useState(basket1)
  
  function addToBasket(id){
    console.log('Add to basket function called')
    // console.log(id)
    products.map(product => {
      if((product.trackId === id  && product.inBasket !== true) || (product.artistId === id && product.inBasket !== true)){
      // if(product.trackId === id && product.inBasket !== true){
        // console.log(product)
        setBasket(prev => [...prev, product])
        // console.log('basket',product)
        product.inBasket= true
        // console.log(product.inBasket)
        setCount(count + 1)
        setTotal(total + product.trackPrice )
      }
      // else if((product.trackId === id && product.inBasket === true) || (product.artistId === id && product.inBasket === true)) {
      //   removeFromBasket(id)
      // }
      return product
    })
      
      // console.log(count)
  }

  function removeFromBasketByArtistId(id){
    // console.log(id)
    const newData = []
    basket.filter(product => {
      if(!product.trackId && product.artistId !== id){
        // if(product.trackId !== id){
        console.log('product', product)
        console.log('artistId', product.artistId)
        newData.push(product)
      }
      return product
       })
      
    }

  function removeFromBasket(id){
    // console.log('removal', id)
    console.log('Remove from basket function called')
    const newData = []
    basket.filter(product => {
      // if(product.trackId !== id){
        // console.log(basket)
        if(product.trackId && product.trackId !== id){
          // if product.id not equal to id clicked then add it to the newData array
        // console.log('product', product)
        // console.log('product', product.trackId)
        newData.push(product)
        }
    else {
        removeFromBasketByArtistId(id)
        setTotal(total - product.trackPrice )
        product.inBasket= !product.inBasket 
        // console.log(product.inBasket)
        // console.log("hello")
      }
    })
    setBasket(newData)
    setCount(count - 1)
    // // console.log(count)
  }

  


  async function search(value){
    const url = `https://itunes.apple.com/search?term=${value}&limit=10`
  
     // useEffect(() => {
    //   updateBooks(currentPage)
    // }, [currentPage])
    const results = await fetch(url).then(res => res.json());
    // console.log(value)
    if(!results.error){
      console.log(results)
      setProducts(results.results)
      // console.log(results.totalItems)


    }
  
    }



  function Home() {
    const [term, setTerm] = useState("")
    // console.log("This", books)
    return <>
            <h1>Media Store</h1>
            <Header itemCount={<BasketCount basketCount={basket.length} />}/>
            <h2>Welcome to the Bookcase App</h2>
            {/* <Search keyword={keyword} setKeyword={setKeyword} search={search}/> */}
            <Search term={term} setTerm={setTerm} search={search}/>
            {products.length === 0 && 'Sorry, no items in basket...' } 
            <ProductList items={products} location="library" addToBasket={addToBasket} removeFromBasket={removeFromBasket}/>
          </>
    
  }


  function BasketList() {
    // console.log("This", basket)
    return <>
            <h1>Media Store</h1>
            <Header itemCount={<BasketCount basketCount={basket.length} />}/>
            {/* {console.log(basket)} */}
            {/* {console.log('count', count)} */}
            { <Basket basket={basket} location='basket' removeFromBasket={removeFromBasket} basketCount={count} basketTotal={total} /> }
          </>
    
  }

  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<BasketList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>



}

export default App;
