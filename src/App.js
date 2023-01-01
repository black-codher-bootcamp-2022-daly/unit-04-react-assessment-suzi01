import React, { Fragment, useEffect, useState } from "react";
import "./styles/App.css";
import data from "./models/data.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Basket from "./components/Basket";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import BasketCount from "./components/BasketCount";
import Pagination from "./components/Pagination";
import Filter from './components/Filter'


function App() {
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [term, setTerm] = useState("");
  const [checkedName, setCheckedName] = useState("All");

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentItems = products.slice(indexOfFirstProduct, indexOfLastProduct);


  function addToBasket(id) {
    console.log("Add to basket function called");
    // console.log(id)
    products.map((product) => {
      if (
        (product.trackId === id && product.inBasket !== true) ||
        (product.artistId === id && product.inBasket !== true)
      ) {
        // if(product.trackId === id && product.inBasket !== true){
        // console.log(product)
        setBasket((prev) => [...prev, product]);
        // console.log('basket',product)
        product.inBasket = true;
        // console.log(product.inBasket)
        setCount(count + 1);
        if (product.trackPrice) {
          setTotal(parseFloat((total + product.trackPrice).toFixed(2)));
        } else {
          setTotal(total + 0);
        }
      }
      return product;
    });
  }

  function removeFromBasketByArtistId(id) {
    // console.log(id)
    const newData = [];
    basket.filter((product) => {
      if (!product.trackId && product.artistId !== id) {
        // if(product.trackId !== id){
        console.log("product", product);
        console.log("artistId", product.artistId);
        newData.push(product);
      }
      return product;
    });
  }

  function removeFromBasket(id) {
    // console.log('removal', id)
    console.log("Remove from basket function called");
    const newData = [];
    basket.filter((product) => {
      // if(product.trackId !== id){
      // console.log(basket)
      if (product.trackId && product.trackId !== id) {
        newData.push(product);
      } else {
        removeFromBasketByArtistId(id);
        if (product.trackPrice) {
          setTotal(parseFloat((total - product.trackPrice).toFixed(2)));
        } else {
          setTotal(total - 0);
        }

        product.inBasket = !product.inBasket;
      }
    });
    setBasket(newData);
    setCount(count - 1);
    // // console.log(count)
  }


  async function findProducts(value,entity='') {
    console.log('entity',entity)
    console.log('term',value)
    if (entity === 'all'){
      entity = ''
    }

    if(value === null){
      return false
    }
    const url = `https://itunes.apple.com/search?term=${value}&entity=${entity}`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      console.log(results);
      setProducts(results.results);
      setCurrentPage(1)
    }
  }


  function increase() {
    console.log('Increase')
    setCurrentPage(currentPage + 1)
  }

  function decrease() {
    console.log('Decrease')
    setCurrentPage(currentPage - 1)
  }

  function first() {
    console.log('First')
    setCurrentPage(1)
  }

  function last(value) {
    console.log('Last')
    setCurrentPage(value)
  }





  function Home() {
    
    return (
      <div className="home">
        <h1 className="title">Media Store</h1>
        <Header itemCount={<BasketCount basketCount={basket.length} />} />
        <Search term={term} setTerm={setTerm} search={findProducts} />
        <Filter findProducts={findProducts} term={term} checkedName={checkedName} setCheckedName={setCheckedName} />
        <Pagination increase={increase} decrease={decrease} totalItems={products.length} itemsPerPage={itemsPerPage} currentPage={currentPage} last={last} first={first} />
        {products.length === 0 && "Sorry, no items in basket..."}
        <ProductList
          items={currentItems}
          location="library"
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
        />
         <Pagination increase={increase} decrease={decrease} totalItems={products.length} itemsPerPage={itemsPerPage} currentPage={currentPage} last={last} first={first} />
      </div>
    );
  }

  function BasketList() {
    return (
      <div className="basket-list">
        <h1 className="title">Media Store</h1>
        <Header itemCount={<BasketCount basketCount={basket.length} />} />
        {
          <Basket
            basket={basket}
            location="basket"
            removeFromBasket={removeFromBasket}
            basketCount={count}
            basketTotal={total}
          />
        }
       
      </div>
    );
  }

  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/basket" element={<BasketList />} />
            <Route
              path="/about"
              element={
                <About
                  itemCount={<BasketCount basketCount={basket.length} />}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
