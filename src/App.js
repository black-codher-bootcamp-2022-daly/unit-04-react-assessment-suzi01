import React, {useEffect, useState} from 'react';
import './styles/App.css';
import data from './models/example-data.json'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Basket from './components/Basket'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Search from './components/Search'



function App() {
  const [products, setProducts] = useState(data)
  const [basket, setBasket] = useState([])
  

  function addToBasket(id){
    console.log(id)
    products.map(product => {
      if(product.trackId === id){
        console.log(product)
        setBasket(prev => [...prev + product])
      }})
  }

  function removeFromBasket(){

  }

  function search(){

  }


  function Home() {
    const [keyword, setKeyword] = useState("")
    // console.log("This", books)
    return <>
            <Header />
            <h2>Welcome to the Bookcase App</h2>
            <Search />
            <ProductList products={products} addToBasket={addToBasket} /> 
          </>
    
  }


  function BasketList() {
    console.log("This", basket)
    return <>
            <Header />
            {console.log(basket)}
            <Basket products={basket}/> 
          </>
    
  }

  return <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="basket" element={<BasketList />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
    </div>

}

export default App;
