import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import API from "./utils/api";
import Card from "./components/Card";

// display prodcts in card - name , imge , type, and brand name
// price, store name 
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.getProduct().then(res => {
      setProducts(res.data);

    })
  }, []);

  return (
    products.map(result => {
      return <Card  cardResults={result} />
    })
  );
}

export default App;
