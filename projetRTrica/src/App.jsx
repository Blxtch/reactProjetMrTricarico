import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



import NavBar from './components/navbar';



import Product from './components/Products';

import './App.css';



function App() {


  return (
    <>

      <header>
          <NavBar />
         
      </header>
      <body>
        <Product /> 
      </body>
      
    </>
  );
}

export default App;
