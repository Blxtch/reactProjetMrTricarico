import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ProductItemForm({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding to cart
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  return (
    <div id="formPrix">
      <Form onSubmit={handleFormSubmit}>
        <Form.Label id="ok" htmlFor="inputPrice">Chiffres</Form.Label>
        <div id='dispositionCar'>
          <Form.Control type="number" value={quantity} onChange={handleQuantityChange} />
          <Button variant="primary" type="submit">Add</Button>
        </div>
      </Form>
    </div>
  );
}

export default ProductItemForm;