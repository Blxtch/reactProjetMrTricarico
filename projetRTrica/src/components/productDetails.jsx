import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageNotFound from './pageNotFound';
import { Spinner } from 'react-bootstrap';

function ProductDetails() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null); // Stocke la réponse complète de l'API
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    axios.get(`http://localhost:3000/api/product/${productId}`)
      .then(response => {
        console.log('API response:', response.data);
        setProductData(response.data); // Stocker la réponse complète
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  if (isLoading) {
    return <Spinner animation="border" role="status">
             <span className="visually-hidden">Loading...</span>
           </Spinner>; 
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }
  
  // extraire le produit depuis la data
  const product = productData.product;

  if (!product) {
    return <PageNotFound />; 
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: "20px"}}>
        <div id="imgContainer" >
            {product.mainImage && <img src={product.mainImage} alt={product.name} style={{ height: '400px' }} />}
        </div>
        <div id="descContainer" >
            <h2 style={{backgroundColor: 'lightgray', marginBottom: '5px'}}>Nom : {product.name}</h2> 
       
            <p>{product.description}</p>
        </div>
        
      
      
    </div>
  );
}

export default ProductDetails;

