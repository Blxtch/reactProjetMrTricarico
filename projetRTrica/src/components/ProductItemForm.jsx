import Form from 'react-bootstrap/Form';
import ButtonCart from './ButtonCar';

function ProductItemForm() {
  return (
    <div id="formprix">

      <Form.Label id="ok" htmlFor="inputPrice">Chiffres</Form.Label>
      <div id='dispositionCar'>
        <Form.Control/> 
        <ButtonCart />
      </div>
      
    </div>
  );
}

export default ProductItemForm;