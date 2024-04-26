import React, { useEffect } from 'react';
import Navbar from '../src/components/navbar';
import axios from 'axios';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductItem from './components/ProductItem';
import { Spinner } from 'react-bootstrap';



function App() {


  
  const [products, setProducts] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [httpError, setHttpError] = React.useState();

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setHttpError(error.message);
        setLoading(false);
      });
  }
  , []);

  if (isLoading) {
    return (
    <>   
      <div class="spinner-border" role='status'>
        <span class="">Loading...</span>
      </div>
      
    </>
    );
  }
  
  return (
    <>
      <Navbar />
      <div id="container">
        <div id="row1">
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </div>
        <div id="row2">
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </div> 
      </div>

    </>
  );
}

export default App;
