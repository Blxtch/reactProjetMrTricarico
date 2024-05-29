import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductItem from './components/ProductItem';
import ProductDetails from './components/productDetails'; 
import axios from 'axios';
import PageNotFound from './components/pageNotFound';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex > -1) {
        const updatedItems = [...state];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return updatedItems;
      } else {
        return [...state, action.payload];
      }
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
}

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [cartItems, dispatchCart] = useReducer(reducer, []);

  useEffect(() => {
    axios.get('http://localhost:3000/api/product')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setHttpError('Error fetching products. Please try again later.');
        setLoading(false);
      });
  }, []);

  const addToCart = (product, quantity) => {
    dispatchCart({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (httpError) {
    return <div>Error: {httpError}</div>;
  }

  if (!Array.isArray(products.products) || products.products.length === 0) {
    console.error('Products data is not valid:', products);
    return <div>Error: Products data is invalid or empty.</div>;
  }

  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={
          <div id="container">
            <div id="row1">
              {products.products.map(product => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </div>
        } />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
