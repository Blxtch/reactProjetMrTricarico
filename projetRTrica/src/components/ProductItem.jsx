import React from 'react';
import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';
import { Link } from 'react-router-dom';

function ProductItem({ product, addToCart }) { 
    return (
        <Card style={{ width: '18rem' }}>
            <Link to={`/product/${product.id}`}>
                <Card.Img variant="top" src={product.mainImage} />
            </Link>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
            </Card.Body>
            <ProductItemForm product={product} addToCart={addToCart} /> {}
        </Card>
    );
}

export default ProductItem;

