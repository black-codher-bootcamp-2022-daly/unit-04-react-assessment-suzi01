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
        if (product.trackPrice){
          setTotal(parseFloat((total + product.trackPrice).toFixed(2) ))
        }
        else{
          setTotal(total + 0 )
        }
        
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
        newData.push(product)
        }
    else {
        removeFromBasketByArtistId(id)
        if (product.trackPrice){
          setTotal(parseFloat((total - product.trackPrice).toFixed(2) ) )
        }
        else{
          setTotal(total - 0 )
        }

        product.inBasket= !product.inBasket 
      }
    })
    setBasket(newData)
    setCount(count - 1)
    // // console.log(count)
  }

  


  async function search(value){
    const url = `https://itunes.apple.com/search?term=${value}`
  
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

    // useEffect(() => {
    //   <Header />
    //   console.log("a-tags ", document.querySelectorAll('a'))
    // });



  function Home() {
    const [term, setTerm] = useState("")
    // console.log("This", books)
    return <div className='home'>
    <h1 className='title'>Media Store</h1>
    <Header itemCount={<BasketCount basketCount={basket.length} />}/>
    {/* <Search keyword={keyword} setKeyword={setKeyword} search={search}/> */}
    <Search term={term} setTerm={setTerm} search={search}/>
    {products.length === 0 && 'Sorry, no items in basket...' } 
    <ProductList items={products} location="library" addToBasket={addToBasket} removeFromBasket={removeFromBasket}/>
  </div>
    
  }


  function BasketList() {
    // console.log("This", basket)
    return <div className='basket-list'>
            <h1 className='title'>Media Store</h1>
            <Header itemCount={<BasketCount basketCount={basket.length} />}/>
            {/* {console.log(basket)} */}
            {/* {console.log('count', count)} */}
            { <Basket basket={basket} location='basket' removeFromBasket={removeFromBasket} basketCount={count} basketTotal={total} /> }
          </div>
    
  }

  return <>
    <Router>
      <div className='container'>
      <Routes>
        <Route exact path="/" element={<Home /> } />
        <Route path="/basket" element={<BasketList />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </Router>
    </>



}

export default App;
