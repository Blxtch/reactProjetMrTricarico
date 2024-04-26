
import React, { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';


function ButtonCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartItems = [
    {id: 1, name: 'Produit 1', price: 10,amount: 1},
    {id: 2, name: 'Produit 2', price: 20, amount: 1},
    {id: 3, name: 'Produit 3', price: 30, amount: 1},
    {id: 4, name: 'Produit 4', price: 40, amount: 1}
  
  ]

  const total = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <>
      <Button type="button" className="btn btn-primary" onClick={handleShow}>Panier 
        <span className="badge bg-secondary"> 4</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mon panier</Modal.Title>
        </Modal.Header>
        <Modal.Body>Contenu du panier
          <table>
            <thead>
              <tr>
                <th>Ref</th>
                <th>Name</th>
                <th>Price(€)</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id} className= {index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="2">Total Amount :</td>
                <td colSpan="2">{total}</td>
              </tr>
            </tbody>
          </table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ButtonCart;