import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ProductItemForm() {
  return (
    <div id="formPrix">

      <Form.Label id="ok" htmlFor="inputPrice">Chiffres</Form.Label>
      <div id='dispositionCar'>
        <Form.Control/> 
        <ButtonAddToCart />
      </div>
      
    </div>
  );
}


function ButtonAddToCart() {
  return (
    <Button variant="primary" type="submit">add</Button>
  );
}

export default ProductItemForm;