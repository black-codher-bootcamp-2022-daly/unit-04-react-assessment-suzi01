import React, {Fragment, useEffect, useState} from 'react';
import './styles/App.css';
import data from './models/data.json'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Basket from './components/Basket'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Search from './components/Search'



function App() {
  const [products, setProducts] = useState(data)
  const [basket, setBasket] = useState([])
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [term, setTerm] = useState("")
  

  function addToBasket(id){
    console.log(id)
    products.map(product => {
      // if(product.trackId === id || product.artistId === id && product.inBasket !== true){
      if(product.trackId === id && product.inBasket !== true){
        // console.log(product)
        setBasket(prev => [...prev, product])
        // console.log('basket',basket)
        product.inBasket= !product.inBasket
        setCount(count + 1)
        setTotal(total + product.trackPrice )
      }
      else if(product.trackId === id && product.inBasket === true) {
        removeFromBasket(id)
      }
    })
      
      console.log(count)
  }

  function removeFromBasket(id){
    // console.log(id)
    const newData = []
    basket.filter(product => {
      // if(product.trackId !== id || product.artistId !== id){
        if(product.trackId !== id){
        // console.log(product)
        newData.push(product)
      } else {
        setTotal(total - product.trackPrice )
        product.inBasket= !product.inBasket
      }
      
    })
    setBasket(newData)
    setCount(count - 1)
    // console.log(count)
    

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
            <Header itemCount={basket.length}/>
            <h2>Welcome to the Bookcase App</h2>
            {/* <Search keyword={keyword} setKeyword={setKeyword} search={search}/> */}
            <Search term={term} setTerm={setTerm} search={search}/>
            <ProductList products={products} location="library" addToBasket={addToBasket} /> 
          </>
    
  }


  function BasketList() {
    // console.log("This", basket)
    return <>
            <Header itemCount={basket.length}/>
            {/* {console.log(basket)} */}
            {/* {console.log('count', count)} */}
            <Basket basket={basket} location='basket' removeFromBasket={removeFromBasket} basketCount={count} basketTotal={total} /> 
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
    {/* <Router>
      <Route exact path="/" render={() => (
        <Header />
      )} />
    </Router> */}
    </>



}

export default App;
