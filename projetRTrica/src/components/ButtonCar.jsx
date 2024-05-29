import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ButtonCart({ cartItems }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleValidation = () => {
    console.log('Order validated:', cartItems);
    handleClose();
  };

  return (
    <>
      <Button type="button" className="btn btn-primary" onClick={handleShow}>
        Panier <span className="badge bg-secondary">{totalItems}</span>
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Mon panier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Ref</th>
                  <th>Name</th>
                  <th>Price(€)</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'table-row-even': 'table-row-odd'}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3">Total Amount :</td>
                  <td>{total}</td>
                </tr>
              </tbody>
            </table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleValidation} disabled={cartItems.length === 0}>
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ButtonCart;
